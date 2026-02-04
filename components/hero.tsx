import Image from 'next/image'
import { ContractBox } from './contract-box'

export function Hero() {
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
        {/* Logo */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 relative">
            <Image
              src="/images/logo.png"
              alt="Short Coin Logo"
              width={128}
              height={128}
              className="w-full h-full drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-red-500 mb-4 md:mb-6 drop-shadow-lg" style={{ fontFamily: "'Space Mono', monospace" }}>
          SHORT COIN
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-red-300/80 mb-8 md:mb-12 font-medium tracking-wide">
          The short of a lifetime. Hedge the market.
        </p>

        {/* Contract Address Box */}
        <div className="mb-8 md:mb-12">
          <ContractBox />
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 text-base md:text-lg shadow-2xl">
          Buy Shortcoin Now
        </button>
      </div>
    </section>
  )
}
