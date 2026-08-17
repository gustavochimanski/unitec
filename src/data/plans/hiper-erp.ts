import type { Plan } from "@/types/product"

export const hiperErpPlans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Gestão enxuta para 1 loja",
    price: 497,
    originalPrice: 697,
    modules: [
      { name: "Estoque", description: "Controle de produtos e movimentações" },
      { name: "Financeiro", description: "Caixa, contas e fluxo" },
      { name: "Fiscal", description: "NF-e e cupom fiscal" },
    ],
    features: [
      "1 loja operacional",
      "Controle de estoque em tempo real",
      "Financeiro: caixa, contas e fluxo de caixa",
      "Emissão de NF-e e cupom fiscal",
      "Suporte em horário comercial",
    ],
    cta: "Começar com Essencial",
  },
  {
    id: "profissional",
    name: "Profissional",
    tagline: "Gestão completa com dashboards e multi-loja",
    price: 897,
    originalPrice: 1197,
    featured: true,
    modules: [
      { name: "Hiper ERP", description: "Retaguarda completa" },
      { name: "Dashboards", description: "Indicadores e relatórios" },
      { name: "Compras", description: "Fornecedores e custos" },
    ],
    features: [
      "Até 3 lojas",
      "Dashboards e indicadores em tempo real",
      "Compras, fornecedores e controle de custo",
      "SPED e conformidade fiscal avançada",
      "Integrações TEF: Stone, Getnet e SafraPay",
      "Suporte estendido até 22h",
    ],
    cta: "Escolher Profissional",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Rede de lojas com visão consolidada",
    price: null,
    priceLabel: "Sob consulta",
    modules: [
      { name: "Tudo do Profissional", description: "Sem limites de loja" },
      { name: "Multi-Loja", description: "Filiais e franquias" },
      { name: "Integrações", description: "TEF e gateways premium" },
    ],
    features: [
      "Lojas ilimitadas",
      "Visão consolidada de vendas, estoque e financeiro",
      "Transferências entre filiais",
      "Relatórios gerenciais avançados",
      "Gerente de conta dedicado",
      "Implantação e treinamento in-company",
    ],
    cta: "Falar com especialista",
  },
]
