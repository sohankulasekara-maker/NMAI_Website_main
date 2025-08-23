import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image with Hover Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url('/images/computer-scientist-using-laptop-data-center-updating-ai.jpg')` }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/80 group-hover:bg-black/75 transition-colors duration-500" /> {/* Overlay for text readability */}
      
      {/* Animated Background Elements (optional, can be removed if image is dominant) */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="w-full text-center space-y-8 max-w-7xl mx-auto px-4">
      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
          Neuro Monkey{" "}
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            AI
          </span>
          <br />
          Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Elevate your business with cutting-edge AI technology. We deliver 
          innovative solutions that drive growth, efficiency, and digital 
          transformation.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <Link href="#ai-services">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground hover:opacity-90 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-primary/25 min-w-[200px]"
          >
            Explore AI Solutions →
          </Button>
        </Link>
        <Link href="#digital-services">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary/50 text-foreground hover:bg-primary/10 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md min-w-[200px]"
          >
            Explore Digital Solutions →
          </Button>
        </Link>
      </div>
    </div>
  </div>

  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
</section>
  )
}
