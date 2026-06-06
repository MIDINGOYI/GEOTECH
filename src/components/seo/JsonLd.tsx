import { SITE_CONFIG } from '@/constants'

/**
 * JSON-LD — Organisation (LocalBusiness)
 * À placer dans le layout principal ou sur la page d'accueil
 */
export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    alternateName: 'GEOTECH Bénin',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/og-image.png`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cotonou',
      addressCountry: 'BJ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.3654',
      longitude: '2.4183',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [SITE_CONFIG.socialLinks.linkedin, SITE_CONFIG.socialLinks.facebook],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'ingénierie',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Topographie' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Études Hydrauliques' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VRD' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SIG & Cartographie' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Évaluation Immobilière' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * JSON-LD — Service individuel
 */
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Bénin',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * JSON-LD — Breadcrumb
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * JSON-LD — FAQ Page
 */
export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
