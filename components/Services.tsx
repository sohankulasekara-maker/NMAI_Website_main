import RevealOnScroll from "./RevealOnScroll";

const SERVICES = [
  { title: "Your sales team closes more, does less", description: "We build AI that scores leads, writes follow-ups, and books meetings. Your reps just show up and close.", tag: "Sales Automation" },
  { title: "Customers get answers at 3am", description: "Custom chatbots on WhatsApp, your website, or Instagram. They sound human because we train them on your actual conversations.", tag: "Chatbots" },
  { title: "Social media that runs itself", description: "Content generated, scheduled, and posted. We handle Instagram, Facebook, LinkedIn, and TikTok. You approve, we publish.", tag: "Social Media" },
  { title: "Websites and apps that load fast", description: "Built with Next.js and React Native. Not WordPress templates. Actual custom code that performs.", tag: "Development" },
  { title: "Dashboards your accountant will love", description: "Real-time reports, expense tracking, cash flow predictions. No more end-of-month surprises.", tag: "Data & Analytics" },
  { title: "Something weird and specific? We build that too.", description: "Invoice scanner that reads Sinhala? Inventory system that talks to WhatsApp? If you can explain it, we can automate it.", tag: "Custom AI" },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] mb-20">
            Here&apos;s what we<br />actually do.
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {SERVICES.map(({ title, description, tag }, i) => (
            <RevealOnScroll key={tag} delay={i * 0.08}>
              <div className="bg-black p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 group">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-4 block">{tag}</span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-white/90">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
