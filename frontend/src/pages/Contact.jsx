import { useState } from 'react'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactAPI } from '../services/api'
import FacebookIcon from '../components/FacebookIcon'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      await contactAPI.sendMessage(formData)
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.')
      console.error('Erreur contact:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Me contacter</h1>
        <p className="text-neutral-400">
          Une question, un projet ou juste envie de discuter ? N'hésitez pas à m'envoyer un message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
            <h2 className="text-xl font-semibold mb-4">Coordonnées</h2>
            <div className="space-y-4">
              <a
                href="mailto:ammijoda5@gmail.com"
                className="flex items-start gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="mt-0.5" size={20} />
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p>ammijoda5@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+261346914064"
                className="flex items-start gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="mt-0.5" size={20} />
                <div>
                  <p className="text-sm text-neutral-400">Téléphone</p>
                  <p>0346914064</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                <FacebookIcon className="mt-0.5" size={20} />
                <div>
                  <p className="text-sm text-neutral-400">Facebook</p>
                  <p>Ammi</p>
                </div>
              </a>
            </div>
          </div>
          <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
            <p className="text-neutral-400 text-sm leading-relaxed">
              Je réponds généralement sous 24-48 heures. Merci de bien préciser l'objet de votre message.
            </p>
          </div>
        </div>

        <div className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-neutral-300">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Votre nom et prénom"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-neutral-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-neutral-300">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="0346914064"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-2 text-neutral-300">
                Sujet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Objet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-neutral-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            {success && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-950/50 border border-emerald-900 text-emerald-300 text-sm">
                <CheckCircle size={18} />
                Votre message a été envoyé avec succès !
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/50 border border-red-900 text-red-300 text-sm">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-neutral-950 font-medium rounded-lg transition-colors"
            >
              <Send size={18} />
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
