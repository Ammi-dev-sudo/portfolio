import FacebookIcon from '../components/FacebookIcon'

const About = () => {
  const skills = {
    Frontend: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
    Backend: ['Python', 'Django', 'Django REST Framework', 'API REST'],
    Données: ['MySQL', 'PostgreSQL', 'SQLite'],
    Outils: ['Git', 'GitHub', 'Postman', 'Django Admin', 'CI/CD'],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-center">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur" />
            <img
              src="/images/photo-apropos.jpg"
              alt="ANDRIAMANANA Ammi Joda"
              className="relative h-40 w-40 rounded-full border-2 border-neutral-800 object-cover shadow-xl sm:h-48 sm:w-48"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">À propos</p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">ANDRIAMANANA Ammi Joda</h1>
            <p className="mt-2 text-lg text-neutral-400">Développeur Full-Stack • Python, Django & React</p>
          </div>
        </div>

        <div className="space-y-7 text-neutral-300 leading-relaxed">
          <p>
            Je suis un développeur Full-Stack passionné par la conception et le développement d’applications web modernes,
            fonctionnelles et efficaces. Mon travail consiste à transformer des idées en solutions numériques solides,
            performantes et faciles à utiliser.
          </p>

          <p>
            J’aime concevoir des projets qui allient qualité du code, architecture claire, sécurité et expérience utilisateur.
            Que ce soit côté backend avec <strong className="text-white">Python</strong> et <strong className="text-white">Django</strong>,
            ou côté frontend avec <strong className="text-white">React</strong> et des interfaces modernes, j’essaie toujours de livrer
            une solution utile, lisible et maintenable.
          </p>

          <p>
            Mon objectif est de continuer à développer des compétences dans le web applicatif, en réalisant des projets concrets et en
            contribuant à des solutions qui apportent une réelle valeur à des utilisateurs et à des entreprises.
          </p>

          <section className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
            <h2 className="mb-5 text-xl font-semibold text-white">Compétences techniques</h2>
            <div className="space-y-5">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-2 font-medium text-neutral-200">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="rounded-full border border-neutral-700 bg-neutral-950/60 px-3 py-1.5 text-sm text-neutral-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <p>
            Je suis à la recherche d’opportunités de stage, d’alternance ou d’emploi dans lesquelles je peux continuer à apprendre,
            contribuer à des projets concrets et développer des compétences professionnelles de qualité.
          </p>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-sm text-neutral-400">
            <p>Email : <a href="mailto:ammijoda5@gmail.com" className="text-cyan-400 hover:text-cyan-300">ammijoda5@gmail.com</a></p>
            <p className="mt-2">Téléphone : <a href="tel:+261346914064" className="text-cyan-400 hover:text-cyan-300">0346914064</a></p>
            <p className="mt-2 inline-flex items-center gap-2">
              <FacebookIcon size={16} />
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                Facebook : Ammi
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
