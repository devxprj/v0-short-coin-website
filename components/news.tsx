import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const articles = [
  {
    title: 'Analyst warns Bitcoin could drop to $60K next',
    source: 'TheStreet',
    url: 'https://www.thestreet.com/crypto/markets/analyst-warns-bitcoin-could-drop-to-60k-next',
    excerpt: 'Market analyst predicts significant Bitcoin decline in coming weeks',
  },
  {
    title: 'Big Short Michael Burry sends chilling warning after Bitcoin plunge',
    source: 'TheStreet',
    url: 'https://www.thestreet.com/crypto/markets/big-short-michael-burry-sends-chilling-warning-after-bitcoin-plunge',
    excerpt:
      'Legendary investor Michael Burry warns of further market disruption',
  },
  {
    title: 'Bitcoin price to $10,000 as markets barrel towards crash',
    source: 'DL News',
    url: 'https://www.dlnews.com/articles/markets/bitcoin-price-to-10000-as-markets-barrel-towards-crash/',
    excerpt: 'Bloomberg analyst predicts 87% decline reminiscent of 2008 crash',
  },
  {
    title: 'These prophets of economic doom are worried about another collapse',
    source: 'Washington Post',
    url: 'https://www.washingtonpost.com/technology/2026/01/18/ai-bubble-predictions-crash/',
    excerpt: 'Economists predict AI bubble will trigger major stock market crash',
  },
]

export function News() {
  return (
    <section id="news" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,0,0,.1) 25%, rgba(255,0,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.1) 75%, rgba(255,0,0,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,0,0,.1) 25%, rgba(255,0,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.1) 75%, rgba(255,0,0,.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-red-500 mb-4 md:mb-6 drop-shadow-lg" style={{ fontFamily: "'Space Mono', monospace" }}>
          MARKET NEWS
        </h2>

        <p className="text-center text-red-300/70 text-base md:text-lg mb-12 md:mb-16">
          The latest warnings from market experts. The final collapse is here.
        </p>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-red-950/50 to-red-900/30 border border-red-600/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-red-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 h-full flex flex-col">
                {/* Source and icon */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-red-400 font-bold text-sm md:text-base uppercase tracking-widest">
                    {article.source}
                  </span>
                  <ExternalLink
                    size={20}
                    className="text-red-600 group-hover:text-red-400 transition-colors flex-shrink-0"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-red-300 mb-3 group-hover:text-red-200 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-red-300/70 text-sm md:text-base mb-4 flex-grow">
                  {article.excerpt}
                </p>

                {/* Read more link */}
                <div className="flex items-center gap-2 text-red-500 group-hover:text-red-400 transition-colors text-sm md:text-base font-medium">
                  Read More
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
