"use client"

import { useEffect } from "react"

export default function FontLoader() {
  useEffect(() => {
    // This component can be used to load the font dynamically if needed
    // For example, you could add font preloading logic here

    // Create a link preload for the font
    const fontPreload = document.createElement("link")
    fontPreload.href = "/fonts/YinpinHongmeng.ttf"
    fontPreload.rel = "preload"
    fontPreload.as = "font"
    fontPreload.type = "font/ttf"
    fontPreload.crossOrigin = "anonymous"

    document.head.appendChild(fontPreload)

    return () => {
      // Clean up
      document.head.removeChild(fontPreload)
    }
  }, [])

  return null
}

