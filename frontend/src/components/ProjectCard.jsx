import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'
import TiltCard from './TiltCard'

const TYPE_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  api: 'API',
  other: 'Autre',
}

export default function ProjectCard({ project, index = 0 }) {
  const isMobile = project.project_type === 'mobile'
  const technologies = project.technologies || []

  return (
    <TiltCard max={5} className="group h-full">
      <article className="card-glow relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-panel/70 backdrop-blur-sm transition-colors duration-500 hover:border-acid/40">
        <div className="relative aspect-[4/3] overflow-hidden bg-coal">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              className={`h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.08] ${
                isMobile ? 'object-contain p-6' : 'object-cover'
              }`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-panel via-coal to-void">
              <span className="font-display text-5xl font-bold text-ink/10">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full border border-ink/15 bg-void/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur-md">
              {TYPE_LABELS[project.project_type] || project.project_type}
            </span>
            {project.year && (
              <span className="rounded-full border border-ink/10 bg-void/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-mist backdrop-blur-md">
                {project.year}
              </span>
            )}
          </div>

          <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.2em] text-ink/50">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="absolute inset-x-4 bottom-4 flex translate-y-4 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-sm font-medium text-ink">Voir le projet</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-acid text-void">
              <ArrowUpRight size={17} />
            </span>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-acid">
              <Link to={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Code source de ${project.title}`}
                  className="text-mist transition-colors hover:text-acid"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Démo de ${project.title}`}
                  className="text-mist transition-colors hover:text-acid"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-mist">
            {project.short_description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech.id}
                className="rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mist transition-colors group-hover:border-ink/20 group-hover:text-ink/80"
              >
                {tech.name}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="rounded-full border border-ink/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mist/60">
                +{technologies.length - 3}
              </span>
            )}
          </div>

          <div className="mt-auto pt-5">
            <Link
              to={`/projects/${project.slug}`}
              className="link-line inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-acid"
            >
              Découvrir
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  )
}
