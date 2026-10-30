import { useEffect, useMemo, useState } from 'react'
import { Filter, Search, X } from 'lucide-react'
import { getProjects } from '../services/projectService'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

const TYPE_LABELS = {
  web: 'Web',
  mobile: 'Mobile',
  desktop: 'Desktop',
  api: 'API',
  other: 'Autre',
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedType, setSelectedType] = useState('')

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

  const years = useMemo(
    () => [...new Set(projects.map((project) => project.year).filter(Boolean))].sort((a, b) => b - a),
    [projects]
  )

  const types = useMemo(
    () => [...new Set(projects.map((project) => project.project_type).filter(Boolean))],
    [projects]
  )

  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase()

    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(term) ||
        project.short_description.toLowerCase().includes(term) ||
        (project.tags && project.tags.toLowerCase().includes(term)) ||
        project.technologies?.some((tech) => tech.name.toLowerCase().includes(term))

      const matchesYear = selectedYear ? project.year?.toString() === selectedYear : true
      const matchesType = selectedType ? project.project_type === selectedType : true

      return matchesSearch && matchesYear && matchesType
    })
  }, [projects, searchTerm, selectedYear, selectedType])

  const hasFilters = Boolean(searchTerm || selectedYear || selectedType)

  const resetFilters = () => {
    setSearchTerm('')
    setSelectedYear('')
    setSelectedType('')
  }

  return (
    <div className="pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="pointer-events-none absolute -right-6 -top-10 hidden font-display text-[10rem] font-bold leading-none text-stroke opacity-20 lg:block">
            06
          </div>

          <Reveal y={20}>
            <p className="eyebrow">Portfolio · Sélection</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-ink">
              Mes <span className="text-stroke">projets</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
              Applications web, mobiles, APIs et projets full-stack. Chaque réalisation raconte une
              façon de résoudre un problème concret.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-panel/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" />
              {projects.length} projets
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-panel/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
              {types.length} catégories
            </span>
          </Reveal>
        </div>

        <Reveal delay={280} className="sticky top-24 z-30 mt-12">
          <div className="rounded-3xl border border-ink/10 bg-void/80 p-4 backdrop-blur-xl sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist"
                  size={17}
                />
                <input
                  type="text"
                  placeholder="Rechercher un projet, une techno..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-full border border-ink/10 bg-panel/70 py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-mist/60 focus:border-acid/60 focus:bg-panel"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-mist transition-colors hover:text-acid"
                    aria-label="Effacer la recherche"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar lg:pb-0">
                <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mist/60 sm:inline-flex">
                  <Filter size={13} />
                  Type
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedType('')}
                  className={`shrink-0 rounded-full px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                    selectedType === ''
                      ? 'bg-acid text-void'
                      : 'border border-ink/10 text-mist hover:border-ink/25 hover:text-ink'
                  }`}
                >
                  Tous
                </button>
                {types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(selectedType === type ? '' : type)}
                    className={`shrink-0 rounded-full px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all ${
                      selectedType === type
                        ? 'bg-acid text-void'
                        : 'border border-ink/10 text-mist hover:border-ink/25 hover:text-ink'
                    }`}
                  >
                    {TYPE_LABELS[type] || type}
                  </button>
                ))}
              </div>
            </div>

            {years.length > 0 && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto border-t border-ink/10 pt-3 no-scrollbar">
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-mist/60">
                  Année
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedYear('')}
                  className={`shrink-0 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-all ${
                    selectedYear === ''
                      ? 'border border-acid/40 text-acid'
                      : 'border border-transparent text-mist hover:text-ink'
                  }`}
                >
                  Toutes
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(selectedYear === String(year) ? '' : String(year))}
                    className={`shrink-0 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-all ${
                      selectedYear === String(year)
                        ? 'border border-acid/40 text-acid'
                        : 'border border-transparent text-mist hover:text-ink'
                    }`}
                  >
                    {year}
                  </button>
                ))}
                {hasFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="ml-auto shrink-0 rounded-full border border-ember/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ember transition-colors hover:bg-ember/10"
                  >
                    Réinitialiser
                  </button>
                )}
              </div>
            )}
          </div>
        </Reveal>

        <div className="mt-12">
          {loading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-[26rem] animate-pulse rounded-[1.75rem] border border-ink/10 bg-panel/50"
                />
              ))}
            </div>
          )}

          {error && (
            <div className="rounded-3xl border border-ember/30 bg-ember/5 p-10 text-center text-sm text-ember">
              Impossible de charger les projets : {error}
            </div>
          )}

          {!loading && !error && filteredProjects.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 100} y={46} className="h-full">
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          )}

          {!loading && !error && filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-ink/10 bg-panel/40 p-12 text-center">
              <p className="font-display text-2xl font-bold text-ink">
                {projects.length === 0 ? 'Aucun projet pour le moment' : 'Aucun résultat'}
              </p>
              <p className="mt-3 text-sm text-mist">
                {projects.length === 0
                  ? 'Les projets publiés apparaîtront ici automatiquement.'
                  : 'Essaie un autre mot-clé ou réinitialise les filtres.'}
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-full bg-acid px-5 py-2.5 text-sm font-semibold text-void"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
