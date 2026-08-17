"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MessageCircle } from "lucide-react"
import { brand, getWhatsAppUrl } from "@/data/brand"

const Footer = () => {
  return (
    <footer className="bg-white text-indigo-800 py-16 border-t border-slate-200 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-start">
          <div className="md:col-span-2 text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Mensura Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-lg font-semibold text-indigo-800 mb-2">{brand.name}</p>
            <p className="text-sm text-gray-600">{brand.tagline}</p>
            <p className="text-xs text-gray-400 mt-3">por {brand.company}</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Início", href: "/" },
                { label: "Funcionalidades", href: "/funcionalidades" },
                { label: "Planos", href: "/#planos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-2 text-indigo-800" />
                <a href={`mailto:${brand.email}`} className="hover:text-indigo-700 transition-colors">
                  {brand.email}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MessageCircle className="w-5 h-5 mr-2 text-indigo-800" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-700 transition-colors"
                >
                  {brand.whatsappDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {brand.name} — {brand.company}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
