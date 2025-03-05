import type React from "react"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Load the 印品鸿蒙体 font
const yinpinHongmeng = localFont({
  src: [
    {
      path: "../public/fonts/YinpinHongmeng.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yinpin-hongmeng",
})

export const metadata = {
  title: "Open Computing Club",
  description: "A student-led tech community building the next generation of technical innovators.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${yinpinHongmeng.variable} font-yinpin`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'