import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  {
    num: "01",
    title: "We listen first",
    text: "A 30-minute call where we shut up and you talk. What's broken? What takes too long? What do you wish just happened automatically?",
  },
  {
    num: "02",
    title: "We map it out",
    text: "You get a document. Not a 50-page deck. A clear plan: what we'll build, how long it takes, what it costs. No surprises.",
  },
  {
    num: "03",
    title: "We build it fast",
    text: "Weekly demos. Every Friday you see what's new. If something's off, we fix it Monday. Not next quarter.",
  },
  {
    num: "04",
    title: "We stick around",
    text: "Launch isn't the end. We monitor, tweak, and improve. Your automation gets smarter over time because we're watching the data.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black py-20 md:py-24 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] font-bold leading-[0.95] md:leading-[0.92] tracking-[-0.02em] text-center mb-12 md:mb-20">
            How it works.
            <br />
            Four steps.
          </h2>
        </RevealOnScroll>

        <div className="space-y-10 md:space-y-12">
          {STEPS.map(({ num, title, text }, i) => (
            <RevealOnScroll key={num} delay={i * 0.1}>
              <div className="flex items-start md:items-center gap-5 sm:gap-8 md:gap-12">
                <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-white/15 shrink-0 leading-none">
                  {num}
                </span>
                <div className="text-left md:text-right md:ml-auto md:max-w-md">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
