"use client"

import { useEffect, useRef, useState } from "react"
import PhoneStack from "@/Components/ui/PhoneStack"

export interface GalleryShot {
  src: string
  alt: string
  title: string
  description: string
}

interface ScrollPhoneGalleryProps {
  shots: GalleryShot[]
  badge: string
  sectionId?: string
  className?: string
}

const ScrollPhoneGallery = ({ shots, badge, sectionId, className = "bg-white" }: ScrollPhoneGalleryProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const heightVh = Math.max(100, shots.length * 80)

  useEffect(() => {
    if (shots.length <= 1) return

    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
      const progress = total > 0 ? scrolled / total : 0
      const index = Math.min(shots.length - 1, Math.floor(progress * shots.length + 0.001))
      setActive(index)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [shots.length])

  const shot = shots[active]
  if (!shot) return null

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`relative font-sans ${className}`}
      style={{ height: shots.length <= 1 ? "auto" : `${heightVh}vh` }}
    >
      <div className={`${shots.length <= 1 ? "relative" : "sticky top-0"} h-[100dvh] flex flex-col`}>
        <div className="flex-1 min-h-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8 grid grid-rows-[auto_auto] lg:grid-rows-1 lg:grid-cols-2 gap-3 lg:gap-12 lg:items-center overflow-y-auto">
          <div className="order-1 lg:order-2 flex items-center justify-center py-1">
            <PhoneStack shots={shots} active={active} />
          </div>

          <div className="order-2 lg:order-1 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <span className="inline-block bg-indigo-800/10 text-indigo-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-4">
              {badge}
            </span>
            <div key={shot.src} className="animate-[fadeIn_400ms_ease-out]">
              <h2 className="text-[1.65rem] sm:text-4xl lg:text-6xl mb-2 sm:my-4 font-bold text-indigo-800 leading-tight">
                {shot.title}
              </h2>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-6">
                {shot.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-semibold text-indigo-800">
                {active + 1}/{shots.length}
              </span>
              <div className="flex gap-1.5">
                {shots.map((item, index) => (
                  <span
                    key={item.src}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === active ? "w-8 sm:w-10 bg-indigo-800" : "w-2.5 sm:w-3 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollPhoneGallery
