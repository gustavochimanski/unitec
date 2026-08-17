"use client"

import { Check, MessageCircle } from "lucide-react"
import type { Plan } from "@/types/product"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { getWhatsAppUrl } from "@/data/brand"

interface PricingSectionProps {
  title: string
  subtitle: string
  plans: Plan[]
  productSlug?: string
  comingSoon?: boolean
  sectionId?: string
}

const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })

const PricingSection = ({
  title,
  subtitle,
  plans,
  comingSoon = false,
  sectionId = "planos",
}: PricingSectionProps) => {
  const planWhatsAppUrl = (plan: Plan) =>
    comingSoon
      ? getWhatsAppUrl(
          `Olá! Quero entrar na lista de espera do ${plan.name} do Mensura E-commerce.`
        )
      : getWhatsAppUrl(
          `Olá! Quero o plano ${plan.name} do Mensura E-commerce, com os 2 primeiros meses grátis e sem compromisso. Podemos conversar?`
        )

  return (
    <section id={sectionId} className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-4">{title}</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.featured
                  ? "border-2 border-indigo-800 shadow-xl md:scale-[1.02]"
                  : "border border-slate-200 shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-800 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Mais popular
                </div>
              )}
              {plan.firstMonthFree && !plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  2 meses grátis
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl text-indigo-800">{plan.name}</CardTitle>
                <p className="text-sm text-gray-500 mt-1">{plan.tagline}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  {plan.price !== null ? (
                    <div>
                      {plan.firstMonthFree && (
                        <p className="text-emerald-600 font-semibold text-sm mb-1">2 meses grátis · sem compromisso</p>
                      )}
                      {plan.originalPrice && (
                        <p className="text-gray-400 line-through text-lg">
                          R$ {formatPrice(plan.originalPrice)}/mês
                        </p>
                      )}
                      <p className="text-4xl font-bold text-indigo-800">
                        R$ {formatPrice(plan.price)}
                        <span className="text-base font-normal text-gray-500">/mês</span>
                      </p>
                      {plan.firstMonthFree && (
                        <p className="text-xs text-gray-500 mt-1">a partir do 3º mês</p>
                      )}
                    </div>
                  ) : (
                    <div>
                      {plan.firstMonthFree && (
                        <p className="text-emerald-600 font-semibold text-sm mb-1">2 meses grátis · sem compromisso</p>
                      )}
                      <p className="text-2xl font-bold text-indigo-800">{plan.priceLabel}</p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-2 mb-6">
                  {plan.modules.map((mod) => (
                    <div key={mod.name} className="bg-slate-100 rounded-lg px-3 py-2 text-center">
                      <p className="font-semibold text-indigo-800 text-sm">{mod.name}</p>
                      <p className="text-xs text-gray-500">{mod.description}</p>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-gray-600">
                      <Check className="w-4 h-4 text-indigo-800 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <a
                  href={planWhatsAppUrl(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-800 text-white font-semibold py-3 rounded-full hover:bg-indigo-800/90 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
