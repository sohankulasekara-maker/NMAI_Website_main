"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ChatbotModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg lg:max-w-xl bg-white/20 backdrop-blur-2xl">
        <DialogHeader>
          <DialogTitle>Chat with us</DialogTitle>
          <DialogDescription>
            This is a placeholder for the chatbot interface.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {/* Chatbot content goes here */}
          <p>Welcome to our support chat! How can we help you today?</p>
          {/* You can add an input field, chat messages, etc. here */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
