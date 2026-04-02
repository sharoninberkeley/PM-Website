import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.15, duration: 0.01 },
    },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
}

export default function BridgeLogo({ className = '', size = 48 }) {
  const h = Math.round(size * (160 / 360))

  return (
    <motion.svg
      width={size}
      height={h}
      viewBox="0 0 360 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Left deck */}
      <motion.line
        x1="20" y1="110" x2="80" y2="110"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        variants={draw} custom={0}
      />
      {/* Right deck */}
      <motion.line
        x1="140" y1="110" x2="200" y2="110"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round"
        variants={draw} custom={0}
      />
      {/* Gold arch */}
      <motion.path
        d="M 30 110 Q 110 48 190 110"
        fill="none" stroke="#D4A017" strokeWidth="4" strokeLinecap="round"
        variants={draw} custom={1}
      />
      {/* Suspension cables */}
      <motion.line x1="68" y1="110" x2="68" y2="78" stroke="#D4A017" strokeWidth="1.5" variants={draw} custom={2} />
      <motion.line x1="90" y1="110" x2="90" y2="60" stroke="#D4A017" strokeWidth="1.5" variants={draw} custom={2} />
      <motion.line x1="110" y1="110" x2="110" y2="52" stroke="#D4A017" strokeWidth="1.5" variants={draw} custom={2} />
      <motion.line x1="130" y1="110" x2="130" y2="60" stroke="#D4A017" strokeWidth="1.5" variants={draw} custom={2} />
      <motion.line x1="152" y1="110" x2="152" y2="78" stroke="#D4A017" strokeWidth="1.5" variants={draw} custom={2} />
      {/* Left tower */}
      <motion.rect x="27" y="82" width="6" height="30" fill="currentColor" variants={fadeIn} custom={3} />
      {/* Right tower */}
      <motion.rect x="187" y="82" width="6" height="30" fill="currentColor" variants={fadeIn} custom={3} />
      {/* Left figure (gold - Kibera) */}
      <motion.circle cx="48" cy="100" r="4.5" fill="#D4A017" variants={fadeIn} custom={4} />
      <motion.line x1="48" y1="104.5" x2="48" y2="114" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
      {/* Right figure (dark - Nairobi) */}
      <motion.circle cx="172" cy="100" r="4.5" fill="currentColor" variants={fadeIn} custom={4} />
      <motion.line x1="172" y1="104.5" x2="172" y2="114" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
    </motion.svg>
  )
}
