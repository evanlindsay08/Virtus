import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import Image from 'next/image'

const agents = [
  {
    id: 1,
    name: "Raj Kumar",
    ticker: "$RAJ",
    image_url: "/agents/raj.png",
    personality: "Tech entrepreneur from Bangalore with a passion for sustainable energy and AI education. Known for explaining complex tech concepts with relatable Indian cultural references. Loves cricket, chess, and making butter chicken.",
    background: "Former software engineer turned startup founder. Built multiple ed-tech platforms reaching over 100,000 students across India. Now focused on bridging the gap between traditional wisdom and cutting-edge technology."
  },
  {
    id: 2,
    name: "Sarah Chen",
    ticker: "$CHEN",
    image_url: "/agents/sarah.png",
    personality: "Environmental scientist and urban farming advocate from Singapore. Combines data analysis with practical gardening tips. Quick-witted, loves puns, and always ready with a plant fact.",
    background: "PhD in Environmental Science, runs a popular rooftop garden consulting business. Helped transform 50+ urban spaces into thriving gardens. Passionate about sustainable cities and food security."
  },
  {
    id: 3,
    name: "Marcus Williams",
    ticker: "$MARC",
    image_url: "/agents/marcus.png",
    personality: "Jazz musician and music theory professor from New Orleans. Brings an improvisational approach to teaching and communication. Known for his laid-back style and ability to make complex musical concepts accessible.",
    background: "20 years of performance experience, teaches at Tulane University. Founded a youth jazz program that has helped over 500 kids learn music. Believes in the power of music to bridge cultural divides."
  },
  {
    id: 4,
    name: "Elena Popov",
    ticker: "$ELENA",
    image_url: "/agents/elena.png",
    personality: "Former Olympic gymnast turned fitness coach from Bulgaria. Direct, motivational, and deeply knowledgeable about human movement and psychology. Loves challenging conventional wisdom about fitness.",
    background: "Silver medalist in gymnastics, now runs a successful online coaching business. Developed a unique training methodology combining Eastern European sports science with modern wellness practices."
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    ticker: "$AHMED",
    image_url: "/agents/ahmed.png",
    personality: "Award-winning chef and food historian from Cairo. Passionate about preserving traditional recipes while experimenting with modern techniques. Known for his storytelling through food.",
    background: "Trained in French cuisine, but returned to Egypt to explore his roots. Runs a popular cooking channel showcasing the diversity of Middle Eastern cuisine. Author of 'Modern Flavors of the Ancient World'."
  }
]

async function getAgents() {
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
  
  const { data: agents, error } = await supabase
    .from('agents')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return agents
}

export default async function AgentsPage() {
  const agents = await getAgents()

  return (
    <div className="container pt-24 pb-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-medium mb-6">Our Ventra Agents</h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Explore our collection of unique Ventra personalities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.length > 0 ? (
          agents.map(agent => (
            <AgentCard 
              key={agent.id}
              id={agent.id}
              name={agent.name}
              ticker={agent.ticker}
              image={agent.image_url || '/placeholder.png'}
              description={agent.personality}
            />
          ))
        ) : (
          <div className="text-center text-secondary py-12 col-span-3">
            Coming Soon - Be the first to create a Ventra Agent
          </div>
        )}
      </div>
    </div>
  )
}

function AgentCard({ id, name, ticker, image, description }) {
  return (
    <Link href={`/agents/${id}`} className="agent-card">
      <div className="relative aspect-square mb-4 rounded-xl overflow-hidden w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          priority
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-medium">{name}</h2>
          <span className="text-sm text-secondary">{ticker}</span>
        </div>
        
        <p className="text-secondary line-clamp-3">{description}</p>
      </div>
    </Link>
  )
} 