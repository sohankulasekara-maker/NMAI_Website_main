"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { setLoaded(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.3;

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none transition-opacity duration-[2000ms]"
        style={{ opacity: loaded ? 0.05 : 0, background: "linear-gradient(135deg, #0000C8, #A600C8)" }}
      />

      {/* Yakira — next to text, bottom-aligned, bigger */}
      <div
        className="absolute right-[5%] bottom-0 w-[48%] max-w-[620px] hidden lg:block"
        style={{ opacity: Math.max(0, 1 - scrollY / 800), transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Image
          src="/yakira-hero.png"
          alt="Yakira, NeuroMonkey AI"
          width={864}
          height={1184}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Text — parallax faster */}
      <div
        className="relative z-10 w-full px-8 md:px-16 md:pl-[12%] text-left"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <h1 className={`text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[0.92] tracking-[-0.02em] text-white max-w-3xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          We automate the stuff
          <br />
          your team
          <span className="gradient-text"> shouldn&apos;t </span>
          be
          <br />
          doing manually.
        </h1>

        <div className={`mt-12 transition-all duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[11px] text-white/50 uppercase tracking-[0.3em]">Scroll to explore</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
