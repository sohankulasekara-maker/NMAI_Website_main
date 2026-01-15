"use client"

import { Instagram, Facebook, Phone } from 'lucide-react'
import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Neural AI development made effortless</p>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Customer Care Hotline</p>
            <a href="tel:+94771245678" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-base font-normal">+94 77 124 5678</span>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-start gap-3">
          <a href="https://www.instagram.com/neuromonkey.ai/?igsh=MXZjcG02aDF6Ynpybw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-4 h-4 flex items-center justify-center">
            <Instagram className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://www.facebook.com/share/16SAkst1am/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-4 h-4 flex items-center justify-center">
            <Facebook className="w-full h-full text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      {/* Right Section: Product, Company, Resources */}
      <div className="flex flex-col gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="/terms" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
