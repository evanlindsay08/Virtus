'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Toast from './Toast'

export default function NavBar() {
  const pathname = usePathname()
  const [showToast, setShowToast] = useState(false)

  const handleWalletConnect = () => {
    setShowToast(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm border-b border-[rgba(0,0,0,0.08)] bg-white/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/smallVnobg.png"
                alt="Virtus Logo"
                width={32}
                height={32}
                priority
              />
              <span className="font-medium text-lg">VIRTUS</span>
            </Link>

            <div className="flex items-center gap-6">
              <Link 
                href="/agents"
                className={`nav-link ${pathname === '/agents' ? 'nav-link-active' : ''}`}
              >
                View Agents
              </Link>
              <Link 
                href="/create"
                className={`nav-link ${pathname === '/create' ? 'nav-link-active' : ''}`}
              >
                Create
              </Link>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Twitter
              </a>
              <a 
                href="https://pump.fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Pump.fun
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
            </div>

            <button 
              className="social-button"
              onClick={handleWalletConnect}
            >
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      {showToast && (
        <Toast 
          message="Connect Wallet unavailable, please try again later."
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
} 