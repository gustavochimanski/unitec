"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Atom, ChartNoAxesCombined, MessageCircle, MonitorCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Como Funciona", href: "#funcionalidades" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Diferenciais", href: "#numeros-qualidade" },
    { name: "Fale Conosco", href: "#contato" },
  ]

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })

      // Adiciona destaque visual temporário
      element.classList.add("scroll-highlight")
      setTimeout(() => {
        element.classList.remove("scroll-highlight")
      }, 1500)
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-inter">
      {/* Backdrop mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative z-20 font-sans">
      <Image
          src="/logo.png"
          alt="Logo da Unitec Sistemas ERP"
          width={0}
          height={0}
          sizes="100vw"
          className="h-8 w-auto"
        />

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => smoothScroll(e, item.href)}
              aria-label={`Ir para a seção ${item.name}`}
              className="text-indigo-800 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-indigo-800 p-2"
          aria-label="Abrir menu de navegação"
        >
          {isMenuOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute right-4 top-16 z-20 bg-white shadow-xl rounded-xl p-4 space-y-2 w-56">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => smoothScroll(e, item.href)}
              aria-label={`Ir para a seção ${item.name}`}
              className="block text-indigo-800 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-8 font-snas">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div >
            <h1 className="text-4xl md:text-5xl lg:text-6xl my-4 font-bold text-indigo-800 leading-tight">
              Sistema de Gestão para Supermercados
            </h1>
            <p className="text-lg md:text-xl font-sans text-gray-600">
              Elimine erros no caixa, reduza perdas, tenha uma visão completa do seu negócio com apenas alguns cliques. O sistema que entende a rotina de quem vive do varejo.
            </p>
          </div>

          {/* Card */}
          <div className="relative">
            <CardHeader className="text-center ">
              <CardTitle className="flex mx-auto text-3xl font-bold mb-2 text-indigo-800 gap-4">
                <h1 className="my-auto">Plano</h1> 
                <Card className="w-28 text-center p-1 bg-indigo-800 text-white">Start</Card>
              </CardTitle>
              <CardDescription className="font-sans">Combo Completo para pequenos negócios</CardDescription>
            </CardHeader>

            <Card className="bg-gradient-to-br from-indigo-900 to-indigo-500 text-white lg:p-6 py-6">
              <CardContent className="space-y-6">
                {/* Módulos */}
                <div className="grid grid-cols-3 text-center gap-4">
                  <div>
                    <MonitorCheck className="mx-auto my-1"></MonitorCheck>
                    <div className="font-bold font-sans ">PDV</div>
                    <div className="text-sm font-sans text-gray-300">Rápido, Fácil e Seguro</div>
                  </div>
                  <div>
                    <Atom className="mx-auto my-1"/>
                    <div className="font-bold font-sans">ERP</div>
                    <div className="text-sm font-sans text-gray-300">Eficiente e Escalável</div>
                  </div>
                  <div>
                    <ChartNoAxesCombined  className="mx-auto my-1 "/>
                    <div className="font-bold font-sans">Mensura BI</div>
                    <div className="text-sm font-sans text-gray-300">Visão Ampla do Negócio</div>
                  </div>
                </div>

                {/* Preço */}
                <Card className="flex flex-col md:flex-row overflow-hidden border-none rounded-2xl shadow-md">
                  {/* Lado esquerdo: Preço e info */}
                  <div className="w-full md:w-1/2 p-6 bg-white flex flex-col justify-center text-center md:text-left">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">De</p>
                    <div className="flex mx-auto">
                      <p className=" text-5xl md:text-5xl  font-bold text-gray-400 line-through mb-2">3.599,00</p>
                      <p className="text-2xl md:text-2xl  font-black text-gray-400">R$</p>
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">Por apenas</p>
                    <div className="flex mx-auto">
                      <p className="text-4xl md:text-4xl font-black text-green-600">1899,00</p>
                      <p className="text-sm md:text-sm font-black text-green-600">R$</p>
                    </div>

                    <p className="text-sm md:text-base font-medium text-stone-600 mt-2">Usuários ilimitados</p>
                  </div>


                  {/* Lado direito: Slogan */}
                  <div className="w-full md:w-1/2 p-6 bg-gradient-to-br from-indigo-800 to-indigo-900 text-white flex items-center justify-center text-center">
                    <p className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight font-sa">
                      Descubra <br /> o Poder Da Gestão
                    </p>
                  </div>
                </Card>
              </CardContent>

              {/* Botões */}
              <CardFooter className="flex justify-center gap-4 flex-col md:flex-row font-sans">
                <Link
                  href="/solicitar-demonstracao"
                  className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Agendar demonstração
                </Link>
                <a
                  href="https://wa.me/11933787147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 shadow-lg flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar com especialista 
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Estilos extras para destaque */}
      <style jsx>{`
        .scroll-highlight {
          animation: pulse-highlight 0.8s ease-out;
          background-color: #eef2ff;
          border-left: 4px solid #6366f1;
        }

        @keyframes pulse-highlight {
          0% {
            background-color: #eef2ff;
          }
          50% {
            background-color: #c7d2fe;
          }
          100% {
            background-color: #eef2ff;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero
