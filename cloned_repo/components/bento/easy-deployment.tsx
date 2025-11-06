import type React from "react";
import Image from "next/image";

interface DeploymentEasyProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const CARD_W = 340;
const CARD_H = 224;

const DeploymentEasy: React.FC<DeploymentEasyProps> = ({
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{ width, height, background: "transparent" }}
      role="img"
      aria-label="Staff Augmentation illustration"
    >
      {/* unified, centered card (no absolute/translate) */}
      <div
        className="relative overflow-hidden rounded-[9.5px]"
        style={{
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Image
          src="/images/Staff-Augmentation.webp"
          alt="Staff Augmentation"
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

export default DeploymentEasy;
