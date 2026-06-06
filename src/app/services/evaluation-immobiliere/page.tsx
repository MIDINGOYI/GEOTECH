import type { Metadata } from 'next'
import { CheckCircle2, FileText, Scale, Search, TrendingUp } from 'lucide-react'
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

const service = SERVICES.find((s) => s.slug === 'evaluation-immobiliere')!

export const metadata: Metadata = {
  title: 'Évaluation Immobilière — Expertise & Estimation Foncière',
  description:
    'Expertise immobilière, estimation de la valeur vénale et locative, audit foncier et évaluation patrimoniale au Bénin.',
  alternates: { canonical: `${SITE_CONFIG.url}/services/evaluation-immobiliere` },
}

const USE_CASES = [
  { icon: Scale, title: 'Transaction immobilière', desc: 'Estimation fiable de la valeur vénale pour achat, vente ou cession de biens.' },
  { icon: FileText, title: 'Garantie bancaire', desc: 'Rapports d\'expertise conformes aux exigences des établissements financiers.' },
  { icon: Search, title: 'Audit foncier', desc: 'Vérification des titres, sécurisation de la chaîne de propriété et due diligence.' },
  { icon: TrendingUp, title: 'Gestion patrimoniale', desc: 'Évaluation périodique de portefeuilles immobiliers pour investisseurs et institutionnels.' },
]

export default function EvaluationImmobilierePage() {
  return (
    <>
      <ServiceJsonLd
        name="Évaluation Immobilière — Expertise foncière"
        description={service.description}
        url={`${SITE_CONFIG.url}/services/evaluation-immobiliere`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: SITE_CONFIG.url },
          { name: 'Services', url: `${SITE_CONFIG.url}/services` },
          { name: 'Évaluation Immobilière', url: `${SITE_CONFIG.url}/services/evaluation-immobiliere` },
        ]}
      />

      <PageHeader
        label="Services · Évaluation Immobilière"
        title="Évaluation Immobilière"
        subtitle="Expertise immobilière, estimation foncière et audit patrimonial conformes aux normes nationales et internationales."
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
            <li className="text-brand-navy font-medium">Évaluation Immobilière</li>
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
                title="Expertise immobilière professionnelle"
                subtitle={service.description}
              />
              <div className="mt-8">
                <WhatsAppButton href={requestServiceLink('Évaluation Immobilière')} label="Demander une expertise" size="lg" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src={service.image}
                  alt="Évaluation immobilière et expertise foncière Bénin"
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

      {/* Use cases */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <SectionHeading label="Cas d'usage" title="Quand faire appel à nous ?" centered />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => {
              const Icon = uc.icon
              return (
                <StaggerItem key={uc.title}>
                  <div className="bg-white border border-brand-gray-mid rounded-sm p-8 flex gap-5">
                    <div className="w-11 h-11 bg-brand-blue/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brand-navy text-lg mb-2">{uc.title}</h3>
                      <p className="font-body text-sm text-brand-gray leading-relaxed">{uc.desc}</p>
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
            <SectionHeading label="Nos prestations" title="Détail des missions d'expertise" />
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

      {/* Rapport d'expertise highlight */}
      <section className="section-padding bg-brand-navy">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Nos livrables"
                title="Un rapport d'expertise complet et opposable"
                subtitle="Chaque mission d'évaluation donne lieu à un rapport structuré, signé par un expert agréé, comportant la description du bien, l'analyse du marché local, la méthodologie d'évaluation retenue et la valeur déterminée."
                light
              />
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-sm p-8">
                <ul className="flex flex-col gap-4">
                  {['Description complète du bien immobilier', 'Analyse comparative du marché local', 'Méthodologie d\'évaluation certifiée', 'Valeur vénale et/ou locative déterminée', 'Rapport signé et daté par expert agréé', 'Annexes photographiques et plans'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-body text-white/80">
                      <CheckCircle2 size={16} className="text-brand-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-blue/5 border-y border-brand-blue/10">
        <div className="container-main text-center">
          <AnimatedSection>
            <p className="font-display text-xl font-semibold text-brand-navy mb-6">
              Besoin d&apos;une expertise immobilière au Bénin ? Contactez nos experts.
            </p>
            <WhatsAppButton href={requestServiceLink('Évaluation Immobilière')} label="Demander une expertise immobilière" size="lg" />
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}
