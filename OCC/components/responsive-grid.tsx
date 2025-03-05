"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  cols?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "none" | "sm" | "md" | "lg"
  animate?: boolean
}

export default function ResponsiveGrid({
  children,
  className,
  cols = { sm: 1, md: 2, lg: 3 },
  gap = "md",
  animate = false,
}: ResponsiveGridProps) {
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2 sm:gap-3",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
  }

  // Create grid template columns based on responsive breakpoints
  const gridCols = [
    `grid-cols-1`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ]
    .filter(Boolean)
    .join(" ")

  const gridClasses = cn("grid", gridCols, gapClasses[gap], className)

  if (animate) {
    return (
      <motion.div
        className={gridClasses}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    )
  }

  return <div className={gridClasses}>{children}</div>
}

