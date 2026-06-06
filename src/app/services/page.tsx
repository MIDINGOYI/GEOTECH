import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Map, Droplets, Construction, Globe, Building2 } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'
import { CTASection } from '@/components/sections/CTASection'
import { SERVICES } from '@/constants/services'
import { requestServiceLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Topographie, études hydrauliques, VRD, SIG & cartographie, évaluation immobilière — découvrez tous les services d\'ingénierie de GEOTECH Engineering Bénin.',
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Map, Droplets, Construction, Globe, Building2,
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Nos domaines d'expertise"
        subtitle="Une gamme complète de services d'ingénierie pour vos projets au Bénin et dans la sous-région."
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          <StaggerContainer className="flex flex-col gap-12">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Map
              const isEven = i % 2 === 0
              return (
                <StaggerItem key={service.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-brand-blue/10 rounded-sm flex items-center justify-center">
                          <Icon size={20} className="text-brand-blue" />
                        </div>
                        <span className="label-section">{service.name}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-tight">
                        {service.name}
                      </h2>
                      <p className="font-body text-brand-gray leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Prestations */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                        {service.prestations.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm font-body text-brand-navy">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-3">
                        <Link href={`/services/${service.slug}`} className="btn-primary">
                          En savoir plus
                          <ArrowRight size={15} />
                        </Link>
                        <a
                          href={requestServiceLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp"
                        >
                          Demander un devis
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {i < SERVICES.length - 1 && <div className="divider-gradient mt-12" />}
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}
