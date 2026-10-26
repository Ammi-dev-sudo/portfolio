import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projectsAPI } from '../services/api'
import ProjectCard from '../components/ProjectCard'
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
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await projectsAPI.getAll({ is_featured: true })
        setFeaturedProjects(response.data.slice(0, 3))
      } catch (error) {
        console.error('Erreur lors du chargement des projets mis en avant:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFeatured()
  }, [])

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            ANDRIAMANANA <br />
            <span className="text-cyan-400">Ammi Joda</span>
            <MadagascarFlag />
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 mb-8 leading-relaxed">
            Développeur Full-Stack passionné par la création d'applications web, mobiles et logicielles modernes,
            performantes et centrées sur l'expérience utilisateur.
            Spécialisé en React, Vite, Django REST Framework et bases de données relationnelles.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-neutral-300 mb-8">
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
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-medium rounded-lg transition-colors"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-cyan-400 text-neutral-300 hover:text-cyan-400 rounded-lg transition-colors"
            >
              Me contacter
            </Link>
          </div>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25"></div>
              <img
                src="/images/photo-accueil.jpg"
                alt="ANDRIAMANANA Ammi Joda"
                className="relative w-80 h-[28rem] object-cover rounded-2xl border border-neutral-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Projets mis en avant</h2>
            <Link
              to="/projects"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Voir tous les projets →
            </Link>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border border-neutral-800 rounded-lg h-80 bg-neutral-900/30 animate-pulse" />
              ))}
            </div>
          ) : featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-neutral-500">
              <p>Aucun projet mis en avant pour le moment.</p>
              <Link to="/projects" className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block">
                Découvrir tous les projets
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
