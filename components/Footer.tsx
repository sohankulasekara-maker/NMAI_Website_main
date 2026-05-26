import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Image src="/logo.png" alt="NeuroMonkey AI" width={80} height={24} className="mb-4 h-auto w-auto" style={{ objectFit: "contain", transform: "scaleX(-1)" }} />
            <p className="text-[11px] text-white/60 leading-relaxed max-w-xs">
              Smart Automation for Modern Businesses. We build AI systems that save time, reduce costs, and scale your operations.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">Services</p>
            <div className="space-y-2">
              {["Sales Automation", "Chatbots", "Social Media", "Development", "Analytics", "Custom AI"].map(s => (
                <a key={s} href="#services" className="block text-[11px] text-white/60 hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">Contact</p>
            <div className="space-y-2 text-[11px] text-white/60">
              <p>neuromonky.ai@gmail.com</p>
              <p>+94 77 124 5678</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 md:mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[10px] text-white/10">&copy; 2026 NeuroMonkey AI</p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn"].map(s => (
              <a key={s} href="#" className="text-[10px] uppercase tracking-wider text-white/10 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
