import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingCart, Clock } from 'lucide-react'
import { getFeaturedProducts } from '@/constants/products'
import { SectionHeading, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'
import { buyProductLink, rentProductLink } from '@/lib/whatsapp'

export function ProductsSection() {
  const products = getFeaturedProducts().slice(0, 4)

  return (
    <section className="section-padding bg-brand-gray-light">
      <div className="container-main">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            label="Catalogue matériels"
            title="Équipements topographiques"
            subtitle="Vente et location de récepteurs GNSS RTK, stations totales et accessoires topographiques."
          />
          <Link href="/catalogue" className="btn-outline shrink-0 self-start md:self-auto">
            Voir le catalogue
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div className="card-product flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {product.availableForSale && (
                      <span className="bg-brand-blue text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm">
                        VENTE
                      </span>
                    )}
                    {product.availableForRent && (
                      <span className="bg-brand-cyan text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm">
                        LOCATION
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="label-section text-xs mb-1">{product.brand}</span>
                  <h3 className="font-display font-semibold text-brand-navy text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs text-brand-gray leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {product.availableForSale && (
                      <a
                        href={buyProductLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-blue text-white text-xs font-body font-semibold rounded-sm hover:bg-brand-blue-light transition-colors"
                      >
                        <ShoppingCart size={13} />
                        Acheter
                      </a>
                    )}
                    {product.availableForRent && (
                      <a
                        href={rentProductLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 border border-brand-blue text-brand-blue text-xs font-body font-semibold rounded-sm hover:bg-brand-blue/5 transition-colors"
                      >
                        <Clock size={13} />
                        Louer
                      </a>
                    )}
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
