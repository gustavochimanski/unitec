"use client"

import { MessageCircle } from "lucide-react"
import Navbar from "@/Components/layout/Navbar"
import { getWhatsAppUrl } from "@/data/brand"

interface HeroSectionProps {
  title: string
  subtitle: string
  badge?: string
  productName?: string
  demoHref?: string
  demoProduct?: string
  navItems?: { name: string; href: string }[]
  children?: React.ReactNode
}

const HeroSection = ({
  title,
  subtitle,
  badge,
  productName,
  navItems = [],
  children,
}: HeroSectionProps) => {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <div className="relative min-h-screen bg-slate-100 font-inter">
      <Navbar
        navItems={navItems}
        productName={productName}
        productHref={whatsappUrl}
      />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {badge && (
              <span className="inline-block bg-indigo-800/10 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl my-4 font-bold text-indigo-800 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{subtitle}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-600 transition"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="relative">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
