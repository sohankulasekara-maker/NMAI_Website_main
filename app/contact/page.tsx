import { ContactSection } from "@/components/contact-section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — NeuroMonkey AI",
  description:
    "Get in touch with NeuroMonkey AI. Tell us what's slowing you down — we'll tell you if we can help.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black min-h-screen pt-32 pb-16 px-8 md:px-16">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
