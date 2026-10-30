import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return undefined

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let frame

    const onMove = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`
      }
    }

    const loop = () => {
      ringX += (pointerX - ringX) * 0.16
      ringY += (pointerY - ringY) * 0.16

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      frame = requestAnimationFrame(loop)
    }

    const onDown = () => document.body.classList.add('cursor-down')
    const onUp = () => document.body.classList.remove('cursor-down')

    const onOver = (event) => {
      const target = event.target
      const interactive = target.closest?.(
        'a, button, input, textarea, select, [data-cursor="hover"]'
      )
      document.body.classList.toggle('cursor-hover', Boolean(interactive))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.body.classList.remove('custom-cursor-active', 'cursor-hover', 'cursor-down')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
