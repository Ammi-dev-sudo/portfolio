import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Calendar, User, Briefcase } from 'lucide-react'
import GithubIcon from '../components/GithubIcon'
import { getProjectBySlug } from '../services/projectService'

const TYPE_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  api: 'API',
  other: 'Autre',
}

const ProjectDetail = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    const fetchProject = async () => {
      try {
        setLoading(true)
        setProject(null)
        setError(null)
        const data = await getProjectBySlug(slug)
        if (isActive) setProject(data)
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-24 bg-neutral-800 rounded" />
          <div className="h-10 w-2/3 bg-neutral-800 rounded" />
          <div className="h-64 w-full bg-neutral-800 rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-neutral-800 rounded" />
            <div className="h-4 bg-neutral-800 rounded" />
            <div className="h-4 w-4/5 bg-neutral-800 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">{error || 'Projet introuvable'}</h1>
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 mb-8 transition-colors">
        <ArrowLeft size={18} />
        Retour aux projets
      </Link>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-neutral-400">{project.short_description}</p>
          </div>
          <div className="flex items-center gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <GithubIcon size={18} />
                Code source
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 rounded-lg transition-colors text-sm font-medium"
              >
                <ExternalLink size={18} />
                Voir la démo
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
          {project.project_type && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {TYPE_LABELS[project.project_type] || project.project_type}
            </span>
          )}
          {project.year && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.year}</span>
            </div>
          )}
          {project.role && (
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>{project.role}</span>
            </div>
          )}
          {project.client && (
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{project.client}</span>
            </div>
          )}
        </div>
      </div>

      {project.thumbnail && (
        project.project_type === 'mobile' ? (
          <div className="mb-10 flex justify-center">
            <div className="w-full max-w-[300px] rounded-[2rem] border-[6px] border-neutral-800 overflow-hidden bg-neutral-950 shadow-2xl shadow-neutral-950/50">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="mb-10 rounded-lg overflow-hidden border border-neutral-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <div className="prose prose-invert max-w-none text-neutral-300 whitespace-pre-wrap">
              {project.description}
            </div>
          </section>

          {project.images && project.images.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Galerie</h2>
              {project.project_type === 'mobile' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {project.images.map((img) => (
                    <div key={img.id} className="rounded-2xl overflow-hidden border-[4px] border-neutral-800 bg-neutral-950">
                      <img
                        src={img.image}
                        alt={img.caption || project.title}
                        className="w-full aspect-[9/16] object-cover"
                        loading="lazy"
                      />
                      {img.caption && (
                        <p className="p-2 text-xs text-neutral-400 bg-neutral-900/50 text-center">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((img) => (
                    <div key={img.id} className="rounded-lg overflow-hidden border border-neutral-800">
                      <img
                        src={img.image}
                        alt={img.caption || project.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      {img.caption && (
                        <p className="p-3 text-sm text-neutral-400 bg-neutral-900/50">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </div>

        <aside className="space-y-6">
          {project.technologies && project.technologies.length > 0 && (
            <section className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.id}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-800 text-neutral-300"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.tags && (
            <section className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <p className="text-sm text-neutral-400">{project.tags}</p>
            </section>
          )}

          {project.project_url && (
            <section className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
              <h3 className="text-lg font-semibold mb-2">Lien supplémentaire</h3>
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Visiter le lien
              </a>
            </section>
          )}
        </aside>
      </div>
    </div>
  )
}

export default ProjectDetail
