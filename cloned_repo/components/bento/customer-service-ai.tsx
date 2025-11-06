"use client";
import type React from "react";
import Image from "next/image";

interface CustomerServiceAIProps {
  className?: string;
}

const CARD_W = 340;
const CARD_H = 224;

const CustomerServiceAI: React.FC<CustomerServiceAIProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      role="img"
      aria-label="AI-powered Customer Experience"
    >
      <div
        className="relative overflow-hidden rounded-[9.5px]"
        style={{
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
        }}
      >
        <Image
          src="/images/ai-powered_customer_experience.jpg"
          alt="AI-powered Customer Experience"
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

export default CustomerServiceAI;
