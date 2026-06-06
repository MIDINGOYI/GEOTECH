import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/constants/data'
import { SectionHeading, AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/index'

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <AnimatedSection className="text-center mb-14">
          <SectionHeading
            label="Témoignages clients"
            title="Ce que disent nos clients"
            subtitle="La confiance de nos partenaires est notre meilleure référence."
            centered
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="bg-brand-gray-light border border-brand-gray-mid rounded-sm p-8 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm text-brand-gray leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-brand-gray-mid">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-brand-blue text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-brand-navy">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-xs text-brand-gray">
                      {testimonial.role} — {testimonial.company}
                    </div>
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
