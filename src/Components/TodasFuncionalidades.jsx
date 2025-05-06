"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  DollarSign,
  Package,
  ShoppingCart,
  Building,
  FileText,
  PieChart,
  Shield,
  CreditCard,
  HeadphonesIcon,
} from "lucide-react"

const FeatureItem = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex-shrink-0">
      <Icon className="w-8 h-8 text-indigo-800" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1 text-indigo-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const TodasFuncionalidades = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      icon: DollarSign,
      title: "Gestão Financeira Integrada",
      description: "Visualize e controle o fluxo de caixa, conciliações bancárias e contas a pagar com agilidade.",
    },
    {
      icon: Package,
      title: "Estoque em Tempo Real",
      description: "Acompanhe entradas, saídas, prazos de validade e evite rupturas com alertas inteligentes.",
    },
    {
      icon: ShoppingCart,
      title: "PDV Rápido e Estável",
      description: "Venda mais com frente de caixa veloz, confiável e fácil de operar – até nos horários de pico.",
    },
    {
      icon: Building,
      title: "Controle Multi-Loja",
      description: "Gerencie diversas filiais e empresas com visão consolidada de vendas, estoque e financeiro.",
    },
    {
      icon: FileText,
      title: "Nota Fiscal Eletrônica e SPED",
      description: "Emissão automática de NF-e e geração de SPED em conformidade com as exigências fiscais.",
    },
    {
      icon: PieChart,
      title: "Relatórios Inteligentes",
      description: "Tenha dashboards visuais com indicadores de venda, giro de produto e rentabilidade.",
    },
    {
      icon: Shield,
      title: "Segurança de Dados Garantida",
      description: "Infraestrutura Linux, backups automáticos e criptografia – sua informação sempre protegida.",
    },
    {
      icon: CreditCard,
      title: "Integrações com TEF e Cartão",
      description: "Funciona com Stone, Get-net, Safra-pay, SitefExpress(TEF), alimentação, refeição, entre outros. Mais opções de pagamento, mais vendas no caixa.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado 7 Dias por Semana",
      description: "Atendimento humanizado das 8h às 22h e treinamento completo para sua equipe operar sem erro.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-6">
          Funcionalidades do ERP Unitec para Supermercados e Comércio
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Do PDV ao financeiro, nosso sistema de gestão ERP reúne tudo o que seu comércio precisa para crescer com controle, velocidade e simplicidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/solicitar-demonstracao"
            className="inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r bg-indigo-800 hover:scale-110 transition-all shadow-md"
          >
            Solicite uma demonstração
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TodasFuncionalidades
