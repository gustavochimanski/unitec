"use client"

import { MessageCircle } from "lucide-react"
import Navbar from "@/Components/layout/Navbar"
import PhoneVideo from "@/Components/ui/PhoneVideo"
import { getWhatsAppUrl } from "@/data/brand"
import type { NavItem } from "@/types/product"

interface HeroStoreScrollProps {
  title?: string
  subtitle?: string
  badge?: string
  productName?: string
  demoProduct?: string
  navItems?: NavItem[]
}

const HeroStoreScroll = ({
  title = "Loja virtual intuitiva",
  subtitle = "O cliente abre e já entende o que fazer. Ofertas, categorias e o botão de adicionar — sem treinar ninguém para pedir.",
  badge,
  productName,
  navItems = [],
}: HeroStoreScrollProps) => {
  const whatsappUrl = getWhatsAppUrl()

  return (
    <section className="relative min-h-[100dvh] bg-slate-100 flex flex-col">
      <Navbar navItems={navItems} productName={productName} productHref={whatsappUrl} />

      <div className="flex-1 min-h-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-8 grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-3 lg:gap-12 lg:items-center">
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center py-1">
          <PhoneVideo
            src="/videos/loja.mp4?v=7"
            poster="/videos/loja-poster.jpeg?v=7"
            title="Navegação da loja online no celular"
          />
          <p className="mt-3 text-xs sm:text-sm font-semibold text-indigo-800">Loja do cliente</p>
        </div>

        <div className="order-2 lg:order-1 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {badge && (
            <span className="hidden sm:inline-block bg-indigo-800/10 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-[1.65rem] sm:text-4xl lg:text-6xl mb-2 sm:my-4 font-bold text-indigo-800 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-5 sm:mb-8">{subtitle}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
          >
            <MessageCircle className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroStoreScroll
