import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants'
import { SERVICES } from '@/constants/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/catalogue`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/realisations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages]
}
