import { useEffect, useMemo, useRef } from 'react'

export default function AnimatedBackground() {
  const spotlightRef = useRef(null)

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => {
        const seed = (index * 9301 + 49297) % 233280
        const random = seed / 233280

        return {
          left: `${(random * 100).toFixed(2)}%`,
          top: `${((random * 137) % 100).toFixed(2)}%`,
          size: `${(random * 3 + 1).toFixed(2)}px`,
          duration: `${(random * 10 + 9).toFixed(2)}s`,
          delay: `${(random * -18).toFixed(2)}s`,
          drift: `${(random * 80 - 40).toFixed(1)}px`,
        }
      }),
    []
  )

  useEffect(() => {
    let frame

    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!spotlightRef.current) return
        spotlightRef.current.style.setProperty('--mx', `${event.clientX}px`)
        spotlightRef.current.style.setProperty('--my', `${event.clientY}px`)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />
      <div className="blob blob-acid" />
      <div className="blob blob-iris" />
      <div className="blob blob-ember" />
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div ref={spotlightRef} className="spotlight" />
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            '--dur': particle.duration,
            '--delay': particle.delay,
            '--dx': particle.drift,
          }}
        />
      ))}
      <div className="grain" />
    </div>
  )
}
