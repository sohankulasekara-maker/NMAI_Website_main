import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use — NeuroMonkey AI",
  description: "Terms of use for NeuroMonkey AI services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing and using NeuroMonkey's services, you accept and agree to be bound by the terms and provisions of this agreement.",
  },
  {
    title: "2. Use License",
    body: "Permission is granted to temporarily use NeuroMonkey's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
    list: [
      "Modify or copy the materials",
      "Use the materials for any commercial purpose or for any public display",
      "Attempt to reverse engineer any software contained on the platform",
      "Remove any copyright or other proprietary notations from the materials",
    ],
  },
  {
    title: "3. Privacy Policy",
    body: "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services.",
  },
  {
    title: "4. Service Availability",
    body: "We strive to provide reliable service, but we cannot guarantee that our services will be available at all times. We may modify, suspend, or discontinue any part of our services at any time.",
  },
  {
    title: "5. User Conduct",
    body: "You agree not to use our services to:",
    list: [
      "Upload or transmit harmful, illegal, or inappropriate content",
      "Violate any applicable laws or regulations",
      "Interfere with the proper functioning of our services",
      "Attempt to gain unauthorized access to our systems",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: "NeuroMonkey shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
  },
  {
    title: "7. Contact Information",
    body: "If you have any questions about these Terms of Use, please contact us through our contact form.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-32 pb-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4">
            Legal
          </p>
          <h1 className="text-[2.5rem] md:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] mb-16">
            Terms of <span className="gradient-text">Use</span>.
          </h1>

          <div className="space-y-12">
            {SECTIONS.map(({ title, body, list }) => (
              <section key={title}>
                <h2 className="text-lg font-bold text-white mb-3">{title}</h2>
                <p className="text-sm text-white/60 leading-relaxed">{body}</p>
                {list && (
                  <ul className="list-disc list-inside mt-3 space-y-1.5 text-sm text-white/60">
                    {list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
