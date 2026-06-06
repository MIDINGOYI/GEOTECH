import type { Metadata } from 'next'
import { CheckCircle2, Layers, Database, Map, Satellite } from 'lucide-react'
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

const service = SERVICES.find((s) => s.slug === 'sig-cartographie')!

export const metadata: Metadata = {
  title: 'SIG & Cartographie — Géomatique numérique',
  description:
    'Cartographie numérique, systèmes d\'information géographique (SIG), géoréférencement et bases de données géospatiales au Bénin.',
  alternates: { canonical: `${SITE_CONFIG.url}/services/sig-cartographie` },
}

const TOOLS = [
  { name: 'QGIS', category: 'SIG open source' },
  { name: 'ArcGIS Pro', category: 'SIG professionnel' },
  { name: 'PostGIS', category: 'Base de données spatiale' },
  { name: 'AutoCAD MAP 3D', category: 'CAO & cartographie' },
  { name: 'GRASS GIS', category: 'Analyse géospatiale' },
  { name: 'Google Earth Engine', category: 'Télédétection cloud' },
]

const SIG_FEATURES = [
  { icon: Map, title: 'Cartographie numérique', desc: 'Production de cartes topographiques, thématiques et de synthèse à toutes échelles.' },
  { icon: Database, title: 'Bases de données géospatiales', desc: 'Architecture, création et maintenance de bases de données PostGIS/SpatiaLite.' },
  { icon: Layers, title: 'SIG métier', desc: 'Développement de SIG dédiés à vos processus : foncier, réseaux, urbanisme, environnement.' },
  { icon: Satellite, title: 'Télédétection', desc: 'Traitement d\'images satellites (Sentinel, Landsat, Pleiades) pour cartographie et analyse.' },
]

export default function SIGCartographiePage() {
  return (
    <>
      <ServiceJsonLd
        name="SIG & Cartographie numérique"
        description={service.description}
        url={`${SITE_CONFIG.url}/services/sig-cartographie`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'SIG & Cartographie', url: `${SITE_CONFIG.url}/services/sig-cartographie` },
        ]}
      />

      <PageHeader
        label="Services · SIG & Cartographie"
        title="SIG & Cartographie"
        subtitle="Production cartographique numérique, systèmes d'information géographique et géomatique appliquée."
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
            <li className="text-brand-navy font-medium">SIG & Cartographie</li>
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
                title="Géomatique & information géographique"
                subtitle={service.description}
              />
              <div className="mt-8">
                <WhatsAppButton href={requestServiceLink('SIG & Cartographie')} label="Demander un devis SIG" size="lg" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt="SIG et cartographie numérique Bénin"
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

      {/* Features */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading label="Nos domaines SIG" title="Une géomatique complète" centered />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIG_FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <StaggerItem key={f.title}>
                  <div className="bg-white border border-brand-gray-mid rounded-sm p-8 flex gap-5">
                    <div className="w-11 h-11 bg-brand-blue/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brand-navy text-lg mb-2">{f.title}</h3>
                      <p className="font-body text-sm text-brand-gray leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Prestations */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection className="mb-10">
            <SectionHeading label="Nos prestations" title="Détail des missions SIG" />
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

      {/* Outils */}
      <section className="section-padding bg-brand-navy">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading label="Technologies" title="Logiciels & outils maîtrisés" light centered />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TOOLS.map((tool) => (
              <StaggerItem key={tool.name}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-4 text-center hover:bg-white/10 transition-colors">
                  <div className="font-mono text-sm font-bold text-white mb-1">{tool.name}</div>
                  <div className="font-body text-[10px] text-white/40">{tool.category}</div>
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
              Projet SIG ou besoin de cartographie numérique ? Contactez-nous.
            </p>
            <WhatsAppButton href={requestServiceLink('SIG & Cartographie')} label="Devis SIG sur WhatsApp" size="lg" />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
