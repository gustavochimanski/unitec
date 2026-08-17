"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const steps = [
  {
    src: "/screenshots/loja/home.jpeg",
    alt: "Home da loja com categorias e ofertas",
    title: "Home e ofertas",
    description:
      "O cliente abre a loja e já vê mercearia, cervejas, refrigerantes e ofertas com % off. Preço antigo riscado, preço novo em destaque.",
    points: [
      "Categorias em círculo: mercearia, cerveja, snacks, destilados",
      "Ofertas com desconto visível no card",
      "Loja aberta agora — status na hora",
    ],
  },
  {
    src: "/screenshots/loja/promocoes.jpeg",
    alt: "Menu de promoções com produtos em oferta",
    title: "Menu de promoções",
    description:
      "Aba de promoções com tudo que está em oferta. Desconto no card, preço antigo riscado e o cliente adiciona direto ao carrinho.",
    points: [
      "Grade de ofertas com % off em cada produto",
      "Preço antigo riscado e preço novo em destaque",
      "Pedido mínimo atingido e ver carrinho no rodapé",
    ],
  },
  {
    src: "/screenshots/loja/cardapio.jpeg",
    alt: "Cardápio com bebidas, água e refrigerantes",
    title: "Cardápio por categoria",
    description:
      "Água, refrigerante, suco, energético. O cliente rola o cardápio, vê o fardo e o galão, e adiciona com um toque.",
    points: [
      "Atalhos visuais por categoria",
      "Carrossel de produtos com preço e botão +",
      "Caixa, unidade e galão no mesmo catálogo",
    ],
  },
  {
    src: "/screenshots/loja/busca.jpeg",
    alt: "Busca de Heineken 330 na loja online",
    title: "Busca e adicionar ao carrinho",
    description:
      "Digitou Heineken 330 e achou. Long neck, preço e + para o carrinho — sem ligar para perguntar se tem.",
    points: [
      "Busca no cardápio em tempo real",
      "Resultados em grade com foto e preço",
      "Mais pedidos da categoria embaixo",
    ],
  },
]

const StoreScrollShowcase = () => {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((el, index) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index)
        },
        { threshold: 0.55, rootMargin: "-10% 0px -25% 0px" }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return (
    <section id="loja-online" className="bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pt-16 md:pt-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-4">
            A loja que o cliente vê
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Role a página. A tela da loja muda — home, cardápio e busca — no celular do cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="hidden lg:flex lg:sticky lg:top-24 justify-center pb-24">
            <PhoneStack active={active} />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.src}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className="lg:min-h-[85vh] flex flex-col justify-center py-8 lg:py-0"
              >
                <div className="lg:hidden mb-6 flex justify-center">
                  <PhoneStack active={index} compact />
                </div>

                <p className="text-sm font-semibold text-indigo-800 mb-2">
                  {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-800 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="hidden lg:flex gap-2 mt-8">
                  {steps.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIndex === active ? "w-8 bg-indigo-800" : "w-3 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const PhoneStack = ({ active, compact = false }: { active: number; compact?: boolean }) => {
  return (
    <div className={`relative mx-auto ${compact ? "w-[220px]" : "w-[280px] lg:w-[320px]"}`}>
      <div className="relative rounded-[2.4rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-5 w-24 rounded-b-2xl bg-slate-900" />
        {steps.map((step, index) => (
          <img
            key={step.src}
            src={step.src}
            alt={step.alt}
            className={`w-full h-auto block transition-opacity duration-500 ease-out ${
              index === 0 ? "relative" : "absolute inset-0 object-cover object-top"
            } ${index === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default StoreScrollShowcase
