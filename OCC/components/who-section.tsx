"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ResponsiveSection from "./responsive-section"
import ResponsiveText from "./responsive-text"

export default function WhoSection() {
  return (
    <ResponsiveSection id="join" className="py-0">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Card */}
        <motion.div
          className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AgHl2uMXELDsh6njckYWEYFd5sfQo8.png"
            alt="Anime character illustration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <motion.p
              className="text-sm text-primary font-mono mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              // building the future
            </motion.p>
            <motion.h3
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join our community
            </motion.h3>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Who We're Looking For
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
          </motion.h2>

          <div className="space-y-8">
            <ResponsiveText size="lg" className="text-gray-300" animate>
              We're not your average college tech club, and we know our approach isn't for everyone. If you're here just
              to pad your resume, this isn't the club for you.
            </ResponsiveText>

            <ResponsiveText size="xl" className="text-primary font-bold" animate>
              We're looking for the hackers, builders, and deep thinkers – the students who love to tear into code and
              learn how things really work.
            </ResponsiveText>

            <ResponsiveText size="lg" className="text-gray-300" animate>
              It doesn't matter if you're a freshman who's never built a full project before or a seasoned coder with
              years under your belt. What matters is that you're hungry to learn and driven to build something real.
            </ResponsiveText>

            <ResponsiveText size="lg" className="text-gray-300" animate>
              If you get excited about writing an AI model from scratch or debugging a cyber defense system at 2 AM,
              you'll fit right in with our community of hardcore tech enthusiasts.
            </ResponsiveText>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="group bg-white text-black hover:bg-white/90 text-lg px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Join
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </ResponsiveSection>
  )
}

