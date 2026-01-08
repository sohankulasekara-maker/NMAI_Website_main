"use client";

import type React from "react";
import Image from "next/image";

const CARD_W = 340;
const CARD_H = 224;

interface OneClickIntegrationsIllustrationProps {
  className?: string;
}

const OneClickIntegrationsIllustration: React.FC<OneClickIntegrationsIllustrationProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center relative ${className}`}
      role="img"
      aria-label="Predictive Analytics illustration"
    >
      {/* Card wrapper */}
      <div
        className="relative overflow-hidden rounded-[9.5px]"
        style={{
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
        }}
      >
        {/* Predictive Analytics Image */}
        <Image
          src="/images/predictive-analytics.webp"
          alt="Predictive Analytics"
          fill
          sizes={`${CARD_W}px`}
          className="object-cover object-top"
          priority
          quality={100}
        />
      </div>
    </div>
  );
};

export default OneClickIntegrationsIllustration;
