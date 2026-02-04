'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center pt-4 px-4">
        <div className="bg-gradient-to-r from-red-950/80 to-red-900/80 backdrop-blur-lg rounded-full border border-red-600/50 w-full max-w-sm md:max-w-2xl px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-3 md:gap-8">
            {/* Logo Avatar */}
            <Link href="#home" className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-500 hover:border-red-400 transition-colors">
                <Image
                  src="/images/image.png"
                  alt="Short Coin Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Menu - Same for desktop and mobile */}
            <div className="flex items-center gap-3 md:gap-6">
              <Link
                href="#about"
                className="text-red-100 hover:text-red-300 transition-colors text-xs md:text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#socials"
                className="text-red-100 hover:text-red-300 transition-colors text-xs md:text-sm font-medium"
              >
                Socials
              </Link>
              <Link
                href="#news"
                className="text-red-100 hover:text-red-300 transition-colors text-xs md:text-sm font-medium"
              >
                News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
