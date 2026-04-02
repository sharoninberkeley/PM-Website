import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    week: 'Week 1-2',
    title: 'Skills Foundation',
    description: 'Digital literacy, AI tools, Canva, Google Workspace, and basic data entry. Women build their first digital portfolio.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    week: 'Week 3',
    title: 'Business Skills',
    description: 'Social media management, content creation, and client communication. Learning to sell their skills, not just have them.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    week: 'Week 4',
    title: 'Real Work Begins',
    description: 'Matched with a local SME. Real tasks, real deadlines, real feedback. This is where theory becomes proof.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlight: true,
  },
  {
    week: 'Week 5',
    title: 'Portfolio & Hire',
    description: 'Building a professional portfolio of real work. Businesses evaluate and decide. 40% get hired on the spot.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    week: 'Week 6',
    title: 'Selling Their Skills',
    description: 'Graduates learn to pitch themselves, set rates, and find new clients independently. Not dependent. Empowered.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">The Model</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            6 weeks. Real skills.{' '}
            <span className="gold-gradient-text">Real work.</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Not a bootcamp that ends with a certificate. A pipeline that ends with a paycheck.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 1}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-3 h-3 rounded-full ${
                    step.highlight ? 'bg-gold shadow-lg shadow-gold/40' : 'bg-gold/60'
                  } ring-4 ring-[#080808]`} />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`${
                    step.highlight
                      ? 'bg-gold/10 border-gold/30'
                      : 'bg-white/[0.03] border-white/10'
                  } border rounded-lg p-6 md:p-8 hover:border-gold/40 transition-all duration-300 group`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className={`text-xs font-semibold tracking-widest uppercase ${
                        step.highlight ? 'text-gold' : 'text-white/30'
                      }`}>
                        {step.week}
                      </span>
                    </div>
                    <div className={`flex items-start gap-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`shrink-0 p-3 rounded-lg ${
                        step.highlight ? 'bg-gold/20 text-gold' : 'bg-white/5 text-white/50 group-hover:text-gold'
                      } transition-colors`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className={`font-serif text-xl md:text-2xl font-bold mb-2 ${
                          step.highlight ? 'text-gold' : 'text-white/90'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={7}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gold/10 border border-gold/20 rounded-lg px-8 py-4">
            <p className="text-gold font-serif text-lg md:text-xl font-semibold">
              &ldquo;Try before you hire&rdquo; &mdash; businesses get 4 weeks of free digital work.
              <br />
              <span className="text-white/60 font-sans text-sm font-normal">Zero risk. Real results. Then decide.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
