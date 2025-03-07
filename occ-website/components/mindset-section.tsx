"use client"
import { Code, Rocket, Layers } from "lucide-react"
import { GlowingEffect } from "./ui/glowing-effect"
import { GradientHeading } from "./ui/gradient-heading"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function MindsetSection() {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const principles = [
    {
      title: "Execution over talk",
      description:
        "We'd rather ship code and deploy projects than sit around pontificating. We focus on getting things done and creating real impact.",
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

  const headingSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  })

  const paragraphSpring = useSpring({
    opacity: inView ? 1 : 0,
    config: config.gentle,
    delay: 200,
  })

  const principleSprings = principles.map((_, index) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      delay: 300 + index * 100,
      config: config.gentle,
    }),
  )

  return (
    <section className="bg-black/90 py-24 relative" ref={inViewRef}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <animated.div style={headingSpring} className="mb-12 relative inline-block">
            <GradientHeading size="lg" variant="light" weight="bold" className="relative">
              Our Mindset
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            </GradientHeading>
            <div className="absolute inset-0 pointer-events-none">
              <GlowingEffect disabled={false} />
            </div>
          </animated.div>
        </div>

        <animated.div style={paragraphSpring} className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We're not here to do things "the way they've always been done." Our mindset is bold and unapologetic: we
            favor breaking new ground over following old habits. Here's what guides us:
          </p>
        </animated.div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <animated.div
              key={principle.title}
              style={principleSprings[index]}
              className="bg-black border border-gray-800 rounded-xl p-8 text-center hover:border-primary transition-all duration-300 relative group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {principle.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-400">{principle.description}</p>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

