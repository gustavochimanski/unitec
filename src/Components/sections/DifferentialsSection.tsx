"use client"

import { CheckCircle, MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/data/brand"

interface DifferentialsSectionProps {
  title: string
  description: string
  benefits: string[]
  cta: string
  ctaHref?: string
  sectionId?: string
  imageSrc?: string
  imageAlt?: string
}

const DifferentialsSection = ({
  title,
  description,
  benefits,
  cta,
  ctaHref = getWhatsAppUrl(),
  sectionId = "diferenciais",
  imageSrc = "/screenshots/supervisor/bi-vendas.jpeg",
  imageAlt = "BI de vendas do Mensura com pico de horário e top produtos",
}: DifferentialsSectionProps) => {
  return (
    <section id={sectionId} className="bg-white py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-indigo-800">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12">{description}</p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-6 h-6 text-indigo-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition shadow-md text-center"
              >
                <MessageCircle className="w-5 h-5" />
                {cta}
              </a>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-0 bg-indigo-800 opacity-5 rounded-2xl transform -rotate-3" />
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="rounded-2xl shadow-2xl relative z-10 w-full h-auto object-contain border border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentialsSection
