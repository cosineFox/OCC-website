"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react"
import { GlowingEffect } from "./ui/glowing-effect"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"

export default function Footer() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  })

  const fadeInCopyright = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(10px)",
    delay: 200,
    config: config.gentle,
  })

  const fadeInBuiltWith = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(10px)",
    delay: 300,
    config: config.gentle,
  })

  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <animated.div ref={inViewRef} style={fadeIn} className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4 relative group">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">O</span>CC
              </span>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Open Computing Club exists to change the game – we're all about real, deep-diving, hands-on tech creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors relative group">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors relative group">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors relative group">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors relative group">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors relative group">
                  <span>Home</span>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GlowingEffect disabled={false} />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors relative group">
                  <span>About</span>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GlowingEffect disabled={false} />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/form?type=join"
                  className="text-gray-400 hover:text-primary transition-colors relative group"
                >
                  <span>Join OCC</span>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GlowingEffect disabled={false} />
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/form?type=propose"
                  className="text-gray-400 hover:text-primary transition-colors relative group"
                >
                  <span>Propose SIG</span>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GlowingEffect disabled={false} />
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-primary">Email:</span> info@opencomputingclub.org
              </li>
              <li className="text-gray-400">
                <span className="text-primary">Location:</span> Computer Science Building, Room 301
              </li>
              <li className="text-gray-400">
                <span className="text-primary">Meetings:</span> Tuesdays, 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <animated.p style={fadeInCopyright} className="text-sm text-gray-500">
            © {new Date().getFullYear()} Open Computing Club. All rights reserved.
          </animated.p>
          <animated.div style={fadeInBuiltWith} className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500">
              <span className="text-primary font-mono">{"{"}</span> Built with code, caffeine, and curiosity{" "}
              <span className="text-primary font-mono">{"}"}</span>
            </p>
          </animated.div>
        </div>
      </animated.div>
    </footer>
  )
}

