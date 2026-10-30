import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

export default function Counter({ value, suffix = '', duration = 1600, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return undefined

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(value * eased))

      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  )
}
