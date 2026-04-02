import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from './CountUp'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
        this.golden = Math.random() > 0.7
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.golden
          ? `rgba(212, 160, 23, ${this.opacity})`
          : `rgba(255, 255, 255, ${this.opacity * 0.4})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gold light leak gradient
      const grd = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.3, 0,
        canvas.width * 0.7, canvas.height * 0.3, canvas.width * 0.5
      )
      grd.addColorStop(0, 'rgba(212, 160, 23, 0.08)')
      grd.addColorStop(0.5, 'rgba(212, 160, 23, 0.03)')
      grd.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Second light leak from bottom left
      const grd2 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.8, 0,
        canvas.width * 0.2, canvas.height * 0.8, canvas.width * 0.4
      )
      grd2.addColorStop(0, 'rgba(212, 160, 23, 0.05)')
      grd2.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grd2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particles" />
}

export default function Hero() {
  const stats = [
    { end: 80, suffix: '+', label: 'Women Trained' },
    { end: 30, suffix: '+', label: 'Placed in Work' },
    { end: 100, suffix: '', label: 'Targeted Next' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleCanvas />

      {/* Parallax overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-0 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Kibera, Nairobi &mdash; Building Digital Futures
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
          >
            Where a skill
            <br />
            becomes a{' '}
            <span className="gold-gradient-text">shield.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          >
            Young women in Kibera face the world's toughest odds. Chanuka trains them in AI, 
            digital marketing, and real business skills &mdash; then connects them directly to 
            Nairobi's growing SME economy. Not charity. Infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="#businesses" className="btn-primary">
              Connect Us to Businesses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-outline">
              Learn How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-12 md:gap-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-gold">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-white/40 mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
