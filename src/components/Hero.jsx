"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Como Funciona", href: "#funcionalidades" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Diferenciais", href: "#numeros-qualidade" },
    { name: "Fale Conosco", href: "#contato" },
  ]

  const smoothScroll = (e, target) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
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
      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img src="logo.png" alt="Logo da Unitec Sistemas ERP" className="h-8 w-auto" />

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => smoothScroll(e, item.href)}
              className="text-indigo-800 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-indigo-800 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg mx-4 p-4 space-y-2">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={e => smoothScroll(e, item.href)}
              className="block text-indigo-800 hover:text-indigo-600 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 leading-tight">
              ERP completo para mercados e comércios: rápido, simples e poderoso.
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Elimine erros no caixa, reduza perdas e aumente sua margem com o sistema que entende a rotina de quem vive do varejo.
            </p>
            <Link
              href="/solicitar-demonstracao"
              className="inline-flex items-center bg-gradient-to-r from-indigo-800 to-indigo-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:from-indigo-700 hover:to-indigo-500 transition"
            >
              Agende sua demonstração gratuita
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%206%20(1)-eVzAYDz5LO0tfkperINn5l7CbvXqr9.png"
              alt="Tela do sistema ERP da Unitec para controle de vendas e estoque"
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
