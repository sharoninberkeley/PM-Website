import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BridgeLogo from './BridgeLogo'

const navLinks = [
  { href: '#problem', label: 'The Problem' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#impact', label: 'Impact' },
  { href: '#get-involved', label: 'Get Involved' },
  { href: '#businesses', label: 'For Businesses' },
  { href: '#founder', label: 'Founder' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <BridgeLogo size={40} />
          <span className="font-serif text-2xl font-bold tracking-tight">
            Chanuka<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs py-2.5 px-6">
            Get Connected
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-gold"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gold"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-white/80 hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
                Get Connected
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
