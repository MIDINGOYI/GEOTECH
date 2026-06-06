import type { Metadata } from 'next'
import { CheckCircle2, Zap, Wifi, Droplets,  Truck } from 'lucide-react'
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

const service = SERVICES.find((s) => s.slug === 'vrd')!

export const metadata: Metadata = {
  title: 'VRD — Voirie et Réseaux Divers',
  description:
    'Conception et maîtrise d\'œuvre complète des VRD : voirie, électricité BT/MT, télécommunications, eau potable et assainissement au Bénin.',
  alternates: { canonical: `${SITE_CONFIG.url}/services/vrd` },
}

const DOMAINS = [
  {
    icon: Truck,
    title: 'Voirie',
    items: ['Tracé en plan et profil en long', 'Chaussées et trottoirs', 'Signalisation horizontale et verticale', 'Éclairage public'],
  },
  {
    icon: Zap,
    title: 'Électricité',
    items: ['Réseaux BT et MT', 'Postes de transformation', 'Éclairage public LED', 'Liaisons souterraines'],
  },
  {
    icon: Wifi,
    title: 'Télécommunications',
    items: ['Fibre optique FTTH', 'Fourreaux et chambres', 'Câblage cuivre', 'Réseaux mobiles'],
  },
  {
    icon: Droplets,
    title: 'Eau & Assainissement',
    items: ['Réseaux AEP sous pression', 'Collecteurs d\'eaux usées', 'Drainage pluvial', 'Branchements particuliers'],
  },
]

export default function VRDPage() {
  return (
    <>
      <ServiceJsonLd
        name="VRD — Voirie et Réseaux Divers"
        description={service.description}
        url={`${SITE_CONFIG.url}/services/vrd`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'VRD', url: `${SITE_CONFIG.url}/services/vrd` },
        ]}
      />

      <PageHeader
        label="Services · VRD"
        title="Voirie & Réseaux Divers"
        subtitle="Maîtrise d'œuvre complète des VRD pour lotissements, zones industrielles et projets d'aménagement urbain."
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
            <li className="text-brand-navy font-medium">VRD</li>
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
                title="Conception VRD intégrée"
                subtitle={service.description}
              />
              <div className="mt-8">
                <WhatsAppButton href={requestServiceLink('VRD')} label="Demander un devis VRD" size="lg" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt="Études VRD voirie et réseaux divers Bénin"
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

      {/* Domaines */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <AnimatedSection className="text-center mb-14">
            <SectionHeading label="Domaines d'intervention" title="Quatre réseaux, une seule maîtrise d'œuvre" centered />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOMAINS.map((domain) => {
              const Icon = domain.icon
              return (
                <StaggerItem key={domain.title}>
                  <div className="bg-white border border-brand-gray-mid rounded-sm p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-sm flex items-center justify-center">
                        <Icon size={20} className="text-brand-blue" />
                      </div>
                      <h3 className="font-display font-semibold text-brand-navy text-lg">{domain.title}</h3>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {domain.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-body text-brand-gray">
                          <span className="w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* All prestations */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-10">
            <SectionHeading label="Nos prestations" title="Périmètre complet de nos missions VRD" />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.prestations.map((p) => (
              <StaggerItem key={p}>
                <div className="bg-brand-gray-light border border-brand-gray-mid rounded-sm p-5 flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-brand-navy leading-snug">{p}</span>
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
              Lotissement, zone industrielle ou projet d&apos;urbanisme ? Discutons-en.
            </p>
            <WhatsAppButton href={requestServiceLink('VRD')} label="Devis VRD sur WhatsApp" size="lg" />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
