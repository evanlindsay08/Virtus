'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function ChatInterface({ agentId, agent }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const hasSetInitialMessage = useRef(false)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Add welcome message based on agent's personality
  useEffect(() => {
    if (agent && !hasSetInitialMessage.current) {
      setMessages([{
        role: 'assistant',
        content: `Hello! I'm ${agent.name}. ${agent.personality?.split('.')[0]}. How can I assist you today?`
      }])
      hasSetInitialMessage.current = true
    }
  }, [agent])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          agentId
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // Handle error (show toast notification, etc.)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chat-interface">
      <div className="messages-container custom-scrollbar">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.role === 'assistant' && (
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src={agent.image_url || '/placeholder.png'}
                    alt={agent.name}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-sm font-medium">{agent.name}</span>
              </div>
            )}
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="loading-indicator">...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${agent.name} anything...`}
          className="message-input"
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  )
} 