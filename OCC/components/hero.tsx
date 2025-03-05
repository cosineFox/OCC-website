"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ResponsiveContainer from "./responsive-container"
import ResponsiveText from "./responsive-text"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden hero-background">
      <motion.div style={{ y, opacity }} className="w-full relative z-10 hero-content">
        <ResponsiveContainer centered>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-center"
              style={{ y: textY }}
            >
              <motion.span
                className="text-primary inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Open
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block"
              >
                Computing Club
              </motion.span>
            </motion.h1>

            <ResponsiveText size="xl" className="mb-8 text-gray-300 text-center max-w-2xl mx-auto" animate>
              A student-led tech community building the next generation of technical innovators.
            </ResponsiveText>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button className="group bg-primary text-black hover:bg-primary/90" size="lg">
                Join the Club
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Explore SIGs
              </Button>
            </motion.div>
          </motion.div>
        </ResponsiveContainer>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
      />
    </div>
  )
}

