'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Modal from './Modal'

export default function CreateAgent() {
  const [formData, setFormData] = useState({
    agentName: '',
    tickerName: '',
    age: '',
    personality: '',
    background: '',
    interests: '',
    image: null
  })
  const [expandedFeature, setExpandedFeature] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const features = [
    {
      icon: '𝕏',
      title: 'Twitter Integration',
      description: 'Post, reply, and interact',
      price: 'Costs 500 $VIRTUS + 0.15 SOL',
      comingSoon: false
    },
    {
      icon: '📱',
      title: 'Telegram Integration',
      description: 'Interact on Telegram',
      price: 'Costs 500 $VIRTUS',
      comingSoon: false
    },
    {
      icon: '🎙️',
      title: 'Voice Generation',
      description: 'Generate voice content',
      price: 'Costs 500 $VIRTUS + 0.15 SOL',
      comingSoon: false
    },
    {
      icon: '🤖',
      title: 'Agent Training',
      description: 'Custom AI training',
      price: 'Costs 500 $VIRTUS + 0.15 SOL',
      comingSoon: 'Available January 2025'
    },
    {
      icon: '💬',
      title: 'Discord Integration',
      description: "Configure your AI agent's Discord presence",
      price: 'Costs 500 $VIRTUS',
      comingSoon: 'Available January 2025'
    },
    {
      icon: '🖼️',
      title: 'Image Generation',
      description: 'Create custom imagery',
      price: 'Costs 500 $VIRTUS + 0.15 SOL',
      comingSoon: 'Available January 2025'
    },
    {
      icon: '🎥',
      title: 'Video Generation',
      description: 'Create video content',
      price: 'Costs 1,000 $VIRTUS',
      comingSoon: 'Available January 2025'
    }
  ]

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({...prev, image: file}))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleViewAgents = () => {
    router.push('/agents')
  }

  const TwitterConfigForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>API KEY</label>
        <input 
          type="text"
          placeholder="Enter your Twitter API key"
          className="form-input"
          disabled
        />
      </div>
      <div className="form-group mb-6">
        <label>Custom Rules</label>
        <textarea 
          placeholder="Enter custom rules for how your AI should behave on Twitter..."
          className="form-input min-h-[100px]"
          disabled
        />
      </div>
      <div className="form-group mb-6">
        <label>Reply Targets (max 5)</label>
        <div className="flex gap-2">
          <input 
            type="text"
            placeholder="@username"
            className="form-input flex-1"
            disabled
          />
          <button className="add-button" disabled>Add</button>
        </div>
      </div>
      <div className="form-group mb-6">
        <label>Blocked Accounts (max 5)</label>
        <div className="flex gap-2">
          <input 
            type="text"
            placeholder="@username"
            className="form-input flex-1"
            disabled
          />
          <button className="add-button" disabled>Add</button>
        </div>
      </div>
      <div className="form-group">
        <label>Example Tweets</label>
        <textarea 
          placeholder="Add example tweets to guide your AI's posting style..."
          className="form-input min-h-[100px]"
          disabled
        />
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const TelegramConfigForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>BOT TOKEN</label>
        <input 
          type="text"
          placeholder="Enter your Telegram bot token"
          className="form-input"
          disabled
        />
      </div>
      <div className="form-group mb-6">
        <label>RANDOM MESSAGE FREQUENCY</label>
        <select 
          className="form-input"
          defaultValue="medium"
          disabled
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const VoiceGenerationForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>Custom Voice ID</label>
        <div className="flex gap-2">
          <input 
            type="text"
            placeholder="Enter ElevenLabs Voice ID"
            className="form-input flex-1"
            disabled
          />
          <button className="add-button" disabled>Save</button>
        </div>
      </div>

      <div className="form-group mb-6">
        <div className="flex gap-4 mb-4">
          <button className="form-input text-left" disabled>All</button>
          <button className="form-input text-left" disabled>Male</button>
          <button className="form-input text-left" disabled>Female</button>
        </div>
        <label>Default Voices</label>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Adam</h4>
              <p className="text-sm text-secondary">Friendly and engaging male voice</p>
            </div>
            <button className="add-button" disabled>Select</button>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Antoni</h4>
              <p className="text-sm text-secondary">Deep and authoritative male voice</p>
            </div>
            <button className="add-button" disabled>Select</button>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Arnold</h4>
              <p className="text-sm text-secondary">Strong and confident male voice</p>
            </div>
            <button className="add-button" disabled>Select</button>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Josh</h4>
              <p className="text-sm text-secondary">Young and energetic male voice</p>
            </div>
            <button className="add-button" disabled>Select</button>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">James</h4>
              <p className="text-sm text-secondary">Professional and clear male voice</p>
            </div>
            <button className="add-button" disabled>Select</button>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const AgentTrainingForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>MODEL TYPE</label>
        <select 
          className="form-input"
          defaultValue=""
          disabled
        >
          <option value="" disabled>Select model</option>
          <option value="gpt4">GPT-4</option>
          <option value="claude">Claude</option>
          <option value="llama">Llama</option>
        </select>
      </div>

      <div className="form-group mb-6">
        <label>TRAINING DATA</label>
        <textarea 
          placeholder="Enter custom training data..."
          className="form-input min-h-[100px]"
          disabled
        />
      </div>

      <div className="form-group mb-6">
        <label>PARAMETERS</label>
        <input 
          type="text"
          placeholder="Model parameters"
          className="form-input"
          disabled
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const DiscordConfigForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>BOT TOKEN</label>
        <input 
          type="text"
          placeholder="Enter your Discord bot token"
          className="form-input"
          disabled
        />
      </div>

      <div className="form-group mb-6">
        <label>SERVER ID</label>
        <input 
          type="text"
          placeholder="Enter your Discord server ID"
          className="form-input"
          disabled
        />
      </div>

      <div className="form-group mb-6">
        <label>CHANNEL ACCESS</label>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled />
              <div>
                <h4 className="font-medium">General</h4>
                <p className="text-sm text-secondary">#general</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled />
              <div>
                <h4 className="font-medium">Support</h4>
                <p className="text-sm text-secondary">#support</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div className="flex items-center gap-3">
              <input type="checkbox" disabled />
              <div>
                <h4 className="font-medium">Announcements</h4>
                <p className="text-sm text-secondary">#announcements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group mb-6">
        <label>RESPONSE SETTINGS</label>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" disabled />
            <span className="text-sm">Auto-respond to mentions</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" disabled />
            <span className="text-sm">Use thread replies</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" disabled />
            <span className="text-sm">Allow DM interactions</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const ImageGenerationForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>MODEL TYPE</label>
        <select 
          className="form-input"
          defaultValue=""
          disabled
        >
          <option value="" disabled>Select model</option>
          <option value="dalle">DALL-E 3</option>
          <option value="midjourney">Midjourney</option>
          <option value="stable">Stable Diffusion</option>
        </select>
      </div>

      <div className="form-group mb-6">
        <label>STYLE SETTINGS</label>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Image Style</h4>
              <select 
                className="form-input mt-2"
                defaultValue=""
                disabled
              >
                <option value="" disabled>Select style</option>
                <option value="realistic">Realistic</option>
                <option value="anime">Anime</option>
                <option value="digital">Digital Art</option>
                <option value="oil">Oil Painting</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Resolution</h4>
              <select 
                className="form-input mt-2"
                defaultValue=""
                disabled
              >
                <option value="" disabled>Select resolution</option>
                <option value="1024">1024x1024</option>
                <option value="512">512x512</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group mb-6">
        <label>PROMPT TEMPLATE</label>
        <textarea 
          placeholder="Enter your image generation prompt template..."
          className="form-input min-h-[100px]"
          disabled
        />
        <p className="text-sm text-secondary mt-1">
          Use variables like {'{personality}'}, {'{style}'}, {'{mood}'} in your template
        </p>
      </div>

      <div className="form-group mb-6">
        <label>NEGATIVE PROMPT</label>
        <textarea 
          placeholder="Enter things to avoid in generated images..."
          className="form-input min-h-[100px]"
          disabled
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const VideoGenerationForm = () => (
    <div className="feature-form p-6">
      <div className="form-group mb-6">
        <label>MODEL TYPE</label>
        <select 
          className="form-input"
          defaultValue=""
          disabled
        >
          <option value="" disabled>Select model</option>
          <option value="runway">Runway Gen-2</option>
          <option value="pika">Pika Labs</option>
          <option value="stable">Stable Video</option>
        </select>
      </div>

      <div className="form-group mb-6">
        <label>VIDEO SETTINGS</label>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Duration</h4>
              <select 
                className="form-input mt-2"
                defaultValue=""
                disabled
              >
                <option value="" disabled>Select duration</option>
                <option value="short">Short (2-4 seconds)</option>
                <option value="medium">Medium (4-8 seconds)</option>
                <option value="long">Long (8-12 seconds)</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Quality</h4>
              <select 
                className="form-input mt-2"
                defaultValue=""
                disabled
              >
                <option value="" disabled>Select quality</option>
                <option value="standard">Standard (720p)</option>
                <option value="hd">HD (1080p)</option>
                <option value="4k">4K</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-2 border-[rgba(0,0,0,0.12)] rounded-2xl">
            <div>
              <h4 className="font-medium">Style</h4>
              <select 
                className="form-input mt-2"
                defaultValue=""
                disabled
              >
                <option value="" disabled>Select style</option>
                <option value="realistic">Realistic</option>
                <option value="cinematic">Cinematic</option>
                <option value="animated">Animated</option>
                <option value="stylized">Stylized</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group mb-6">
        <label>PROMPT TEMPLATE</label>
        <textarea 
          placeholder="Enter your video generation prompt..."
          className="form-input min-h-[100px]"
          disabled
        />
        <p className="text-sm text-secondary mt-1">
          Use variables like {'{action}'}, {'{setting}'}, {'{mood}'} in your template
        </p>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="cancel-button" disabled>Cancel</button>
        <button className="save-button" disabled>Save Configuration</button>
      </div>
    </div>
  )

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index)
  }

  return (
    <div className="container py-12 relative z-10">
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onViewAgents={handleViewAgents}
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="create-agent-card">
          <h1 className="text-3xl font-medium mb-8">Create Your Virtus Agent</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="form-group">
                <label>VENTRA AGENT NAME</label>
                <input 
                  type="text"
                  placeholder="Agent name"
                  value={formData.agentName}
                  onChange={(e) => setFormData(prev => ({...prev, agentName: e.target.value}))}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>TICKER NAME</label>
                <input 
                  type="text"
                  placeholder="Ticker name"
                  value={formData.tickerName}
                  onChange={(e) => setFormData(prev => ({...prev, tickerName: e.target.value}))}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>VIRTUS AGENT AGE</label>
              <input 
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                className="form-input"
                min="18"
              />
              <p className="text-sm text-secondary mt-1">This is your AI Agent's age. Minimum age is 18.</p>
            </div>

            <div className="form-group">
              <label>PERSONALITY</label>
              <textarea 
                placeholder="Describe your AI agent's personality traits..."
                value={formData.personality}
                onChange={(e) => setFormData(prev => ({...prev, personality: e.target.value}))}
                className="form-input min-h-[100px]"
              />
            </div>

            <div className="form-group">
              <label>BACKGROUND</label>
              <textarea 
                placeholder="Describe your AI agent's background story..."
                value={formData.background}
                onChange={(e) => setFormData(prev => ({...prev, background: e.target.value}))}
                className="form-input min-h-[100px]"
              />
            </div>

            <div className="form-group">
              <label>INTERESTS & EXPERTISE</label>
              <textarea 
                placeholder="List your AI agent's interests and areas of expertise..."
                value={formData.interests}
                onChange={(e) => setFormData(prev => ({...prev, interests: e.target.value}))}
                className="form-input min-h-[100px]"
              />
            </div>

            <div className="form-group">
              <label>VIRTUS AGENT IMAGE</label>
              <div className="image-upload-area">
                <input 
                  type="file"
                  accept="image/svg+xml,image/png,image/jpeg,image/gif"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="image-upload-label">
                  {formData.image ? (
                    <div className="relative w-full h-40">
                      <Image 
                        src={URL.createObjectURL(formData.image)}
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <span className="text-lg mb-2">Click to upload</span>
                      <span className="text-sm text-secondary">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-medium mb-2">Available Features</h2>
              <p className="text-secondary mb-6">Hold $VENTRA to unlock advanced features</p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-option">
                    <div 
                      className="feature-header"
                      onClick={() => toggleFeature(index)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{feature.icon}</span>
                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-sm text-secondary">{feature.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-secondary">{feature.price}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`feature-content ${expandedFeature === index ? 'expanded' : ''} locked`}>
                      {feature.title === 'Twitter Integration' && <TwitterConfigForm />}
                      {feature.title === 'Telegram Integration' && <TelegramConfigForm />}
                      {feature.title === 'Voice Generation' && <VoiceGenerationForm />}
                      {feature.title === 'Agent Training' && <AgentTrainingForm />}
                      {feature.title === 'Discord Integration' && <DiscordConfigForm />}
                      {feature.title === 'Image Generation' && <ImageGenerationForm />}
                      {feature.title === 'Video Generation' && <VideoGenerationForm />}
                      <div className="coming-soon-overlay">
                        <span className="lock-icon">🔒</span>
                        <span>
                          {feature.comingSoon || 'Coming Soon'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="social-button generate-button w-full justify-center mt-8">
              Create Virtus Agent
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 