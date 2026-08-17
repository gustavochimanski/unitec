"use client"

import ScrollPhoneGallery from "@/Components/sections/ScrollPhoneGallery"

const operatorShots = [
  {
    src: "/screenshots/funcionarios/fila-conferencia.jpeg",
    alt: "Fila de conferência eletrônica no app do funcionário",
    title: "Fila de conferência no celular",
    description:
      "O operador abre o app e vê os pedidos do período. Código, valor, delivery e o que ainda falta conferir — continua de onde parou, sem papel no depósito.",
  },
]

const OperatorGallery = () => {
  return (
    <ScrollPhoneGallery
      shots={operatorShots}
      badge="App dos funcionários"
      sectionId="app-funcionarios"
      className="bg-slate-100"
    />
  )
}

export default OperatorGallery
