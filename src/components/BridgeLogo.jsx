import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.2, duration: 0.01 },
    },
  }),
}

export default function BridgeLogo({ className = '', size = 48 }) {
  const w = size
  const h = size * 0.6

  return (
    <motion.svg
      width={w}
      height={h}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      {/* Bridge arch */}
      <motion.path
        d="M10 60 Q60 5 110 60"
        stroke="#D4A017"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        custom={0}
      />
      {/* Bridge deck */}
      <motion.line
        x1="5"
        y1="60"
        x2="115"
        y2="60"
        stroke="#D4A017"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={draw}
        custom={1}
      />
      {/* Left cable */}
      <motion.line
        x1="35"
        y1="60"
        x2="42"
        y2="28"
        stroke="#D4A017"
        strokeWidth="1.5"
        variants={draw}
        custom={2}
      />
      {/* Right cable */}
      <motion.line
        x1="85"
        y1="60"
        x2="78"
        y2="28"
        stroke="#D4A017"
        strokeWidth="1.5"
        variants={draw}
        custom={2}
      />
      {/* Center cable */}
      <motion.line
        x1="60"
        y1="60"
        x2="60"
        y2="10"
        stroke="#D4A017"
        strokeWidth="1.5"
        variants={draw}
        custom={2}
      />
      {/* Left figure (gold - Kibera) */}
      <motion.circle
        cx="30"
        cy="52"
        r="4"
        fill="#D4A017"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="30"
        y1="56"
        x2="30"
        y2="65"
        stroke="#D4A017"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={3}
      />
      {/* Right figure (dark - Nairobi) */}
      <motion.circle
        cx="90"
        cy="52"
        r="4"
        fill="#FFFFFF"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="90"
        y1="56"
        x2="90"
        y2="65"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        variants={draw}
        custom={3}
      />
    </motion.svg>
  )
}
