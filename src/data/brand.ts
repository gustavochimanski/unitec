export const brand = {
  name: "Mensura",
  company: "Unitec Sistemas",
  tagline: "E-commerce para distribuidoras de bebidas e mercados",
  description:
    "Catálogo digital, pedidos B2B e loja online para quem vende bebidas e mercearia todos os dias.",
  whatsapp: "5511933787147",
  whatsappDisplay: "(11) 93378-7147",
  whatsappMessage:
    "Olá! Quero uma demonstração do Mensura E-commerce para distribuidoras e mercados.",
  email: "gustavo@gtechtecnologia.com.br",
  colors: {
    primary: "#3730a3",
    secondary: "#4338ca",
    light: "#4f46e5",
    canvas: "#f1f5f9",
    rose: "#e11d48",
  },
} as const

export function getWhatsAppUrl(message: string = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`
}
