"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import Footer from "@/Components/layout/Footer"
import FeatureShowcase from "@/Components/sections/FeatureShowcase"
import AppGallery from "@/Components/sections/AppGallery"
import OperatorGallery from "@/Components/sections/OperatorGallery"
import CtaSection from "@/Components/sections/CtaSection"
import { getWhatsAppUrl } from "@/data/brand"

const FuncionalidadesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="bg-indigo-800 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="hover:text-white/80 transition-colors flex items-center text-sm">
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar ao início
          </Link>
          <span className="text-sm font-semibold">Mensura E-commerce</span>
        </div>
      </header>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
            Funcionalidades do Mensura E-commerce
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Loja online, PIX, kanban, roteirizador, WhatsApp, BI, app do
            entregador e conferência eletrônica no app dos funcionários.
          </p>
        </div>
      </section>

      <FeatureShowcase />

      <AppGallery />

      <OperatorGallery />

      <div className="bg-slate-100 py-12 text-center">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 rounded-full text-white bg-green-500 hover:bg-green-600 transition shadow-md font-semibold"
        >
          <MessageCircle className="mr-2 w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>

      <CtaSection
        title="Quer ver isso rodando na sua operação?"
        subtitle="Chame no WhatsApp e veja as telas do kanban, do mapa, do entregador e da conferência eletrônica."
      />

      <Footer />
    </>
  )
}

export default FuncionalidadesPage
