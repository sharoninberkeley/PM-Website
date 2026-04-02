import BridgeLogo from './BridgeLogo'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <BridgeLogo size={32} />
          <span className="font-serif text-lg font-bold">
            Chanuka<span className="text-gold">.</span>
          </span>
        </div>
        <p className="text-white/40 text-sm text-center md:text-right leading-relaxed">
          A Projects for Peace Initiative &middot; International House, UC Berkeley &middot; Muthoni Wachira, 2026
        </p>
      </div>
    </footer>
  )
}
