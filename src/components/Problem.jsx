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

export default function Problem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const kiberaStats = [
    { value: 67, suffix: '%', label: 'Youth unemployment in Kibera' },
    { value: 85, suffix: '%', label: 'Gender-based violence rate' },
    { prefix: '<$', value: 3, suffix: '/day', label: 'Average income for women' },
  ]

  const nairobiStats = [
    { prefix: '$', value: 23, suffix: 'B', label: "Nairobi's digital economy" },
    { value: 70, suffix: '%', label: "of SMEs can't find digital talent" },
    { value: 0, suffix: '', label: 'Formal pipelines from Kibera', display: 'Zero' },
  ]

  return (
    <section id="problem" ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">The Problem</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Two worlds. One city.{' '}
            <span className="gold-gradient-text">No bridge.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-stretch relative">
          {/* Kibera side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="bg-white/[0.03] border border-white/10 rounded-lg p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-white/90">Kibera</h3>
            <p className="text-white/40 text-sm mb-8">Africa's largest informal settlement</p>
            <div className="space-y-8">
              {kiberaStats.map((stat, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-red-400/90 shrink-0">
                    {stat.prefix || ''}
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-white/50 text-sm leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GAP element - centered in the gutter between columns on desktop */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex pointer-events-none"
          >
            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20 ring-8 ring-black">
              <span className="font-serif text-lg font-bold text-black tracking-wider">GAP</span>
            </div>
          </motion.div>

          {/* Mobile GAP */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            className="md:hidden flex justify-center -my-2"
          >
            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-black tracking-wider">GAP</span>
            </div>
          </motion.div>

          {/* Nairobi side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            className="bg-white/[0.03] border border-gold/20 rounded-lg p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-gold">Nairobi</h3>
            <p className="text-white/40 text-sm mb-8">East Africa's Silicon Savannah</p>
            <div className="space-y-8">
              {nairobiStats.map((stat, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-gold shrink-0">
                    {stat.display ? (
                      stat.display
                    ) : (
                      <>
                        {stat.prefix || ''}
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </>
                    )}
                  </span>
                  <span className="text-white/50 text-sm leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={4}
          className="text-center text-white/50 text-lg mt-12 max-w-2xl mx-auto"
        >
          Nairobi is booming. Kibera is ten minutes away. But without a bridge, 
          the talent stays invisible and the businesses keep struggling.{' '}
          <span className="text-gold font-medium">Chanuka is that bridge.</span>
        </motion.p>
      </div>
    </section>
  )
}
