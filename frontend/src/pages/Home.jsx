import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from 'lucide-react'
import ProjectsList from '../components/ProjectsList'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import Typewriter from '../components/Typewriter'
import Magnetic from '../components/Magnetic'
import Counter from '../components/Counter'
import Marquee from '../components/Marquee'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import MadagascarFlag from '../components/MadagascarFlag'
import FacebookIcon from '../components/FacebookIcon'

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
    description:
      "Conception d'applications web complètes, du backend à l'interface, avec une architecture claire et évolutive.",
    tags: ['React', 'Django', 'Tailwind'],
  },
  {
    icon: Database,
    title: 'API & bases de données',
    description:
      'Modélisation des données, création d’API robustes, gestion des relations et optimisation du stockage.',
    tags: ['DRF', 'PostgreSQL', 'MySQL'],
  },
  {
    icon: Rocket,
    title: 'Livraison & performance',
    description:
      'Mise en production, maintenance, sécurité et optimisation pour des solutions fiables et rapides.',
    tags: ['Déploiement', 'Sécurité', 'Perf'],
  },
]

const steps = [
  {
    title: 'Comprendre',
    description:
      'Analyser le besoin métier, les utilisateurs et les contraintes avant d’écrire la moindre ligne de code.',
  },
  {
    title: 'Construire',
    description:
      'Développer une base solide : modèles de données, API, interfaces lisibles et expérience fluide.',
  },
  {
    title: 'Livrer',
    description:
      'Tester, optimiser, sécuriser puis mettre en production une solution maintenable et durable.',
  },
]

const stats = [
  { value: 6, suffix: '+', label: 'Projets livrés' },
  { value: 15, suffix: '', label: 'Technologies' },
  { value: 2, suffix: '+', label: "Années d'expérience" },
  { value: 100, suffix: '%', label: 'Engagement' },
]

