"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { FeatureItem } from "@/types/product"

interface FeaturesGridProps {
  title: string
  subtitle: string
  items: FeatureItem[]
  ctaLabel?: string
  ctaHref?: string
  sectionId?: string
}

const FeaturesGrid = ({
  title,
  subtitle,
  items,
  ctaLabel,
  ctaHref,
  sectionId = "funcionalidades",
}: FeaturesGridProps) => {
  return (
    <section id={sectionId} className="py-16 md:py-24 bg-slate-100 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-indigo-800">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition border-t-4 border-indigo-800"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-800 p-3 rounded-full mr-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {ctaLabel && ctaHref && (
          <div className="text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center bg-white border-2 border-indigo-800 text-indigo-800 font-semibold py-3 px-8 rounded-full hover:bg-indigo-800 hover:text-white transition shadow-sm"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturesGrid
