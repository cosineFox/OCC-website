"use client"

import { Home, Users, LogIn, Code, Layers } from "lucide-react"
import { useSpring, animated, config } from "@react-spring/web"
import { useEffect, useState } from "react"
import Link from "next/link"
import { GlowingEffect } from "./ui/glowing-effect"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", url: "/", icon: Home, section: "home" },
    { name: "About", url: "#about", icon: Users, section: "about" },
    { name: "Mindset", url: "#mindset", icon: Layers, section: "mindset" },
    { name: "Join", url: "#join", icon: LogIn, section: "join" },
    { name: "SIGs", url: "#sigs", icon: Code, section: "sigs" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ["home", "about", "mindset", "join", "sigs"]
      const sectionElements = sections
        .map((id) => (id === "home" ? document.documentElement : document.getElementById(id)))
        .filter(Boolean)

      const currentPosition = window.scrollY + 100

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section) {
          const offset = section.offsetTop
          if (currentPosition >= offset) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navSpring = useSpring({
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)",
    backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
    boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 0 0 rgba(0, 0, 0, 0)",
    config: config.gentle,
  })

  return (
    <animated.nav style={navSpring} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 relative group">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">O</span>CC
              </span>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.section ? "text-primary" : "text-gray-300 hover:text-white"
                  } group`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <GlowingEffect disabled={false} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className={`p-2 rounded-md ${
                  activeSection === item.section ? "text-primary" : "text-gray-300 hover:text-white"
                } relative group`}
              >
                <item.icon className="h-5 w-5" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </animated.nav>
  )
}

