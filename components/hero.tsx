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
          {/* Avatar */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-red-600 shadow-lg shadow-red-600/50">
            <Image
              src="/images/image.png"
              alt="Short Coin Avatar"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          {/* S.png Logo */}
          <div className="w-32 h-20 md:w-48 md:h-32 relative">
            <Image
              src="/images/s.png"
              alt="Short Coin"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Loading Text Effect */}
        <div className={`min-h-12 md:min-h-16 flex items-center justify-center transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}>
          <p className="text-lg md:text-2xl text-red-400 font-bold tracking-wider" style={{ fontFamily: "'Space Mono', monospace" }}>
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
