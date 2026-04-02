import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from './CountUp'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const impactStats = [
  { value: 3, label: 'Cohorts Completed', suffix: '' },
  { value: 80, label: 'Women Trained', suffix: '+' },
  { value: 40, label: 'Placement Rate', suffix: '%' },
  { value: 200, label: 'Monthly Income After', prefix: '$', suffix: '' },
]

export default function Impact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="impact" ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">Proven Impact</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            This isn't a pitch.{' '}
            <span className="gold-gradient-text">It's a track record.</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="text-center p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-lg hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
              </div>
              <div className="text-white/40 text-sm tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Income comparison */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={5}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="text-center md:text-right">
            <div className="text-white/30 text-sm uppercase tracking-wide mb-1">Before Chanuka</div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-white/40">$90<span className="text-lg">/month</span></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 md:w-20 h-px bg-white/20" />
            <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="w-12 md:w-20 h-px bg-gold/40" />
          </div>
          <div className="text-center md:text-left">
            <div className="text-gold text-sm uppercase tracking-wide mb-1">After Chanuka</div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-gold">$200<span className="text-lg">/month</span></div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={6}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <span className="absolute -top-8 -left-4 text-gold/20 font-serif text-8xl leading-none">&ldquo;</span>
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed italic">
              I didn't build Chanuka to create a program. I built it because I've been the girl 
              who needed one and it didn't exist. Now it does.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-serif text-gold font-bold">MW</span>
              </div>
              <div className="text-left">
                <div className="text-white/70 font-semibold text-sm">Muthoni Wachira</div>
                <div className="text-white/30 text-xs">Founder, Chanuka</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
