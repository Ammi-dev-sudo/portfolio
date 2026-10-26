import FacebookIcon from '../components/FacebookIcon'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20"></div>
            <img
              src="/images/photo-apropos.jpg"
              alt="ANDRIAMANANA Ammi Joda"
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-neutral-800 shadow-xl"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">À propos de moi</h1>
            <p className="text-lg text-neutral-400">ANDRIAMANANA Ammi Joda - Développeur Full-Stack</p>
          </div>
        </div>
        <div className="max-w-3xl space-y-6 text-neutral-300 leading-relaxed">
        <div className="space-y-6 text-neutral-300 leading-relaxed">
          <p>
            Je m'appelle <strong>ANDRIAMANANA Ammi Joda</strong>, un développeur Full-Stack passionné par la conception et le développement
            d'applications web, mobiles et logicielles modernes, robustes et intuitives.
          </p>
          <p>
            J'aime transformer des idées en solutions digitales fonctionnelles, en portant une attention particulière à l'expérience utilisateur,
            à la performance et à la qualité du code. Mon approche repose sur l'utilisation de technologies fiables et éprouvées.
          </p>
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-100">Compétences techniques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-neutral-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'Django REST Framework', 'API REST'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-neutral-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Bases de données</h3>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'PostgreSQL', 'SQLite'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-neutral-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Outils & Autres</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Postman', 'Django Admin', 'CI/CD'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm rounded-full bg-neutral-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <p>
            Mon objectif est de développer des solutions qui apportent une réelle valeur ajoutée. N'hésitez pas à me contacter
            pour discuter de vos projets ou de vos idées !
          </p>
          <div className="pt-4 text-sm text-neutral-400 space-y-1">
            <p>Email : ammijoda5@gmail.com</p>
            <p>Téléphone : 0346914064</p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <FacebookIcon size={16} />
              Facebook : Ammi
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
