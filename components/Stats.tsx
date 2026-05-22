import RevealOnScroll from "./RevealOnScroll";

export default function Stats() {
  return (
    <section className="border-t border-white/10 bg-black py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-[11px] text-white/50 uppercase tracking-[0.3em] max-w-xs">Since 2024</p>
            <div className="flex gap-14">
              {[
                { value: "50+", label: "Automations" },
                { value: "98%", label: "Satisfaction" },
                { value: "3x", label: "Avg ROI" },
                { value: "2-4 wks", label: "Delivery" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
