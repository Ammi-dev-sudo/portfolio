import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Code2,
  Coffee,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Marquee from '../components/Marquee'
import TiltCard from '../components/TiltCard'
import Magnetic from '../components/Magnetic'
import MadagascarFlag from '../components/MadagascarFlag'
import FacebookIcon from '../components/FacebookIcon'
import { CONTACT } from '../data/contact'

const skills = {
  Frontend: ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vite', 'Expo'],
  Backend: [
    'Java',
    'Java EE',
    'JSP/Servlets',
    'PHP',
    'Python',
    'Node.js',
    'Django',
    'Django REST Framework',
    'API REST',
  ],
  Desktop: ['PyQt6', 'Tkinter'],
  Données: ['MySQL', 'SQLite', 'PostgreSQL'],
  Outils: ['Git', 'GitHub', 'Merise/UML', 'MVC/DAO', 'POO', 'JWT', 'Pack Office'],
}

const values = [
  {
    icon: Sparkles,
    title: 'Curiosité',
    description: 'Apprendre en continu, tester, comprendre ce qui se passe sous le capot.',
  },
  {
    icon: Target,
    title: 'Rigueur',
    description: 'Un code lisible, une architecture claire et des choix assumés.',
  },
  {
    icon: Code2,
    title: 'Impact',
    description: 'Construire des outils utiles, pensés pour les personnes qui les utilisent.',
  },
]

const timeline = [
  {
    year: '2023',
    title: 'Baccalauréat & première année',
    description:
      'Baccalauréat à ACEEM Andravoahangy, puis 1ère année de Licence Informatique à ESMIA Innovation (Antanimena). Premier projet transversal : une application de calendrier en PHP.',
  },
  {
    year: '2024',
    title: 'Deuxième année : gestion de taxis',
    description:
      'Conception d’une application de gestion de taxis (Android Java, React/Node.js) inspirée d’InDrive, avec modélisation de la base de données et développement des fonctionnalités back-end en équipe.',
  },
  {
    year: '2025',
    title: 'Troisième année : spécialisation back-end',
    description:
      'Approfondissement de la conception d’API, des bases de données et de l’architecture logicielle. Réalisation de projets en Java EE, Python et React Native.',
  },
  {
    year: '2026',
    title: 'Aujourd’hui : cap sur le stage',
    description:
      'Portfolio full-stack et six projets académiques à mon actif, dont Taxiko (Android Java) et Tantsaha Connecte (React Native/Expo). Je recherche un stage en développement back-end à partir du 21 décembre 2026.',
  },
]

const marqueeSkills = Object.values(skills).flat()

