"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import type { NavItem } from "@/types/product"
import { getWhatsAppUrl } from "@/data/brand"

interface NavbarProps {
  navItems?: NavItem[]
  productName?: string
  productHref?: string
}

const Navbar = ({ navItems = [], productName, productHref }: NavbarProps) => {
  const ctaHref = productHref || getWhatsAppUrl()
  const isExternalCta = ctaHref.startsWith("http")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target.startsWith("#")) return
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 56
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const whatsAppButton = (compact: boolean) =>
    isExternalCta ? (
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors inline-flex items-center ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
        }`}
      >
        <MessageCircle className={`mr-1.5 ${compact ? "w-3.5 h-3.5" : "w-4 h-4"}`} />
        WhatsApp
      </a>
    ) : (
      <Link
        href={ctaHref}
        className={`bg-indigo-800 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors ${
          compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
        }`}
      >
        WhatsApp
      </Link>
    )

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 pt-[env(safe-area-inset-top)]">
      <nav className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-2.5 md:py-3.5 flex justify-between items-center font-sans">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt="Logo Mensura"
            width={0}
            height={0}
            sizes="100vw"
            className="h-7 md:h-8 w-auto"
          />
          {productName && (
            <span className="hidden sm:inline text-sm font-semibold text-indigo-800 border-l border-slate-200 pl-3 truncate">
              {productName}
            </span>
          )}
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => smoothScroll(e, item.href)}
              className="text-indigo-800 hover:text-indigo-700 transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          {whatsAppButton(false)}
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          {whatsAppButton(true)}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-indigo-800 p-2 -mr-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="fixed right-4 left-4 top-[3.75rem] z-50 bg-white shadow-xl rounded-xl p-4 space-y-1 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="block px-3 py-3 text-indigo-800 hover:bg-slate-50 rounded-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </>
        )}
      </nav>
    </header>
  )
}

export default Navbar
