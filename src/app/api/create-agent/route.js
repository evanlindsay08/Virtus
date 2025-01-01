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
    const data = await req.json()
    const { agentName, personality, background, interests, age } = data

    // Create system prompt from user input
    const systemPrompt = `You are ${agentName}, an AI agent with the following traits:
    
Age: ${age}
Personality: ${personality}
Background: ${background}
Interests & Expertise: ${interests}

Always stay in character and respond as this persona would, incorporating their background, personality traits, and interests naturally into conversations. Your responses should reflect your character's unique perspective and expertise.`

    // Create initial conversation examples for training
    const examples = [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: "Hi, who are you?"
      },
      {
        role: "assistant",
        content: `Hello! I'm ${agentName}. ${personality.split('.')[0]}. I have a background in ${background.split('.')[0]} and I'm particularly passionate about ${interests.split('.')[0]}.`
      }
    ]

    // Store agent data in Supabase
    const { data: agent, error } = await supabase
      .from('agents')
      .insert({
        name: agentName,
        system_prompt: systemPrompt,
        training_examples: examples,
        user_id: data.userId, // You'll need to implement auth
        personality,
        background,
        interests,
        age
      })
      .select()
      .single()

    if (error) throw error

    return Response.json({ 
      success: true, 
      agentId: agent.id 
    })

  } catch (error) {
    console.error('Error creating agent:', error)
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
} 