'use client'
import Link from 'next/link'
import LiveDemo from './LiveDemo'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="tech-label">VIRTUS TECH™</div>
          <h1 className="hero-title">
            Redefining<br />
            The Deployment Of<br />
            AI Agents
          </h1>
        </div>
        <div className="live-demo">
          <LiveDemo />
        </div>
      </div>
    </section>
  )
} 