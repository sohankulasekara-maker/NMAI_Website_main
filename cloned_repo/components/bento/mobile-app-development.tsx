"use client"

import type React from "react"
import Image from "next/image"

const MobileAppDevelopment: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative" role="img" aria-label="Mobile App Development">
      <div
        style={{
          position: "absolute",
          top: 51,
          left: "50%",
          transform: "translateX(-50%)",
          width: 340,
          height: 224,
          background: "var(--ai-background-color)",
          borderRadius: 10,
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/Mobile-App-Development.jpg"
          alt="Mobile App Development"
          fill
          sizes="340px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}

export default MobileAppDevelopment
