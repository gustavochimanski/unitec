"use client"

import Link from "next/link"
import { ArrowRight, Layers, MonitorCheck, ShoppingBag } from "lucide-react"
import Navbar from "@/Components/layout/Navbar"
import { ecosystemContent } from "@/data/content/ecosystem"
import { products } from "@/data/products"

const iconMap = {
  "hiper-erp": Layers,
  "unity-pdv": MonitorCheck,
  "mensura-ecommerce": ShoppingBag,
}

const EcosystemHero = () => {
  const { hero } = ecosystemContent

  return (
    <div className="relative min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-indigo-800/5 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Ecossistema Mensura
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-800 mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10">{hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.ctaPrimaryHref}
              className="bg-indigo-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              {hero.ctaPrimary}
            </Link>
            <a
              href={hero.ctaSecondaryHref}
              className="border-2 border-indigo-800 text-indigo-800 font-semibold px-8 py-3 rounded-full hover:bg-indigo-800 hover:text-white transition"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = iconMap[product.id] || Layers
            const isComingSoon = product.status === "coming_soon"

            return (
              <Link
                key={product.id}
                href={product.href}
                className={`group bg-white rounded-2xl p-6 shadow-sm border-2 transition-all hover:shadow-lg ${
                  isComingSoon
                    ? "border-slate-100 hover:border-rose-200"
                    : "border-indigo-800/20 hover:border-indigo-800"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isComingSoon ? "bg-rose-50" : "bg-indigo-800/10"}`}>
                    <Icon className={`w-6 h-6 ${isComingSoon ? "text-rose-600" : "text-indigo-800"}`} />
                  </div>
                  {isComingSoon && (
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full font-medium">
                      Em breve
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-indigo-800">
                  Saiba mais
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EcosystemHero
