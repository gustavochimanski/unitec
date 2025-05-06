"use client"

import { Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white text-indigo-800 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 items-start">
          {/* Logo e Slogan */}
          <div className="md:col-span-2 text-center md:text-left">
            <img
              src="logo.png"
              alt="Unitec Logo"
              className="h-10 w-auto mb-6 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-600">
              Tecnologia de ponta para simplificar o varejo. Mais do que software: parceria.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Sobre nós", href: "#sobre-nos" },
                { label: "Funcionalidades", href: "#funcionalidades" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-[#42B7E9] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-2 text-[#1B4B96]" />
                <a
                  href="mailto:gustavo@gtechtecnologia.com.br"
                  className="hover:text-[#42B7E9] transition-colors"
                >
                  gustavo@gtechtecnologia.com.br
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-2 text-[#1B4B96]" />
                <a
                  href="tel:+5511933787147"
                  className="hover:text-[#42B7E9] transition-colors"
                >
                  (11) 93378-7147
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Unitec. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
