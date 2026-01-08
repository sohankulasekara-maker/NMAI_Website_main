"use client"

import type React from "react"
import Image from "next/image"

const CloudSolutions: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative" role="img" aria-label="Cloud Solutions">
      <div
        className="relative overflow-hidden rounded-[10px]"
        style={{
          width: 340,
          height: 224,
          background: "var(--ai-background-color)",
          border: "1px solid var(--ai-border-main)",
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
