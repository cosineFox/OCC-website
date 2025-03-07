"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveSectionProps {
  children: ReactNode
  className?: string
  id?: string
  centered?: boolean
  fullHeight?: boolean
  withGradient?: boolean
  as?: keyof JSX.IntrinsicElements
}

export default function ResponsiveSection({
  children,
  className,
  id,
  centered = false,
  fullHeight = false,
  withGradient = false,
  as: Component = "section",
}: ResponsiveSectionProps) {
  const sectionClasses = cn(
    "py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden",
    fullHeight && "min-h-screen flex items-center",
    centered && "flex flex-col items-center justify-center text-center",
    className,
  )

  return (
    <Component id={id} className={sectionClasses}>
      {withGradient && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </>
      )}
      {children}
    </Component>
  )
}

