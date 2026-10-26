import FacebookIcon from './FacebookIcon'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-400">
            © {currentYear} ANDRIAMANANA Ammi Joda. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <span>ammijoda5@gmail.com</span>
            <span>•</span>
            <span>0346914064</span>
            <span>•</span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
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
