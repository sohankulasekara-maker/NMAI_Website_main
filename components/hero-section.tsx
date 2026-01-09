import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">

      {/* DNA Helix 3D Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Base gradient with blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-background to-blue-900/5 backdrop-blur-sm" />

        {/* 3D DNA Helix Container - Spread across screen */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ perspective: '2000px' }}>
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-dna-rotate-3d" style={{ transformStyle: 'preserve-3d' }}>
              {/* Generate helix structure spread horizontally */}
              {Array.from({ length: 50 }).map((_, i) => {
                const angle = (i * 36) * (Math.PI / 180); // 36 degrees per step
                const radius = 200; // Larger radius
                const x1 = Math.cos(angle) * radius;
                const z1 = Math.sin(angle) * radius;
                const x2 = Math.cos(angle + Math.PI) * radius;
                const z2 = Math.sin(angle + Math.PI) * radius;
                const y = i * 30 - 750; // Spread vertically
                const xOffset = (i - 25) * 60; // Spread horizontally to fill screen

                return (
                  <div key={i} className="absolute" style={{ transform: `translate3d(${xOffset}px, ${y}px, 0)`, transformStyle: 'preserve-3d' }}>
                    {/* Strand 1 node */}
                    <div
                      className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.9)]"
                      style={{
                        transform: `translate3d(${x1}px, 0, ${z1}px) translate(-50%, -50%)`,
                        opacity: 0.6 + Math.abs(z1) / radius * 0.4
                      }}
                    />

                    {/* Strand 2 node */}
                    <div
                      className="absolute w-4 h-4 rounded-full bg-primary-light shadow-[0_0_20px_rgba(200,130,255,0.9)]"
                      style={{
                        transform: `translate3d(${x2}px, 0, ${z2}px) translate(-50%, -50%)`,
                        opacity: 0.6 + Math.abs(z2) / radius * 0.4
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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
