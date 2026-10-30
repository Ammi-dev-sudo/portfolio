import { useRef } from 'react'

export default function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) * strength
    const y = (event.clientY - rect.top - rect.height / 2) * strength

    element.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0, 0, 0)'
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  )
}
