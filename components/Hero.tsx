"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const translateY = scrollY * 0.3;

  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center justify-center bg-black overflow-hidden pb-12 md:pb-0">
      {/* Subtle purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[150px] md:blur-[200px] pointer-events-none transition-opacity duration-[2000ms]"
        style={{
          opacity: loaded ? 0.05 : 0,
          background: "linear-gradient(135deg, #0000C8, #A600C8)",
        }}
      />

      {/* Yakira — mobile: behind text, low opacity; desktop: side composition */}
      <div
        className="absolute right-0 bottom-0 w-[80%] max-w-[320px] sm:max-w-[380px] md:right-[3%] md:w-[55%] md:max-w-[520px] lg:right-[5%] lg:w-[48%] lg:max-w-[620px] pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollY / 800),
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <Image
          src="/yakira-hero.png"
          alt="Yakira, NeuroMonkey AI"
          width={864}
          height={1184}
          className="w-full h-auto opacity-30 md:opacity-100"
          priority
        />
      </div>

      {/* Text — parallax faster */}
      <div
        className="relative z-10 w-full px-6 sm:px-8 md:px-16 md:pl-[10%] lg:pl-[12%] text-left"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <h1
          className={`text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold leading-[0.95] md:leading-[0.92] tracking-[-0.02em] text-white max-w-[18ch] md:max-w-3xl break-words transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We automate the stuff your team{" "}
          <span className="gradient-text">shouldn&apos;t</span> be doing
          manually.
        </h1>

        <div
          className={`mt-8 md:mt-12 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] md:text-[11px] text-white/50 uppercase tracking-[0.3em]">
            Scroll to explore
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
