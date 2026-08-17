"use client"

import PhoneShowcase from "@/Components/sections/PhoneShowcase"
import { videos } from "@/data/videos"

const OperatorGallery = () => {
  return (
    <PhoneShowcase
      id="app-funcionarios"
      className="bg-slate-100"
      badge="App dos funcionários"
      title="Conferência eletrônica, sem papel"
      description="O operador confere item a item, marca o pedido como pronto e vincula ao motoboy — a fila anda no celular, não no depósito."
      video={videos.funcionarios}
    />
  )
}

export default OperatorGallery
