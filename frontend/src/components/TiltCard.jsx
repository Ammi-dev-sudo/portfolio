import { useRef } from 'react'

export default function TiltCard({ children, className = '', max = 8 }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    element.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`)
    element.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`)
    element.style.setProperty('--mx', `${px * 100}%`)
    element.style.setProperty('--my', `${py * 100}%`)
  }

  const reset = () => {
    const element = ref.current
    if (!element) return

    element.style.setProperty('--rx', '0deg')
    element.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  )
}
