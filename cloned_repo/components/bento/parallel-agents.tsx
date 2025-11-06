import type React from "react";
import Image from "next/image";
import projectImg from "@/public/images/Project-Management.jpg";

interface ParallelCodingAgentsProps {
  className?: string;
}

const CARD_W = 340;
const CARD_H = 224;

const ParallelCodingAgents: React.FC<ParallelCodingAgentsProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      role="img"
      aria-label="Project Management illustration"
    >
      <div
        className="relative overflow-hidden rounded-[10px]"
        style={{
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
          boxShadow:
            "0px 16px 6px rgba(0,0,0,0.01), 0px 9px 6px rgba(0,0,0,0.05), 0px 4px 4px rgba(0,0,0,0.09), 0px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={projectImg}
          alt="Project Management"
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

export default ParallelCodingAgents;
