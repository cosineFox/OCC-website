"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ResponsiveTextProps {
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  weight?: "normal" | "medium" | "semibold" | "bold"
  animate?: boolean
  color?: "default" | "muted" | "primary" | "white"
  centered?: boolean
}

export default function ResponsiveText({
  children,
  className,
  as: Component = "p",
  size = "base",
  weight = "normal",
  animate = false,
  color = "default",
  centered = false,
}: ResponsiveTextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
    "2xl": "text-2xl sm:text-3xl",
    "3xl": "text-3xl sm:text-4xl",
    "4xl": "text-3xl sm:text-4xl md:text-5xl",
    "5xl": "text-4xl sm:text-5xl md:text-6xl",
    "6xl": "text-5xl sm:text-6xl md:text-7xl",
  }

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  const colorClasses = {
    default: "text-foreground",
    muted: "text-gray-400",
    primary: "text-primary",
    white: "text-white",
  }

  const textClasses = cn(
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    centered && "text-center",
    className,
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* @ts-expect-error */}
        <Component className={textClasses}>{children}</Component>
      </motion.div>
    )
  }

  return <Component className={textClasses}>{children}</Component>
}

