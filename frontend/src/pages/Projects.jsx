import { useEffect, useState } from 'react'
import { getProjects } from '../services/projectService'
import ProjectCard from '../components/ProjectCard'
import { Search, Filter } from 'lucide-react'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  useEffect(() => {
    let isActive = true

    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        if (isActive) setProjects(data)
      } catch (err) {
        if (isActive) setError(err.message)
      } finally {
        if (isActive) setLoading(false)
      }
    }

    fetchProjects()

    return () => {
      isActive = false
    }
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.short_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.tags && project.tags.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesYear = selectedYear ? project.year?.toString() === selectedYear : true
    return matchesSearch && matchesYear
  })

  const years = [...new Set(projects.map((p) => p.year).filter(Boolean))].sort((a, b) => b - a)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mes projets</h1>
        <p className="text-neutral-400">
          Découvrez mes réalisations : applications web, mobiles, APIs et projets full-stack.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="pl-10 pr-8 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors appearance-none min-w-[140px]"
          >
            <option value="">Toutes les années</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border border-neutral-800 rounded-lg h-80 bg-neutral-900/30 animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-16 text-red-400">
          <p>Impossible de charger les projets : {error}</p>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-500">
          <p>
            {projects.length === 0
              ? 'Aucun projet n’est disponible pour le moment.'
              : 'Aucun projet ne correspond à votre recherche.'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Projects
