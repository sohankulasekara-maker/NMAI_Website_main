import RevealOnScroll from "./RevealOnScroll";

const STATS = [
  { value: "50+", label: "Automations" },
  { value: "98%", label: "Satisfaction" },
  { value: "3x", label: "Avg ROI" },
  { value: "2-4 wks", label: "Delivery" },
];

export default function Stats() {
  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-[11px] text-white/50 uppercase tracking-[0.3em]">
              Since 2024
            </p>
            <div className="grid grid-cols-4 gap-x-3 gap-y-4 sm:flex sm:gap-8 md:gap-14">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                    {value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
