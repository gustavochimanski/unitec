"use client"

import type { StatItem } from "@/types/product"

interface StatsSectionProps {
  title: string
  subtitle: string
  items: StatItem[]
}

const StatsSection = ({ title, subtitle, items }: StatsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 text-indigo-800 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{title}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {items.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="inline-flex p-3 bg-indigo-800/10 rounded-full mb-4">
                <stat.icon className="w-7 h-7 text-indigo-800" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
