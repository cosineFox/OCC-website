"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="win95-navbar">
      <div className="win95-logo">OCC</div>

      <Link href="/" className={`win95-nav-btn ${pathname === "/" ? "active" : ""}`}>
        🏠 Home
      </Link>

      <Link href="/projects" className={`win95-nav-btn ${pathname === "/projects" ? "active" : ""}`}>
        💻 Projects
      </Link>

      <Link href="/archives" className={`win95-nav-btn ${pathname === "/archives" ? "active" : ""}`}>
        📁 Archives
      </Link>

      <Link href="/about" className={`win95-nav-btn ${pathname === "/about" ? "active" : ""}`}>
        ℹ️ About
      </Link>

      <div style={{ marginLeft: "auto", fontSize: "11px", color: "var(--win95-black)" }}>UTP Perak | Est. 2024</div>
    </nav>
  )
}
