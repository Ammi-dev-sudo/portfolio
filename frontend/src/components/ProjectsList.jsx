import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { getProjects } from '../services/projectService'

const ProjectsList = ({ title = 'Mes projets', limit = null, className = '' }) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchProjects = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await getProjects()
        const allProjects = Array.isArray(data) ? data : data.results || []
        const visibleProjects = limit ? allProjects.slice(0, limit) : allProjects

        if (isMounted) {
          setProjects(visibleProjects)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Impossible de charger les projets.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProjects()

    return () => {
      isMounted = false
    }
  }, [limit])

  if (loading) {
    return (
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-neutral-800 rounded-lg h-80 bg-neutral-900/30 animate-pulse"
            />
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{title}</h2>
        <div className="border border-red-500/30 bg-red-500/5 text-red-300 rounded-lg p-4">
          {error}
        </div>
      </section>
    )
  }

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">{title}</h2>

      {projects.length === 0 ? (
        <div className="text-center py-10 text-neutral-500">
          <p>Aucun projet disponible pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsList
