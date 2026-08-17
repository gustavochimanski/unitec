"use client"

import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { showcaseFeatures } from "@/data/content/features"
import PhoneFrame from "@/Components/ui/PhoneFrame"
import BrowserFrame from "@/Components/ui/BrowserFrame"

interface FeatureShowcaseProps {
  title?: string
  subtitle?: string
  ids?: string[]
  sectionId?: string
  ctaLabel?: string
  ctaHref?: string
}

const FeatureShowcase = ({
  title,
  subtitle,
  ids,
  sectionId = "funcionalidades",
  ctaLabel,
  ctaHref,
}: FeatureShowcaseProps) => {
  const items = ids
    ? ids
        .map((id) => showcaseFeatures.find((feature) => feature.id === id))
        .filter((feature): feature is NonNullable<typeof feature> => Boolean(feature))
    : showcaseFeatures

  return (
    <section id={sectionId} className="py-10 sm:py-16 md:py-24 bg-slate-100 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {(title || subtitle) && (
          <div className="text-center mb-10 sm:mb-16">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-4 sm:mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-12 sm:space-y-20 md:space-y-28">
          {items.map((item, index) => {
            const reversed = index % 2 === 1
            const Icon = item.icon

            return (
              <article
                key={item.id}
                id={item.id}
                className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center"
              >
                <div className={`order-2 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="inline-flex items-center gap-2 bg-indigo-800/10 text-indigo-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full mb-3 sm:mb-4">
                    <Icon className="w-4 h-4" />
                    {item.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start text-sm sm:text-base text-gray-700">
                        <CheckCircle className="w-5 h-5 text-indigo-800 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`order-1 ${reversed ? "lg:order-1" : "lg:order-2"} flex justify-center w-full min-w-0`}>
                  {item.frame === "phone" ? (
                    <PhoneFrame src={item.imageSrc} alt={item.imageAlt} />
                  ) : (
                    <BrowserFrame src={item.imageSrc} alt={item.imageAlt} />
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {ctaLabel && ctaHref && (
          <div className="text-center mt-10 sm:mt-16">
            <Link
              href={ctaHref}
              className="inline-flex items-center bg-white border-2 border-indigo-800 text-indigo-800 font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-indigo-800 hover:text-white transition shadow-sm text-sm sm:text-base"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeatureShowcase
