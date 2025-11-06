"use client"

import type React from "react"
import Image from "next/image"

const CloudSolutions: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative" role="img" aria-label="Cloud Solutions">
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
          src="/images/cloud.jpeg" 
          alt="Cloud Solutions"
          fill
          sizes="340px"
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}

export default CloudSolutions
