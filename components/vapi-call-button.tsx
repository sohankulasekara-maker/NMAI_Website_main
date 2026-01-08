'use client'
import { useState, useEffect, useRef } from 'react'
import Vapi from '@vapi-ai/web'
import { Button } from '@/components/ui/button'
import { Phone, PhoneOff } from 'lucide-react'

export function VapiCallButton() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio element for ringing sound
    audioRef.current = new Audio('/phone-ringing.mp3')
    audioRef.current.loop = true

    try {
      // Initialize Vapi with your public key
      console.log('Initializing Vapi...')
      const vapiInstance = new Vapi('15d31b97-6344-4c92-b857-1ac65e67de60')
      setVapi(vapiInstance)
      console.log('Vapi initialized successfully')

      // Handle call events
      vapiInstance.on('call-start', () => {
        console.log('Call started event received')
        stopRinging()
        setIsConnecting(false)
        setIsCallActive(true)
      })

      vapiInstance.on('call-end', () => {
        console.log('Call ended event received')
        setIsCallActive(false)
      })

      vapiInstance.on('error', (error) => {
        console.error('Vapi error:', error)
        stopRinging()
        setIsConnecting(false)
        setIsCallActive(false)
      })

      return () => {
        // Cleanup
        stopRinging()
        if (vapiInstance) {
          vapiInstance.stop()
        }
      }
    } catch (error) {
      console.error('Failed to initialize Vapi:', error)
    }
  }, [])

  const stopRinging = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const startCall = async () => {
    if (!vapi) {
      console.error('Vapi instance not initialized')
      return
    }

    try {
      console.log('Starting call...')
      setIsConnecting(true)

      // Play ringing sound
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error('Failed to play ringing sound:', err)
        })
      }

      // Start call with your assistant ID
      await vapi.start('10ed7201-d782-45bd-9796-e43b658387dd')
      console.log('Call started successfully')
    } catch (error) {
      console.error('Failed to start call:', error)
      stopRinging()
      setIsConnecting(false)
    }
  }

  const endCall = () => {
    if (!vapi) return
    vapi.stop()
  }

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-center gap-2">
      <Button
        onClick={isCallActive ? endCall : startCall}
        disabled={isConnecting}
        className={`rounded-full w-10 h-10 md:w-12 md:h-12 shadow-2xl transition-all duration-300 hover:scale-110 ${
          isCallActive
            ? 'bg-red-500 hover:bg-red-600 animate-pulse'
            : isConnecting
            ? 'bg-yellow-500 hover:bg-yellow-600 animate-pulse'
            : 'bg-gradient-to-r from-primary to-primary-light hover:opacity-90 animate-glow'
        }`}
        size="lg"
      >
        {isCallActive ? (
          <PhoneOff size={18} className="text-white md:w-5 md:h-5" />
        ) : (
          <Phone size={18} className="text-white md:w-5 md:h-5" />
        )}
      </Button>
      <span className={`text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
        isCallActive
          ? 'text-red-600'
          : isConnecting
          ? 'text-yellow-600'
          : 'text-foreground'
      }`}>
        {isCallActive ? 'End Call' : isConnecting ? 'Connecting...' : 'Ask Anything'}
      </span>
    </div>
  )
}