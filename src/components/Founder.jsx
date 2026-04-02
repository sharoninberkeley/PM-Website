import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Founder() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="founder" ref={ref} className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">The Founder</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-gold/10 via-black to-gold/5 rounded-lg border border-gold/20 flex items-center justify-center relative overflow-hidden">
              {/* Stylized initial block */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="font-serif text-[180px] md:text-[220px] font-bold text-gold/[0.08] leading-none select-none">
                    MW
                  </span>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">Muthoni</span>
                    <span className="font-serif text-4xl md:text-5xl font-bold text-white/80">Wachira</span>
                    <div className="w-16 h-px bg-gold/40 my-4" />
                    <span className="text-white/40 text-sm tracking-widest uppercase">Founder</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold/30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Built by someone
              <br />
              who <span className="gold-gradient-text">lived it.</span>
            </h2>

            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>
                I grew up in Mathare &mdash; one of Nairobi's toughest informal settlements. 
                I know what it's like to have the talent but not the access. To be smart enough 
                but invisible to the economy. To walk home afraid and still dream about building something.
              </p>
              <p>
                I'm now at UC Berkeley, at International House, studying what it takes to turn 
                communities around. But I didn't wait to graduate to start. Chanuka was born 
                in 2024 because the women I grew up with couldn't afford to wait either.
              </p>
              <p>
                Three cohorts later, 80+ women trained, 30+ placed in real work. This isn't 
                theory. This is what happens when someone who understands the problem gets 
                the tools to fix it.
              </p>
              <p className="text-white/40">
                Chanuka is a 2026 Projects for Peace initiative, supported by 
                International House at UC Berkeley.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-10 pl-6 border-l-2 border-gold/40">
              <blockquote className="font-serif text-xl md:text-2xl text-gold/90 italic leading-relaxed">
                &ldquo;Peace, to me, is the safety to walk home without fear &mdash; and the 
                power to build a future.&rdquo;
              </blockquote>
              <cite className="text-white/40 text-sm mt-3 block not-italic">
                &mdash; Muthoni Wachira
              </cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
