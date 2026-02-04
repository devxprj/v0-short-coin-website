import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Socials } from '@/components/socials'
import { News } from '@/components/news'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black">
      <Navbar />
      <Hero />

      {/* Red Band Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <About />


      <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <Socials />

      {/* Red Band Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <News />

      {/* Footer */}
      <footer className="bg-black border-t border-red-600/50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-red-400 font-bold text-sm md:text-base">
            Short Coin © 2026. The final short. Everything is going to zero.
          </p>
        </div>
      </footer>
    </main>
  )
}
