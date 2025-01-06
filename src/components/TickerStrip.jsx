'use client'
import { useState, useEffect } from 'react'

export default function TickerStrip() {
  const [mounted, setMounted] = useState(false)
  const [showCopyConfirm, setShowCopyConfirm] = useState(false)
  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setShowCopyConfirm(true)
      setTimeout(() => setShowCopyConfirm(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="ticker-strip">
      <div className="flex justify-between items-center">
        <div className="ticker-item">
          <span className="ticker-label">CA</span>
          <div className="contract-address relative group">
            <span 
              className="ticker-value cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleCopy}
              role="button"
              tabIndex={0}
              aria-label="Click to copy contract address"
            >
              {contractAddress}
            </span>
            <button 
              className="copy-icon"
              onClick={handleCopy}
              aria-label="Copy contract address"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            {showCopyConfirm && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-3 rounded shadow-lg animate-fade-in">
                Copied!
              </div>
            )}
          </div>
        </div>
        <div className="ticker-item">
          <span className="ticker-label">TICKER</span>
          <span className="ticker-value">$VENTRA</span>
        </div>
        <div className="ticker-item">
          <span className="ticker-label">DEV SUPPLY</span>
          <span className="ticker-value">5%</span>
        </div>
      </div>
    </div>
  )
} 