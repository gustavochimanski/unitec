"use client"

import { MessageCircle } from "lucide-react"
import Navbar from "@/Components/layout/Navbar"
import PhoneVideo from "@/Components/ui/PhoneVideo"
import { getWhatsAppUrl } from "@/data/brand"
import { videos } from "@/data/videos"
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
    <section className="relative bg-slate-100 flex flex-col lg:min-h-[100dvh]">
      <Navbar navItems={navItems} productName={productName} productHref={whatsappUrl} />

      <div className="flex-1 max-w-7xl w-full mx-auto px-5 sm:px-6 lg:px-8 pt-2 pb-10 sm:pt-4 sm:pb-14 lg:py-8 lg:flex lg:items-center">
        <div className="w-full grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneVideo
              src={videos.loja.src}
              poster={videos.loja.poster}
              title={videos.loja.title}
              caption="Loja do cliente"
            />
          </div>

          <div className="order-2 lg:order-1 text-center lg:text-left pb-[max(0.25rem,env(safe-area-inset-bottom))] lg:pb-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
              <span className="inline-block bg-emerald-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full">
                2 primeiros meses grátis · sem compromisso
              </span>
              {badge && (
                <span className="hidden sm:inline-block bg-indigo-800/10 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="text-[1.7rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-indigo-800 leading-[1.15]">
              {title}
            </h1>
            <p className="mt-3 sm:mt-4 text-[0.95rem] sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-8 flex w-full sm:inline-flex sm:w-auto items-center justify-center bg-green-500 text-white font-semibold py-3.5 px-6 rounded-full hover:bg-green-600 transition text-sm sm:text-base"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroStoreScroll
