"use client"

import { CheckCircle, Users, ShoppingCart, Server, Star } from "lucide-react"

const NumerosQualidade = () => {
  return (
    <section
      id="numeros-qualidade"
      className="py-16 md:py-24 bg-slate-100 text-indigo-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
            Nossos Números Falam Por Si Só
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Com mais de duas décadas de experiência no setor de supermercados, o <strong>ERP da Unitec</strong> entrega confiabilidade, performance e suporte de verdade. Veja por que somos a escolha número 1 do varejo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>

          <div className="relative">
            <div className="max-w-xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Sistema de gestão ERP com painéis de controle, vendas e estoque"
                className="rounded-lg shadow-xl w-full h-auto aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const StatItem = ({ icon: Icon, number, text }) => (
  <div className="flex items-start space-x-4 group">
    <div className="flex-shrink-0 p-3 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-all">
      <Icon className="w-7 h-7 text-indigo-800" />
    </div>
    <div>
      <div className="text-3xl font-bold mb-1">{number}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  </div>
)

const stats = [
  {
    icon: CheckCircle,
    number: "20+",
    text: "anos desenvolvendo soluções para o varejo",
  },
  {
    icon: Users,
    number: "99%",
    text: "de clientes satisfeitos com nosso suporte e sistema",
  },
  {
    icon: ShoppingCart,
    number: "+200",
    text: "supermercados e redes comerciais atendidos",
  },
  {
    icon: Server,
    number: "Híbrido",
    text: "infraestrutura baseada tanto em nuvem, quanto local. Backup e segurança",
  },
  {
    icon: Star,
    number: "4.9/5",
    text: "avaliação média entre nossos clientes ativos",
  },
]

export default NumerosQualidade
