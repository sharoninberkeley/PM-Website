import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function CountUp({ end, duration = 2000, prefix = '', suffix = '', className = '' }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
      const id = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(id)

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
