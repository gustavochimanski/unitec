import {
  BarChart2,
  Building2,
  CreditCard,
  FileText,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"
import type { ProductPageContent } from "@/types/product"

export const hiperErpContent: ProductPageContent = {
  productId: "hiper-erp",
  hero: {
    title: "Hiper ERP",
    subtitle:
      "ERP completo para supermercados e comércio — estoque, financeiro, fiscal e dashboards em um só lugar. Pensado para o varejo, mas serve qualquer tipo de empresa.",
    badge: "ERP para supermercados e varejo",
  },
  navItems: [
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Planos", href: "#planos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ],
  problems: {
    title: "Sua gestão sofre com esses problemas?",
    subtitle:
      "Estoque divergente, financeiro no escuro e fiscal complicado não são falta de equipe — são falta de um ERP feito para quem precisa de controle de verdade.",
    items: [
      {
        icon: Package,
        title: "Estoque sempre divergente?",
        description:
          "Entradas, saídas, validade e alertas de ruptura em tempo real. Movimentações auditáveis e sincronizadas com o caixa.",
      },
      {
        icon: CreditCard,
        title: "Financeiro desorganizado?",
        description:
          "Fluxo de caixa, contas a pagar/receber, conciliação bancária e DRE — tudo integrado à operação.",
      },
      {
        icon: FileText,
        title: "Fiscal complicado demais?",
        description:
          "NF-e automática, SPED e conformidade fiscal integrados ao fluxo de vendas — sem retrabalho.",
      },
      {
        icon: Building2,
        title: "Várias lojas, zero visão consolidada?",
        description:
          "Multi-loja com vendas, estoque e financeiro unificados em um painel só.",
      },
    ],
  },
  differentials: {
    title: "Por que o Hiper ERP faz diferença?",
    description:
      "Mais de 20 anos de experiência em sistemas de gestão para supermercados e varejo. Não é um ERP genérico adaptado — é retaguarda completa, conectada ao Unity PDV e ao Mensura E-commerce.",
    benefits: [
      "Estoque em tempo real com alertas de validade, ruptura e FEFO.",
      "Financeiro completo: fluxo de caixa, conciliação e contas a pagar/receber.",
      "NF-e e SPED em conformidade com as exigências fiscais.",
      "Compras e fornecedores com controle de custo e margem.",
      "Dashboards nativos: indicadores de venda, giro e rentabilidade.",
      "Multi-unidade: filiais e visão consolidada para qualquer porte de empresa.",
    ],
    cta: "Agendar demonstração gratuita",
  },
  features: {
    title: "Tudo que sua retaguarda precisa",
    subtitle:
      "Do estoque ao fechamento fiscal — módulos de gestão para supermercados, comércio e qualquer empresa que precise de controle.",
    ctaLabel: "Ver todas as funcionalidades",
    ctaHref: "/hiper-erp/funcionalidades",
    items: [
      {
        icon: Package,
        title: "Estoque e Compras",
        description:
          "Entradas, saídas, fornecedores, validade com FEFO e movimentações auditáveis.",
      },
      {
        icon: CreditCard,
        title: "Financeiro Integrado",
        description:
          "Caixa, contas a pagar/receber, fluxo de caixa, DRE e conciliação bancária.",
      },
      {
        icon: FileText,
        title: "Fiscal Completo",
        description:
          "Emissão automática de NF-e e geração de SPED em conformidade fiscal.",
      },
      {
        icon: ShoppingCart,
        title: "Gestão de Produtos",
        description:
          "Cadastro, categorias, preços, margem e controle de custo por produto.",
      },
      {
        icon: BarChart2,
        title: "Dashboards e Indicadores",
        description:
          "Vendas, giro de produto, rentabilidade e metas automáticas em tempo real.",
      },
      {
        icon: Building2,
        title: "Multi-Loja",
        description:
          "Gerencie filiais com visão consolidada de vendas, estoque e financeiro.",
      },
      {
        icon: Users,
        title: "Usuários e Permissões",
        description:
          "Controle de acesso por perfil, auditoria de ações e segurança de dados.",
      },
    ],
  },
  stats: {
    title: "Gestão de verdade, números de verdade",
    subtitle:
      "ERP pensado para supermercados e varejo — mas flexível o suficiente para qualquer segmento que precise de controle.",
    items: [
      {
        icon: Package,
        number: "Estoque",
        text: "Tempo real, sincronizado com o caixa",
      },
      {
        icon: Building2,
        number: "Multi",
        text: "Lojas e filiais em um painel",
      },
      {
        icon: FileText,
        number: "NF-e",
        text: "Fiscal integrado ao fluxo de vendas",
      },
      {
        icon: BarChart2,
        number: "Dash",
        text: "Indicadores nativos de venda e giro",
      },
    ],
  },
  pricing: {
    title: "Planos Hiper ERP",
    subtitle:
      "Escolha o nível de gestão que sua empresa precisa. Todos incluem implantação assistida e suporte especializado.",
  },
  cta: {
    title: "Pronto para organizar sua gestão?",
    subtitle:
      "Agende uma demonstração e veja o Hiper ERP funcionando com estoque, financeiro e dashboards no mesmo fluxo.",
  },
}
