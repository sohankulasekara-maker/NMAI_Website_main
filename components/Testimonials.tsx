import RevealOnScroll from "./RevealOnScroll";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] mb-20">
            Don&apos;t take our<br />word for it.
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {/* Featured */}
          <RevealOnScroll className="md:col-span-2">
            <div className="bg-black p-8 md:p-12 h-full flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                &ldquo;We had 3 people doing data entry. Now we have zero. The chatbot handles client intake, the AI sorts invoices, and I get a WhatsApp summary every morning. Genuinely changed how we operate.&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-semibold text-white text-sm">Ravindu Perera</p>
                <p className="text-[10px] text-white/50">CEO, Lanka Digital Solutions</p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid gap-px bg-white/5">
            <RevealOnScroll delay={0.1}>
              <div className="bg-black p-6">
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  &ldquo;They built our chatbot in 10 days. It handles 80% of queries without a human. Support costs dropped by half.&rdquo;
                </p>
                <p className="text-[11px] text-white font-semibold">Sarah Mitchell</p>
                <p className="text-[9px] text-white/50">UK Retail Group</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="bg-black p-6">
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  &ldquo;20 hours a week on social media, down to zero. They automated everything. Content, scheduling, replies.&rdquo;
                </p>
                <p className="text-[11px] text-white font-semibold">Amitha Jayawardena</p>
                <p className="text-[9px] text-white/50">Green Ceylon Exports</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="bg-black p-6">
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  &ldquo;Delivered our analytics dashboard in 3 weeks. Any other agency would&apos;ve taken 3 months.&rdquo;
                </p>
                <p className="text-[11px] text-white font-semibold">Mohamed Al-Rashid</p>
                <p className="text-[9px] text-white/50">Gulf Trading Co.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
