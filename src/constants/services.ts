import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'topographie',
    name: 'Topographie',
    slug: 'topographie',
    shortDescription: 'Levés de précision, implantations et contrôles géodésiques avec équipements GNSS de dernière génération.',
    description:
      'Notre département topographie réalise tous types de levés et d\'implantations avec une précision centimétrique. Grâce à notre parc d\'équipements GNSS et stations totales de dernière génération, nous répondons aux exigences les plus strictes des projets d\'ingénierie.',
    icon: 'Map',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    prestations: [
      'Levés topographiques terrestres (GNSS & stations totales)',
      'Implantations de bâtiments, routes et réseaux',
      'Contrôles et vérifications géométriques',
      'Relevés GNSS cinématique et statique',
      'Profils en long et en travers',
      'Plans de masse et plans d\'exécution',
      'Levés bathymétriques',
      'Auscultation et surveillance d\'ouvrages',
    ],
    featured: true,
  },
  {
    id: 'hydraulique',
    name: 'Études Hydrauliques',
    slug: 'hydraulique',
    shortDescription: 'Conception et dimensionnement de réseaux d\'eau potable, drainage et études hydrauliques.',
    description:
      'Notre équipe d\'ingénieurs hydrauliciens réalise des études complètes pour la conception et la réhabilitation de réseaux d\'eau potable, systèmes de drainage et ouvrages hydrauliques. Nous utilisons des logiciels spécialisés pour la modélisation et la simulation des écoulements.',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
    prestations: [
      'Études d\'alimentation en eau potable (AEP)',
      'Dimensionnement de réseaux de distribution',
      'Études de drainage pluvial et assainissement',
      'Modélisation hydraulique des bassins versants',
      'Études d\'impact hydrologique',
      'Conception de forages et puits',
      'Diagnostic et réhabilitation de réseaux existants',
      'Dossiers techniques et rapports d\'études',
    ],
    featured: true,
  },
  {
    id: 'vrd',
    name: 'VRD',
    slug: 'vrd',
    shortDescription: 'Conception complète de voirie et réseaux divers pour lotissements, zones industrielles et projets urbains.',
    description:
      'Nous assurons la maîtrise d\'œuvre complète des Voiries et Réseaux Divers (VRD) pour tous types de projets d\'aménagement. De la conception à la supervision des travaux, notre équipe garantit des solutions techniques conformes aux normes en vigueur.',
    icon: 'Construction',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    prestations: [
      'Conception et dimensionnement de voirie',
      'Réseaux d\'électricité basse et moyenne tension',
      'Réseaux de télécommunications (fibre optique, câble)',
      'Réseaux d\'eau potable et d\'assainissement',
      'Éclairage public',
      'Études d\'impact et dossiers réglementaires',
      'Contrôle et surveillance de travaux',
      'Plans de recollement',
    ],
    featured: true,
  },
  {
    id: 'sig-cartographie',
    name: 'SIG & Cartographie',
    slug: 'sig-cartographie',
    shortDescription: 'Production cartographique numérique, systèmes d\'information géographique et bases de données géospatiales.',
    description:
      'Notre pôle SIG et Cartographie propose des solutions complètes de production et de gestion de l\'information géographique. De la collecte terrain au déploiement de systèmes SIG web, nous accompagnons les organisations dans leur transition vers la géomatique numérique.',
    icon: 'Globe',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80',
    prestations: [
      'Cartographie numérique à grande et petite échelle',
      'Développement et déploiement de SIG',
      'Géoréférencement d\'images et de plans',
      'Création de bases de données géospatiales',
      'Traitement d\'images satellites et aériennes',
      'Production de cartes thématiques',
      'Web-mapping et portails cartographiques',
      'Formation SIG (QGIS, ArcGIS, PostGIS)',
    ],
    featured: false,
  },
  {
    id: 'evaluation-immobiliere',
    name: 'Évaluation Immobilière',
    slug: 'evaluation-immobiliere',
    shortDescription: 'Expertise et évaluation immobilière, estimation foncière et audit patrimonial.',
    description:
      'Nos experts immobiliers agréés réalisent des évaluations conformes aux normes nationales et internationales. Nous intervenons pour des transactions immobilières, des successions, des contentieux et des audits patrimoniaux.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    prestations: [
      'Expertise et évaluation de biens immobiliers',
      'Estimation de la valeur vénale et locative',
      'Audit foncier et sécurisation des titres',
      'Études de marché immobilier',
      'Évaluation pour garanties bancaires',
      'Rapports d\'expertise pour contentieux',
      'Conseil en investissement immobilier',
      'Due diligence immobilière',
    ],
    featured: false,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured)
}
