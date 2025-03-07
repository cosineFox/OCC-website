"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addLinkListeners = () => {
      const links = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true))
        link.addEventListener("mouseleave", () => setLinkHovered(false))
      })

      return () => {
        links.forEach((link) => {
          link.removeEventListener("mouseenter", () => setLinkHovered(true))
          link.removeEventListener("mouseleave", () => setLinkHovered(false))
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Add link listeners initially
    const cleanup = addLinkListeners()

    // Re-add link listeners when DOM changes
    const observer = new MutationObserver(addLinkListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cleanup()
      observer.disconnect()
    }
  }, [visible])

  const cursorSize = linkHovered ? 30 : clicked ? 12 : 16

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 1 : 0,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  )
}

