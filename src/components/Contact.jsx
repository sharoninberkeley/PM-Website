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

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', role: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Gold background section */}
      <div className="bg-gradient-to-br from-gold via-gold to-gold-dark py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
              Be the bridge.
            </h2>
            <p className="text-black/60 mt-4 text-lg max-w-xl mx-auto">
              One email. One introduction. One connection. That's all it takes 
              to change the trajectory of a young woman's life.
            </p>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            onSubmit={handleSubmit}
            className="bg-black/90 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-white/40 text-sm mb-2 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/40 text-sm mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-white/40 text-sm mb-2 font-medium">How do you want to help?</label>
              <select
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="bg-black">Select an option...</option>
                <option value="connect-business" className="bg-black">Connect a Business</option>
                <option value="recruit-students" className="bg-black">Recruit Students</option>
                <option value="partner" className="bg-black">Partner Institutionally</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-white/40 text-sm mb-2 font-medium">Message (optional)</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                placeholder="Tell us a bit more..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-black font-bold py-4 rounded-md hover:bg-gold-light transition-all duration-300 text-sm tracking-wide uppercase"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold text-sm text-center mt-4"
              >
                Thank you! We'll be in touch within 48 hours.
              </motion.p>
            )}
          </motion.form>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            className="text-center text-black/50 text-sm mt-8"
          >
            Or reach out directly: <a href="mailto:chanuka@berkeley.edu" className="text-black/70 underline hover:text-black transition-colors">chanuka@berkeley.edu</a>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
