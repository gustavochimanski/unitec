import React, { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-[#1B4B96] to-[#42B7E9]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-white font-outfit">
          Histórias de Sucesso
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 text-white">
          Mais de 99% dos nossos clientes estão satisfeitos. Veja como ajudamos empresas como a sua a alcançar o próximo
          nível.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-[#42B7E9] mb-6 mx-auto" />
            <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <div className="text-center">
              <div className="text-[#1B4B96] font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#1B4B96]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#1B4B96]" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentTestimonial ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to testimonial ${index + 1}`}
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
      "Desde que adotamos o ERP da Unitec, nossa eficiência operacional disparou. Reduzimos retrabalho, ganhamos agilidade nos processos. Graças a ferramenta, resolvemos problemas operacionais que antes não era possível com outros sistemas. Hoje, é uma ferramenta essencial no nosso dia a dia.",
    name: "Atacados Appeldorn",
  },
  {
    quote:
      "O suporte da equipe Unitec vai além das expectativas. Sempre ágeis, prestativos e realmente comprometidos com nosso sucesso. O sistema é moderno, fácil de usar e cheio de recursos inteligentes.",
    name: "Supermercados Ponto Certo",
  },
  {
    quote:
      "O frente de caixa é simplesmente perfeito, antes tinha muito problemas com lentidão e travamentos. Controle de Estoque, cotação de compras e analise de vendas é o que mais usamos no CPD",
    name: "Ana Oliveira",
  },
];


export default TestimonialsSection

