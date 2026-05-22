"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle anchor clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute("href") ?? "");
        if (target) lenis.scrollTo(target as HTMLElement);
      });
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
