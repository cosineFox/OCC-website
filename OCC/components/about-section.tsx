"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveContainer from "./responsive-container"
import ResponsiveSection from "./responsive-section"
import ResponsiveText from "./responsive-text"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <ResponsiveSection id="about" ref={ref} centered>
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
            Why We Exist
          </motion.h2>

          <motion.div style={{ y: y1, opacity }} className="mb-16 text-center">
            <ResponsiveText className="mb-6 text-gray-300" centered>
              Most student tech clubs stick to superficial workshops, résumé-padding projects, and too much bureaucracy.
              They talk about code and technology but rarely build anything meaningful. That's not how we roll.
            </ResponsiveText>
            <ResponsiveText className="text-primary font-bold" centered>
              Open Computing Club exists to change the game – we're all about real, deep-diving, hands-on tech creation.
            </ResponsiveText>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12 border-b border-primary pb-2 inline-block text-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How We Work
          </motion.h2>

          <motion.div style={{ y: y2, opacity }} className="mb-16">
            <ResponsiveText className="mb-6 text-gray-300" centered>
              We keep things simple so you can focus on what matters (learning and building cool stuff). Our structure
              has two sides:
            </ResponsiveText>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/30 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-primary">The Main Body</h3>
                    <p className="text-gray-300">
                      This is the operations crew that handles structured events like Dean's List Awards ceremonies, CIS
                      bootcamps, and other official duties. They take care of all the paperwork and logistics behind the
                      scenes, making sure the club runs smoothly without bogging everyone down in admin work.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/30 border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 text-primary">Special Interest Groups (SIGs)</h3>
                    <p className="text-gray-300">
                      These are where the real action happens. Each SIG is a focused team of students diving into
                      high-level workshops and ambitious projects that push boundaries. Right now we have SIGs for AI
                      (Artificial Intelligence) and Cybersecurity – imagine a group training deep learning models or
                      experimenting with ethical hacking and network defense. (And this is just the start – we'll launch
                      more SIGs as interest grows.)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <ResponsiveText className="mt-6 text-gray-300" centered>
              You can be part of either side or both, depending on your interests and skill level. No matter where you
              contribute, the standard is simple: go all in and do it well, or don't do it at all.
            </ResponsiveText>
          </motion.div>
        </motion.div>
      </ResponsiveContainer>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
    </ResponsiveSection>
  )
}

