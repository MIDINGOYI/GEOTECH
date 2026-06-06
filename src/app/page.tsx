import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { SITE_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
