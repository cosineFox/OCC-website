import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MindsetSection from "@/components/mindset-section"
import WhoSection from "@/components/who-section"
import SIGCarousel from "@/components/sig-carousel"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <MindsetSection />
      <SIGCarousel />
      <WhoSection />

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center" ref={inViewRef}>
          <animated.h2
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              config: config.gentle,
            })}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Ready to Join Us?
          </animated.h2>

          <animated.p
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              delay: 100,
              config: config.gentle,
            })}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Whether you want to become a member or propose a new Special Interest Group, we're excited to have you as
            part of our community.
          </animated.p>

          <animated.div
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              delay: 200,
              config: config.gentle,
            })}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/form?type=join">
              <Button size="lg" className="group bg-primary text-black hover:bg-primary/90 text-lg px-8 py-6 relative">
                <span className="relative z-10">
                  Join OCC
                  <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 pointer-events-none">
                  <GlowingEffect disabled={false} />
                </div>
              </Button>
            </Link>

            <Link href="/form?type=propose">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 relative"
              >
                <span className="relative z-10">
                  Propose a SIG
                  <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 pointer-events-none">
                  <GlowingEffect disabled={false} />
                </div>
              </Button>
            </Link>
          </animated.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

