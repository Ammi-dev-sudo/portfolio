import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Magnetic from './Magnetic'

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projects' },
  { name: 'À propos', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 sm:px-6 ${
              scrolled
                ? 'border-ink/10 bg-void/75 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            }`}
          >
            <Link to="/" className="group flex items-center gap-2.5" aria-label="Accueil">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-acid/40 text-acid">
                <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-acid/30" />
                <span className="font-display text-sm font-bold">A</span>
              </span>
              <span className="font-display text-base font-bold tracking-tight text-ink">
                ammi<span className="text-acid">.</span>joda
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative text-sm font-medium transition-colors ${
                      isActive ? 'text-ink' : 'text-mist hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      <span
                        className={`absolute -bottom-1.5 left-0 h-px bg-acid transition-all duration-500 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:block">
              <Magnetic strength={0.25}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-sm font-semibold text-void transition-colors hover:bg-ink"
                >
                  Discutons
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Magnetic>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-acid hover:text-acid md:hidden"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center bg-void/95 px-6 backdrop-blur-2xl md:hidden">
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-acid/10 blur-3xl" />
          <nav className="relative flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `menu-link flex items-center justify-between border-b border-ink/10 py-5 font-display text-4xl font-bold tracking-tight ${
                    isActive ? 'text-acid' : 'text-ink'
                  }`
                }
                style={{ '--d': `${120 + index * 90}ms` }}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-mist">0{index + 1}</span>
              </NavLink>
            ))}
          </nav>
          <div className="relative mt-10 flex flex-col gap-3 text-sm text-mist">
            <a href="mailto:ammijoda5@gmail.com" className="link-line w-fit text-ink">
              ammijoda5@gmail.com
            </a>
            <a href="tel:+261346914064" className="link-line w-fit">
              0346914064
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist/70">
              Antananarivo, Madagascar
            </span>
          </div>
        </div>
      )}
    </>
  )
}
