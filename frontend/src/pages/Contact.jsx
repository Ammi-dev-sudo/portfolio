import { useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle,
  Clock,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import MadagascarFlag from '../components/MadagascarFlag'
import FacebookIcon from '../components/FacebookIcon'
import { contactAPI } from '../services/api'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      await contactAPI.sendMessage(formData)
      setSuccess(true)
      setFormData(initialForm)
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
      console.error('Erreur contact:', err)
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ammijoda5@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="pb-24 pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal y={20}>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-ink">
              Parlons de
              <br />
              <span className="text-stroke">ton projet.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              Une question, un projet ou juste envie de discuter ? Décris-moi ton idée, je réponds
              généralement sous 24 à 48 heures.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-3xl border border-acid/25 bg-acid/[0.06] p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-acid/10 blur-2xl" />
                <div className="relative flex items-center gap-2">
                  <span className="status-dot" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-acid">
                    Disponible maintenant
                  </p>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-ink">
                  Ouvert aux stages, alternances et collaborations freelance. Basé à Antananarivo,
                  disponible à distance.
                </p>
                <div className="relative mt-4 flex flex-wrap items-center gap-3 text-xs text-mist">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} className="text-acid" />
                    Réponse sous 24-48 h
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-acid" />
                    Madagascar
                    <MadagascarFlag className="h-3 w-5 rounded-[1px]" />
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-3xl border border-ink/10 bg-panel/60 p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
                  Coordonnées
                </h2>

                <div className="mt-5 space-y-3">
                  <div className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30">
                    <a href="mailto:ammijoda5@gmail.com" className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-acid/20 bg-acid/10 text-acid">
                        <Mail size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                          Email
                        </span>
                        <span className="block truncate text-sm text-ink">ammijoda5@gmail.com</span>
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-mist transition-colors hover:border-acid hover:text-acid"
                      aria-label="Copier l'email"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  </div>

                  <a
                    href="tel:+261346914064"
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/10 text-mist transition-colors group-hover:border-acid/20 group-hover:bg-acid/10 group-hover:text-acid">
                      <Phone size={17} />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                        Téléphone
                      </span>
                      <span className="block text-sm text-ink">0346914064</span>
                    </span>
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/10 text-mist transition-colors group-hover:border-acid/20 group-hover:bg-acid/10 group-hover:text-acid">
                      <FacebookIcon size={17} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                        Facebook
                      </span>
                      <span className="block text-sm text-ink">Ammi</span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-mist transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                    />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border border-ink/10 bg-panel/40 p-6">
                <p className="text-sm leading-relaxed text-mist">
                  Tu préfères écrire directement ? Envoie un email à{' '}
                  <a href="mailto:ammijoda5@gmail.com" className="link-line text-ink">
                    ammijoda5@gmail.com
                  </a>
                  . Pense à préciser l’objet de ta demande.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} y={50}>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-panel/60 p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/50 to-transparent" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">Envoyer un message</h2>
                  <p className="mt-1 text-sm text-mist">Les champs marqués * sont obligatoires.</p>
                </div>
                <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-acid/20 bg-acid/10 text-acid sm:flex">
                  <Send size={17} />
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom et prénom"
                      className="w-full rounded-xl border border-ink/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist/40 focus:border-acid/60 focus:bg-void"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border border-ink/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist/40 focus:border-acid/60 focus:bg-void"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0346914064"
                      className="w-full rounded-xl border border-ink/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist/40 focus:border-acid/60 focus:bg-void"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objet de votre message"
                      className="w-full rounded-xl border border-ink/10 bg-void/60 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-mist/40 focus:border-acid/60 focus:bg-void"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full resize-none rounded-xl border border-ink/10 bg-void/60 px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-mist/40 focus:border-acid/60 focus:bg-void"
                  />
                </div>

                {success && (
                  <div className="page-enter flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-300">
                    <CheckCircle size={18} />
                    Votre message a été envoyé avec succès !
                  </div>
                )}

                {error && (
                  <div className="flex items-center gap-2 rounded-xl border border-ember/30 bg-ember/10 p-3.5 text-sm text-ember">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist/60">
                    Réponse sous 24-48 h
                  </p>
                  <Magnetic strength={0.15}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-acid px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                      <Send
                        size={16}
                        className={`transition-transform ${loading ? 'animate-pulse' : 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'}`}
                      />
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
