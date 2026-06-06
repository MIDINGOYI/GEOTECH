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

const service = SERVICES.find((s) => s.slug === 'hydraulique')!

export const metadata: Metadata = {
  title: 'Études Hydrauliques — AEP, Drainage & Réseaux',
  description:
    'Conception de réseaux d\'alimentation en eau potable, études de drainage pluvial et modélisation hydraulique au Bénin.',
  alternates: { canonical: `${SITE_CONFIG.url}/services/hydraulique` },
}

const DELIVERABLES = [
  { label: 'Rapport d\'étude hydraulique', desc: 'Analyse complète des débits, charges et pertes de charge' },
  { label: 'Plans de réseaux', desc: 'Plans d\'exécution au format DWG/PDF avec cotations' },
  { label: 'Dossier de dimensionnement', desc: 'Notes de calcul détaillées et justificatifs techniques' },
  { label: 'Devis estimatif', desc: 'Quantitatifs et estimations de coûts de travaux' },
  { label: 'SIG des réseaux', desc: 'Bases de données géospatiales des réseaux projetés' },
  { label: 'Dossier réglementaire', desc: 'Pièces techniques pour autorisation administrative' },
]

export default function HydrauliquePage() {
  return (
    <>
      <ServiceJsonLd
        name="Études Hydrauliques — AEP et Drainage"
        description={service.description}
        url={`${SITE_CONFIG.url}/services/hydraulique`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Études Hydrauliques', url: `${SITE_CONFIG.url}/services/hydraulique` },
        ]}
      />

      <PageHeader
        label="Services · Hydraulique"
        title="Études Hydrauliques"
        subtitle="Conception et dimensionnement de réseaux d'eau potable, systèmes de drainage et ouvrages hydrauliques."
        backgroundImage={service.image}
        size="large"
      />

      <nav className="bg-brand-gray-light border-b border-brand-gray-mid" aria-label="Fil d'Ariane">
        <div className="container-main py-3">
          <ol className="flex items-center gap-2 text-xs font-body text-brand-gray">
            <li><Link href="/" className="hover:text-brand-navy">Accueil</Link></li>
            <li className="text-brand-gray-mid">/</li>
            <li><Link href="/services" className="hover:text-brand-navy">Services</Link></li>
            <li className="text-brand-gray-mid">/</li>
            <li className="text-brand-navy font-medium">Études Hydrauliques</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Notre expertise"
                title="Ingénierie hydraulique complète"
                subtitle={service.description}
              />
              <div className="mt-8">
                <WhatsAppButton
                  href={requestServiceLink('Études Hydrauliques')}
                  label="Demander un devis hydraulique"
                  size="lg"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt="Études hydrauliques et réseaux AEP au Bénin"
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
            <SectionHeading label="Nos prestations" title="Ce que nous réalisons" centered />
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

      {/* Livrables */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-12">
            <SectionHeading
              label="Livrables"
              title="Ce que vous recevez"
              subtitle="Chaque étude hydraulique est livrée avec un dossier complet et des livrables exploitables directement par vos équipes ou pour dépôt administratif."
            />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERABLES.map((d, i) => (
              <StaggerItem key={d.label}>
                <div className="flex items-start gap-4 p-5 border border-brand-gray-mid rounded-sm">
                  <span className="font-mono text-xs text-brand-cyan font-bold w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-body text-sm font-semibold text-brand-navy mb-1">{d.label}</div>
                    <div className="font-body text-xs text-brand-gray leading-relaxed">{d.desc}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-brand-blue/5 border-y border-brand-blue/10">
        <div className="container-main text-center">
          <AnimatedSection>
            <p className="font-display text-xl font-semibold text-brand-navy mb-6">
              Projet d&apos;alimentation en eau ou de drainage ? Obtenez votre devis.
            </p>
            <WhatsAppButton href={requestServiceLink('Études Hydrauliques')} label="Devis hydraulique sur WhatsApp" size="lg" />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
