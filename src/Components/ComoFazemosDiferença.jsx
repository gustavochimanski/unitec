"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"

const ComoFazemosDiferenca = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-800 font-outfit">
            Com tantas escolhas por aí, por que escolher a Unitec?
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-lg md:text-xl leading-relaxed font-sans text-gray-700">
                Com mais de <strong>20 anos</strong> de experiência no varejo,
                oferecemos mais que um sistema de gestão. Oferecemos controle, consultoria, suporte, treinamento, implantação de processos.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="w-6 h-6 text-indigo-800 mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/solicitar-demonstracao"
                className="inline-block w-full bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md text-center"
              >
                Teste grátis por 7 dias
              </Link>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-0 bg-indigo-800 opacity-10 rounded-lg transform -rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80"
                  alt="Equipe de varejistas usando o ERP Unitec para gerenciar vendas, estoque e metas em tempo real"
                  className="rounded-lg shadow-2xl relative z-10 w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  "PDV ultra-rápido: sem travamentos e sem risco de perda de dados.",
  "Implantação rápida e personalizada. 1 a 2 Dias e pronto, sistema novo, equipe treinada",
  "Gestão multi-loja centralizada: estoque, financeiro e relatórios num só lugar.",
  "Metas e indicadores em tempo real: acompanhe seu desempenho minuto a minuto.",
  "Segurança de nível corporativo: Linux, backup automático e criptografia.",
  "Suporte até as 22h: especialistas prontos para resolver qualquer problema.",
]

export default ComoFazemosDiferenca
