export default function SplitText({
  text,
  className = '',
  delay = 0,
  step = 45,
  as: Tag = 'span',
}) {
  const words = text.split(' ')
  let charIndex = 0

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="split-word" aria-hidden="true">
          {[...word].map((char, index) => {
            const currentDelay = delay + charIndex * step
            charIndex += 1

            return (
              <span
                key={`${char}-${index}`}
                className="split-char"
                style={{ '--d': `${currentDelay}ms` }}
              >
                {char}
              </span>
            )
          })}
          {wordIndex < words.length - 1 && <span className="split-char" style={{ '--d': `${delay + charIndex * step}ms` }}>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
