import { STATS } from '@/constants/data'
import { AnimatedCounter, SectionLabel, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'

export function StatsSection() {
  return (
    <section className="bg-brand-navy-light py-16 md:py-20 border-y border-white/5">
      <div className="container-main">
        <AnimatedSection className="text-center mb-10">
          <SectionLabel light>Nos chiffres clés</SectionLabel>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <StaggerItem key={stat.id}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-base font-semibold text-brand-cyan mb-1">
                  {stat.label}
                </div>
                <p className="font-body text-xs text-white/40 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
