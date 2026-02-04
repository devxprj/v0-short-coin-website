'use client'

import Image from 'next/image'
import { ContractBox } from './contract-box'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Avatar and Logo Container */}
        <div className="mb-8 md:mb-12 flex flex-col items-center gap-4">
          {/* Avatar with l.png */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-red-600 shadow-lg shadow-red-600/50">
            <Image
              src="/images/l.png"
              alt="Short Coin Avatar"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ss.png Logo */}
          <div className="w-40 h-24 md:w-56 md:h-36 relative">
            <Image
              src="/images/ss.png"
              alt="Short Coin"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Loading Text Effect */}
        <div className={`min-h-16 md:min-h-20 flex items-center justify-center transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'
          }`}>
          <p
            className="text-xs md:text-lg lg:text-2xl
             text-red-500
             font-extrabold
             tracking-widest
             text-center
             drop-shadow-[0_4px_20px_rgba(255,0,0,0.8)]
             uppercase
             whitespace-nowrap"
            style={{
              fontFamily: "'Space Mono', monospace",
              WebkitTextStroke: "1px rgba(255,0,0,0.6)",
            }}
          >
            The short of a lifetime. Hedge the market.
          </p>

        </div>

        {/* Contract Address Box */}
        <div className="mt-8 md:mt-12 mb-4">
          <ContractBox />
        </div>
      </div>
    </section>
  )
}
