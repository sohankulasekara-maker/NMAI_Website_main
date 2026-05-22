"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How We Work" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="w-full px-8 md:px-16 h-[70px] flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="NeuroMonkey AI" width={75} height={22} style={{ objectFit: "contain" }} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] hidden md:inline">Menu</span>
            <div className="flex flex-col gap-1.5 w-6">
              <div className="h-px bg-current" />
              <div className="h-px bg-current w-4 ml-auto" />
            </div>
          </button>
        </div>
      </header>

      {/* Side panel */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${open ? "visible" : "invisible"}`}>
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <div className={`absolute top-0 right-0 bottom-0 w-full md:w-[480px] bg-black border-l border-white/10 flex flex-col transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="px-8 md:px-12 h-[70px] flex items-center justify-end">
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <span className="text-[11px] uppercase tracking-[0.3em]">Close</span>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 md:px-12 gap-2">
            {LINKS.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl md:text-5xl font-bold text-white/20 hover:text-white transition-colors duration-300 py-2"
                style={{ transitionDelay: open ? `${i * 80}ms` : "0ms" }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="px-8 md:px-12 pb-8 space-y-3">
            <div className="h-px bg-white/10 mb-6" />
            <p className="text-[11px] text-white/30">info@neuromonkey.ai</p>
            <p className="text-[11px] text-white/30">+94 77 124 5678</p>
            <p className="text-[11px] text-white/30">Colombo, Sri Lanka</p>
            <div className="flex gap-4 pt-2">
              {["Instagram", "LinkedIn"].map(s => (
                <a key={s} href="#" className="text-[10px] uppercase tracking-wider text-white/20 hover:text-white transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
