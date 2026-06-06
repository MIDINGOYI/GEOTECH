import type { Metadata, Viewport } from 'next'
import { Montserrat, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIG } from '@/constants'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'topographie Bénin',
    'géomètre Cotonou',
    'GNSS RTK Bénin',
    'études hydrauliques Bénin',
    'VRD Bénin',
    'SIG Bénin',
    'cartographie numérique',
    'évaluation immobilière Bénin',
    'matériel topographique Cotonou',
    'GEOTECH Engineering',
    'bureau d\'études Bénin',
    'ingénierie génie civil Bénin',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Cabinet d'ingénierie au Bénin`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="bg-white text-brand-navy font-body antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
