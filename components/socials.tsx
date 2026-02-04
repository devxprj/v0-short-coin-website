import Image from 'next/image'
import Link from 'next/link'

export function Socials() {
  const socials = [
    {
      name: 'X',
      icon: '/images/x.png',
      url: 'https://x.com/i/communities/',
    },
    {
      name: 'Pump.fun',
      icon: '/images/pump.png',
      url: 'https://pump.fun/coin/ca',
    },
    {
      name: 'DEXScreener',
      icon: '/images/dex.png',
      url: 'https://dexscreener.com/solana/ca',
    },
  ]

  return (
    <section
      id="socials"
      className="py-20 md:py-32 bg-gradient-to-b from-black via-red-950/10 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-red-500 mb-4 md:mb-6 drop-shadow-lg" style={{ fontFamily: "'Space Mono', monospace" }}>
          CONNECT WITH US
        </h2>

        <p className="text-center text-red-300/70 text-base md:text-lg mb-12 md:mb-16">
          Join the movement. Follow us across platforms.
        </p>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-r from-red-950/60 to-red-900/40 border border-red-600/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-red-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/30 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 relative mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-red-400 text-center group-hover:text-red-300 transition-colors">
                  {social.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
