// ============================================================
// TYPES TYPESCRIPT — GEOTECH ENGINEERING BENIN
// ============================================================

export interface Product {
  id: string
  name: string
  brand: string
  slug: string
  description: string
  longDescription: string
  image: string
  gallery?: string[]
  specifications: Record<string, string>
  applications: string[]
  category: ProductCategory
  availableForSale: boolean
  availableForRent: boolean
  featured: boolean
}

export type ProductCategory =
  | 'gnss-receivers'
  | 'total-stations'
  | 'levels'
  | 'software'
  | 'accessories'

export interface Service {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  icon: string
  image: string
  prestations: string[]
  featured: boolean
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  location: string
  year: number
  description: string
  image: string
  client?: string
  tags: string[]
}

export type ProjectCategory =
  | 'topographie'
  | 'vrd'
  | 'reseaux'
  | 'hydraulique'
  | 'cartographie'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix: string
  description: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface WhatsAppConfig {
  phoneNumber: string
  defaultGreeting: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  service?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
