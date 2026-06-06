'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CTASection } from '@/components/sections/CTASection'
import { PRODUCTS } from '@/constants/products'
import { buyProductLink, rentProductLink } from '@/lib/whatsapp'
import type { Product } from '@/types'

type FilterType = 'all' | 'sale' | 'rent'

const categoryLabels: Record<string, string> = {
  'gnss-receivers': 'Récepteurs GNSS',
  'total-stations': 'Stations Totales',
  levels: 'Niveaux',
  software: 'Logiciels',
  accessories: 'Accessoires',
}

function ProductCard({ product }: { product: Product }) {
  const [specsOpen, setSpecsOpen] = useState(false)

  return (
    <div className="card-product flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.availableForSale && (
            <span className="bg-brand-blue text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm">
              VENTE
            </span>
          )}
          {product.availableForRent && (
            <span className="bg-brand-cyan text-brand-navy text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm">
              LOCATION
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="label-section text-[10px] mb-1">{product.brand}</span>
        <h3 className="font-display font-semibold text-brand-navy text-xl mb-2">{product.name}</h3>
        <p className="font-body text-sm text-brand-gray leading-relaxed mb-4">{product.description}</p>

        {/* Applications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.applications.slice(0, 3).map((app) => (
            <span key={app} className="text-[10px] font-body bg-brand-blue/8 text-brand-blue px-2 py-0.5 rounded-sm">
              {app}
            </span>
          ))}
        </div>

        {/* Specs toggle */}
        <button
          onClick={() => setSpecsOpen(!specsOpen)}
          className="flex items-center justify-between w-full text-xs font-body font-semibold text-brand-gray border-t border-brand-gray-mid pt-3 mb-3 hover:text-brand-navy transition-colors"
          aria-expanded={specsOpen}
        >
          Caractéristiques techniques
          {specsOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>

        {specsOpen && (
          <div className="mb-4 space-y-1.5">
            {Object.entries(product.specifications).slice(0, 6).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-2 text-xs font-body">
                <span className="text-brand-gray shrink-0">{key}</span>
                <span className="text-brand-navy text-right font-medium">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-auto">
          {product.availableForSale && (
            <a
              href={buyProductLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-brand-blue text-white text-xs font-body font-semibold rounded-sm hover:bg-brand-blue-light transition-colors"
            >
              <ShoppingCart size={13} />
              Acheter ce produit
            </a>
          )}
          {product.availableForRent && (
            <a
              href={rentProductLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 border border-brand-blue text-brand-blue text-xs font-body font-semibold rounded-sm hover:bg-brand-blue/5 transition-colors"
            >
              <Clock size={13} />
              Louer ce produit
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CataloguePage() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = PRODUCTS.filter((p) => {
    if (filter === 'sale') return p.availableForSale
    if (filter === 'rent') return p.availableForRent
    return true
  })

  const filters: { value: FilterType; label: string; count: number }[] = [
    { value: 'all', label: 'Tous les produits', count: PRODUCTS.length },
    { value: 'sale', label: 'Disponibles à la vente', count: PRODUCTS.filter((p) => p.availableForSale).length },
    { value: 'rent', label: 'Disponibles à la location', count: PRODUCTS.filter((p) => p.availableForRent).length },
  ]

  return (
    <>
      <PageHeader
        label="Catalogue"
        title="Matériels topographiques"
        subtitle="Vente et location d'équipements GNSS RTK, stations totales et accessoires de grandes marques."
        backgroundImage="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-body font-medium rounded-sm border transition-all ${
                  filter === f.value
                    ? 'bg-brand-blue border-brand-blue text-white'
                    : 'border-brand-gray-mid text-brand-gray hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {f.label}
                <span className={`text-xs rounded-full px-1.5 py-0.5 ${filter === f.value ? 'bg-white/20' : 'bg-brand-gray-light'}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brand-gray font-body">
              Aucun produit ne correspond aux filtres sélectionnés.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
