export default function Features() {
  return (
    <div className="features-section">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Virtus Intelligence</h2>
          <p className="text-secondary mb-8">
            Create and customize unique AI personalities with advanced capabilities and social integration
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Active</div>
            </div>
            <div>
              <div className="stat-value">7+</div>
              <div className="stat-label">Platforms</div>
            </div>
            <div>
              <div className="stat-value">∞</div>
              <div className="stat-label">Potential</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Agent Features</h2>
          <p className="text-secondary mb-8">
            Comprehensive suite of tools and integrations for your Virtus agents
          </p>
          <ul className="feature-list space-y-3">
            <li>Social Media Integration</li>
            <li>Voice & Image Generation</li>
            <li>Custom Training</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">$VIRTUS Token</h2>
          <p className="text-secondary mb-8">
            Access premium features and join the Virtus ecosystem
          </p>
          <ul className="feature-list space-y-3">
            <li>Feature Unlocking</li>
            <li>Community Access</li>
            <li>Future Governance</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 