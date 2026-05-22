import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

const TEAM = [
  { name: "Buzz", role: "Marketing & Social Media", image: "/team/buzz.png" },
  { name: "Chip", role: "Sales", image: "/team/chip.png" },
  { name: "Digits", role: "Finance", image: "/team/digits.png" },
  { name: "Buddy", role: "HR", image: "/team/buddy.png" },
  { name: "Halo", role: "Customer Care", image: "/team/halo.png" },
];

export default function Team() {
  return (
    <section id="team" className="bg-black py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] text-center mb-4">
            Meet Our AI Agents.
          </h2>
          <p className="text-white/50 text-center max-w-md mx-auto mb-20 text-sm">
            Each one is trained for a specific department. Together, they run your business while you sleep.
          </p>
        </RevealOnScroll>

        <div className="flex justify-center gap-8 md:gap-14 flex-wrap">
          {TEAM.map(({ name, role, image }, i) => (
            <RevealOnScroll key={name} delay={i * 0.1}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-28 md:w-36 aspect-[3/4] mb-4 transition-all duration-500">
                  <Image src={image} alt={name} fill className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm font-bold text-white group-hover:text-white/90 transition-colors">{name}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">{role}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
