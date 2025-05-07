"use client"

import Link from "next/link"
import { Shield, Check, ArrowLeft } from "lucide-react"
import { useState, useEffect } from "react"
import {
  CheckCircle,
  Settings,
  FileText,
  BarChart3,
  PlugZap,
  MousePointerClick,
} from "lucide-react"

const bullets = [
  {
    icon: Settings,
    text: "Implantação rápida e sem complicações",
  },
  {
    icon: CheckCircle,
    text: "Suporte com consultores especializados!",
  },
  {
    icon: BarChart3,
    text: "Relatórios customizados para tomada de decisão",
  },
  {
    icon: PlugZap,
    text: "Integração com sistemas de cartão e balança",
  },
  {
    icon: FileText,
    text: "Emissão automática de NF-e e SPED",
  },
  {
    icon: MousePointerClick,
    text: "Interface intuitiva, fácil de usar e treinar a equipe",
  },
]

const SolicitarDemonstracao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    descricao: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.nome.trim()) errors.nome = "Nome é obrigatório"
    if (!formData.empresa.trim()) errors.empresa = "Nome da empresa é obrigatório"
    if (!formData.email.trim()) errors.email = "E-mail é obrigatório"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "E-mail inválido"
    if (!formData.whatsapp.trim()) errors.whatsapp = "WhatsApp é obrigatório"
    else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ""))) errors.whatsapp = "WhatsApp inválido"
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      const message = `Olá! Estou interessado em uma demonstração do ERP Unitec.%0A%0ANome: ${formData.nome}%0AEmpresa: ${formData.empresa}%0AE-mail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0ADescrição: ${formData.descricao}`
      window.open(`https://wa.me/5511933787147?text=${message}`, "_blank")
      setIsSubmitted(true)
    } else {
      setErrors(formErrors)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-indigo-800">
        <header className="bg-gradient-to-br bg-white  text-white py-4 px-6 flex justify-between items-center">
          <img
            src="/logo.png"
            alt="Unitec Logo"
            className="h-8 w-auto"
          />
          <Link href="/" className="hover:text-white/80 transition-colors flex items-center">
            <ArrowLeft className="mr-2" /> Voltar ao Início
          </Link>
        </header>
        <main className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md text-center">
            <h2 className="text-3xl font-bold text-indigo-800">Obrigado!</h2>
            <p className="text-lg text-gray-600">
              Recebemos sua solicitação. Um de nossos especialistas entrará em contato em breve para agendar a
              demonstração.
            </p>
            <Link href="/" className="inline-flex items-center text-indigo-800 hover:text-indigo-600">
              <ArrowLeft className="mr-2" /> Voltar ao Início
            </Link>
          </div>
        </main>

      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <header className="bg-indigo-800  text-white py-4 px-6">
        <Link href="/" className="hover:text-white/80 transition-colors flex items-center">
          <ArrowLeft className="mr-2" /> Voltar ao Início
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Lateral */}
          <div className="text-indigo-800">
            <h1 className="text-4xl font-bold mb-6 font-sans">Transforme Seu Negócio com Nosso ERP</h1>
            <p className="text-lg mb-6 text-gray-700">
              Solicite uma demonstração gratuita e descubra como podemos simplificar sua gestão e impulsionar seus
              resultados.
            </p>
            <ul className="space-y-3">
            {bullets.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <item.icon className="w-5 h-5 text-indigo-700 mt-1 mr-3" />
                <span>{item.text}</span>
              </li>
            ))}
            </ul>
          </div>

          {/* Formulário */}
          <form className="space-y-6 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            {["nome", "empresa", "email", "whatsapp"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                  {field === "whatsapp" ? "WhatsApp" : field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData[field]}
                  onChange={handleChange}
                />
                {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                Descreva seu negócio (opcional)
              </label>
              <textarea
                id="descricao"
                name="descricao"
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-medium transition"
            >
              Quero Minha Demonstração
            </button>
            <div className="flex items-center justify-center mt-4">
              <Shield className="h-4 w-4 text-indigo-800 mr-2" />
              <p className="text-xs text-gray-500">Seus dados estão protegidos.</p>
            </div>
          </form>
        </div>
      </main>


    </div>
  )
}

export default SolicitarDemonstracao
