"use client"

import { useEffect, useState } from "react"
import { useCursor } from "./cursor-context"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const { cursorType, cursorText } = useCursor()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct positioning without spring physics
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        {cursorType === "button" ? (
          <div className="bg-white text-black rounded-full px-3 py-0.5 text-xs whitespace-nowrap">
            {cursorText || "View"}
          </div>
        ) : (
          <div className="w-3 h-3 bg-white rounded-full" />
        )}
      </div>
      <div
        className="fixed pointer-events-none z-[9999] w-1 h-1 bg-white rounded-full mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  )
}

