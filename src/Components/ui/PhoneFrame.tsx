"use client"

interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
}

const PhoneFrame = ({ src, alt, className = "" }: PhoneFrameProps) => {
  return (
    <div className={`relative mx-auto w-[180px] sm:w-[240px] lg:w-[300px] ${className}`}>
      <div className="relative rounded-[1.8rem] sm:rounded-[2.4rem] border-[8px] sm:border-[10px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-b-2xl bg-slate-900" />
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
    </div>
  )
}

export default PhoneFrame
