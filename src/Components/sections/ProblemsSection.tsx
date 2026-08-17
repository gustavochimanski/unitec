"use client"

import type { ProblemItem } from "@/types/product"

interface ProblemsSectionProps {
  title: string
  subtitle: string
  items: ProblemItem[]
  imageSrc?: string
  imageAlt?: string
}

const ProblemsSection = ({ title, subtitle, items, imageSrc, imageAlt }: ProblemsSectionProps) => {
  return (
    <section className="bg-white py-10 sm:py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-indigo-800 text-center mb-3 sm:mb-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8 sm:mb-12">{subtitle}</p>

        <div className={`grid grid-cols-1 gap-12 items-start ${imageSrc ? "lg:grid-cols-2" : "max-w-3xl mx-auto"}`}>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-slate-100 border-t-4 border-indigo-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-indigo-800/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-indigo-800" />
                  </div>
                  <div>
                    <h3 className="text-indigo-800 font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {imageSrc && (
            <div className="flex justify-center lg:justify-end">
              <img
                src={imageSrc}
                alt={imageAlt || ""}
                className="rounded-xl shadow-2xl w-full h-auto object-contain border border-slate-200"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
