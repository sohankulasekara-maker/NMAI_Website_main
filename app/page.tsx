import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { DigitalServicesSection } from "@/components/digital-services-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="relative w-full">
          <HeroSection />
        </main>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16" delay={0.1}>
          <SocialProof />
        </AnimatedSection>
        <AnimatedSection id="ai-services" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        <AnimatedSection id="digital-services" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <DigitalServicesSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <LargeTestimonial />
        </AnimatedSection>
        <AnimatedSection
          id="testimonials"
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        <AnimatedSection id="faq" className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
        {/* Copyright - Very bottom of website */}
        <div className="relative z-10 w-full py-4 border-t border-gray-800 text-center bg-background">
          <p className="text-xs text-gray-500">
            Copyright © Neuro Monkey 2025
          </p>
        </div>
      </div>
    </div>
  )
}
