'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { SITE_CONFIG } from '@/constants'
import { contactLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Veuillez saisir votre nom complet'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  subject: z.string().min(5, 'Veuillez préciser le sujet'),
  service: z.string().optional(),
  message: z.string().min(20, 'Votre message doit contenir au moins 20 caractères'),
})

type FormData = z.infer<typeof contactSchema>

const services = [
  'Topographie',
  'Études Hydrauliques',
  'VRD',
  'SIG & Cartographie',
  'Évaluation Immobilière',
  'Achat de matériel',
  'Location de matériel',
  'Autre',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Simulate sending — in production, connect to your API
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title="Contactez-nous"
        subtitle="Notre équipe répond à toutes vos demandes dans les plus brefs délais."
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Info panel */}
            <aside className="lg:col-span-1">
              <div className="bg-brand-navy rounded-sm p-8 text-white sticky top-28">
                <h2 className="font-display font-bold text-xl mb-6">Informations de contact</h2>

                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/30 rounded-sm flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-brand-cyan" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/50 mb-1">Téléphone</div>
                      <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="font-body text-sm text-white hover:text-brand-cyan transition-colors">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/30 rounded-sm flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand-cyan">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/50 mb-1">WhatsApp</div>
                      <a href={contactLink()} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white hover:text-brand-cyan transition-colors">
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/30 rounded-sm flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-brand-cyan" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/50 mb-1">Email</div>
                      <a href={`mailto:${SITE_CONFIG.email}`} className="font-body text-sm text-white hover:text-brand-cyan transition-colors">
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/30 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-brand-cyan" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/50 mb-1">Adresse</div>
                      <span className="font-body text-sm text-white">{SITE_CONFIG.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/30 rounded-sm flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-brand-cyan" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/50 mb-1">Horaires</div>
                      <span className="font-body text-sm text-white">Lun–Ven : 8h–18h<br />Sam : 8h–13h</span>
                    </div>
                  </div>
                </div>

                <a
                  href={contactLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm"
                >
                  Message WhatsApp rapide
                </a>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-brand-green" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">Message envoyé !</h2>
                  <p className="font-body text-brand-gray mb-6">
                    Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                  <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Envoyez-nous un message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register('name')}
                        className={cn(
                          'w-full border rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all',
                          errors.name ? 'border-red-400' : 'border-brand-gray-mid'
                        )}
                        placeholder="Votre nom et prénom"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500 font-body">{errors.name.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register('phone')}
                        className={cn(
                          'w-full border rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all',
                          errors.phone ? 'border-red-400' : 'border-brand-gray-mid'
                        )}
                        placeholder="+229 XX XX XX XX"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500 font-body">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register('email')}
                      className={cn(
                        'w-full border rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all',
                        errors.email ? 'border-red-400' : 'border-brand-gray-mid'
                      )}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-body">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                        Service concerné
                      </label>
                      <select
                        id="service"
                        {...register('service')}
                        className="w-full border border-brand-gray-mid rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all"
                      >
                        <option value="">Sélectionner...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                        Sujet <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register('subject')}
                        className={cn(
                          'w-full border rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all',
                          errors.subject ? 'border-red-400' : 'border-brand-gray-mid'
                        )}
                        placeholder="Objet de votre demande"
                      />
                      {errors.subject && <p className="mt-1 text-xs text-red-500 font-body">{errors.subject.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-brand-navy mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className={cn(
                        'w-full border rounded-sm px-4 py-3 font-body text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all resize-none',
                        errors.message ? 'border-red-400' : 'border-brand-gray-mid'
                      )}
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500 font-body">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-brand-gray-light">
        <iframe
          src="https://maps.google.com/maps?q=Cotonou,+Bénin&output=embed&z=13"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation GEOTECH Engineering Bénin — Cotonou"
        />
      </section>
    </>
  )
}
