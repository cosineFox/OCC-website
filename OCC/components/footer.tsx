"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react"
import ResponsiveContainer from "./responsive-container"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-900">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <motion.div
            className="md:col-span-2 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">O</span>CC
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Open Computing Club exists to change the game – we're all about real, deep-diving, hands-on tech creation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#sigs" className="text-gray-400 hover:text-primary transition-colors">
                  SIGs
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Join Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#join" className="text-gray-400 hover:text-primary transition-colors">
                  Apply
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Open Computing Club. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500">
              <span className="text-primary font-mono">{"{"}</span> Built with code, caffeine, and curiosity{" "}
              <span className="text-primary font-mono">{"}"}</span>
            </p>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </footer>
  )
}

