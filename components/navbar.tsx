'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center pt-4 px-4">
        <div className="bg-gradient-to-r from-red-950/80 to-red-900/80 backdrop-blur-lg rounded-full border border-red-600/40 w-full max-w-md md:max-w-xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Avatar */}
            <Link href="#home" className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-red-500 hover:border-red-400 transition-colors">
                <Image
                  src="/images/image.png"
                  alt="Short Coin Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#about"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#socials"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium"
              >
                Socials
              </Link>
              <Link
                href="#news"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium"
              >
                News
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-100 hover:text-red-300 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-red-600/40 flex flex-col gap-3">
              <Link
                href="#about"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium block"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#socials"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Socials
              </Link>
              <Link
                href="#news"
                className="text-red-100 hover:text-red-300 transition-colors text-sm font-medium block"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
