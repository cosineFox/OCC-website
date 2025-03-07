"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Brain, Shield, Code, Database, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GlowingEffect } from "./ui/glowing-effect"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

interface SIG {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  details: string
}

const sigs: SIG[] = [
  {
    id: "axis",
    name: "Axis",
    description: "AI Special Interest Group",
    icon: <Brain className="h-8 w-8" />,
    details:
      "Our AI Special Interest Group focused on deep learning, machine learning, and artificial intelligence research and applications. Members work on training models, exploring ML frameworks, and building AI-powered applications.",
  },
  {
    id: "cyberhax",
    name: "CyberHax",
    description: "Cybersecurity Special Interest Group",
    icon: <Shield className="h-8 w-8" />,
    details:
      "Our Cybersecurity Special Interest Group focused on ethical hacking, network defense, and security research. Members participate in CTF competitions, security audits, and building defensive tools.",
  },
  {
    id: "webdev",
    name: "WebDev",
    description: "Web Development Special Interest Group",
    icon: <Globe className="h-8 w-8" />,
    details:
      "Our Web Development Special Interest Group focused on modern web technologies, frameworks, and best practices. Members build responsive websites, web applications, and explore the latest in frontend and backend development.",
  },
  {
    id: "dataeng",
    name: "DataEng",
    description: "Data Engineering Special Interest Group",
    icon: <Database className="h-8 w-8" />,
    details:
      "Our Data Engineering Special Interest Group focused on data pipelines, analytics, and big data technologies. Members work with databases, data visualization, and building data-driven applications.",
  },
  {
    id: "devops",
    name: "DevOps",
    description: "DevOps Special Interest Group",
    icon: <Code className="h-8 w-8" />,
    details:
      "Our DevOps Special Interest Group focused on CI/CD, infrastructure as code, and cloud technologies. Members work on automating deployment processes, containerization, and cloud-native applications.",
  },
]

export default function SIGCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sigs.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sigs.length) % sigs.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  })

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <section className="py-24 bg-black" ref={inViewRef}>
      <animated.div style={fadeIn} className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-12 relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
              Special Interest <span className="text-primary">Groups</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            </h2>
            <div className="absolute inset-0 pointer-events-none">
              <GlowingEffect disabled={false} />
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Where the real action happens. Each SIG is a focused team of students diving into high-level workshops and
            ambitious projects that push boundaries.
          </p>
        </div>

        <div className="relative overflow-hidden h-[400px] md:h-[300px] rounded-xl">
          <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-black/50 border-gray-700 hover:bg-black/80 hover:border-primary relative group"
            >
              <ChevronLeft className="h-6 w-6" />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </Button>
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Card className="w-full max-w-4xl bg-black/30 border border-gray-800 relative group">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0 p-4 bg-primary/10 rounded-full">{sigs[currentIndex].icon}</div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl font-bold mb-2">{sigs[currentIndex].name}</h3>
                      <p className="text-primary text-lg mb-4">{sigs[currentIndex].description}</p>
                      <p className="text-gray-300">{sigs[currentIndex].details}</p>
                      <div className="mt-6">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 relative">
                          <span className="relative z-10">Learn More</span>
                          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <GlowingEffect disabled={false} />
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-black/50 border-gray-700 hover:bg-black/80 hover:border-primary relative group"
            >
              <ChevronRight className="h-6 w-6" />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {sigs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-600"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-400">Want to start a new SIG? We're always looking to expand!</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 relative group">
            <span className="relative z-10">Propose a New SIG</span>
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <GlowingEffect disabled={false} />
            </div>
          </Button>
        </div>
      </animated.div>
    </section>
  )
}

