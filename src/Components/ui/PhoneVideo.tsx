"use client"

import { useEffect, useRef } from "react"

interface PhoneVideoProps {
  src: string
  poster?: string
  title?: string
  caption?: string
  className?: string
}

const PhoneVideo = ({
  src,
  poster,
  title = "Demonstração no celular",
  caption,
  className = "",
}: PhoneVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    const play = () => {
      video.play().catch(() => {})
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.25, rootMargin: "80px 0px" }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return (
    <figure className={`relative mx-auto shrink-0 ${className}`}>
      <div className="relative mx-auto w-[min(82vw,280px)] max-lg:landscape:w-[calc(72svh*384/832)] lg:w-[280px] aspect-[384/832]">
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.35rem] border-[7px] sm:border-[10px] border-slate-900 bg-slate-900 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.55)] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-3.5 sm:h-5 w-[4.5rem] sm:w-24 rounded-b-2xl bg-slate-900" />
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            disablePictureInPicture
            controls={false}
            aria-label={title}
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 sm:mt-4 text-center text-xs sm:text-sm font-semibold tracking-wide text-indigo-800">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default PhoneVideo
