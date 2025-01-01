'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LiveDemo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on server-side and first render
  }

  return (
    <div className="live-demo-card">
      <div className="ai-status">AI Active</div>
      <div className="mb-8">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
          <rect x="14" y="3" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
          <rect x="3" y="14" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
          <rect x="14" y="14" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
        </svg>
      </div>
      
      <h2 className="text-2xl font-medium mb-4">Meet Our Virtus Agents</h2>
      <p className="text-secondary mb-8">
        Explore our collection of unique Virtus personalities, each with their own expertise and style.
      </p>
      
      <div className="flex flex-col gap-4 w-full">
        <Link 
          href="/agents" 
          className="social-button w-full justify-center"
        >
          View Our Virtus Agents
        </Link>
        <Link 
          href="/create" 
          className="social-button generate-button w-full justify-center"
        >
          Create Virtus Agent
        </Link>
      </div>
    </div>
  )
} 