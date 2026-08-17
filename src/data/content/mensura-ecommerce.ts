import {
  BarChart2,
  ClipboardCheck,
  Clock,
  LayoutGrid,
  Map,
  MessageCircle,
  Package,
  Smartphone,
  Store,
  Truck,
  Wallet,
  Warehouse,
} from "lucide-react"
import type { ProductPageContent } from "@/types/product"

export const mensuraEcommerceContent: ProductPageContent = {
  productId: "mensura-ecommerce",
  hero: {
    title: "E-commerce para distribuidoras de bebidas e mercados",
    subtitle:
      "Catálogo digital, pedidos pelo WhatsApp ou pela loja, tabelas de preço e entrega. A operação comercial da sua distribuidora ou mercado em um só lugar.",
    badge: "Feito para atacado e varejo de bebidas e mercearia",
  },
  navItems: [
    { name: "Para quem", href: "#para-quem" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Planos", href: "#planos" },
    { name: "Contato", href: "#contato" },
  ],
  audiences: {
    title: "Feito para o seu tipo de operação",
    subtitle:
      "O mesmo e-commerce, dois jeitos de vender: atacado para o lojista e varejo para o consumidor do bairro.",
    items: [
      {
        icon: Warehouse,
        title: "Distribuidoras de bebidas",
        description:
          "Seus clientes — mercados, bares, mercearias e restaurantes — pedem pelo catálogo, com preço de atacado e entrega programada.",
        points: [
          "Catálogo B2B com login do lojista",
          "Tabelas de preço por cliente ou região",
          "Pedido mínimo, crédito e prazo",
          "Separação no depósito e rotas de entrega",
        ],
      },
      {
        icon: Store,
        title: "Mercados e mercearias",
        description:
          "Sua loja online para o consumidor do bairro: bebidas, mercearia e produtos do dia a dia, com PIX e entrega.",
        points: [
          "Vitrine digital com categorias e ofertas",
          "Checkout com PIX, cartão e entrega",
          "Pedidos organizados no kanban",
        ],
      },
    ],
  },
  problems: {
    title: "Sua operação sofre com esses problemas?",
    subtitle:
      "Pedido no Zap, preço no Excel e entrega no caderninho não acompanham o volume de uma distribuidora ou de um mercado que quer vender online.",
    items: [
      {
        icon: MessageCircle,
        title: "Muitos pedidos no WhatsApp?",
        description:
          "Catálogo digital e pedido formal — pelo app, pela loja ou pelo Zap. Cada pedido entra no kanban, com cliente, volume e prazo.",
      },
      {
        icon: Package,
        title: "Lojista pede sem saber o estoque?",
        description:
          "Catálogo mostra disponibilidade em tempo real. Menos ruptura, menos ligação para “tem cerveja?”.",
      },
      {
        icon: Truck,
        title: "Entrega sem rota e sem status?",
        description:
          "Pedidos fluem para separação, roteiro e app do entregador. O cliente acompanha o status até a porta.",
      },
    ],
  },
  differentials: {
    title: "Por que o Mensura E-commerce faz diferença?",
    description:
      "Não é um e-commerce genérico. É a loja e o canal de pedidos pensados para quem vende caixa, fardo e unidade — no depósito e no balcão.",
    benefits: [
      "Catálogo B2B e B2C no mesmo produto: distribuidora vende para o lojista; mercado vende para o consumidor.",
      "Tabelas de preço, pedido mínimo, prazo e limite de crédito por cliente.",
      "Pedidos pelo site, pelo WhatsApp e por repetição do último pedido.",
      "Kanban de pedidos: conferência, separação no depósito e entrega.",
      "Roteirizador em tempo real: gera a rota, vincula o motoboy e finaliza no app.",
      "App dos funcionários com conferência eletrônica: fila, progresso e falta de estoque no celular.",
      "PIX, cartão e boleto — com checkout pronto para o volume do atacado.",
    ],
    cta: "Falar no WhatsApp",
    imageSrc: "/screenshots/supervisor/bi-vendas.jpeg",
    imageAlt: "BI de vendas do Mensura com pico de horário e top produtos",
  },
  features: {
    title: "Tudo que sua operação comercial precisa",
    subtitle:
      "Do catálogo à entrega — módulos pensados para distribuidoras de bebidas e mercados.",
    ctaLabel: "Ver todas as funcionalidades",
    ctaHref: "/funcionalidades",
    items: [
      {
        icon: LayoutGrid,
        title: "Kanban de pedidos",
        description:
          "Em preparo, saiu para entrega, aguardando pagamento e entregue — cada pedido da distribuidora no painel.",
      },
      {
        icon: Map,
        title: "Roteirizador",
        description:
          "Cria rotas em tempo real, vincula ao entregador e ele finaliza no app.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp com bot",
        description:
          "O pedido entra no Zap, o bot confirma e o time assume quando precisa de atendimento.",
      },
      {
        icon: Smartphone,
        title: "App do entregador",
        description:
          "Pendentes, em rota, chegar no local, cobrar o cliente e confirmar a entrega.",
      },
      {
        icon: ClipboardCheck,
        title: "App dos funcionários",
        description:
          "Conferência eletrônica de pedidos. O operador vê a fila, continua de onde parou e marca conferido ou falta de estoque no celular.",
      },
      {
        icon: Wallet,
        title: "Troco na porta",
        description:
          "Dinheiro, PIX ou cartão. O app calcula o que receber e o troco.",
      },
      {
        icon: BarChart2,
        title: "BI de vendas",
        description:
          "Pico de horário, top produtos e o que mais sai: caixa de cerveja, Coca, mercearia.",
      },
    ],
  },
  stats: {
    title: "Operação comercial, números claros",
    subtitle:
      "Catálogo, pedido e entrega no mesmo fluxo — para o volume de uma distribuidora ou de um mercado.",
    items: [
      {
        icon: Store,
        number: "B2B + B2C",
        text: "Atacado para o lojista e varejo para o consumidor",
      },
      {
        icon: Clock,
        number: "24/7",
        text: "O cliente pede a qualquer hora, com estoque visível",
      },
      {
        icon: Truck,
        number: "Rota",
        text: "Separação, entrega e status em tempo real",
      },
      {
        icon: BarChart2,
        number: "Vendas",
        text: "Quem pede, o que sai e o que está parado",
      },
    ],
  },
  pricing: {
    title: "Planos Mensura E-commerce",
    subtitle:
      "Primeiro mês grátis em todos os planos. Comece com 1 loja e cresça para 3 quando a operação pedir.",
  },
  cta: {
    title: "Pronto para vender online do seu jeito?",
    subtitle:
      "Chame no WhatsApp e veja o catálogo, o pedido B2B e a entrega funcionando no fluxo da sua distribuidora ou mercado.",
  },
}
