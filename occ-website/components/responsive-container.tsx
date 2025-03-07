"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  centered?: boolean
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  as?: keyof JSX.IntrinsicElements
  animate?: boolean
}

export default function ResponsiveContainer({
  children,
  className,
  centered = false,
  maxWidth = "xl",
  as: Component = "div",
  animate = false,
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }

  const containerClasses = cn(
    "w-full px-4 sm:px-6 lg:px-8 mx-auto",
    maxWidthClasses[maxWidth],
    centered && "flex flex-col items-center text-center",
    className,
  )

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    )
  }

  return <Component className={containerClasses}>{children}</Component>
}

