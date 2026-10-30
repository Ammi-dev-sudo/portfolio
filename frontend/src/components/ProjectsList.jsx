import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getProjects } from '../services/projectService'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function ProjectsList() {
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

  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Travaux sélectionnés"
            title={
              <>
                Des projets qui
                <br />
                <span className="text-stroke">parlent d&apos;eux-mêmes</span>
              </>
            }
            description="Applications web, mobiles et APIs : une sélection de réalisations où le backend et l'interface avancent ensemble."
          />
          <Reveal delay={220} className="shrink-0">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
            >
              Tous les projets
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/5 transition-colors group-hover:bg-acid group-hover:text-void">
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>

        {loading && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="h-[26rem] animate-pulse rounded-[1.75rem] border border-ink/10 bg-panel/50"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="mt-14 rounded-3xl border border-ember/30 bg-ember/5 p-8 text-center text-sm text-ember">
            Impossible de charger les projets : {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={index * 110} y={48} className="h-full">
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        )}

        {!loading && !error && featured.length === 0 && (
          <p className="mt-14 text-center text-sm text-mist">
            Aucun projet n&apos;est disponible pour le moment.
          </p>
        )}

        {!loading && !error && featured.length > 0 && (
          <Reveal delay={200} className="mt-12 flex justify-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-void"
            >
              Voir tous les projets
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
