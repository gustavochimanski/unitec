"use client"

import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

const SoliciteDemo = () => {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-tr from-indigo-900 to-sky-500 relative overflow-hidden text-white"
    >
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
          Quer Levar Seu Negócio ao Próximo Nível?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/90 font-inter">
          Dê adeus às dores de cabeça com sistemas ultrapassados. Descubra como nosso ERP pode turbinar sua operação.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/solicitar-demonstracao"
            className="bg-white text-indigo-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg flex items-center justify-center group"
          >
            Agende Sua Demonstração Exclusiva
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/11933787147"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Converse Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default SoliciteDemo
