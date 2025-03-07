"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GlowingEffect } from "./ui/glowing-effect"
import { GradientHeading } from "./ui/gradient-heading"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function WhoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="join" className="py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Card */}
        <animated.div
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            config: config.gentle,
          })}
          className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-16"
          ref={inViewRef}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AgHl2uMXELDsh6njckYWEYFd5sfQo8.png"
            alt="Anime character illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <animated.p
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 200,
                config: config.gentle,
              })}
              className="text-sm text-primary font-mono mb-2"
            >
              // building the future
            </animated.p>
            <animated.h3
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 300,
                config: config.gentle,
              })}
              className="text-3xl font-bold"
            >
              Join our community
            </animated.h3>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <GlowingEffect disabled={false} />
          </div>
        </animated.div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-center">
            <animated.div
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                config: config.gentle,
              })}
              className="mb-12 relative inline-block"
            >
              <GradientHeading size="lg" variant="light" weight="bold" className="relative">
                Who We're Looking For
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
              </GradientHeading>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </animated.div>
          </div>

          <div className="space-y-8">
            <animated.p
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 100,
                config: config.gentle,
              })}
              className="text-lg md:text-xl text-gray-300"
            >
              We're not your average college tech club, and we know our approach isn't for everyone. If you're here just
              to pad your resume, this isn't the club for you.
            </animated.p>

            <animated.p
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 200,
                config: config.gentle,
              })}
              className="text-xl md:text-2xl text-primary font-bold"
            >
              We're looking for the hackers, builders, and deep thinkers – the students who love to tear into code and
              learn how things really work.
            </animated.p>

            <animated.p
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 300,
                config: config.gentle,
              })}
              className="text-lg md:text-xl text-gray-300"
            >
              It doesn't matter if you're a freshman who's never built a full project before or a seasoned coder with
              years under your belt. What matters is that you're hungry to learn and driven to build something real.
            </animated.p>

            <animated.p
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(10px)",
                delay: 400,
                config: config.gentle,
              })}
              className="text-lg md:text-xl text-gray-300"
            >
              If you get excited about writing an AI model from scratch or debugging a cyber defense system at 2 AM,
              you'll fit right in with our community of hardcore tech enthusiasts.
            </animated.p>
          </div>
        </div>

        <animated.div
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            delay: 500,
            config: config.gentle,
          })}
          className="flex justify-center mt-16 mb-24"
        >
          <Link href="/form?type=join">
            <Button size="lg" className="group bg-white text-black hover:bg-white/90 text-lg px-8 py-6 relative">
              <span className="relative z-10">
                Apply to Join
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </Button>
          </Link>
        </animated.div>
      </div>
    </section>
  )
}

