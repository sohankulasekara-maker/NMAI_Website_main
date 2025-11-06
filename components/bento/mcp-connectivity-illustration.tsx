import type React from "react";
import Image from "next/image";

interface McpConnectivityIllustrationProps {
  className?: string;
}

const CARD_W = 340;
const CARD_H = 224;

const McpConnectivityIllustration: React.FC<McpConnectivityIllustrationProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      role="img"
      aria-label="Conversational AI illustration"
    >
      {/* unified, centered card (no absolute top offsets) */}
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
          src="/images/Conversational-AI.jpg.webp"
          alt="Conversational AI"
          fill
          sizes={`${CARD_W}px`}
          className="object-cover object-top"
          priority
          quality={100}
          style={{ transform: "translateZ(0)" }}
        />
      </div>
    </div>
  );
};

export default McpConnectivityIllustration;
