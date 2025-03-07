"use client"

import { SparklesCore } from "./sparkles-core"

interface SparklesDividerProps {
  title?: string
  className?: string
}

export default function SparklesDivider({ title, className }: SparklesDividerProps) {
  return (
    <div className={`relative h-12 w-full ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10">
        <SparklesCore
          id={`sparkles-${title?.replace(/\s+/g, "-").toLowerCase() || "divider"}`}
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleColor="#FFFF00"
          particleDensity={30}
          speed={0.5}
          className="w-full h-full"
        />
      </div>

      {title && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <span className="bg-black/80 backdrop-blur-sm px-4 py-1 text-primary font-bold text-xl rounded-full border border-primary/20">
            {title}
          </span>
        </div>
      )}
    </div>
  )
}

