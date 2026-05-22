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
    <section
      id="team"
      className="bg-black py-20 md:py-24 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-16">
        <RevealOnScroll>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[4rem] font-bold leading-[0.95] md:leading-[0.92] tracking-[-0.02em] text-center mb-4">
            Meet Our AI Agents.
          </h2>
          <p className="text-white/50 text-center max-w-md mx-auto mb-12 md:mb-20 text-sm px-2">
            Each one is trained for a specific department. Together, they run
            your business while you sleep.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-14 max-w-5xl mx-auto place-items-center">
          {TEAM.map(({ name, role, image }, i) => (
            <RevealOnScroll key={name} delay={i * 0.08}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 sm:w-24 md:w-32 lg:w-36 aspect-[3/4] mb-3 md:mb-4 transition-all duration-500">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 128px, 144px"
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs sm:text-sm font-bold text-white group-hover:text-white/90 transition-colors text-center">
                  {name}
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider text-center">
                  {role}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
