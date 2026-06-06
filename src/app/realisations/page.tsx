'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CTASection } from '@/components/sections/CTASection'
import { PROJECTS } from '@/constants/data'
import type { ProjectCategory } from '@/types'

type FilterCat = 'all' | ProjectCategory

const categoryLabels: Record<string, string> = {
  all: 'Tous les projets',
  topographie: 'Topographie',
  vrd: 'VRD',
  reseaux: 'Réseaux',
  hydraulique: 'Hydraulique',
  cartographie: 'Cartographie',
}

const categoryColors: Record<string, string> = {
  topographie: 'bg-brand-blue text-white',
  vrd: 'bg-brand-cyan text-brand-navy',
  reseaux: 'bg-emerald-600 text-white',
  hydraulique: 'bg-blue-400 text-white',
  cartographie: 'bg-indigo-500 text-white',
}

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCat>('all')

  const categories: FilterCat[] = ['all', 'topographie', 'hydraulique', 'vrd', 'reseaux', 'cartographie']
  const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHeader
        label="Réalisations"
        title="Nos projets récents"
        subtitle="Une sélection de missions topographiques, hydrauliques et VRD réalisées au Bénin."
        backgroundImage="https://images.unsplash.com/photo-1547234935-80c7145ec969?w=1200&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-body font-medium rounded-sm border transition-all ${
                  activeFilter === cat
                    ? 'bg-brand-navy border-brand-navy text-white'
                    : 'border-brand-gray-mid text-brand-gray hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-sm border border-brand-gray-mid hover:shadow-card-hover hover:border-brand-blue/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className={`absolute top-3 left-3 text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm ${categoryColors[project.category]}`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-brand-navy text-base leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-brand-gray leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-brand-gray font-body">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-brand-cyan" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {project.year}
                    </span>
                  </div>

                  {/* Tags */}
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-brand-gray-mid">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-body bg-brand-gray-light text-brand-gray px-2 py-0.5 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
