"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'
import { GL } from "./gl"

export function HeroSection() {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">

      {/* WebGL Particle Background */}
      <GL hovering={hovering} />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="w-full text-center space-y-8 max-w-7xl mx-auto px-4">
      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
          Neuro Monkey{" "}
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            AI Solutions
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
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
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Explore AI Solutions →
          </Button>
        </Link>
        <Link href="#digital-services">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 text-foreground hover:bg-primary/10 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md min-w-[200px]"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Explore Digital Solutions →
          </Button>
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll Down Indicator */}
  <Link href="#ai-services" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
    <span className="text-sm text-gray-300 font-medium">Scroll</span>
    <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
  </Link>

  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
</section>
  )
}
