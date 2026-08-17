"use client"

import ScrollPhoneGallery from "@/Components/sections/ScrollPhoneGallery"

const motoboyShots = [
  {
    src: "/screenshots/entregadores/lista-entregas.jpeg",
    alt: "Lista de entregas pendentes no app do motoboy",
    title: "Entregas do dia na palma da mão",
    description:
      "Pendentes, em rota e canceladas. O motoboy vê o valor, o endereço e toca em Cheguei no local — sem ligar para a loja.",
  },
  {
    src: "/screenshots/entregadores/dashboard-desempenho.jpeg",
    alt: "Dashboard de desempenho do entregador",
    title: "Desempenho em tempo real",
    description:
      "Entregues, em rota e taxas do dia. Ticket médio, km rodados e ganho por km — o motoboy acompanha o próprio turno.",
  },
  {
    src: "/screenshots/entregadores/dashboard-vendas.jpeg",
    alt: "Vendas por dia e últimas entregas",
    title: "Vendas e últimas entregas",
    description:
      "Gráfico do dia e a lista do que já saiu. O motoboy vê o que rendeu e o status de cada pedido.",
  },
  {
    src: "/screenshots/entregadores/pedido-detalhe.jpeg",
    alt: "Detalhe do pedido entregue",
    title: "Tudo do pedido num toque",
    description:
      "Cliente, telefone, endereço, itens e forma de pagamento. Coca, mercearia, o que cobrar — no mesmo card.",
  },
  {
    src: "/screenshots/entregadores/finalizar-entrega.jpeg",
    alt: "Finalizar entrega com cálculo de troco",
    title: "Confirme a entrega e o troco",
    description:
      "Pagamento em dinheiro: quanto receber e quanto devolver. O cliente é avisado e o pedido fecha na porta.",
  },
]

const AppGallery = () => {
  return <ScrollPhoneGallery shots={motoboyShots} badge="App do entregador" />
}

export default AppGallery
