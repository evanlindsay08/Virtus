import { OpenAI } from 'openai'
import { createClient } from '@supabase/supabase-js'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export async function POST(req) {
  try {
    const { message, agentId } = await req.json()

    // Get agent data from Supabase
    const { data: agent, error } = await supabase
      .from('agents')
      .select('*')
      .eq('id', agentId)
      .single()

    if (error) throw error

    // Create a personality-driven system prompt
    const systemPrompt = `You are ${agent.name} (${agent.ticker}), ${agent.age} years old.

PERSONALITY:
${agent.personality}

BACKGROUND:
${agent.background}

INTERESTS & EXPERTISE:
${agent.interests}

IMPORTANT INSTRUCTIONS:
1. Always stay in character and respond as ${agent.name} would
2. Use your background and expertise to inform your answers
3. Maintain your unique personality traits in your communication style
4. Draw from your interests when providing examples or analogies
5. Keep responses concise but informative
6. Never break character or acknowledge that you are an AI

Current conversation: Let's have a natural dialogue where you maintain your unique personality and perspective.`

    // Get conversation history
    const { data: history } = await supabase
      .from('conversations')
      .select('*')
      .eq('agent_id', agentId)
      .order('created_at', { ascending: true })
      .limit(10)

    // Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map(h => ({
        role: h.role,
        content: h.content
      })),
      { role: 'user', content: message }
    ]

    // Get response from OpenAI with personality-specific settings
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.85,
      max_tokens: 500,
      presence_penalty: 0.6,
      frequency_penalty: 0.3
    })

    const reply = completion.choices[0].message.content

    // Store conversation in Supabase
    await supabase.from('conversations').insert([
      { agent_id: agentId, role: 'user', content: message },
      { agent_id: agentId, role: 'assistant', content: reply }
    ])

    return Response.json({ 
      success: true, 
      reply 
    })

  } catch (error) {
    console.error('Error in chat:', error)
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
} 