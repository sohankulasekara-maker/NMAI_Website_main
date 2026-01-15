import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: 'Contact Us - NeuroMonky.AI',
  description: 'Get in touch with NeuroMonky.AI. Contact us for AI solutions and digital services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      <div className="relative z-10 pt-32 pb-16 px-4 md:px-6 lg:px-8">
        <ContactSection />
      </div>
      <FooterSection />
      {/* Copyright - Very bottom of website */}
      <div className="relative z-10 w-full py-4 border-t border-gray-800 text-center bg-background">
        <p className="text-xs text-gray-500">
          Copyright © Neuro Monkey 2026
        </p>
      </div>
    </div>
  )
}