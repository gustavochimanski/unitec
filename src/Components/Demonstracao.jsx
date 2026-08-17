"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/data/brand"

const SolicitarDemonstracao = () => {
  const whatsappUrl = getWhatsAppUrl()

  useEffect(() => {
    window.location.href = whatsappUrl
  }, [whatsappUrl])

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <header className="bg-white py-4 px-6 flex justify-between items-center border-b">
        <img src="/logo.png" alt="Mensura Logo" className="h-8 w-auto" />
        <Link href="/" className="text-indigo-800 hover:text-indigo-700 transition-colors flex items-center text-sm">
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar ao início
        </Link>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-6 bg-white p-10 rounded-xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-indigo-800">Fale no WhatsApp</h1>
          <p className="text-gray-600">
            Vamos abrir o WhatsApp com uma mensagem pronta para agendar sua demonstração.
          </p>
          <a
            href={whatsappUrl}
            className="inline-flex items-center justify-center w-full bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Abrir WhatsApp
          </a>
        </div>
      </main>
    </div>
  )
}

export default SolicitarDemonstracao
