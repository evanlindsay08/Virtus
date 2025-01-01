'use client'
import { useState, useEffect } from 'react'

export default function Toast({ message, type = 'error', onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed bottom-4 right-4 ${
        isVisible ? 'animate-slide-up' : 'animate-slide-down'
      } z-50 px-4 py-3 rounded shadow-lg ${
        type === 'error' ? 'bg-[#3A0A0A]' : 'bg-green-500/90'
      } text-[#FF4444] text-sm flex items-center gap-2`}
    >
      {type === 'error' && (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span>{message}</span>
    </div>
  )
} 