export default function About() {
  return (
    <div className="pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal y={20}>
              <p className="eyebrow">À propos</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-ink">
                Derrière
                <br />
                <span className="text-stroke">le code</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                Je suis <span className="text-ink">ANDRIAMANANA Ammi Joda</span>, étudiant en L3
                Informatique parcours SIO à ESMIA Innovation (Antanimena), spécialisé en
                développement back-end et passionné par la conception d’applications web, mobiles
                et desktop.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-mist">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-acid" />
                  Antananarivo, Madagascar
                  <MadagascarFlag className="h-3.5 w-5 rounded-[2px]" />
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} className="text-acid" />
                  Back-end · Java, Python & PHP
                </span>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic strength={0.18}>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-acid px-5 py-3 text-sm font-semibold text-void transition-colors hover:bg-ink"
                  >
                    Travaillons ensemble
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </Magnetic>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
                >
                  Voir mes projets
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} y={60} className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-6 animate-pulse rounded-full bg-gradient-to-tr from-iris/25 via-acid/15 to-ember/20 blur-3xl" />
              <div className="portrait-frame relative aspect-[4/5] w-full border border-ink/10 bg-panel">
                <img
                  src="/images/photo-apropos.jpg"
                  alt="ANDRIAMANANA Ammi Joda"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-ink/10 bg-void/60 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">
                      Focus
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-ink">Back-end & données</p>
                  </div>
                  <Coffee size={18} className="text-acid" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Mon histoire</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Transformer des idées en solutions concrètes.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-mist">
            <p>
              Mon travail consiste à transformer des idées en solutions numériques solides,
              performantes et faciles à utiliser. J’aime concevoir des projets qui allient qualité
              du code, architecture claire, sécurité et expérience utilisateur.
            </p>
            <p>
              Que ce soit côté back-end avec <span className="text-ink">Java</span>,{' '}
              <span className="text-ink">Python</span> ou <span className="text-ink">PHP</span>, ou
              côté front-end avec <span className="text-ink">React</span> et{' '}
              <span className="text-ink">React Native</span>, j’essaie toujours de livrer une
              solution utile, lisible et maintenable.
            </p>
            <p>
              Mon objectif est de décrocher un stage en développement back-end à partir du
              21 décembre 2026, pour continuer à progresser au contact de professionnels
              expérimentés et contribuer à des projets concrets.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-ink/10 py-4">
        <Marquee speed={34}>
          {marqueeSkills.map((skill) => (
            <span
              key={skill}
              className="mx-5 inline-flex items-center gap-5 font-mono text-xs uppercase tracking-[0.18em] text-mist"
            >
              {skill}
              <span className="text-acid">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Compétences"
          title="Les outils que j'utilise au quotidien."
          description="Une stack orientée produit : des fondations backend solides et une interface soignée."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 90} y={40}>
              <TiltCard max={4}>
                <div className="card-glow h-full rounded-3xl border border-ink/10 bg-panel/60 p-6 transition-colors hover:border-acid/30 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-ink">{category}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/50">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-ink/10 bg-void/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-mist transition-colors hover:border-acid/40 hover:text-acid"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="h-fit lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Parcours"
              title={
                <>
                  Une progression
                  <br />
                  <span className="text-stroke-acid">continue.</span>
                </>
              }
              description="Chaque étape m’a appris quelque chose de nouveau, et surtout l’envie d’aller plus loin."
            />
          </div>

          <div className="relative space-y-4">
            <div className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-gradient-to-b from-acid/50 via-ink/10 to-transparent" />
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 120} y={40}>
                <div className="group relative flex gap-5 rounded-3xl border border-ink/10 bg-panel/50 p-6 transition-colors hover:border-acid/30 sm:p-7">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-void font-mono text-[10px] text-acid transition-colors group-hover:border-acid">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ce qui me définit"
          title="Trois principes, tous les jours."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Reveal key={value.title} delay={index * 110} y={40}>
                <div className="h-full rounded-3xl border border-ink/10 bg-panel/50 p-7 text-center transition-colors hover:border-acid/30">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-acid/20 bg-acid/10 text-acid">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Au-delà du code"
          title="Langues & centres d'intérêt."
          description="Ce qui complète mon profil technique et nourrit mon esprit d'équipe."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal y={40}>
            <div className="h-full rounded-3xl border border-ink/10 bg-panel/50 p-7">
              <h3 className="font-display text-xl font-bold text-ink">Langues</h3>
              <ul className="mt-5 space-y-3 text-sm text-mist">
                {[
                  ['Français', 'Courant'],
                  ['Anglais', 'Intermédiaire'],
                  ['Malagasy', 'Natif'],
                ].map(([language, level]) => (
                  <li
                    key={language}
                    className="flex items-center justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-ink">{language}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist/70">
                      {level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} y={40}>
            <div className="h-full rounded-3xl border border-ink/10 bg-panel/50 p-7">
              <h3 className="font-display text-xl font-bold text-ink">Centres d'intérêt</h3>
              <p className="mt-5 text-sm leading-relaxed text-mist">
                Sports collectifs : basket-ball et volley-ball. J’y retrouve l’esprit d’équipe, la
                communication et la persévérance que j’applique aussi dans mes projets.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Basket-ball', 'Volley-ball', 'Travail en équipe', 'Rigueur', 'Autonomie'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/10 bg-void/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-mist"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal y={40}>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-ink/10 bg-gradient-to-br from-panel via-coal to-void p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                Coordonnées
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-mist">
                <a href={CONTACT.emailUrl} className="link-line text-ink">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneUrl} className="link-line">
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-acid"
                >
                  <FacebookIcon size={15} />
                  {CONTACT.facebookName}
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-acid px-5 py-3 text-sm font-semibold text-void transition-colors hover:bg-ink"
            >
              Me contacter
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
