"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Rocket, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveContainer from "./responsive-container"
import ResponsiveSection from "./responsive-section"
import ResponsiveGrid from "./responsive-grid"
import ResponsiveText from "./responsive-text"

export default function MindsetSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const principles = [
    {
      title: "Execution over talk",
      description: "We'd rather ship code and deploy projects than sit around pontificating.",
      icon: <Code className="h-8 w-8 text-primary" />,
    },
    {
      title: "Depth over fluff",
      description:
        "We dive into the nitty-gritty of algorithms, architectures, and systems instead of skimming the surface. Real deep learning means getting your hands dirty with the details.",
      icon: <Layers className="h-8 w-8 text-primary" />,
    },
    {
      title: "Building over networking",
      description:
        "We care more about creating something impactful (a working app, a robot, a security tool) than collecting titles or clout. It's not that we hate networking – we just think a killer project speaks louder than a stack of business cards.",
      icon: <Rocket className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <ResponsiveSection ref={ref} className="bg-black/90" withGradient centered>
      <ResponsiveContainer centered>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 border-b border-primary pb-2 inline-block text-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mindset
          </motion.h2>

          <motion.div style={{ y, opacity }}>
            <ResponsiveText className="mb-12 text-gray-300" centered>
              We're not here to do things "the way they've always been done." Our mindset is bold and unapologetic: we
              favor breaking new ground over following old habits. Here's what guides us:
            </ResponsiveText>

            <ResponsiveGrid cols={{ sm: 1, md: 3 }} animate>
              {principles.map((principle) => (
                <Card
                  key={principle.title}
                  className="bg-black/30 border-gray-800 h-full hover:border-primary transition-colors duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{principle.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-gray-400">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </ResponsiveGrid>
          </motion.div>
        </motion.div>
      </ResponsiveContainer>
    </ResponsiveSection>
  )
}

