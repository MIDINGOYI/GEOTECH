// ============================================================
// CONSTANTS — GEOTECH ENGINEERING BENIN
// ============================================================

export const SITE_CONFIG = {
  name: 'GEOTECH Engineering World',
  shortName: 'GEOTECH',
  tagline: 'Expertise en Géomatique, Topographie & Génie Civil',
  description:
    'Cabinet d\'ingénierie spécialisé en topographie, études hydrauliques, VRD, SIG, cartographie et évaluation immobilière au Bénin.',
  url: 'https://geotech-benin.com',
  locale: 'fr_BJ',
  country: 'Bénin',
  city: 'Abomey-calavi',
  email: 'bureauetudeconcepthydro@gmailcom',
  phone: '+229 01 97 24 80 94',
  address: 'Abomey-calavi, Bénin',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Cotonou,+Bénin&output=embed',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/geotech-benin',
    facebook: 'https://facebook.com/geotechbenin',
  },
} as const

export const WHATSAPP_CONFIG = {
  phoneNumber: '2290197248094',
  baseUrl: 'https://wa.me',
} as const

export const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Topographie', href: '/services/topographie' },
      { label: 'Études Hydrauliques', href: '/services/hydraulique' },
      { label: 'VRD', href: '/services/vrd' },
      { label: 'SIG & Cartographie', href: '/services/sig-cartographie' },
      { label: 'Évaluation Immobilière', href: '/services/evaluation-immobiliere' },
    ],
  },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À Propos', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const
