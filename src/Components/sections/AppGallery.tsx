"use client"

import PhoneShowcase from "@/Components/sections/PhoneShowcase"
import { videos } from "@/data/videos"

const AppGallery = () => {
  return (
    <PhoneShowcase
      id="app-entregador"
      className="bg-white"
      badge="App do entregador"
      title="Entregas do dia na palma da mão"
      description="Pendentes, em rota e o valor a cobrar. O motoboy chega no local, avisa o cliente e confirma a entrega — sem ligar para a loja."
      video={videos.entregadores}
    />
  )
}

export default AppGallery
