import type { Plan } from "@/types/product"

export const unityPdvPlans: Plan[] = [
  {
    id: "start",
    name: "Start",
    tagline: "PDV e gestão para pequenos comércios",
    price: 397,
    originalPrice: 497,
    modules: [
      { name: "PDV", description: "Frente de caixa rápida" },
      { name: "Estoque", description: "Controle básico de produtos" },
      { name: "Caixa", description: "Abertura, fechamento e sangria" },
    ],
    features: [
      "1 PDV operacional",
      "Frente de caixa veloz e estável",
      "Controle de estoque em tempo real",
      "Emissão de cupom fiscal",
      "Suporte em horário comercial",
    ],
    cta: "Começar com Start",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Gestão completa com dashboards e fiscal",
    price: 697,
    originalPrice: 897,
    featured: true,
    modules: [
      { name: "Unity PDV", description: "Multi-caixa" },
      { name: "Dashboards", description: "Indicadores de venda" },
      { name: "Fiscal", description: "NF-e e SPED" },
    ],
    features: [
      "Até 3 PDVs",
      "Dashboards e indicadores em tempo real",
      "NF-e automática e SPED",
      "Integrações TEF: Stone, Getnet e SafraPay",
      "Financeiro: fluxo de caixa e conciliação",
      "Suporte estendido até 22h",
    ],
    cta: "Escolher Pro",
  },
  {
    id: "multi",
    name: "Multi",
    tagline: "Rede de lojas com visão consolidada",
    price: null,
    priceLabel: "Sob consulta",
    modules: [
      { name: "Tudo do Pro", description: "Sem limites de PDV" },
      { name: "Multi-Loja", description: "Filiais e franquias" },
      { name: "Integrações", description: "TEF e gateways premium" },
    ],
    features: [
      "PDVs e lojas ilimitados",
      "Visão consolidada de vendas e estoque",
      "Transferências entre filiais",
      "Relatórios gerenciais avançados",
      "Gerente de conta dedicado",
      "Implantação e treinamento in-company",
    ],
    cta: "Falar com especialista",
  },
]
