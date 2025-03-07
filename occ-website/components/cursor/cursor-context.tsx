"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type CursorType = "default" | "button" | "link"
type CursorText = string | null

interface CursorContextType {
  cursorType: CursorType
  cursorText: CursorText
  setCursorType: (type: CursorType) => void
  setCursorText: (text: CursorText) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  cursorText: null,
  setCursorType: () => {},
  setCursorText: () => {},
})

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default")
  const [cursorText, setCursorText] = useState<CursorText>(null)

  // Add event listeners to all clickable elements
  useEffect(() => {
    const handleElementsChange = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, input[type="button"], input[type="submit"], [role="button"], .clickable',
      )

      clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          setCursorType("button")

          // Try to get text content or title for the cursor
          const text =
            element.getAttribute("title") ||
            element.getAttribute("aria-label") ||
            (element as HTMLElement).innerText?.trim().substring(0, 20) ||
            "Click"

          setCursorText(text)
        })

        element.addEventListener("mouseleave", () => {
          setCursorType("default")
          setCursorText(null)
        })
      })
    }

    // Initial setup
    handleElementsChange()

    // Setup mutation observer to watch for DOM changes
    const observer = new MutationObserver(handleElementsChange)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursorType, setCursorText }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider")
  }
  return context
}

export function useHover(type: CursorType, text?: string) {
  const { setCursorType, setCursorText } = useCursor()

  const handleMouseEnter = () => {
    setCursorType(type)
    if (text) setCursorText(text)
  }

  const handleMouseLeave = () => {
    setCursorType("default")
    setCursorText(null)
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }
}

