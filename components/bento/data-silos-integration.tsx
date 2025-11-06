"use client";
import type React from "react";
import Image from "next/image";

interface DataSilosIntegrationProps {
  className?: string;
}

const CARD_W = 340;
const CARD_H = 224;

const DataSilosIntegration: React.FC<DataSilosIntegrationProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      role="img"
      aria-label="Data Silos Integration"
    >
      <div
        className="relative overflow-hidden rounded-[10px]"
        style={{
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
        }}
      >
        <Image
          src="/images/Data-Silos-Integration.jpg.webp"
          alt="Data Silos Integration"
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

export default DataSilosIntegration;
