"use client"

import { useRef } from "react"
import { Card, CardContent, CardDrawer } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GradientHeading } from "./ui/gradient-heading"
import { GlowingEffect } from "./ui/glowing-effect"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Parallax effect for the image
  const imageProps = useSpring({
    transform: `translateY(${inView ? 0 : 100}px)`,
    config: config.slow,
  })

  // Parallax effect for the gradient overlay
  const overlayProps = useSpring({
    transform: `translateY(${inView ? -30 : 0}px)`,
    opacity: inView ? 0.7 : 1,
    config: config.slow,
  })

  return (
    <section id="about" ref={ref} className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <animated.div ref={inViewRef} style={imageProps} className="relative rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://cdn.midjourney.com/1859afc8-cf73-4f44-9330-bdf16570c6bb/0_0.png"
                alt="Open Computing Club"
                className="w-full aspect-video object-cover rounded-lg"
              />
              <animated.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                style={overlayProps}
              ></animated.div>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </div>
          </animated.div>

          <div>
            <div className="text-center md:text-left">
              <animated.div
                style={useSpring({
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(20px)" },
                  config: config.gentle,
                })}
                className="mb-12 relative"
              >
                <GradientHeading size="lg" variant="light" weight="bold" className="relative">
                  Why We Exist
                </GradientHeading>
                <div className="absolute inset-0 pointer-events-none">
                  <GlowingEffect disabled={false} />
                </div>
              </animated.div>
            </div>

            <animated.div
              style={useSpring({
                from: { opacity: 0 },
                to: { opacity: inView ? 1 : 0 },
                delay: 200,
                config: config.gentle,
              })}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-gray-300">
                Most student tech clubs stick to superficial workshops, résumé-padding projects, and too much
                bureaucracy. They talk about code and technology but rarely build anything meaningful. That's not how we
                roll.
              </p>

              <p className="text-xl md:text-2xl text-primary font-bold">
                Open Computing Club exists to change the game – we're all about real, deep-diving, hands-on tech
                creation.
              </p>

              <div className="pt-4">
                <Link href="/form?type=propose">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 relative">
                    <span className="relative z-10">
                      Propose a SIG
                      <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 pointer-events-none">
                      <GlowingEffect disabled={false} />
                    </div>
                  </Button>
                </Link>
              </div>
            </animated.div>
          </div>
        </div>

        {/* How We Work Section */}
        <div>
          <div className="text-center">
            <animated.div
              style={useSpring({
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(20px)" },
                config: config.gentle,
              })}
              className="mb-12 relative inline-block"
            >
              <GradientHeading size="lg" variant="light" weight="bold" className="relative">
                How We Work
              </GradientHeading>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </animated.div>
          </div>

          <animated.div
            style={useSpring({
              from: { opacity: 0 },
              to: { opacity: inView ? 1 : 0 },
              delay: 200,
              config: config.gentle,
            })}
            className="text-center space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We keep things simple so you can focus on what matters (learning and building cool stuff). Our structure
              has two sides:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <animated.div
                style={useSpring({
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(20px)" },
                  delay: 300,
                  config: config.gentle,
                })}
              >
                <Card className="bg-black/30 border border-gray-800 rounded-lg hover:border-primary/50 transition-all duration-300 relative group">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">The Main Body</h3>
                    <p className="text-gray-300">
                      This is the operations crew that handles structured events like Dean's List Awards ceremonies, CIS
                      bootcamps, and other official duties. They take care of all the paperwork and logistics behind the
                      scenes, making sure the club runs smoothly without bogging everyone down in admin work.
                    </p>
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <GlowingEffect disabled={false} />
                    </div>
                  </CardContent>
                </Card>
              </animated.div>

              <animated.div
                style={useSpring({
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(20px)" },
                  delay: 400,
                  config: config.gentle,
                })}
              >
                <Card className="bg-black/30 border border-gray-800 rounded-lg hover:border-primary/50 transition-all duration-300 relative group">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Special Interest Groups (SIGs)</h3>
                    <p className="text-gray-300">
                      These are where the real action happens. Each SIG is a focused team of students diving into
                      high-level workshops and ambitious projects that push boundaries. Right now we have SIGs for AI
                      (Artificial Intelligence) and Cybersecurity – imagine a group training deep learning models or
                      experimenting with ethical hacking and network defense. (And this is just the start – we'll launch
                      more SIGs as interest grows.)
                    </p>
                    <CardDrawer
                      title="Join a Special Interest Group"
                      description="Express your interest in joining one of our Special Interest Groups. We currently have groups focused on AI and Cybersecurity."
                      buttonText="Express Interest"
                    />
                  </CardContent>
                </Card>
              </animated.div>
            </div>

            <animated.p
              style={useSpring({
                from: { opacity: 0 },
                to: { opacity: inView ? 1 : 0 },
                delay: 500,
                config: config.gentle,
              })}
              className="text-lg md:text-xl text-gray-300 pt-4 max-w-3xl mx-auto"
            >
              You can be part of either side or both, depending on your interests and skill level. No matter where you
              contribute, the standard is simple: go all in and do it well, or don't do it at all.
            </animated.p>
          </animated.div>
        </div>
      </div>
    </section>
  )
}

