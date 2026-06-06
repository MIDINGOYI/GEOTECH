import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { PROJECTS } from '@/constants/data'
import { SectionHeading, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'

const categoryLabels: Record<string, string> = {
  topographie: 'Topographie',
  vrd: 'VRD',
  reseaux: 'Réseaux',
  hydraulique: 'Hydraulique',
  cartographie: 'Cartographie',
}

const categoryColors: Record<string, string> = {
  topographie: 'bg-brand-blue',
  vrd: 'bg-brand-cyan',
  reseaux: 'bg-brand-green',
  hydraulique: 'bg-blue-400',
  cartographie: 'bg-indigo-500',
}

export function ProjectsSection() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <section className="section-padding bg-brand-navy-light">
      <div className="container-main">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Réalisations"
            title="Nos projets récents"
            subtitle="Une sélection de missions réalisées au Bénin et dans la sous-région."
            light
          />
          <Link href="/realisations" className="btn-outline-white shrink-0 self-start md:self-auto">
            Toutes les réalisations
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <div className="group overflow-hidden rounded-sm bg-brand-navy border border-white/10 hover:border-brand-blue/30 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm ${categoryColors[project.category]}`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-white text-base leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-white/50 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/40 font-body">
                    <MapPin size={11} className="text-brand-cyan" />
                    {project.location} · {project.year}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
