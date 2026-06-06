# GEOTECH Engineering Bénin — Site Institutionnel

Plateforme web institutionnelle haut de gamme pour **GEOTECH Engineering Bénin**, cabinet d'ingénierie spécialisé en topographie, géomatique, hydraulique et génie civil.

---

## Table des matières

1. [Stack technique](#stack-technique)
2. [Architecture du projet](#architecture-du-projet)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Développement](#développement)
6. [Build & Production](#build--production)
7. [Déploiement (Vercel)](#déploiement-vercel)
8. [Déploiement (serveur dédié)](#déploiement-serveur-dédié)
9. [Personnalisation](#personnalisation)
10. [SEO & Performance](#seo--performance)
11. [WhatsApp Integration](#whatsapp-integration)

---

## Stack technique

| Technologie       | Version   | Rôle                              |
|-------------------|-----------|-----------------------------------|
| Next.js           | 15.x      | Framework React (App Router)      |
| TypeScript        | 5.x       | Typage statique strict            |
| Tailwind CSS      | 3.x       | Styles utilitaires                |
| Framer Motion     | 11.x      | Animations fluides                |
| React Hook Form   | 7.x       | Gestion de formulaires            |
| Zod               | 3.x       | Validation des données            |
| Lucide React      | 0.468     | Icônes SVG                        |

---

## Architecture du projet

```
src/
├── app/                          # Pages (App Router Next.js 15)
│   ├── layout.tsx                # Layout racine + métadonnées globales
│   ├── page.tsx                  # Page d'accueil
│   ├── globals.css               # Styles globaux Tailwind
│   ├── sitemap.ts                # Sitemap dynamique
│   ├── robots.ts                 # robots.txt
│   ├── not-found.tsx             # Page 404 personnalisée
│   ├── about/page.tsx            # À propos
│   ├── contact/page.tsx          # Contact + formulaire
│   ├── catalogue/page.tsx        # Catalogue matériels
│   ├── realisations/page.tsx     # Réalisations / portfolio
│   ├── faq/page.tsx              # FAQ
│   └── services/
│       ├── page.tsx              # Liste des services
│       ├── [slug]/page.tsx       # Page service dynamique
│       ├── topographie/page.tsx  # Page Topographie (SEO optimisé)
│       ├── hydraulique/page.tsx  # Page Hydraulique
│       ├── vrd/page.tsx          # Page VRD
│       ├── sig-cartographie/page.tsx
│       └── evaluation-immobiliere/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation responsive
│   │   └── Footer.tsx            # Pied de page
│   ├── sections/                 # Sections de la page d'accueil
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── index.tsx             # SectionHeading, AnimatedSection, StaggerContainer, AnimatedCounter
│   │   ├── PageHeader.tsx        # En-tête de page standardisé
│   │   ├── WhatsAppButton.tsx    # Bouton WhatsApp réutilisable
│   │   └── WhatsAppFAB.tsx       # Bouton flottant WhatsApp
│   └── seo/
│       └── JsonLd.tsx            # Données structurées JSON-LD
│
├── constants/
│   ├── index.ts                  # Configuration du site, navigation
│   ├── products.ts               # Catalogue produits complet
│   ├── services.ts               # Données des services
│   └── data.ts                   # Stats, témoignages, projets, FAQ, équipe
│
├── hooks/
│   ├── useWhatsApp.ts            # Hook génération liens WhatsApp
│   └── useScrollProgress.ts      # Hook progression du scroll
│
├── lib/
│   ├── whatsapp.ts               # Générateur de liens WhatsApp
│   └── utils.ts                  # Utilitaires (cn, slugify...)
│
└── types/
    └── index.ts                  # Types TypeScript globaux
```

---

## Installation

### Prérequis

- **Node.js** ≥ 18.17.0
- **npm** ≥ 9.x ou **pnpm** ≥ 8.x

### Cloner et installer

```bash
# Cloner le projet
git clone https://github.com/votre-org/geotech-benin.git
cd geotech-benin

# Installer les dépendances
npm install
# ou
pnpm install
```

---

## Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# URL publique du site (sans slash final)
NEXT_PUBLIC_SITE_URL=https://geotech-benin.com

# Optionnel : Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Personnaliser les informations de l'entreprise

Modifiez `src/constants/index.ts` :

```typescript
export const SITE_CONFIG = {
  name: 'GEOTECH Engineering Bénin',
  tagline: 'Expertise en Géomatique, Topographie & Génie Civil',
  url: 'https://geotech-benin.com',
  email: 'contact@geotech-benin.com',
  phone: '+229 01 97 24 80 94',
  address: 'Cotonou, Bénin',
  // ...
}
```

### Numéro WhatsApp

Le numéro WhatsApp est centralisé dans `src/constants/index.ts` :

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '2290197248094', // Format international sans +
  baseUrl: 'https://wa.me',
}
```

---

## Développement

```bash
# Lancer le serveur de développement
npm run dev

# Vérifier les types TypeScript
npm run type-check

# Linter
npm run lint
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Build & Production

```bash
# Build de production
npm run build

# Lancer le serveur de production
npm start
```

### Vérification du build

```bash
npm run build 2>&1 | tail -20
```

---

## Déploiement (Vercel) — Recommandé

Vercel est la plateforme officielle pour Next.js.

### Déploiement automatique

1. Pusher le code sur GitHub / GitLab / Bitbucket
2. Connecter le dépôt sur [vercel.com](https://vercel.com)
3. Ajouter les variables d'environnement dans le dashboard Vercel
4. Déploiement automatique à chaque push sur `main`

### Déploiement manuel via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

### Configuration Vercel (vercel.json)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://geotech-benin.com"
  }
}
```

---

## Déploiement (serveur dédié)

Pour un déploiement sur VPS Ubuntu/Debian avec PM2 :

```bash
# 1. Installer Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Installer PM2
npm install -g pm2

# 3. Cloner et installer
git clone https://github.com/votre-org/geotech-benin.git /var/www/geotech
cd /var/www/geotech
npm install

# 4. Créer .env.local
echo "NEXT_PUBLIC_SITE_URL=https://geotech-benin.com" > .env.local

# 5. Build
npm run build

# 6. Démarrer avec PM2
pm2 start npm --name "geotech" -- start
pm2 save
pm2 startup

# 7. Configurer Nginx (reverse proxy)
# Voir configuration Nginx ci-dessous
```

### Configuration Nginx

```nginx
server {
    listen 80;
    server_name geotech-benin.com www.geotech-benin.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activer HTTPS avec Certbot :

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d geotech-benin.com -d www.geotech-benin.com
```

---

## Personnalisation

### Ajouter un produit au catalogue

Ouvrez `src/constants/products.ts` et ajoutez un objet `Product` :

```typescript
{
  id: 'nouveau-produit',
  name: 'NOM DU PRODUIT',
  brand: 'MARQUE',
  slug: 'nom-du-produit',
  description: 'Description courte.',
  longDescription: 'Description complète...',
  image: 'https://url-de-limage.jpg',
  specifications: {
    'Précision': '±8mm',
    'Autonomie': '10h',
    // ...
  },
  applications: ['Application 1', 'Application 2'],
  category: 'gnss-receivers',
  availableForSale: true,
  availableForRent: true,
  featured: false,
},
```

### Ajouter un projet/réalisation

Ouvrez `src/constants/data.ts` et ajoutez dans `PROJECTS` :

```typescript
{
  id: 'p7',
  title: 'Titre du projet',
  category: 'topographie', // topographie | vrd | reseaux | hydraulique | cartographie
  location: 'Ville, Bénin',
  year: 2025,
  description: 'Description du projet.',
  image: 'https://url-image.jpg',
  client: 'Nom du client',
  tags: ['Tag1', 'Tag2'],
},
```

### Modifier les messages WhatsApp

Tous les messages sont générés dans `src/lib/whatsapp.ts`. Modifiez les fonctions pour adapter les templates.

---

## SEO & Performance

### Éléments SEO implémentés

| Élément | Fichier | Description |
|---------|---------|-------------|
| Metadata | `layout.tsx` + chaque `page.tsx` | Title, description, OG, Twitter Cards |
| JSON-LD Organization | `components/seo/JsonLd.tsx` | Données structurées entreprise |
| JSON-LD Service | Chaque page service | Données structurées service |
| JSON-LD Breadcrumb | Chaque page service | Fil d'Ariane structuré |
| Sitemap | `app/sitemap.ts` | Sitemap XML dynamique |
| Robots.txt | `app/robots.ts` | Directives robots |
| Fonts | `layout.tsx` | Polices Google optimisées (next/font) |
| Images | `next.config.ts` | Optimisation WebP/AVIF |

### Ajouter Google Analytics

Dans `src/app/layout.tsx`, ajoutez dans `<head>` :

```tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
    <Script id="gtag-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `}</Script>
  </>
)}
```

---

## WhatsApp Integration

Le système WhatsApp est entièrement centralisé :

| Fonction | Usage |
|----------|-------|
| `buyProductLink(nom)` | Bouton "Acheter" d'un produit |
| `rentProductLink(nom)` | Bouton "Louer" d'un produit |
| `requestServiceLink(nom)` | Bouton "Devis" d'un service |
| `contactLink(sujet?)` | Contact général |
| `generateWhatsAppLink(message)` | Message personnalisé |

Toutes ces fonctions sont dans `src/lib/whatsapp.ts` et utilisent le numéro défini dans `src/constants/index.ts`.

---

## Licence

© 2025 GEOTECH Engineering Bénin. Tous droits réservés.
