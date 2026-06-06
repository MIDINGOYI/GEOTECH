import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem, SectionHeading } from '@/components/ui/index'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { CTASection } from '@/components/sections/CTASection'
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SERVICES } from '@/constants/services'
import { requestServiceLink } from '@/lib/whatsapp'
import { SITE_CONFIG } from '@/constants'

const service = SERVICES.find((s) => s.slug === 'topographie')!

export const metadata: Metadata = {
  title: 'Topographie — Levés GNSS RTK & Implantations',
  description:
    'Levés topographiques, implantations de chantier, contrôles géodésiques et relevés GNSS cinématique. Précision centimétrique garantie au Bénin.',
  alternates: { canonical: `${SITE_CONFIG.url}/services/topographie` },
}

const EQUIPMENT = [
  { name: 'Récepteurs GNSS RTK', brands: 'HI-TARGET V600, FOIF A90, SOUTH GNSS', precision: '±5–10mm' },
  { name: 'Stations Totales', brands: 'TK-800 Robotique', precision: '±1mm + 1.5ppm' },
  { name: 'Niveaux Optiques', brands: 'Gamme professionnelle', precision: '±0.3mm/km' },
  { name: 'Drone Photogrammétrique', brands: 'DJI Phantom/Matrice', precision: '±3cm GSD' },
]

export default function TopographiePage() {
  return (
    <>
      <ServiceJsonLd
        name="Topographie — Levés GNSS RTK"
        description={service.description}
        url={`${SITE_CONFIG.url}/services/topographie`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Topographie', url: `${SITE_CONFIG.url}/services/topographie` },
        ]}
      />

      <PageHeader
        label="Services · Topographie"
        title="Topographie & Géodésie"
        subtitle="Levés de précision, implantations et contrôles géodésiques avec équipements GNSS RTK de dernière génération."
        backgroundImage={service.image}
        size="large"
      />

      {/* Fil d'Ariane */}
      <nav className="bg-brand-gray-light border-b border-brand-gray-mid" aria-label="Fil d'Ariane">
        <div className="container-main py-3">
          <ol className="flex items-center gap-2 text-xs font-body text-brand-gray">
            <li><Link href="/" className="hover:text-brand-navy transition-colors">Accueil</Link></li>
            <li className="text-brand-gray-mid">/</li>
            <li><Link href="/services" className="hover:text-brand-navy transition-colors">Services</Link></li>
            <li className="text-brand-gray-mid">/</li>
            <li className="text-brand-navy font-medium">Topographie</li>
          </ol>
        </div>
      </nav>

      {/* Intro section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Notre expertise"
                title="Levés topographiques de précision"
                subtitle={service.description}
              />
              <div className="mt-8">
                <WhatsAppButton
                  href={requestServiceLink('Topographie')}
                  label="Demander un devis topographie"
                  size="lg"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt="Levé topographique GNSS RTK au Bénin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading
              label="Nos prestations"
              title="Ce que nous réalisons"
              centered
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.prestations.map((p) => (
              <StaggerItem key={p}>
                <div className="bg-white border border-brand-gray-mid rounded-sm p-5 flex items-start gap-3 hover:shadow-card hover:border-brand-blue/20 transition-all">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-brand-navy leading-snug">{p}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Équipements */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-12">
            <SectionHeading
              label="Équipements"
              title="Notre parc matériel"
              subtitle="Nous utilisons exclusivement des équipements certifiés de dernière génération pour garantir la précision de vos levés."
            />
          </AnimatedSection>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body" role="table">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-sm">Équipement</th>
                  <th className="text-left px-5 py-3 font-semibold">Marques / Modèles</th>
                  <th className="text-left px-5 py-3 font-semibold rounded-tr-sm">Précision</th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT.map((eq, i) => (
                  <tr key={eq.name} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-gray-light'}>
                    <td className="px-5 py-3.5 font-medium text-brand-navy">{eq.name}</td>
                    <td className="px-5 py-3.5 text-brand-gray">{eq.brands}</td>
                    <td className="px-5 py-3.5">
                      <span className="font-mono text-xs bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded-sm">
                        {eq.precision}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA inline */}
      <section className="py-16 bg-brand-blue/5 border-y border-brand-blue/10">
        <div className="container-main text-center">
          <AnimatedSection>
            <p className="font-display text-xl font-semibold text-brand-navy mb-6">
              Besoin d&apos;un levé topographique ? Obtenez votre devis en quelques minutes.
            </p>
            <WhatsAppButton
              href={requestServiceLink('Topographie')}
              label="Devis topographie sur WhatsApp"
              size="lg"
            />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
