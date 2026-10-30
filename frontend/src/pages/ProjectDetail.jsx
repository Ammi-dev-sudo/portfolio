import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Calendar,
  ExternalLink,
  User,
} from 'lucide-react'
import GithubIcon from '../components/GithubIcon'
import Reveal from '../components/Reveal'
import { getProjectBySlug, getProjects } from '../services/projectService'

const TYPE_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  api: 'API',
  other: 'Autre',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [nextProject, setNextProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const fetchProject = async () => {
      try {
        setLoading(true)
        setProject(null)
        setNextProject(null)
        setError(null)

        const data = await getProjectBySlug(slug)
        if (!isActive) return

        setProject(data)

        try {
          const all = await getProjects()
          if (!isActive) return
          const index = all.findIndex((item) => item.slug === slug)
          if (all.length > 1 && index !== -1) {
            setNextProject(all[(index + 1) % all.length])
          }
        } catch {
          /* le projet suivant est optionnel */
        }
      } catch (err) {
        if (isActive) {
          setError(
            err.status === 404
              ? 'Projet introuvable'
              : `Impossible de charger ce projet : ${err.message}`
          )
        }
      } finally {
        if (isActive) setLoading(false)
      }
    }

    fetchProject()

    return () => {
      isActive = false
    }
  }, [slug])

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-4 w-32 rounded-full bg-panel" />
          <div className="h-16 w-3/4 rounded-2xl bg-panel" />
          <div className="h-5 w-1/2 rounded-full bg-panel" />
          <div className="h-[24rem] w-full rounded-[2rem] bg-panel" />
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-3 lg:col-span-2">
              <div className="h-4 w-full rounded-full bg-panel" />
              <div className="h-4 w-11/12 rounded-full bg-panel" />
              <div className="h-4 w-4/5 rounded-full bg-panel" />
            </div>
            <div className="h-48 rounded-3xl bg-panel" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-32 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">Erreur</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-ink">
          {error || 'Projet introuvable'}
        </h1>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-acid px-5 py-3 text-sm font-semibold text-void"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>
      </div>
    )
  }

  const technologies = project.technologies || []
  const images = project.images || []

  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal y={16}>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-acid"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-acid">
              <ArrowLeft size={14} />
            </span>
            Tous les projets
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Reveal delay={80} className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-acid/30 bg-acid/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-acid">
                {TYPE_LABELS[project.project_type] || project.project_type}
              </span>
              {project.year && (
                <span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                  {project.year}
                </span>
              )}
              {project.is_featured && (
                <span className="rounded-full border border-iris/30 bg-iris/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-iris">
                  À la une
                </span>
              )}
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-ink">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                {project.short_description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={260} className="flex flex-wrap gap-3 lg:justify-end">
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-acid px-5 py-3 text-sm font-semibold text-void transition-colors hover:bg-ink"
              >
                Voir la démo
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
              >
                <GithubIcon size={16} />
                Code source
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}
          </Reveal>
        </div>

        <Reveal delay={200} y={50} className="mt-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-panel">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className={`w-full ${project.project_type === 'mobile' ? 'max-h-[38rem] object-contain p-8' : 'max-h-[36rem] object-cover'}`}
              />
            ) : (
              <div className="flex h-[24rem] items-center justify-center bg-gradient-to-br from-panel via-coal to-void">
                <span className="font-display text-7xl font-bold text-ink/10">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-12">
            <Reveal>
              <section>
                <p className="eyebrow">Le projet</p>
                <div className="mt-5 whitespace-pre-wrap text-base leading-relaxed text-mist">
                  {project.description}
                </div>
              </section>
            </Reveal>

            {images.length > 0 && (
              <Reveal delay={100}>
                <section>
                  <div className="flex items-end justify-between gap-4">
                    <p className="eyebrow">Galerie</p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/60">
                      {images.length} visuels
                    </span>
                  </div>

                  {project.project_type === 'mobile' ? (
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {images.map((image, index) => (
                        <a
                          key={image.id}
                          href={image.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-coal"
                        >
                          <img
                            src={image.image}
                            alt={image.caption || `${project.title} ${index + 1}`}
                            loading="lazy"
                            className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/70 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                              Ouvrir
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {images.map((image, index) => (
                        <a
                          key={image.id}
                          href={image.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-coal"
                        >
                          <img
                            src={image.image}
                            alt={image.caption || `${project.title} ${index + 1}`}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-void/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="text-xs text-ink">
                              {image.caption || `Visuel ${index + 1}`}
                            </span>
                            <ArrowUpRight size={16} className="text-acid" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </section>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <Reveal delay={80}>
              <div className="rounded-3xl border border-ink/10 bg-panel/60 p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                  Informations
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  {project.role && (
                    <div className="flex items-start gap-3">
                      <Briefcase size={16} className="mt-0.5 text-acid" />
                      <div>
                        <dt className="text-mist">Rôle</dt>
                        <dd className="text-ink">{project.role}</dd>
                      </div>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-start gap-3">
                      <User size={16} className="mt-0.5 text-acid" />
                      <div>
                        <dt className="text-mist">Client</dt>
                        <dd className="text-ink">{project.client}</dd>
                      </div>
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="mt-0.5 text-acid" />
                      <div>
                        <dt className="text-mist">Année</dt>
                        <dd className="text-ink">{project.year}</dd>
                      </div>
                    </div>
                  )}
                </dl>
              </div>
            </Reveal>

            {technologies.length > 0 && (
              <Reveal delay={140}>
                <div className="rounded-3xl border border-ink/10 bg-panel/60 p-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                    Technologies
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-full border border-ink/10 bg-void/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-mist transition-colors hover:border-acid/40 hover:text-acid"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {project.tags && (
              <Reveal delay={200}>
                <div className="rounded-3xl border border-ink/10 bg-panel/60 p-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                    Tags
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{project.tags}</p>
                </div>
              </Reveal>
            )}

            {project.project_url && (
              <Reveal delay={260}>
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-ink/10 bg-panel/60 p-6 text-sm text-ink transition-colors hover:border-acid/40 hover:text-acid"
                >
                  Lien supplémentaire
                  <ExternalLink
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Reveal>
            )}
          </aside>
        </div>

        {nextProject && (
          <Reveal delay={120} className="mt-20">
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-4 rounded-[2rem] border border-ink/10 bg-panel/50 p-8 transition-colors hover:border-acid/40 sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                  Projet suivant
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-ink transition-colors group-hover:text-acid sm:text-3xl">
                  {nextProject.title}
                </p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-acid group-hover:bg-acid group-hover:text-void">
                <ArrowUpRight
                  size={22}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </Reveal>
        )}
      </div>
    </div>
  )
}
