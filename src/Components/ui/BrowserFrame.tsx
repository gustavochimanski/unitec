"use client"

interface BrowserFrameProps {
  src: string
  alt: string
  className?: string
}

const BrowserFrame = ({ src, alt, className = "" }: BrowserFrameProps) => {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 h-5 rounded bg-white border border-slate-200 text-[10px] text-gray-400 flex items-center px-3 truncate">
          mensura.app
        </span>
      </div>
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  )
}

export default BrowserFrame
