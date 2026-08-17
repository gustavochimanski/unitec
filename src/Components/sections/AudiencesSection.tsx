"use client"

import { CheckCircle } from "lucide-react"
import type { AudienceItem } from "@/types/product"

interface AudiencesSectionProps {
  title: string
  subtitle: string
  items: AudienceItem[]
  sectionId?: string
}

const AudiencesSection = ({
  title,
  subtitle,
  items,
  sectionId = "para-quem",
}: AudiencesSectionProps) => {
  return (
    <section id={sectionId} className="py-10 sm:py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-indigo-800 text-center mb-3 sm:mb-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8 sm:mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-slate-100 border-t-4 border-indigo-800 rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-800 rounded-xl">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start text-gray-700">
                    <CheckCircle className="w-5 h-5 text-indigo-800 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AudiencesSection
