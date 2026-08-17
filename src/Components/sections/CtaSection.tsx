"use client"

import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/data/brand"

interface CtaSectionProps {
  title: string
  subtitle: string
  demoHref?: string
  sectionId?: string
}

const CtaSection = ({
  title,
  subtitle,
  sectionId = "contato",
}: CtaSectionProps) => {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section
      id={sectionId}
      className="py-12 sm:py-20 md:py-28 bg-indigo-800 relative overflow-hidden text-white font-sans"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-800 opacity-5 rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-white/90">{subtitle}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition shadow-lg"
        >
          <MessageCircle className="mr-2 w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}

export default CtaSection
