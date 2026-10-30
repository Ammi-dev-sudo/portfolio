import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <Reveal y={20}>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
