import ChatInterface from '@/components/ChatInterface'

export default function ChatPage({ params }) {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <ChatInterface agentId={params.agentId} />
      </div>
    </div>
  )
} 