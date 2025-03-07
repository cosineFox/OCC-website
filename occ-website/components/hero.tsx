"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AuroraBackground } from "./ui/aurora-background"
import { GradientHeading } from "./ui/gradient-heading"
import { GlowingEffect } from "./ui/glowing-effect"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Parallax effect for scrolling
  const scrollProps = useSpring({
    transform: `translateY(${inView ? 0 : 40}%)`,
    opacity: inView ? 1 : 0,
    config: config.slow,
  })

  // Split text animation
  const title = "Open Computing Club"
  const titleArray = title.split("")

  const titleSprings = titleArray.map((char, i) =>
    useSpring({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: 100 * i,
      config: config.gentle,
    }),
  )

  const headingSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  })

  const paragraphSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 700,
    config: config.gentle,
  })

  const buttonsSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 900,
    config: config.gentle,
  })

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      <AuroraBackground className="bg-black text-white">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <animated.div
          ref={inViewRef}
          style={scrollProps}
          className="relative z-10 flex h-full items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <animated.div className="mb-6 relative" style={headingSpring}>
              <GradientHeading size="xl" variant="light" weight="bold" className="relative">
                {titleArray.map((char, i) => (
                  <animated.span
                    key={`char-${i}`}
                    className={char === "O" || char === "C" ? "text-primary" : ""}
                    style={titleSprings[i]}
                  >
                    {char === " " ? "\u00A0" : char}
                  </animated.span>
                ))}
              </GradientHeading>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </animated.div>

            <animated.p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto" style={paragraphSpring}>
              A student-led tech community building the next generation of technical innovators.
            </animated.p>

            <animated.div className="flex flex-col sm:flex-row gap-4 justify-center" style={buttonsSpring}>
              <Link href="/form?type=join">
                <Button className="group bg-primary text-black hover:bg-primary/90 relative" size="lg">
                  <span className="relative z-10">
                    Join the Club
                    <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 pointer-events-none">
                    <GlowingEffect disabled={false} />
                  </div>
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 relative"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 pointer-events-none">
                    <GlowingEffect disabled={false} />
                  </div>
                </Button>
              </Link>
            </animated.div>
          </div>
        </animated.div>
      </AuroraBackground>
    </div>
  )
}

