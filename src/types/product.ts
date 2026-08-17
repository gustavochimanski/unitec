import type { LucideIcon } from "lucide-react"

export type ProductStatus = "active" | "coming_soon"

export type ProductId = "mensura-ecommerce" | "hiper-erp" | "unity-pdv"

export interface Product {
  id: ProductId
  name: string
  tagline: string
  description: string
  href: string
  status: ProductStatus
  accent: "amber" | "emerald" | "rose" | "navy"
  icon: string
  highlights: string[]
}

export interface Plan {
  id: string
  name: string
  tagline: string
  price: number | null
  originalPrice?: number
  priceLabel?: string
  featured?: boolean
  firstMonthFree?: boolean
  modules: { name: string; description: string }[]
  features: string[]
  cta: string
}

export interface ProblemItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface StatItem {
  number: string
  text: string
  icon: LucideIcon
}

export interface NavItem {
  name: string
  href: string
}

export interface AudienceItem {
  title: string
  description: string
  points: string[]
  icon: LucideIcon
}

export interface ProductPageContent {
  productId: ProductId
  hero: {
    title: string
    subtitle: string
    badge?: string
  }
  navItems: NavItem[]
  audiences?: {
    title: string
    subtitle: string
    items: AudienceItem[]
  }
  problems: {
    title: string
    subtitle: string
    items: ProblemItem[]
  }
  differentials: {
    title: string
    description: string
    benefits: string[]
    cta: string
    imageSrc?: string
    imageAlt?: string
  }
  features: {
    title: string
    subtitle: string
    items: FeatureItem[]
    ctaLabel?: string
    ctaHref?: string
  }
  stats: {
    title: string
    subtitle: string
    items: StatItem[]
  }
  pricing: {
    title: string
    subtitle: string
  }
  cta: {
    title: string
    subtitle: string
  }
}
