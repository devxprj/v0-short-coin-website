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
      <About />
      <Socials />
      <News />

      {/* Footer */}
      <footer className="bg-black border-t border-red-600/20 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-red-300/60 text-sm md:text-base">
            Short Coin © 2026. The final short. Everything is going to zero.
          </p>
        </div>
      </footer>
    </main>
  )
}
