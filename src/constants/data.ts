import type { Stat, Testimonial, Project, FAQ, TeamMember } from '@/types'

export const STATS: Stat[] = [
  {
    id: 'projects',
    label: 'Projets réalisés',
    value: 320,
    suffix: '+',
    description: 'Missions topographiques, études et cartographies livrées',
  },
  {
    id: 'clients',
    label: 'Clients satisfaits',
    value: 180,
    suffix: '+',
    description: 'Entreprises, institutions et particuliers accompagnés',
  },
  {
    id: 'years',
    label: 'Années d\'expertise',
    value: 12,
    suffix: '+',
    description: 'D\'expérience au service des professionnels du Bénin',
  },
  {
    id: 'precision',
    label: 'Précision GNSS',
    value: 5,
    suffix: 'mm',
    description: 'Précision centimétrique garantie sur nos levés RTK',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Kofi Mensah',
    role: 'Directeur Technique',
    company: 'SOGEA-SATOM Bénin',
    content:
      'GEOTECH Engineering Bénin a réalisé l\'ensemble des levés topographiques de notre projet de réhabilitation routière. Leur précision et leur réactivité ont été déterminantes pour le respect de nos délais.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Aïssa Traoré',
    role: 'Chef de Projet',
    company: 'Ministère des Travaux Publics',
    content:
      'Une équipe professionnelle qui maîtrise parfaitement les techniques GNSS modernes. Les livrables sont toujours de qualité irréprochable et conformes aux standards internationaux.',
    rating: 5,
  },
  {
    id: 't3',
    author: 'Marc Agboton',
    role: 'Gérant',
    company: 'Promoteur Immobilier Calavi',
    content:
      'J\'ai fait appel à GEOTECH pour l\'évaluation de plusieurs parcelles dans le cadre de mon projet immobilier. Leur rapport d\'expertise a été déterminant pour la négociation bancaire.',
    rating: 5,
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Levé topographique — Zone Industrielle Sèmè-Kpodji',
    category: 'topographie',
    location: 'Sèmè-Kpodji, Bénin',
    year: 2024,
    description: 'Levé topographique complet d\'une zone industrielle de 45 hectares avec production de plans d\'aménagement.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    client: 'Ministère de l\'Industrie',
    tags: ['GNSS RTK', 'Station totale', 'Plans d\'aménagement'],
  },
  {
    id: 'p2',
    title: 'Réseau AEP — Commune d\'Abomey-Calavi',
    category: 'hydraulique',
    location: 'Abomey-Calavi, Bénin',
    year: 2024,
    description: 'Étude et conception d\'un réseau d\'alimentation en eau potable desservant 12 000 habitants.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
    client: 'SONEB',
    tags: ['AEP', 'Hydraulique', 'Réseau de distribution'],
  },
  {
    id: 'p3',
    title: 'VRD — Lotissement Résidentiel Parakou',
    category: 'vrd',
    location: 'Parakou, Bénin',
    year: 2023,
    description: 'Maîtrise d\'œuvre complète des VRD pour un lotissement de 240 parcelles incluant voirie, eau, électricité et télécoms.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    client: 'Promoteur privé',
    tags: ['Voirie', 'Réseaux', 'Électricité', 'Eau potable'],
  },
  {
    id: 'p4',
    title: 'Cartographie SIG — Bassin du Mono',
    category: 'cartographie',
    location: 'Sud Bénin',
    year: 2023,
    description: 'Production d\'une base de données géospatiale et cartographie thématique du bassin versant du Mono.',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80',
    client: 'ABE Bénin',
    tags: ['SIG', 'Cartographie', 'Hydrologie', 'Bases de données'],
  },
  {
    id: 'p5',
    title: 'Réseau électrique BT — Porto-Novo',
    category: 'reseaux',
    location: 'Porto-Novo, Bénin',
    year: 2023,
    description: 'Étude et dimensionnement d\'un réseau de distribution électrique basse tension pour 3 nouveaux quartiers.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    client: 'SBEE',
    tags: ['Électricité BT', 'VRD', 'Distribution'],
  },
  {
    id: 'p6',
    title: 'Drainage — Quartier Fidjrossè Cotonou',
    category: 'hydraulique',
    location: 'Cotonou, Bénin',
    year: 2022,
    description: 'Étude hydrologique et conception d\'un système de drainage pluvial pour réduire les inondations saisonnières.',
    image: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=800&q=80',
    client: 'Mairie de Cotonou',
    tags: ['Drainage', 'Hydraulique urbaine', 'Inondations'],
  },
]

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'Quels types de levés topographiques réalisez-vous ?',
    answer:
      'Nous réalisons tous types de levés topographiques : levés de terrain, plans de masse, profils en long et en travers, levés bathymétriques, implantations, contrôles géométriques, et levés GNSS cinématique et statique. Nos équipements incluent des récepteurs GNSS RTK de dernière génération et des stations totales robotiques.',
    category: 'Topographie',
  },
  {
    id: 'f2',
    question: 'Quelle est la précision de vos mesures GNSS ?',
    answer:
      'En mode RTK, nos récepteurs offrent une précision horizontale de ±5 à 10mm selon l\'équipement utilisé. En mode statique post-traité, la précision atteint ±2-3mm. Toutes nos missions sont réalisées avec du matériel certifié et nos résultats sont accompagnés de rapports de contrôle qualité.',
    category: 'Topographie',
  },
  {
    id: 'f3',
    question: 'Proposez-vous des prestations en dehors de Cotonou ?',
    answer:
      'Oui, nous intervenons sur l\'ensemble du territoire béninois : Cotonou, Porto-Novo, Parakou, Abomey-Calavi, Sèmè-Kpodji, Bohicon, Natitingou et toutes les autres communes. Nous pouvons également intervenir dans les pays de la sous-région (Togo, Niger, Burkina Faso) sur demande.',
    category: 'Général',
  },
  {
    id: 'f4',
    question: 'Comment louer vos équipements topographiques ?',
    answer:
      'Pour louer nos équipements (récepteurs GNSS RTK, stations totales, niveaux), contactez-nous via WhatsApp ou par téléphone. Nous établissons un devis personnalisé selon la durée de location souhaitée, le type d\'équipement et la mission prévue. Un technicien peut vous accompagner si nécessaire.',
    category: 'Location',
  },
  {
    id: 'f5',
    question: 'Quels logiciels utilisez-vous pour vos études SIG ?',
    answer:
      'Notre équipe maîtrise les principaux logiciels de géomatique : QGIS, ArcGIS Pro, ArcMap, AutoCAD MAP 3D, PostGIS, GRASS GIS. Pour la topographie, nous utilisons Trimble Business Center, Leica Infinity, et TopSurv. Nos livrables sont compatibles avec tous les formats standards.',
    category: 'SIG',
  },
  {
    id: 'f6',
    question: 'Quel est le délai de livraison d\'une étude ?',
    answer:
      'Les délais varient selon la nature et l\'ampleur de la mission. Un levé topographique simple est généralement livré sous 3 à 7 jours ouvrables. Une étude hydraulique ou un dossier VRD complet requiert 2 à 6 semaines. Un devis précis avec délai de livraison vous est communiqué avant le démarrage de chaque mission.',
    category: 'Général',
  },
  {
    id: 'f7',
    question: 'Proposez-vous des formations sur les logiciels SIG ?',
    answer:
      'Oui, nous proposons des formations pratiques sur QGIS et les outils SIG open source, destinées aux professionnels, institutions et organisations. Les formations peuvent être organisées en présentiel dans nos locaux ou dans vos locaux. Contactez-nous pour un programme personnalisé.',
    category: 'Formation',
  },
  {
    id: 'f8',
    question: 'Comment demander un devis ?',
    answer:
      'La façon la plus rapide est de nous contacter via WhatsApp au +229 01 97 24 80 94. Vous pouvez également utiliser notre formulaire de contact en ligne. Nous vous répondons dans les 24 heures et pouvons organiser une visite de terrain si nécessaire pour établir un devis précis.',
    category: 'Général',
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Ing. Brice Ahouandjinou',
    role: 'Directeur Général — Ingénieur Géomètre-Topographe',
    bio: 'Titulaire d\'un Master en Géomatique et Ingénierie du Territoire, Brice dirige GEOTECH Engineering Bénin depuis sa fondation. Il apporte 15 ans d\'expérience en topographie, SIG et génie civil.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 'tm2',
    name: 'Ing. Rachelle Dossou',
    role: 'Responsable Études Hydrauliques',
    bio: 'Ingénieure hydraulicienne spécialisée en réseaux AEP et drainage, Rachelle supervise toutes les études hydrauliques et VRD du cabinet.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
  },
  {
    id: 'tm3',
    name: 'M. Théophile Azondekon',
    role: 'Expert SIG & Cartographie',
    bio: 'Spécialiste en systèmes d\'information géographique et télédétection, Théophile gère la production cartographique et le développement des solutions SIG.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]
