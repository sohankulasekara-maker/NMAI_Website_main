"use client";

import type React from "react";
import Image from "next/image";

const CARD_W = 340;
const CARD_H = 224;

const RealtimeCodingPreviews: React.FC = () => {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative"
      role="img"
      aria-label="Image, Voice, Text Recognition"
    >
      {/* Card wrapper  */}
      <div
        style={{
          position: "absolute",
          top: 51, // 
          left: 0,
          right: 0,
          margin: "0 auto",
          width: CARD_W,
          height: CARD_H,
          background: "var(--ai-background-color)",
          borderRadius: "9.5px",
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
        }}
      >
        {/* Image */}
        <Image
          src="/images/image-voice-text-recognition.png"
          alt="Image, Voice, Text Recognition"
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

export default RealtimeCodingPreviews;
