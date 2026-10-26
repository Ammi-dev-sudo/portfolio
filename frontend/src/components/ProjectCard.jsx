import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'

const TYPE_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  api: 'API',
  other: 'Autre',
}

const ProjectCard = ({ project }) => {
  const isMobile = project.project_type === 'mobile'

  return (
    <div className="group border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/50 hover:border-cyan-400/50 transition-all duration-300 flex flex-col h-full">
      {project.thumbnail && (
        <div className="relative aspect-video overflow-hidden bg-neutral-800">
          <img
            src={project.thumbnail}
            alt={project.title}
            className={
              isMobile
                ? 'w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500'
                : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            }
            loading="lazy"
          />
          {project.project_type && project.project_type !== 'web' && (
            <span className="absolute top-3 left-3 text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-950/80 text-cyan-400 border border-cyan-500/30">
              {TYPE_LABELS[project.project_type] || project.project_type}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-xs text-neutral-500 ml-4">{project.year}</span>
          )}
        </div>
        <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
          {project.short_description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.id}
                className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-300"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 rounded bg-neutral-800 text-neutral-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Voir le détail →
          </Link>
          <div className="flex items-center gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-cyan-400 transition-colors"
                aria-label="Démo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
