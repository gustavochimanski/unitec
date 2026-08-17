import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "mensura-ecommerce",
    name: "Mensura E-commerce",
    tagline: "Loja online para distribuidoras e mercados",
    description:
      "Catálogo digital, pedidos B2B, WhatsApp e entrega — feito para distribuidoras de bebidas e mercados.",
    href: "/",
    status: "active",
    accent: "rose",
    icon: "ShoppingBag",
    highlights: [
      "Catálogo digital com tabelas de preço",
      "Pedidos B2B para lojistas e B2C para o consumidor",
      "WhatsApp, entrega e kanban de pedidos",
    ],
  },
]

export const ecosystemModules = [
  { name: "WhatsApp comercial", description: "Pedido do Zap vira pedido no sistema" },
  { name: "App Entregadores", description: "Rotas e status de entrega" },
  { name: "App Funcionários", description: "Conferência eletrônica de pedidos" },
  { name: "Tabelas de preço", description: "Atacado, varejo e por cliente" },
  { name: "Kanban", description: "Separação no depósito" },
]
