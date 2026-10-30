import { useEffect, useState } from 'react'

export default function Typewriter({ words, className = '', typingSpeed = 65, deletingSpeed = 35, pause = 1500 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((index) => (index + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((current) =>
            deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1)
          )
        },
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-acid" />
    </span>
  )
}
