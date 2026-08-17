import {
  BarChart2,
  ClipboardCheck,
  LayoutGrid,
  Map,
  MessageCircle,
  Percent,
  ShoppingBag,
  Smartphone,
  Wallet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type ScreenshotFrame = "phone" | "desktop"

export interface ShowcaseFeature {
  id: string
  title: string
  subtitle: string
  description: string
  points: string[]
  imageSrc: string
  imageAlt: string
  frame: ScreenshotFrame
  icon: LucideIcon
}

export const showcaseFeatures: ShowcaseFeature[] = [
  {
    id: "loja",
    title: "Loja online do mercado",
    subtitle: "O catálogo que o cliente pede sozinho",
    description:
      "Home com categorias, ofertas com % off, busca por produto e botão de adicionar. Heineken, Coca 2L, mercearia, cerveja e hortifruti — a loja do mercado e da distribuidora no celular do cliente.",
    points: [
      "Categorias: mercearia, cervejas, refrigerantes, água, sucos e snacks",
      "Ofertas com desconto visível e preço antigo riscado",
      "Busca no cardápio — o cliente acha Heineken 330 em segundos",
      "Carrinho com + em cada produto, pedidos e promoções no rodapé",
    ],
    imageSrc: "/screenshots/loja/home.jpeg",
    imageAlt: "Loja online do Mensura com categorias e ofertas",
    frame: "phone",
    icon: ShoppingBag,
  },
  {
    id: "promocoes",
    title: "Menu de promoções",
    subtitle: "Todas as ofertas num toque",
    description:
      "Aba de promoções com grade de produtos em oferta. Desconto em %, preço antigo riscado, preço novo em destaque e o botão de adicionar. O cliente vê Coca, Fanta, banana e mercearia — e o pedido mínimo aparece quando atinge.",
    points: [
      "Aba Promoções no rodapé, junto de início e pedidos",
      "Grade com % off, foto, preço antigo e preço atual",
      "Pedido mínimo atingido visível acima do carrinho",
      "Ver carrinho com o total na hora",
    ],
    imageSrc: "/screenshots/loja/promocoes.jpeg",
    imageAlt: "Menu de promoções da loja com produtos em oferta",
    frame: "phone",
    icon: Percent,
  },
  {
    id: "pix",
    title: "PIX online com confirmação automática",
    subtitle: "Paga agora e o pedido já entra em produção",
    description:
      "No checkout o cliente escolhe pagar agora com PIX ou na entrega. Com PIX, a confirmação é automática — o pedido vai direto para o kanban, sem conferir comprovante na mão.",
    points: [
      "Pagar agora com PIX: instantâneo e seguro",
      "Confirmação automática — pedido vai direto para produção",
      "Ou pagar na entrega: dinheiro, cartão ou PIX na porta",
      "Sem esperar comprovante no WhatsApp",
    ],
    imageSrc: "/screenshots/loja/pix.jpeg",
    imageAlt: "Checkout com PIX online e confirmação automática",
    frame: "phone",
    icon: Wallet,
  },
  {
    id: "kanban",
    title: "Kanban de pedidos",
    subtitle: "A operação do depósito em um painel",
    description:
      "Cada pedido da distribuidora ou do mercado entra no kanban: em preparo, saiu para entrega, aguardando pagamento, entregue ou cancelado. Filtro por telefone, número e entregador — sem gritar no WhatsApp.",
    points: [
      "Colunas com status em tempo real e contagem de pedidos",
      "Card com cliente, endereço, forma de pagamento e valor",
      "Pago / não pago visível em cada pedido",
      "Novo pedido, impressão e filtros por entregador",
    ],
    imageSrc: "/screenshots/supervisor/kanban.jpeg",
    imageAlt: "Kanban de pedidos do Mensura E-commerce com colunas de status",
    frame: "desktop",
    icon: LayoutGrid,
  },
  {
    id: "roteirizador",
    title: "Roteirizador em tempo real",
    subtitle: "Cria a rota, vincula o entregador e fecha no app",
    description:
      "O mapa mostra os pedidos no bairro e quem está com cada entrega. Você gera a rota na hora, vincula ao motoboy e ele finaliza no app — chegada, cobrança e entrega na porta.",
    points: [
      "Gera rotas dos pedidos prontos em tempo real, no mapa",
      "Vincula cada pedido ao entregador (motoboy no card e no pin)",
      "Posição dos motoboys atualiza sozinha a cada 20 segundos",
      "O entregador recebe a rota no app e finaliza a entrega por lá",
    ],
    imageSrc: "/screenshots/supervisor/roteirizador.jpeg?v=2",
    imageAlt: "Roteirizador com mapa de pedidos, sem nomes de ruas nem identificação",
    frame: "desktop",
    icon: Map,
  },
  {
    id: "whatsapp",
    title: "WhatsApp com bot e atendimento",
    subtitle: "O pedido que chega no Zap já nasce no sistema",
    description:
      "Inbox de conversas, bot ativo e pedido confirmado na mesma tela. O cliente recebe itens, taxa, total e status — e o time assume quando precisa de atendimento humano.",
    points: [
      "Lista de conversas com status: precisa atendimento ou pausado",
      "Bot confirma pedido, pagamento e “a caminho”",
      "Itens, taxa de entrega e endereço na mensagem",
      "Gerar resposta com AI quando o operador entra na conversa",
    ],
    imageSrc: "/screenshots/supervisor/whatsapp.jpeg?v=2",
    imageAlt: "Inbox de WhatsApp com bot, pedidos e badge de atendimento",
    frame: "desktop",
    icon: MessageCircle,
  },
  {
    id: "bi",
    title: "BI de vendas",
    subtitle: "Pico de horário e o que mais sai no catálogo",
    description:
      "Gráfico de faturamento e pedidos hora a hora, acumulado do dia e ranking de produtos — caixa de Original, Amstel, Coca 2L. O gestor vê o pico da noite e o que está parado.",
    points: [
      "Pico de vendas por horário (faturamento e quantidade)",
      "Acumulado hora a hora do dia",
      "Top produtos por faturamento, quantidade e participação",
      "Clique na linha para detalhar o SKU",
    ],
    imageSrc: "/screenshots/supervisor/bi-vendas.jpeg",
    imageAlt: "Dashboard de BI com pico de vendas e top produtos",
    frame: "desktop",
    icon: BarChart2,
  },
  {
    id: "app-entregas",
    title: "App do entregador",
    subtitle: "Pendentes, em rota e chegar no local",
    description:
      "O motoboy vê o pedido do dia, o valor a cobrar, o endereço e cria a rota. Chegou no local, fala com o cliente e confirma a entrega — sem ligação para a loja.",
    points: [
      "Pendentes, entregues e canceladas no período",
      "Criar rota e personalizar o dia",
      "Alerta para cobrar o cliente quando o pedido não está pago",
      "Cheguei no local, falar com o cliente e ver detalhes",
    ],
    imageSrc: "/screenshots/entregadores/lista-entregas.jpeg",
    imageAlt: "App do entregador com lista de entregas pendentes",
    frame: "phone",
    icon: Smartphone,
  },
  {
    id: "finalizar",
    title: "Finalizar entrega e troco",
    subtitle: "Dinheiro, cartão e o cliente avisado",
    description:
      "Na porta, o app calcula o que receber e o troco. Confirma a entrega, avisa o cliente e fecha o pedido — PIX, cartão ou dinheiro, do jeito que o mercado cobra.",
    points: [
      "Pagamento em dinheiro com valor a receber e troco",
      "Cliente avisado na chegada",
      "Confirmar entrega em dois passos: chegada e entrega",
      "Detalhe do pedido: itens, endereço e forma de pagamento",
    ],
    imageSrc: "/screenshots/entregadores/finalizar-entrega.jpeg",
    imageAlt: "Tela de finalizar entrega com cálculo de troco",
    frame: "phone",
    icon: Wallet,
  },
  {
    id: "conferencia",
    title: "Conferência eletrônica de pedidos",
    subtitle: "O operador confere no celular, sem papel",
    description:
      "Fila de conferência no app do funcionário: código do pedido, valor, delivery e o que ainda falta. Continua de onde parou, marca conferido ou sem estoque — o depósito para de conferir no papel.",
    points: [
      "Fila com pedidos do período e filtro por data",
      "Card com número, valor, tipo de entrega e status",
      "Progresso: pendentes, conferidos e sem estoque",
      "Continuar conferência de onde o operador parou",
    ],
    imageSrc: "/screenshots/funcionarios/fila-conferencia.jpeg",
    imageAlt: "Fila de conferência eletrônica no app do funcionário",
    frame: "phone",
    icon: ClipboardCheck,
  },
]

export const appGallery = [
  {
    src: "/screenshots/entregadores/lista-entregas.jpeg",
    alt: "Lista de entregas no app do motoboy",
  },
  {
    src: "/screenshots/entregadores/dashboard-desempenho.jpeg",
    alt: "Dashboard de desempenho do entregador",
  },
  {
    src: "/screenshots/entregadores/dashboard-vendas.jpeg",
    alt: "Vendas por dia e últimas entregas",
  },
  {
    src: "/screenshots/entregadores/pedido-detalhe.jpeg",
    alt: "Detalhe do pedido entregue",
  },
  {
    src: "/screenshots/entregadores/finalizar-entrega.jpeg",
    alt: "Finalizar entrega e troco",
  },
]

export const operatorGallery = [
  {
    src: "/screenshots/funcionarios/fila-conferencia.jpeg",
    alt: "Fila de conferência eletrônica no app do funcionário",
  },
]

export const storeGallery = [
  {
    src: "/screenshots/loja/home.jpeg",
    alt: "Home da loja com categorias e ofertas",
  },
  {
    src: "/screenshots/loja/promocoes.jpeg",
    alt: "Menu de promoções com produtos em oferta",
  },
  {
    src: "/screenshots/loja/cardapio.jpeg",
    alt: "Cardápio com bebidas, água e refrigerantes",
  },
  {
    src: "/screenshots/loja/busca.jpeg",
    alt: "Busca de produtos na loja online",
  },
  {
    src: "/screenshots/loja/pix.jpeg",
    alt: "Checkout com PIX online e confirmação automática",
  },
]

export const homeShowcaseIds = ["kanban", "roteirizador", "whatsapp"] as const
