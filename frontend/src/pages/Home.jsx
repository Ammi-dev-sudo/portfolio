import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Code2, Database, Mail, Phone, Rocket } from 'lucide-react'
import ProjectsList from '../components/ProjectsList'
import FacebookIcon from '../components/FacebookIcon'

const MadagascarFlag = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-2 align-middle"
    aria-label="Drapeau de Madagascar"
  >
    <rect width="28" height="20" fill="#FFFFFF" />
    <rect x="0" y="0" width="9.33" height="20" fill="#007A3D" />
    <rect x="9.33" y="0" width="18.67" height="10" fill="#FC3D32" />
    <rect x="9.33" y="10" width="18.67" height="10" fill="#007A3D" />
  </svg>
)

const Home = () => {
  const strengths = [
    'Python',
    'Django',
    'Django REST Framework',
    'React',
    'JavaScript',
    'PostgreSQL',
    'MySQL',
    'API REST',
  ]

  const services = [
    {
      icon: Code2,
      title: 'Développement Full-Stack',
      description: 'Conception d’applications web complètes, du backend à l’interface utilisateur, avec une logique claire et scalable.',
    },
    {
      icon: Database,
      title: 'API & bases de données',
      description: 'Modélisation des données, création d’API robustes, gestion des relations et optimisation du stockage.',
    },
    {
      icon: Rocket,
      title: 'Livraison & performance',
      description: 'Mise en production, maintenance, sécurité et optimisation de la performance pour des solutions fiables.',
    },
  ]

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              <Briefcase size={14} />
              Développeur Full-Stack
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              ANDRIAMANANA <br />
              <span className="text-cyan-400">Ammi Joda</span>
              <MadagascarFlag />
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
              Je conçois des applications web modernes et fonctionnelles avec <span className="text-cyan-300">Python/Django</span> côté backend et <span className="text-cyan-300">React</span> côté frontend.
              Mon objectif est de créer des solutions fiables, performantes et centrées sur l’expérience utilisateur.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-300">
              <a
                href="mailto:ammijoda5@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail size={18} />
                ammijoda5@gmail.com
              </a>
              <a
                href="tel:+261346914064"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone size={18} />
                0346914064
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <FacebookIcon size={18} />
                Ammi
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-medium text-neutral-950 transition hover:bg-cyan-400"
              >
                Voir mes projets
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {strengths.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1.5 text-xs font-medium text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900/80 p-4 shadow-2xl">
              <img
                src="/images/photo-accueil.jpg"
                alt="ANDRIAMANANA Ammi Joda"
                className="h-[30rem] w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Stack</p>
                  <p className="mt-2 text-lg font-semibold text-white">Python + React</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">Backend</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Objectif</p>
                  <p className="mt-2 text-lg font-semibold text-white">Stage / emploi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">Ce que je fais</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Des solutions web complètes, du backend au frontend</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 transition hover:border-cyan-500/40 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]">
                <div className="mb-4 inline-flex rounded-lg border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">Ma démarche</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Je construis des projets simples, propres et orientés résultats.</h2>
            </div>

            <div className="space-y-5">
              {[
                'Comprendre précisément le besoin métier et les attentes utilisateurs.',
                'Développer une architecture claire avec une logique backend solide et des interfaces lisibles.',
                'Tester, optimiser et livrer une solution fiable, performante et maintenable.',
              ].map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-neutral-950">
                    {index + 1}
                  </span>
                  <p className="text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectsList />
    </div>
  )
}

export default Home
