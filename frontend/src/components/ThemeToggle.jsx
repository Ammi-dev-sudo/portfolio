import { useEffect, useRef, useState } from 'react'
import { Check, Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme/useTheme'

const options = [
  { value: 'light', label: 'Mode clair', shortLabel: 'Clair', icon: Sun },
  { value: 'dark', label: 'Mode sombre', shortLabel: 'Sombre', icon: Moon },
  { value: 'system', label: "Mode de l'ordinateur", shortLabel: 'Système', icon: Monitor },
]

export default function ThemeToggle({ className = '' }) {
  const { mode, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const current = options.find((option) => option.value === mode) || options[2]
  const CurrentIcon = current.icon

  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-acid hover:text-acid"
        aria-label={`Changer de thème · ${current.label}`}
        aria-haspopup="true"
        aria-expanded={open}
        title={current.label}
      >
        <CurrentIcon size={18} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Choisir le thème"
          className="absolute right-0 top-full z-[60] mt-2 w-56 overflow-hidden rounded-2xl border border-ink/10 bg-panel/95 p-1.5 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        >
          {options.map((option) => {
            const Icon = option.icon
            const active = option.value === mode

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setMode(option.value)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                  active
                    ? 'bg-acid/10 text-acid'
                    : 'text-mist hover:bg-ink/5 hover:text-ink'
                }`}
              >
                <Icon size={17} className="shrink-0" />
                <span className="flex-1">{option.label}</span>
                {active && <Check size={15} className="shrink-0" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
