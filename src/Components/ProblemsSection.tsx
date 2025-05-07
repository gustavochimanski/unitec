"use client"

import { Zap, Store, BarChart2, Target } from "lucide-react"
import ERP from "../Assets/image1.png"
import Image from "next/image"

const ProblemsSection = () => {
  return (
<section className="bg-slate-100 py-16 md:py-24 font-sans" >
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 text-center mb-4">
      Seu supermercado sofre com esses problemas?
    </h2>
    <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
      Se o sistema trava, dados somem e a gestão é um caos, o problema não é você — é a ferramenta. Nosso ERP foi feito pra varejo, sem dor de cabeça.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Cards */}
      <div className="space-y-6">
        <HighlightCard
          icon={<Zap className="w-8 h-8 text-indigo-800" />}
          title="Caixa travando e perdendo vendas?"
          description="Tenha um frente de caixa estável, sem travamentos nem risco de perda de dados."
        />
        <HighlightCard
          icon={<Store className="w-8 h-8 text-indigo-800" />}
          title="Dificuldade para gerenciar várias lojas?"
          description="Controle estoque, vendas e financeiro de todas as unidades em um só painel."
        />
        <HighlightCard
          icon={<BarChart2 className="w-8 h-8 text-indigo-800" />}
          title="Não sabe se realmente está lucrando?"
          description="Monitore lucros, gastos e estoque instantaneamente para tomar decisões sem achismos."
        />
        <HighlightCard
          icon={<Target className="w-8 h-8 text-indigo-800" />}
          title="Empresa sem metas definidas automaticamente"
          description="Uma empresa sem metas claras e definidas, não sabe pra onde ir! Estabeleça metas, ou deixe que nossa IA crie as metas sozinhas com base a períodos anteriores"
        />
      </div>

      {/* Imagem */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-full max-w-md">
          <Image
            src={ERP}
            alt="Painel do sistema ERP Unitec com gráficos, metas e indicadores em tempo real"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

const HighlightCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <div className="bg-white border-t-4 border-indigo-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-indigo-800 font-semibold font-sans text-lg mb-1 font-outfit">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
)

export default ProblemsSection
