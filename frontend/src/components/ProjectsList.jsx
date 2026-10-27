import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isActive = true

    getProjects()
      .then((data) => {
        if (isActive) setProjects(data)
      })
      .catch((err) => {
        if (isActive) setError(err.message)
      })
      .finally(() => {
        if (isActive) setLoading(false)
      })

    return () => {
      isActive = false
    }
  }, [])

  if (loading) {
    return (
      <section className="py-20 text-center text-neutral-400">
        Chargement des projets...
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-400">
        Erreur : {error}
      </section>
    )
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes projets
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Découvrez mes réalisations en développement web, mobile et desktop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-center text-neutral-500">
            Aucun projet n’est disponible pour le moment.
          </p>
        )}
      </div>
    </section>
  )
}

export default ProjectsList