import RevealOnScroll from "./RevealOnScroll";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-black py-20 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16">
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 md:items-end">
            <div>
              <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] font-bold leading-[0.95] md:leading-[0.92] tracking-[-0.02em] mb-4">
                Let&apos;s talk about what&apos;s slowing you down.
              </h2>
              <p className="text-white/60 text-sm">
                If we can&apos;t help, we&apos;ll tell you. We&apos;d rather say no than waste your time.
              </p>
            </div>

            <div className="space-y-3">
              <a href="https://wa.me/94771245678" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 bg-white text-black font-semibold px-5 sm:px-8 py-4 sm:py-5 text-sm hover:bg-white/90 transition-colors group">
                <span>WhatsApp us. Fastest way.</span>
                <ArrowRight size={16} className="shrink-0 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="mailto:info@neuromonkey.ai" className="flex items-center justify-between gap-4 border border-white/10 text-white/60 px-5 sm:px-8 py-4 sm:py-5 text-sm hover:border-white/30 hover:text-white transition-colors group">
                <span className="truncate">info@neuromonkey.ai</span>
                <ArrowRight size={16} className="shrink-0 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="tel:+94771245678" className="flex items-center justify-between gap-4 border border-white/10 text-white/60 px-5 sm:px-8 py-4 sm:py-5 text-sm hover:border-white/30 hover:text-white transition-colors group">
                <span>+94 77 124 5678</span>
                <ArrowRight size={16} className="shrink-0 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
