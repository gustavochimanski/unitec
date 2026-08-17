"use client"

import { useEffect, useRef } from "react"

interface PhoneVideoProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

const PhoneVideo = ({
  src,
  poster,
  title = "Demonstração no celular",
  className = "",
}: PhoneVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative mx-auto w-[180px] sm:w-[240px] lg:w-[280px] aspect-[384/832] shrink-0 ${className}`}>
      <div className="absolute inset-0 rounded-[1.6rem] sm:rounded-[2.2rem] border-[8px] sm:border-[10px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-4 sm:h-5 w-16 sm:w-24 rounded-b-2xl bg-slate-900" />
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}

export default PhoneVideo
