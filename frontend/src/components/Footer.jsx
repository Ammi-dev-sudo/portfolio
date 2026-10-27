import FacebookIcon from './FacebookIcon'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="text-sm text-neutral-400">
            © {currentYear} <span className="text-neutral-200">ANDRIAMANANA Ammi Joda</span>. Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-400 md:justify-end">
            <a href="mailto:ammijoda5@gmail.com" className="hover:text-cyan-400 transition-colors">
              ammijoda5@gmail.com
            </a>
            <span className="text-neutral-600">•</span>
            <a href="tel:+261346914064" className="hover:text-cyan-400 transition-colors">
              0346914064
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <FacebookIcon size={16} />
              Ammi
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
