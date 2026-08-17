import {
  BarChart2,
  Building2,
  CreditCard,
  FileText,
  MonitorCheck,
  Package,
  Shield,
  ShoppingCart,
} from "lucide-react"
import type { ProductPageContent } from "@/types/product"

export const unityPdvContent: ProductPageContent = {
  productId: "unity-pdv",
  hero: {
    title: "Unity PDV",
    subtitle:
      "Frente de caixa ultra-rápida e estável, integrada ao Hiper ERP. TEF, vouchers e sincronização em tempo real — para qualquer tipo de comércio.",
    badge: "PDV integrado ao Hiper ERP",
  },
  navItems: [
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Planos", href: "#planos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Contato", href: "#contato" },
  ],
  problems: {
    title: "O caixa não deveria ser o gargalo do seu negócio",
    subtitle:
      "Fila no PDV, sistema travando e dados perdidos custam vendas — não é falta de equipe, é falta de um PDV feito para aguentar o pico.",
    items: [
      {
        icon: ShoppingCart,
        title: "PDV lento nos horários de pico?",
        description:
          "Frente de caixa ultra-rápida, estável e sem travamentos — mesmo com fila cheia no sábado.",
      },
      {
        icon: CreditCard,
        title: "TEF e pagamentos complicados?",
        description:
          "Stone, Getnet, SafraPay, SitefExpress e vouchers integrados direto no caixa.",
      },
      {
        icon: Package,
        title: "Caixa desconectado do estoque?",
        description:
          "Cada venda sincroniza automaticamente com o estoque e financeiro do Hiper ERP.",
      },
      {
        icon: MonitorCheck,
        title: "Sistema que trava e perde dados?",
        description:
          "Funciona em Windows e Linux, com backups automáticos e zero perda de informação.",
      },
    ],
  },
  differentials: {
    title: "Por que o Unity PDV faz diferença?",
    description:
      "PDV construído para velocidade no caixa — integrado ao Hiper ERP para estoque, financeiro e fiscal na retaguarda. Serve supermercados, varejo e qualquer comércio.",
    benefits: [
      "PDV ultra-rápido: sem travamentos e sem risco de perda de dados.",
      "Integrações TEF: Stone, Getnet, SafraPay, SitefExpress e vouchers.",
      "Sincronização automática com estoque e financeiro do Hiper ERP.",
      "Funciona em Windows e Linux — 32 e 64 bits.",
      "Múltiplas modalidades: caixa, self-checkout e balança.",
      "Dashboards: indicadores de venda direto do caixa.",
    ],
    cta: "Agendar demonstração gratuita",
  },
  features: {
    title: "Frente de caixa completa",
    subtitle:
      "PDV pensado para velocidade no caixa — integrado ao Hiper ERP para tudo que acontece na retaguarda.",
    items: [
      {
        icon: MonitorCheck,
        title: "PDV Rápido e Estável",
        description:
          "Frente de caixa veloz, confiável e fácil de operar — até nos horários de pico.",
      },
      {
        icon: CreditCard,
        title: "TEF e Meios de Pagamento",
        description:
          "Stone, Getnet, SafraPay, SitefExpress, alimentação, refeição e vouchers.",
      },
      {
        icon: ShoppingCart,
        title: "Sincronização com ERP",
        description:
          "Cada venda atualiza estoque e financeiro do Hiper ERP em tempo real.",
      },
      {
        icon: Package,
        title: "Balança e Self-Checkout",
        description:
          "Múltiplas modalidades de operação: caixa tradicional, balança e autoatendimento.",
      },
      {
        icon: BarChart2,
        title: "Dashboards e Indicadores",
        description:
          "Indicadores de venda direto do caixa — giro, ticket médio e performance.",
      },
      {
        icon: Shield,
        title: "Segurança de Dados",
        description:
          "Funciona em Windows e Linux. Backups automáticos e sem perda de dados.",
      },
    ],
  },
  stats: {
    title: "Varejo de verdade, números de verdade",
    subtitle:
      "Mais de 20 anos de experiência em sistemas de gestão para supermercados e comércio, agora no ecossistema Mensura.",
    items: [
      {
        icon: MonitorCheck,
        number: "PDV",
        text: "Ultra-rápido, sem travamentos no pico",
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
    title: "Planos Unity PDV",
    subtitle:
      "Escolha o nível de gestão que seu comércio precisa. Todos incluem implantação assistida e suporte especializado.",
  },
  cta: {
    title: "Pronto para acelerar seu caixa?",
    subtitle:
      "Agende uma demonstração e veja o Unity PDV funcionando com frente de caixa e sincronização com o Hiper ERP.",
  },
}
