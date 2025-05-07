"use client"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-indigo-800 font-outfit">
          Histórias de Sucesso
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
          <strong>99%</strong> dos nossos clientes estão <strong>satisfeitos</strong>. Veja como ajudamos empresas como a sua a alcançar o próximo nível na gestão
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-200">
            <Quote className="w-12 h-12 text-indigo-800 mb-6 mx-auto" />
            <blockquote className="text-xl md:text-2xl text-center text-gray-800 mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="text-center">
              <div className="text-indigo-800 font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].position ?? "Cliente"}, {testimonials[currentTestimonial].company ?? "Unitec"}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-indigo-800 text-indigo-800 rounded-full p-2 shadow hover:bg-indigo-50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-indigo-800 text-indigo-800 rounded-full p-2 shadow hover:bg-indigo-50 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                index === currentTestimonial ? "bg-indigo-800" : "bg-indigo-200"
              }`}
              aria-label={`Depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Desde que adotamos o ERP da Unitec, nossa eficiência operacional disparou. Reduzimos retrabalho, ganhamos agilidade nos processos. Graças à ferramenta, resolvemos problemas operacionais que antes não era possível com outros sistemas.",
    name: "Atacados Appeldorn",
    position: "Diretor de Operações",
    company: "Appeldorn"
  },
  {
    quote:
      "O suporte da equipe Unitec vai além das expectativas. Sempre ágeis, prestativos e realmente comprometidos com nosso sucesso. O sistema é moderno, fácil de usar e cheio de recursos inteligentes.",
    name: "Supermercados Ponto Certo",
    position: "Gerente de TI",
    company: "Ponto Certo"
  },
  {
    quote:
      "A frente de caixa não nos deixa na mão. Temos queda de energia aqui e sempre que volta, as compras carregam na tela. Perfeito! Antes sofríamos com isso. Agora é outro nível.",
    name: "Supermercados",
    position: "Gerente de Loja",
    company: "Supermercados"
  },
]

export default TestimonialsSection
