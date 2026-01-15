"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, ExternalLink, Loader2 } from "lucide-react"
import Link from "next/link"

interface InsightData {
  headline: string
  headlineSource: {
    text: string
    url: string
  }
  insights: Array<{
    title: string
    description: string
  }>
  callToAction: string
}

// Smooth easing curve matching other sections
const smoothEase = [0.33, 1, 0.68, 1]

export function IndustryAISection() {
  const [industry, setIndustry] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<InsightData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!industry.trim() || isLoading) return

    setIsLoading(true)
    setError(null)
    setHasSubmitted(true)

    try {
      const response = await fetch("/api/industry-insights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ industry: industry.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get insights")
      }

      setResult(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setIndustry("")
    setResult(null)
    setError(null)
    setHasSubmitted(false)
    inputRef.current?.focus()
  }

  return (
    <section className="w-full py-16 md:py-24 px-5 relative flex flex-col justify-center items-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute w-[400px] h-[600px] bg-primary/15 blur-[60px] md:blur-[120px] z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0) translate(-50%, -50%)' }} />

      <div className="w-full max-w-3xl relative z-10">
        {/* Header - Only show when no results and not loading */}
        <AnimatePresence mode="wait">
          {!result && !isLoading && !error && (
            <motion.div
              key="header"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-center mb-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Powered by NeuroMonkey AI</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
                className="text-3xl md:text-5xl font-bold text-foreground mb-4"
              >
                What industry are you ready to{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  transform?
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: smoothEase }}
                className="text-muted-foreground text-lg max-w-xl mx-auto"
              >
                Tell us your industry, and we&apos;ll show you exactly how AI can revolutionize your business.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Form */}
        <AnimatePresence mode="wait">
          {!hasSubmitted && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
              onSubmit={handleSubmit}
              className="relative"
            >
              <div className="relative flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g., Marketing, Finance..."
                    className="w-full px-6 py-4 rounded-xl bg-[rgba(231,236,235,0.08)] border border-white/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!industry.trim()}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-light hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-2xl shadow-primary/25"
                >
                  <span>Discover</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="flex flex-col items-center justify-center py-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="relative mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/10 animate-ping" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
                className="text-lg md:text-xl text-foreground font-medium mb-2"
              >
                Building personalized insights...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: smoothEase }}
                className="text-sm md:text-base text-muted-foreground"
              >
                Analyzing AI in <span className="text-primary font-semibold">{industry}</span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error State */}
        <AnimatePresence mode="wait">
          {error && !isLoading && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="text-center py-8"
            >
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={handleReset}
                className="px-8 py-4 rounded-full border-2 border-primary/50 text-foreground hover:bg-primary/10 font-semibold transition-all duration-300 backdrop-blur-md"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence mode="wait">
          {result && !isLoading && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="space-y-6"
            >
              {/* Results Header with Industry Name */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothEase }}
                className="text-center mb-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">AI Insights</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
                  className="text-3xl md:text-4xl font-bold text-foreground"
                >
                  AI Opportunities in{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {industry}
                  </span>
                </motion.h2>
              </motion.div>

              {/* Headline Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px]" />
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed relative z-10">
                  &ldquo;{result.headline}&rdquo;
                </p>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(`${result.headlineSource.text} ${industry} AI statistics`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-light transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium">Based on {result.headlineSource.text} research</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>

              {/* Insights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {result.insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: smoothEase }}
                    className="p-6 rounded-xl bg-[rgba(231,236,235,0.08)] border border-white/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-foreground font-semibold mb-2">{insight.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{insight.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: smoothEase }}
                className="text-center pt-6"
              >
                <p className="text-lg text-foreground mb-6">{result.callToAction}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-light hover:opacity-90 text-white font-semibold transition-all duration-300 shadow-2xl shadow-primary/25 min-w-[200px]"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary/50 text-foreground hover:bg-primary/10 font-semibold transition-all duration-300 backdrop-blur-md min-w-[200px]"
                  >
                    Try Another Industry
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
