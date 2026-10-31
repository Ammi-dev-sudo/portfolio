import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import MadagascarFlag from '../components/MadagascarFlag'
import FacebookIcon from '../components/FacebookIcon'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { CONTACT } from '../data/contact'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
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
              Une question, un projet ou juste envie de discuter ? Choisis le canal qui te convient
              le mieux. Je réponds généralement sous 24 à 48 heures.
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
                  <a
                    href={CONTACT.emailUrl}
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-acid/20 bg-acid/10 text-acid">
                      <Mail size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                        Email
                      </span>
                      <span className="block truncate text-sm text-ink">{CONTACT.email}</span>
                    </span>
                  </a>

                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-acid/20 bg-acid/10 text-acid">
                      <WhatsAppIcon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                        WhatsApp
                      </span>
                      <span className="block text-sm text-ink">{CONTACT.phoneDisplay}</span>
                    </span>
                  </a>

                  <a
                    href={CONTACT.facebookUrl}
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
                      <span className="block text-sm text-ink">{CONTACT.facebookName}</span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="text-mist transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                    />
                  </a>

                  <a
                    href={CONTACT.phoneUrl}
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-void/40 p-4 transition-colors hover:border-acid/30"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/10 text-mist transition-colors group-hover:border-acid/20 group-hover:bg-acid/10 group-hover:text-acid">
                      <Phone size={17} />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-mist">
                        Téléphone
                      </span>
                      <span className="block text-sm text-ink">{CONTACT.phoneInternational}</span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-start gap-3 rounded-3xl border border-ink/10 bg-panel/40 p-6">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-acid" />
                <p className="text-sm leading-relaxed text-mist">
                  Le bouton WhatsApp ouvre directement une conversation avec mon numéro depuis
                  l&apos;application ou le compte connecté sur ton ordinateur.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} y={50}>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-panel/60 p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-acid/50 to-transparent" />

              <div>
                <h2 className="font-display text-2xl font-bold text-ink">Choisis ton canal</h2>
                <p className="mt-1 text-sm text-mist">
                  WhatsApp, email ou Facebook : tout est direct, sans formulaire.
                </p>
              </div>

              <div className="mt-7 space-y-4">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-acid/30 bg-acid/[0.07] p-5 transition-colors hover:border-acid/60 sm:p-6"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-acid/10 blur-2xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-acid text-void">
                        <WhatsAppIcon size={22} />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-bold text-ink">WhatsApp</h3>
                          <span className="rounded-full border border-acid/30 bg-acid/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-acid">
                            Le plus rapide
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-sm text-mist">
                          {CONTACT.whatsappDisplay}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-acid transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-mist">
                    Clique pour ouvrir WhatsApp avec une conversation déjà prête entre ton compte et
                    le mien.
                  </p>
                  <span className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-acid px-4 py-2.5 text-sm font-semibold text-void transition-colors group-hover:bg-ink">
                    <WhatsAppIcon size={16} />
                    Démarrer la conversation
                  </span>
                </a>

                <div className="group rounded-2xl border border-ink/10 bg-void/40 p-5 transition-colors hover:border-acid/30 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <a href={CONTACT.emailUrl} className="flex min-w-0 flex-1 items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-acid/20 bg-acid/10 text-acid">
                        <Mail size={20} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-bold text-ink">Email</h3>
                        <p className="mt-1 truncate font-mono text-sm text-mist">{CONTACT.email}</p>
                      </div>
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
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    Ouvre ton application mail avec mon adresse déjà remplie.
                  </p>
                  <a
                    href={CONTACT.emailUrl}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-acid hover:text-acid"
                  >
                    Envoyer un email
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <a
                  href={CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-ink/10 bg-void/40 p-5 transition-colors hover:border-acid/30 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-iris/30 bg-iris/10 text-iris">
                        <FacebookIcon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink">Facebook</h3>
                        <p className="mt-1 text-sm text-mist">{CONTACT.facebookName}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    Ouvre mon profil Facebook : tu peux m&apos;ajouter ou m&apos;envoyer un message
                    directement depuis mon nom.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium text-ink transition-colors group-hover:border-acid group-hover:text-acid">
                    Voir mon profil
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
