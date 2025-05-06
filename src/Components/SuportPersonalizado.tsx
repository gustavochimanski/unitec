"use client"

import { HeadphonesIcon, Users, Cog, Calendar } from "lucide-react"

const SuportePersonalizado = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorativo suave */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#42B7E9] rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6 font-outfit">
            Aqui Você Nunca Está Sozinho
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Treinamento, configuração personalizada e suporte 7 dias por semana. Enquanto outros entregam um sistema, nós entregamos parceria real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            {supportFeatures.map((feature, index) => (
              <SupportFeature key={index} {...feature} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-indigo-800 to-[#42B7E9] rounded-full flex items-center justify-center shadow-lg">
              <HeadphonesIcon className="w-20 h-20 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SupportFeature = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-full">
      <Icon className="w-6 h-6 text-indigo-800" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-1 text-indigo-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

const supportFeatures = [
  {
    icon: Users,
    title: "Treinamento Completo",
    description: "Capacitamos sua equipe para aproveitar ao máximo todas as funcionalidades do sistema.",
  },
  {
    icon: Cog,
    title: "Configuração Personalizada",
    description: "Ajustamos o sistema de acordo com as necessidades específicas do seu negócio.",
  },
  {
    icon: Calendar,
    title: "Suporte 7 Dias por Semana",
    description: "Nossa equipe está disponível todos os dias para garantir que você nunca fique sem assistência.",
  },
]

export default SuportePersonalizado
