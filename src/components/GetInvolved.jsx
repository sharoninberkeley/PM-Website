import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const roles = [
  {
    id: 'sme',
    title: 'SME Connector',
    priority: 'Highest Priority',
    emoji: '🏪',
    shortDesc: 'Know a business that needs digital help? Connect them to our graduates.',
    fullDesc: 'You know local businesses in Nairobi - clinics, salons, logistics companies, schools, retail shops - that struggle with social media, bookkeeping, or online presence. Introduce them to Chanuka. We handle the rest. One intro from you can change a young woman\'s trajectory.',
    cta: 'Connect a Business',
    ctaLink: '#contact',
    impact: 'Every business you connect creates a paid opportunity for a Kibera graduate.',
  },
  {
    id: 'recruiter',
    title: 'Community Recruiter',
    priority: 'High Impact',
    emoji: '🤝',
    shortDesc: 'Help us find the next cohort of young women ready to transform their lives.',
    fullDesc: 'You have roots in Kibera, Mathare, or other informal settlements. You know the young women who are hungry for opportunity but invisible to the formal economy. Help us reach them. Spread the word, make introductions, and help us find the women who will become the next Chanuka cohort.',
    cta: 'Help Recruit',
    ctaLink: '#contact',
    impact: 'Your network is someone\'s lifeline. One referral can spark a career.',
  },
  {
    id: 'partner',
    title: 'Program Partner',
    priority: 'Strategic',
    emoji: '🌍',
    shortDesc: 'Organizations and institutions that want to scale this model across East Africa.',
    fullDesc: 'You represent an NGO, university, government body, or corporate CSR program. You see what Chanuka is doing and want to bring it to your community, fund the next cohort, or integrate it into your existing programs. Let\'s talk about replication, funding, and long-term partnership.',
    cta: 'Explore Partnership',
    ctaLink: '#contact',
    impact: 'Your partnership helps us scale from 80 women to 1,000.',
  },
]

function RoleCard({ role, index, isExpanded, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index + 1}
      className={`relative border rounded-lg overflow-hidden transition-all duration-500 cursor-pointer group ${
        role.id === 'sme'
          ? 'border-gold/40 bg-gold/[0.05]'
          : 'border-white/10 bg-white/[0.02] hover:border-gold/20'
      }`}
      onClick={onToggle}
      layout
    >
      {role.id === 'sme' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{role.emoji}</span>
          <span className={`text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full ${
            role.id === 'sme'
              ? 'bg-gold/20 text-gold'
              : 'bg-white/5 text-white/30'
          }`}>
            {role.priority}
          </span>
        </div>

        <h3 className={`font-serif text-2xl md:text-3xl font-bold mb-3 ${
          role.id === 'sme' ? 'text-gold' : 'text-white/90'
        }`}>
          {role.title}
        </h3>

        <p className="text-white/50 leading-relaxed mb-4">{role.shortDesc}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-white/40 text-sm leading-relaxed mb-4">{role.fullDesc}</p>
              <div className="bg-white/[0.03] rounded-md p-4 mb-4">
                <p className="text-gold/80 text-sm italic">{role.impact}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mt-2">
          <a
            href={role.ctaLink}
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              role.id === 'sme' ? 'text-gold hover:text-gold-light' : 'text-white/60 hover:text-gold'
            }`}
          >
            {role.cta}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button className="text-white/20 text-xs">
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function GetInvolved() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="get-involved" ref={ref} className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">Get Involved</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Three ways to{' '}
            <span className="gold-gradient-text">be the bridge.</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            You don't need to donate. You need to connect. Every introduction you make 
            is infrastructure someone can stand on.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {roles.map((role, i) => (
            <RoleCard
              key={role.id}
              role={role}
              index={i}
              isExpanded={expanded === role.id}
              onToggle={() => setExpanded(expanded === role.id ? null : role.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
