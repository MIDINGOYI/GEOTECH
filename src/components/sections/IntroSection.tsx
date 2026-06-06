import { Shield, Award, Users, Zap } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'

const PILLARS = [
  {
    icon: Shield,
    title: 'Précision garantie',
    desc: 'Équipements GNSS RTK certifiés. Précision centimétrique sur chaque mission.',
  },
  {
    icon: Award,
    title: 'Standards internationaux',
    desc: 'Méthodes conformes aux normes ISO, OGC et aux pratiques des bureaux d\'études internationaux.',
  },
  {
    icon: Users,
    title: 'Équipe pluridisciplinaire',
    desc: 'Ingénieurs géomètres, hydrauliciens, géomaticiens et experts immobiliers agréés.',
  },
  {
    icon: Zap,
    title: 'Réactivité terrain',
    desc: 'Intervention rapide sur l\'ensemble du territoire béninois. Devis sous 24 heures.',
  },
]

export function IntroSection() {
  return (
    <section className="section-padding bg-white" aria-label="Présentation rapide">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <AnimatedSection direction="left">
            <span className="label-section block mb-4">À propos de GEOTECH</span>
            <h2 className="heading-section text-brand-navy mb-6">
              Le cabinet de référence en ingénierie géospatiale au Bénin
            </h2>
            <div className="space-y-4 font-body text-brand-gray leading-relaxed">
              <p>
                GEOTECH Engineering Bénin est un cabinet d&apos;ingénierie pluridisciplinaire spécialisé
                en géomatique, topographie, génie hydraulique et génie civil. Basé à Cotonou,
                nous intervenons sur l&apos;ensemble du territoire béninois et dans la sous-région.
              </p>
              <p>
                Notre approche combine rigueur scientifique, équipements de pointe et connaissance
                approfondie du contexte local pour livrer des prestations conformes aux standards
                des cabinets internationaux — au service des projets d&apos;infrastructure, d&apos;aménagement
                et de développement du Bénin.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — pillars */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <StaggerItem key={pillar.title}>
                  <div className="p-6 border border-brand-gray-mid rounded-sm hover:border-brand-blue/30 hover:shadow-card transition-all duration-200">
                    <div className="w-10 h-10 bg-brand-blue/8 rounded-sm flex items-center justify-center mb-4">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <h3 className="font-display font-semibold text-brand-navy text-base mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs text-brand-gray leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
