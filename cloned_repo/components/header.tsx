"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false) // State to track scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const navItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "#ai-services", hasDropdown: true },
    { name: "Design Services", href: "#digital-services", hasDropdown: true },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      // It's a route navigation, let Next.js handle it
      return
    }
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 mx-6 md:mx-12 lg:mx-20 xl:mx-32 mt-6 rounded-full border border-gray-200 bg-white/20 px-3 py-1 shadow-2xl backdrop-blur-2xl translate-y-1 transition-opacity duration-300 ${scrolled ? "opacity-20 hover:opacity-100" : "opacity-100"}`}>
      <div className="flex items-center justify-between w-full">
        {/* Left section: Logo */}
        <div className="flex items-center gap-1.5">
          <Link href="/" className="relative cursor-pointer">
            {/* Smaller white glow background */}
            <div className="absolute inset-0 bg-white/15 rounded-full blur-lg scale-110 animate-pulse w-14 h-14"></div>
            <div className="absolute inset-0 bg-white/8 rounded-full blur-md scale-105 w-14 h-14"></div>
            {/* Logo */}
            <Image
              src="/images/1.png"
              alt="NeuroMonkey.AI Logo"
              width={56}
              height={56}
              className="h-14 w-14 relative z-10 hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>

        {/* Center section: Navigation */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-gray-300 hover:text-white px-2 py-1 rounded-lg font-medium transition-colors flex items-center gap-0.5 text-sm"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
            </Link>
          ))}
        </nav>

        {/* Right section: Mobile Menu Trigger */}
        <div className="flex items-center gap-1.5">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-l border-gray-700 text-white">
              <SheetHeader>
                <SheetTitle className="text-left text-lg font-semibold text-white">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2.5 mt-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-200 hover:text-white justify-start text-sm py-1.5 flex items-center gap-1"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
