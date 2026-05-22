'use client'
import { useState, useEffect, useRef } from 'react'
import Vapi from '@vapi-ai/web'
import { Button } from '@/components/ui/button'
import { Phone, PhoneOff, X } from 'lucide-react'

export function VapiCallButton() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const callCancelledRef = useRef(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipMessage, setTooltipMessage] = useState('')
  const [tooltipDismissed, setTooltipDismissed] = useState(false)
  const [messageKey, setMessageKey] = useState(0)

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
        setShowTooltip(false) // Hide tooltip during call
      })

      vapiInstance.on('call-end', () => {
        console.log('Call ended event received')
        stopRinging()
        setIsConnecting(false)
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

  // Progressive tooltip animation with rotating questions
  useEffect(() => {
    if (tooltipDismissed || isCallActive || isConnecting) return

    const sampleQuestions = [
      'How can NeuroMonkey help your business?',
      'What AI solutions do you offer?',
      'Tell me about your voice AI technology',
      'Can you integrate AI with my existing systems?',
    ]
    let questionIndex = 0

    // First message after 2 seconds
    const timer1 = setTimeout(() => {
      setTooltipMessage('👋 Hey! Try our Voice AI assistant to learn about NeuroMonkey')
      setMessageKey(prev => prev + 1)
      setShowTooltip(true)
    }, 2000)

    // Start rotating questions after 7 seconds (shows first message for 5 seconds)
    const timer2 = setTimeout(() => {
      setTooltipMessage(sampleQuestions[0])
      setMessageKey(prev => prev + 1)
      questionIndex = 1

      // Rotate through questions every 4 seconds
      const interval = setInterval(() => {
        setTooltipMessage(sampleQuestions[questionIndex])
        setMessageKey(prev => prev + 1)
        questionIndex = (questionIndex + 1) % sampleQuestions.length
      }, 4000)

      return () => clearInterval(interval)
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [tooltipDismissed, isCallActive, isConnecting])

  const stopRinging = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const cancelConnection = () => {
    console.log('Cancelling connection...')
    callCancelledRef.current = true
    stopRinging()
    setIsConnecting(false)
    if (vapi) {
      vapi.stop()
    }
  }

  const startCall = async () => {
    if (!vapi) {
      console.error('Vapi instance not initialized')
      return
    }

    try {
      console.log('Starting call...')
      callCancelledRef.current = false
      setIsConnecting(true)

      // Request microphone permission first
      console.log('Requesting microphone permission...')
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true })
        console.log('Microphone permission granted')
      } catch (micError) {
        console.error('Microphone permission denied:', micError)
        setIsConnecting(false)
        alert('Microphone permission is required to make a call')
        return
      }

      // Check if cancelled during mic permission
      if (callCancelledRef.current) {
        console.log('Call was cancelled during mic permission')
        return
      }

      // Play ringing sound after mic permission
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error('Failed to play ringing sound:', err)
        })
      }

      // Start call with your assistant ID
      await vapi.start('10ed7201-d782-45bd-9796-e43b658387dd')

      // Check if call was cancelled while connecting
      if (callCancelledRef.current) {
        console.log('Call was cancelled during connection - stopping immediately')
        vapi.stop()
        return
      }

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

  const handleButtonClick = () => {
    setShowTooltip(false) // Hide tooltip when button is clicked
    if (isCallActive) {
      endCall()
    } else if (isConnecting) {
      cancelConnection()
    } else {
      startCall()
    }
  }

  const dismissTooltip = () => {
    setShowTooltip(false)
    setTooltipDismissed(true)
  }

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2">
      {/* Animated Tooltip Bubble — hidden below sm so it doesn't eat half the mobile viewport */}
      {showTooltip && !isCallActive && !isConnecting && (
        <div className="relative animate-in slide-in-from-right-5 fade-in duration-500 mb-2 hidden sm:block">
          <div className="relative bg-gradient-to-r from-primary to-primary-light rounded-xl px-3 py-2 shadow-2xl max-w-[200px] md:max-w-[220px] animate-bounce-subtle">
            <button
              onClick={dismissTooltip}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Dismiss"
            >
              <X size={12} className="text-white" />
            </button>
            <p
              key={messageKey}
              className="text-white text-xs md:text-sm font-medium leading-snug pr-1 animate-fade-in"
            >
              {tooltipMessage}
            </p>
            {/* Triangle pointer */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-primary-light rotate-45"></div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <Button
          onClick={handleButtonClick}
          className={`rounded-full w-10 h-10 md:w-12 md:h-12 shadow-2xl transition-all duration-300 hover:scale-110 ${
            isCallActive
              ? 'bg-red-500 hover:bg-red-600 animate-pulse'
              : isConnecting
              ? 'bg-yellow-500 hover:bg-yellow-600 animate-pulse'
              : 'bg-gradient-to-r from-primary to-primary-light hover:opacity-90 animate-glow'
          }`}
          size="lg"
        >
          {isCallActive || isConnecting ? (
            <PhoneOff size={18} className="text-white md:w-5 md:h-5" />
          ) : (
            <Phone size={18} className="text-white md:w-5 md:h-5" />
          )}
        </Button>
        <span className={`text-[10px] md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
          isCallActive
            ? 'text-red-600'
            : isConnecting
            ? 'text-yellow-600'
            : 'text-foreground'
        }`}>
          {isCallActive ? 'End Call' : isConnecting ? 'Cancel' : 'Ask Anything'}
        </span>
      </div>
    </div>
  )
}