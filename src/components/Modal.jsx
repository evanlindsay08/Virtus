'use client'
import { useEffect, useState } from 'react'

export default function Modal({ isOpen, onClose, onViewAgents }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="text-center">
          <div className="mb-4 text-4xl">🚀</div>
          <h3 className="text-2xl font-medium mb-2">Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            Agent Creation is coming soon! In the meantime, check out our pre-made Ventra agents that showcase the platform's capabilities.
          </p>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={onViewAgents}
              className="social-button generate-button w-full justify-center"
            >
              View Our Ventra Agents
            </button>
            <button 
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 py-2 transition-colors"
            >
              Stay Here
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 