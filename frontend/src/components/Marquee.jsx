export default function Marquee({ children, speed = 30, reverse = false, className = '' }) {
  return (
    <div className={`marquee ${className}`} style={{ '--marquee-duration': `${speed}s` }}>
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
