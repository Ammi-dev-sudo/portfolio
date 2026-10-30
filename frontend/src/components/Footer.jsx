import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight, Clock } from 'lucide-react'
import FacebookIcon from './FacebookIcon'
import GithubIcon from './GithubIcon'
import Marquee from './Marquee'

const marqueeItems = [
  'Disponible pour un stage',
  'Alternance',
  'Full-Stack',
  'Python & Django',
  'React',
  'Travaillons ensemble',
]

function LocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date())

    setTime(format())
    const interval = setInterval(() => setTime(format()), 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-mist">
      <Clock size={13} className="text-acid" />
      {time} · Antananarivo
    </span>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-ink/10">
      <div className="border-b border-ink/10 bg-acid py-3 text-void">
        <Marquee speed={38}>
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="mx-6 inline-flex items-center gap-6 font-mono text-xs font-medium uppercase tracking-[0.22em]"
            >
              {item}
              <span className="text-base leading-none">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="eyebrow">Restons en contact</p>
            <a
              href="mailto:ammijoda5@gmail.com"
              className="group mt-6 inline-flex items-start gap-3 font-display text-[clamp(1.9rem,5vw,4.2rem)] font-bold leading-none tracking-tight text-ink transition-colors hover:text-acid"
            >
              ammijoda5
              <span className="text-mist transition-colors group-hover:text-acid">@gmail.com</span>
              <ArrowUpRight
                size={36}
                className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
              Un projet, une idée ou une opportunité ? Ma boîte mail est ouverte. Je réponds
              généralement sous 24 à 48 heures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Ammi-dev-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-mist transition-colors hover:border-acid hover:text-acid"
              >
                <GithubIcon size={16} />
                GitHub
                <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-mist transition-colors hover:border-acid hover:text-acid"
              >
                <FacebookIcon size={16} />
                Facebook
                <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href="tel:+261346914064"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm text-mist transition-colors hover:border-acid hover:text-acid"
              >
                +261 34 69 140 64
                <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">Navigation</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { label: 'Accueil', to: '/' },
                  { label: 'Projets', to: '/projects' },
                  { label: 'À propos', to: '/about' },
                  { label: 'Contact', to: '/contact' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="link-line w-fit text-mist transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-mist/60">Informations</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-mist">
                <li>Antananarivo, Madagascar</li>
                <li>Disponible immédiatement</li>
                <li>Stage · Alternance · CDI</li>
                <li className="pt-1">
                  <LocalTime />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-mist sm:flex-row sm:items-center">
          <p>
            © {currentYear} <span className="text-ink">ANDRIAMANANA Ammi Joda</span>. Tous droits réservés.
          </p>
          <p className="font-mono uppercase tracking-[0.15em]">
            Fait avec React, Django & beaucoup de café
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 transition-colors hover:border-acid hover:text-acid"
            aria-label="Remonter en haut"
          >
            Haut
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
