'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LiveDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="live-demo-card bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-sm border border-black/5">
        <div className="ai-status absolute top-4 right-4 text-sm text-green-600 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          AI Active
        </div>
        
        <div className="mb-8">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
            <rect x="14" y="3" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
            <rect x="3" y="14" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
            <rect x="14" y="14" width="7" height="7" rx="1" fill="rgba(0,0,0,0.8)"/>
          </svg>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium mb-4">
            Meet Our Ventra Agents
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collection of unique Ventra personalities, each with their own expertise and style.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/agents" 
              className="view-agents-button"
            >
              View Our Ventra Agents
            </Link>
            <Link 
              href="/create" 
              className="create-agent-button"
            >
              Create Ventra Agent
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 