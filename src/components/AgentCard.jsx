export default function AgentCard({ agent }) {
  return (
    <div className="agent-card">
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{agent.name}</h3>
        <p className="text-secondary mb-4">Virtus Agent #{agent.id}</p>
        {/* ... rest of the card content ... */}
      </div>
    </div>
  )
} 