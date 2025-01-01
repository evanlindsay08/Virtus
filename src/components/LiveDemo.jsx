'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LiveDemo() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium mb-4">
          Meet Our Virtus Agents
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our collection of unique Virtus personalities, each with their own expertise and style.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/agents" 
            className="view-agents-button"
          >
            View Our Virtus Agents
          </Link>
          <Link 
            href="/create" 
            className="create-agent-button"
          >
            Create Virtus Agent
          </Link>
        </div>
      </div>
    </div>
  )
} 