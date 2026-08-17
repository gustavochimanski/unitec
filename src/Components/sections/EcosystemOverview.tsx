"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ecosystemContent } from "@/data/content/ecosystem"
import { ecosystemModules } from "@/data/products"

const EcosystemOverview = () => {
  const { ecosystem } = ecosystemContent

  return (
    <section id="produtos" className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 text-center mb-4">
          {ecosystem.title}
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">{ecosystem.subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ul className="space-y-4">
            {ecosystem.modules.map((module, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-indigo-800 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{module}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-indigo-800 mb-6">Módulos complementares</h3>
            <div className="grid grid-cols-2 gap-4">
              {ecosystemModules.map((mod) => (
                <div key={mod.name} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-semibold text-indigo-800 text-sm">{mod.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{mod.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/hiper-erp"
              className="mt-6 inline-flex items-center text-indigo-800 font-semibold hover:underline"
            >
              Começar pelo Hiper ERP
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemOverview
