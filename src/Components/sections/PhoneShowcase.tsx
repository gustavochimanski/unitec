"use client"

import PhoneVideo from "@/Components/ui/PhoneVideo"

interface PhoneShowcaseProps {
  id: string
  badge: string
  title: string
  description: string
  video: {
    src: string
    poster?: string
    title: string
  }
  className?: string
}

const PhoneShowcase = ({
  id,
  badge,
  title,
  description,
  video,
  className = "bg-white",
}: PhoneShowcaseProps) => {
  return (
    <section
      id={id}
      className={`relative font-sans ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-12 sm:py-16 lg:py-8 lg:min-h-[100dvh] lg:flex lg:items-center">
        <div className="w-full grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:items-center">
          <div className="flex justify-center lg:order-2">
            <PhoneVideo
              src={video.src}
              poster={video.poster}
              title={video.title}
              caption={badge}
            />
          </div>

          <div className="lg:order-1 text-center lg:text-left max-w-lg mx-auto lg:mx-0 lg:max-w-none">
            <span className="hidden lg:inline-block bg-indigo-800/10 text-indigo-800 text-sm font-semibold px-4 py-1.5 rounded-full">
              {badge}
            </span>
            <h2 className="mt-0 lg:mt-4 text-[1.7rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-indigo-800 leading-[1.15]">
              {title}
            </h2>
            <p className="mt-3 sm:mt-4 text-[0.95rem] sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneShowcase
