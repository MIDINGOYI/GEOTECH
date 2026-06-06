import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'
import { CTASection } from '@/components/sections/CTASection'
import { TEAM_MEMBERS } from '@/constants/data'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'À Propos',
  description: `Découvrez l'histoire, la vision et l'équipe de ${SITE_CONFIG.name}, cabinet d'ingénierie en géomatique et génie civil au Bénin.`,
}

const VALUES = [
  {
    icon: CheckCircle2,
    title: 'Excellence technique',
    description: 'Nous maintenons les plus hauts standards de qualité dans chaque mission, en utilisant les équipements et méthodes les plus avancés.',
  },
  {
    icon: Target,
    title: 'Précision et rigueur',
    description: 'La précision est au cœur de notre métier. Chaque levé, chaque étude est réalisé avec une rigueur scientifique irréprochable.',
  },
  {
    icon: Eye,
    title: 'Transparence',
    description: 'Nous communiquons clairement sur nos méthodes, délais et résultats. La confiance de nos clients repose sur notre transparence.',
  },
  {
    icon: Heart,
    title: 'Engagement local',
    description: 'Fiers de notre ancrage béninois, nous contribuons au développement des infrastructures et à la formation des professionnels locaux.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="À propos"
        title="GEOTECH Engineering Bénin"
        subtitle="Un cabinet d'ingénierie fondé sur l'excellence technique, au service du développement du Bénin."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80"
      />

      {/* Histoire & présentation */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel>Notre histoire</SectionLabel>
              <h2 className="heading-section text-brand-navy mt-3 mb-6">
                Un cabinet d&apos;ingénierie au service du territoire
              </h2>
              <div className="space-y-4 font-body text-brand-gray leading-relaxed">
                <p>
                  Fondé à Cotonou, GEOTECH Engineering Bénin est un cabinet d&apos;ingénierie spécialisé
                  en géomatique, topographie et génie civil. Depuis plus d&apos;une décennie, nous accompagnons
                  maîtres d&apos;ouvrage, bureaux d&apos;études, entreprises de BTP et institutions publiques dans
                  la réalisation de leurs projets les plus ambitieux.
                </p>
                <p>
                  Notre équipe pluridisciplinaire d&apos;ingénieurs et techniciens maîtrise les dernières
                  technologies en matière de GNSS RTK, SIG, modélisation hydraulique et ingénierie des
                  réseaux. Nous combinons expertise locale et normes internationales pour livrer des
                  prestations de qualité supérieure.
                </p>
                <p>
                  Parallèlement à nos activités de conseil et d&apos;ingénierie, nous distribuons et louons
                  des équipements topographiques de grandes marques mondiales (HI-TARGET, FOIF, SUNNAV,
                  E-SURVEY), rendant la technologie de précision accessible aux professionnels béninois.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                    alt="Équipe GEOTECH Engineering sur le terrain"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Accent card */}
                <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white p-6 rounded-sm shadow-xl max-w-[180px]">
                  <div className="font-display text-3xl font-bold">12+</div>
                  <div className="font-body text-xs text-white/80 mt-1">années d&apos;expertise au Bénin</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white border border-brand-gray-mid rounded-sm p-10 h-full">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-sm flex items-center justify-center mb-6">
                  <Eye size={22} className="text-brand-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4">Notre Vision</h3>
                <p className="font-body text-brand-gray leading-relaxed">
                  Être le cabinet de référence en géomatique et génie civil au Bénin et dans la sous-région
                  ouest-africaine, reconnu pour la qualité de ses prestations, l&apos;innovation de ses solutions
                  et sa contribution au développement des compétences locales.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white border border-brand-gray-mid rounded-sm p-10 h-full">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-sm flex items-center justify-center mb-6">
                  <Target size={22} className="text-brand-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4">Notre Mission</h3>
                <p className="font-body text-brand-gray leading-relaxed">
                  Fournir des prestations d&apos;ingénierie de haute qualité en topographie, hydraulique, VRD
                  et géomatique, en appliquant les standards internationaux aux réalités locales. Accompagner
                  nos clients de la conception à la réalisation avec rigueur et transparence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection className="text-center mb-14">
            <SectionHeading
              label="Nos valeurs"
              title="Ce qui nous guide"
              centered
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <StaggerItem key={value.title}>
                  <div className="text-center p-8">
                    <div className="w-14 h-14 bg-brand-blue/8 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon size={24} className="text-brand-blue" />
                    </div>
                    <h3 className="font-display font-semibold text-brand-navy text-lg mb-3">{value.title}</h3>
                    <p className="font-body text-sm text-brand-gray leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-main">
          <AnimatedSection className="text-center mb-14">
            <SectionHeading
              label="Notre équipe"
              title="Les experts derrière GEOTECH"
              centered
            />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id}>
                <div className="bg-white border border-brand-gray-mid rounded-sm overflow-hidden group">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-brand-navy text-lg mb-1">{member.name}</h3>
                    <p className="font-body text-xs text-brand-cyan font-medium mb-3">{member.role}</p>
                    <p className="font-body text-sm text-brand-gray leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}

// Local re-export to avoid circular
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-section block mb-2">{children}</span>
  )
}
