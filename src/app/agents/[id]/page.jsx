import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import ChatInterface from '@/components/ChatInterface'
import Image from 'next/image'

async function getAgent(id) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    throw new Error('Missing environment variables for Supabase')
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY,
    {
      auth: { persistSession: false }
    }
  )
  
  const { data: agent, error } = await supabase
    .from('agents')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !agent) return null
  return agent
}

export default async function AgentPage({ params }) {
  const agent = await getAgent(params.id)
  
  if (!agent) {
    notFound()
  }

  // Define default features if agent.features is undefined
  const features = [
    { name: "Twitter Integration", status: "coming_soon" },
    { name: "Voice Generation", status: "coming_soon" },
    { name: "Image Generation", status: "coming_soon" },
    { name: "Telegram Integration", status: "coming_soon" }
  ]

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agent Info Column */}
          <div className="lg:col-span-1">
            <div className="agent-profile-card">
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={agent.image_url || '/placeholder.png'}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h1 className="text-2xl font-medium mb-2">{agent.name}</h1>
              <div className="text-sm text-secondary mb-6">{agent.ticker}</div>
              
              <div className="space-y-6">
                <InfoSection title="Age" content={agent.age} />
                <InfoSection title="Personality" content={agent.personality} />
                <InfoSection title="Background" content={agent.background} />
                <InfoSection title="Interests & Expertise" content={agent.interests} />
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Features</h3>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-status-item">
                      <span>{feature.name}</span>
                      <span className="text-sm text-secondary">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface Column */}
          <div className="lg:col-span-2">
            <ChatInterface agentId={params.id} agent={agent} />
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoSection({ title, content }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-secondary mb-1">{title}</h3>
      <p>{content || 'Not specified'}</p>
    </div>
  )
} 