import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { AnimatedSection } from '@/components/ui/index'
import { CTASection } from '@/components/sections/CTASection'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { SERVICES } from '@/constants/services'
import { requestServiceLink } from '@/lib/whatsapp'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      <PageHeader
        label={service.name}
        title={service.name}
        subtitle={service.shortDescription}
        backgroundImage={service.image}
      />

      {/* Back link */}
      <div className="bg-brand-gray-light border-b border-brand-gray-mid">
        <div className="container-main py-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-body text-brand-gray hover:text-brand-navy transition-colors"
          >
            <ArrowLeft size={14} />
            Retour aux services
          </Link>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-10">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>

                {/* Description */}
                <div className="prose-custom mb-10">
                  <h2 className="font-display text-2xl font-bold text-brand-navy mb-5">
                    À propos de ce service
                  </h2>
                  <p className="font-body text-brand-gray leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>

                {/* Prestations */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-navy mb-6">
                    Nos prestations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.prestations.map((p) => (
                      <div
                        key={p}
                        className="flex items-start gap-3 p-4 bg-brand-gray-light rounded-sm border border-brand-gray-mid"
                      >
                        <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-brand-navy leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <AnimatedSection delay={0.2} className="sticky top-28">
                {/* CTA Card */}
                <div className="bg-brand-navy rounded-sm p-8 mb-6">
                  <h3 className="font-display font-bold text-white text-xl mb-3">
                    Besoin de ce service ?
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                    Contactez notre équipe pour obtenir un devis personnalisé sous 24 heures.
                  </p>
                  <WhatsAppButton
                    href={requestServiceLink(service.name)}
                    label="Demander un devis"
                    fullWidth
                    size="md"
                  />
                </div>

                {/* Other services */}
                <div>
                  <h3 className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider mb-4">
                    Autres services
                  </h3>
                  <div className="flex flex-col gap-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 text-sm font-body text-brand-navy hover:text-brand-blue transition-colors py-2 border-b border-brand-gray-mid last:border-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
