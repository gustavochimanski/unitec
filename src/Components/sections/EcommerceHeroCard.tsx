"use client"

import PhoneFrame from "@/Components/ui/PhoneFrame"

const EcommerceHeroCard = () => {
  return (
    <div className="relative flex items-end justify-center min-h-[420px] sm:min-h-[520px]">
      <div className="absolute left-0 sm:left-2 bottom-0 -rotate-6 opacity-90 hidden sm:block scale-90 origin-bottom">
        <PhoneFrame
          src="/screenshots/loja/cardapio.jpeg"
          alt="Cardápio digital com categorias de bebidas"
        />
      </div>
      <div className="relative z-10 translate-x-4 sm:translate-x-16">
        <PhoneFrame
          src="/screenshots/loja/home.jpeg"
          alt="Loja online com ofertas e categorias"
        />
      </div>
    </div>
  )
}

export default EcommerceHeroCard
