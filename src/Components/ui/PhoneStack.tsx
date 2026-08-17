"use client"

interface PhoneStackProps {
  shots: { src: string; alt: string }[]
  active: number
}

const PhoneStack = ({ shots, active }: PhoneStackProps) => {
  return (
    <div className="relative mx-auto w-[min(82vw,280px)] max-lg:landscape:w-[calc(72svh*384/832)] lg:w-[300px] aspect-[9/19] shrink-0">
      <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.35rem] border-[7px] sm:border-[10px] border-slate-900 bg-slate-900 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.55)] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-3.5 sm:h-5 w-[4.5rem] sm:w-24 rounded-b-2xl bg-slate-900" />
        {shots.map((shot, index) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default PhoneStack
