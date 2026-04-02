import { useState } from 'react'
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

const businessTypes = [
  {
    id: 'clinics',
    name: 'Clinics & Health',
    icon: '🏥',
    tasks: ['Patient record digitization', 'Social media for health awareness', 'Appointment scheduling systems', 'Data entry and reporting'],
  },
  {
    id: 'salons',
    name: 'Salons & Beauty',
    icon: '💇',
    tasks: ['Instagram & TikTok content', 'Online booking setup', 'Customer database management', 'Digital marketing campaigns'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Transport',
    icon: '🚚',
    tasks: ['Fleet tracking spreadsheets', 'Customer communication systems', 'Invoice and receipt digitization', 'Route optimization data'],
  },
  {
    id: 'schools',
    name: 'Schools & Education',
    icon: '🎓',
    tasks: ['Student records management', 'Social media presence', 'Newsletter and communication', 'Event promotion'],
  },
  {
    id: 'retail',
    name: 'Retail & Shops',
    icon: '🛍️',
    tasks: ['Inventory management', 'E-commerce setup', 'Product photography', 'WhatsApp Business catalogs'],
  },
]

export default function ForBusinesses() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState('clinics')

  const active = businessTypes.find(b => b.id === activeTab)

  return (
    <section id="businesses" ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Gold accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-6"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">For Businesses</span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            4 weeks of free digital work
            <br />
            for your business.{' '}
            <span className="gold-gradient-text">Try before you hire.</span>
          </h2>
          <p className="text-white/50 mt-6 text-lg max-w-2xl mx-auto">
            Our graduates work on real tasks for your business &mdash; social media, data entry, 
            content creation, customer management. You pay nothing for 4 weeks. 
            If they deliver, hire them. If not, no obligation.
          </p>
        </motion.div>

        {/* Business type tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          {/* Tab headers */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {businessTypes.map((biz) => (
              <button
                key={biz.id}
                onClick={() => setActiveTab(biz.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === biz.id
                    ? 'bg-gold text-black'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                }`}
              >
                <span className="mr-2">{biz.icon}</span>
                {biz.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto bg-white/[0.03] border border-white/10 rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{active.icon}</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white/90">{active.name}</h3>
                <p className="text-white/40 text-sm">What our graduates can do for you</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {active.tasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-md bg-white/[0.02] border border-white/5"
                >
                  <svg className="w-5 h-5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/60 text-sm">{task}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary text-base">
            Get Free Digital Help
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-white/30 text-sm mt-4">Zero cost. Zero risk. Real results.</p>
        </motion.div>
      </div>
    </section>
  )
}
