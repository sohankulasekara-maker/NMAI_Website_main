import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"

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
    </div>
  )
}