const marqueeItems = [
  'Python',
  'Django',
  'React',
  'PostgreSQL',
  'API REST',
  'Tailwind CSS',
  'Full-Stack',
]

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32 sm:pt-36">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <Reveal y={16}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-ink/[0.03] px-3.5 py-1.5">
                  <span className="status-dot" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                    Disponible · Stage / Alternance
                  </span>
                </div>
              </Reveal>

              <h1 className="mt-7 font-display text-[clamp(3.2rem,9vw,7.5rem)] font-extrabold leading-[0.85] tracking-[-0.04em] text-ink">
                <span className="block">
                  <SplitText text="AMMI" delay={120} step={75} />
                </span>
                <span className="block text-stroke">
                  <SplitText text="JODA" delay={300} step={75} />
                </span>
              </h1>

              <Reveal delay={420}>
                <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-sm text-mist">
                  <span className="text-acid">//</span>
                  <Typewriter
                    words={[
                      'Développeur Full-Stack',
                      'Backend Python & Django',
                      'Frontend React',
                      'Créateur d’expériences web',
                    ]}
                  />
                </div>
              </Reveal>

              <Reveal delay={520}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                  Je conçois des applications web modernes et fonctionnelles avec{' '}
                  <span className="text-ink">Python/Django</span> côté backend et{' '}
                  <span className="text-ink">React</span> côté frontend. Des solutions fiables,
                  performantes et centrées sur l’expérience utilisateur.
                </p>
              </Reveal>

              <Reveal delay={620}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Magnetic strength={0.22}>
                    <Link
                      to="/projects"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-acid px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-ink"
                    >
                      Voir mes projets
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </Magnetic>
                  <Magnetic strength={0.18}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
                    >
                      Me contacter
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>

              <Reveal delay={720}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
                  <a
                    href="mailto:ammijoda5@gmail.com"
                    className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                  >
                    <Mail size={16} />
                    ammijoda5@gmail.com
                  </a>
                  <a
                    href="tel:+261346914064"
                    className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                  >
                    <Phone size={16} />
                    0346914064
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-acid"
                  >
                    <FacebookIcon size={16} />
                    Ammi
                  </a>
                </div>
              </Reveal>

              <Reveal delay={820}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {strengths.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/10 bg-ink/[0.02] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-mist transition-colors hover:border-acid/40 hover:text-acid"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={380} y={70} className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-8 animate-pulse rounded-full bg-gradient-to-tr from-acid/25 via-iris/20 to-ember/20 blur-3xl" />

                <div className="portrait-frame relative aspect-[4/5] w-full border border-ink/10 bg-panel">
                  <img
                    src="/images/photo-accueil.jpg"
                    alt="ANDRIAMANANA Ammi Joda"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />

                  <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-ink/10 bg-void/60 px-4 py-3 backdrop-blur-md">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                        Basé à
                      </p>
                      <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-ink">
                        Antananarivo
                        <MadagascarFlag className="h-3.5 w-5 rounded-[2px]" />
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-acid">
                      MG
                    </span>
                  </div>
                </div>

                <div className="animate-float absolute -left-4 top-12 rounded-2xl border border-ink/10 bg-panel/85 px-4 py-3 backdrop-blur-md sm:-left-8">
                  <Code2 size={18} className="text-acid" />
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                    Frontend
                  </p>
                  <p className="text-sm font-semibold text-ink">React</p>
                </div>

                <div className="animate-float-slow absolute -right-3 top-1/3 rounded-2xl border border-ink/10 bg-panel/85 px-4 py-3 backdrop-blur-md sm:-right-7">
                  <Database size={18} className="text-iris" />
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                    Backend
                  </p>
                  <p className="text-sm font-semibold text-ink">Django</p>
                </div>

                <div className="animate-float absolute -bottom-4 left-10 flex items-center gap-2 rounded-full border border-acid/30 bg-void/80 px-4 py-2 backdrop-blur-md">
                  <Sparkles size={14} className="text-acid" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                    Full-Stack
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 flex items-center justify-between gap-6">
            <div className="hidden items-center gap-3 sm:flex">
              <span className="scroll-line" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                Scroll pour explorer
              </span>
            </div>
            <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist/60">
              <span>Portfolio 2026</span>
              <span className="h-px w-8 bg-ink/20" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} />
                Madagascar
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-ink/10 bg-acid py-3 text-void">
        <div className="-rotate-1">
          <Marquee speed={28}>
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="mx-6 inline-flex items-center gap-6 font-display text-lg font-bold uppercase tracking-tight sm:text-xl"
              >
                {item}
                <span className="text-base leading-none">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className={`px-2 py-10 text-center sm:py-14 ${
                index % 2 === 0 ? 'border-r border-ink/10 sm:border-r' : ''
              } ${index === 1 ? 'sm:border-r' : ''} ${index === 2 ? 'border-r border-ink/10 sm:border-r-0' : ''}`}
            >
              <p className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="h-fit lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Ce que je fais"
                title={
                  <>
                    Du backend
                    <br />à l&apos;interface,
                    <br />
                    <span className="text-stroke-acid">sans compromis.</span>
                  </>
                }
                description="Chaque projet est pensé comme un système complet : des données solides, une API propre et une interface qui donne envie."
              />
              <Reveal delay={240} className="mt-8">
                <Link
                  to="/about"
                  className="link-line inline-flex items-center gap-2 text-sm font-medium text-acid"
                >
                  En savoir plus sur moi
                  <ArrowUpRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Reveal key={service.title} delay={index * 110} y={44}>
                    <TiltCard max={4}>
                      <div className="card-glow group flex gap-4 rounded-3xl border border-ink/10 bg-panel/60 p-6 transition-colors duration-500 hover:border-acid/30 sm:gap-6 sm:p-8">
                        <span className="font-mono text-xs text-mist/40">0{index + 1}</span>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-acid/20 bg-acid/10 text-acid">
                                <Icon size={20} />
                              </span>
                              <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                                {service.title}
                              </h3>
                            </div>
                            <ArrowUpRight
                              size={18}
                              className="mt-1 shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid"
                            />
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-mist">
                            {service.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-mist/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-coal/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ma méthode"
            title="Trois étapes, zéro surprise."
            description="Une façon de travailler simple et transparente, du premier échange à la mise en production."
            align="center"
          />

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            <div className="absolute left-0 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-ink/15 to-transparent md:block" />
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 120} y={44} className="relative">
                <div className="group h-full rounded-3xl border border-ink/10 bg-void/60 p-7 transition-colors duration-500 hover:border-acid/30">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-5xl font-bold text-stroke transition-all duration-500 group-hover:text-acid group-hover:[-webkit-text-stroke:0]">
                      0{index + 1}
                    </span>
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-acid/40 transition-all duration-500 group-hover:bg-acid group-hover:shadow-[0_0_20px_rgba(216,255,79,0.8)]" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectsList />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal y={50}>
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-to-br from-panel via-coal to-void p-8 sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-acid/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-iris/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="eyebrow">Prochaine étape</p>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    Un projet en tête ?
                    <br />
                    <span className="text-acid">Parlons-en.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-mist sm:text-base">
                    Je suis disponible pour un stage, une alternance ou une collaboration. Décris-moi
                    ton idée, je te réponds sous 24 à 48 heures.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Magnetic strength={0.15}>
                    <a
                      href="mailto:ammijoda5@gmail.com"
                      className="group flex items-center justify-between rounded-2xl bg-acid px-5 py-4 font-semibold text-void transition-colors hover:bg-ink"
                    >
                      Écrire un email
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </Magnetic>
                  <Link
                    to="/contact"
                    className="group flex items-center justify-between rounded-2xl border border-ink/15 px-5 py-4 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
                  >
                    Formulaire de contact
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                  <a
                    href="tel:+261346914064"
                    className="group flex items-center justify-between rounded-2xl border border-ink/10 px-5 py-4 text-sm text-mist transition-colors hover:border-ink/30 hover:text-ink"
                  >
                    0346914064
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
