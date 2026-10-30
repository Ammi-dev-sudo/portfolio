import useInView from '../hooks/useInView'

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  y = 36,
  x = 0,
  scale = 1,
  className = '',
  once = true,
  style,
  ...rest
}) {
  const [ref, inView] = useInView({ once })

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-y': `${y}px`,
        '--reveal-x': `${x}px`,
        '--reveal-scale': scale,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
