import { Header } from "@/components/header"

export const metadata = {
  title: 'Terms of Use - Neuro Monkey',
  description: 'Terms of use for Neuro Monkey AI services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      <div className="relative z-10 pt-32 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Terms of Use
              </h1>
            </div>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Neuro Monkey's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily use Neuro Monkey's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the platform</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Privacy Policy</h2>
                <p className="leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Service Availability</h2>
                <p className="leading-relaxed">
                  We strive to provide reliable service, but we cannot guarantee that our services will be available at all times. We may modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. User Conduct</h2>
                <p className="leading-relaxed mb-4">
                  You agree not to use our services to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload or transmit harmful, illegal, or inappropriate content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Interfere with the proper functioning of our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Neuro Monkey shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Use, please contact us through our contact form.
                </p>
              </section>
            </div>
          </div>
          
          {/* Copyright notice */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              Copyright © Neuro Monkey 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}