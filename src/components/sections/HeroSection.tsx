'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { contactLink } from '@/lib/whatsapp'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
      aria-label="Section principale"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-brand-navy/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/60" aria-hidden="true" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="container-main relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-brand-cyan" />
            <span className="label-section">Cabinet d&apos;Ingénierie — Cotonou, Bénin</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-hero text-white mb-6"
          >
            L&apos;ingénierie de précision{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue-light">
              au service de vos projets
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl mb-10"
          >
            Topographie GNSS, études hydrauliques, VRD, SIG et cartographie —
            GEOTECH Engineering Bénin accompagne maîtres d&apos;ouvrage, bureaux d&apos;études
            et entreprises dans leurs projets les plus exigeants.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={contactLink('Demande de devis')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Demander un devis
            </a>
            <Link href="/services" className="btn-outline-white">
              Nos services
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Service chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-2 mt-12"
          >
            {[
              'Topographie',
              'Hydraulique',
              'VRD',
              'SIG & Cartographie',
              'Évaluation Immobilière',
              'Matériels Topographiques',
            ].map((tag) => (
              <span
                key={tag}
                className="font-body text-xs text-white/50 border border-white/10 rounded-sm px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="label-section text-white/30">Découvrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
