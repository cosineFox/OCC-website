"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Brain, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useHover } from "./cursor/cursor-context"

type SIG = {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  members: {
    name: string
    role: string
    avatar: string
  }[]
}

const sigs: SIG[] = [
  {
    id: "axis",
    name: "Axis",
    description:
      "Our AI Special Interest Group focused on deep learning, machine learning, and artificial intelligence research and applications.",
    icon: <Brain className="h-8 w-8" />,
    members: [
      {
        name: "Alex Chen",
        role: "Lead",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Maya Patel",
        role: "ML Engineer",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Jamal Washington",
        role: "Data Scientist",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Sophie Kim",
        role: "Research",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
    ],
  },
  {
    id: "cyberhax",
    name: "CyberHax",
    description:
      "Our Cybersecurity Special Interest Group focused on ethical hacking, network defense, and security research.",
    icon: <Shield className="h-8 w-8" />,
    members: [
      {
        name: "Eliot Spencer",
        role: "Lead",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Zoe Martinez",
        role: "Penetration Tester",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Kai Tanaka",
        role: "Network Security",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
      {
        name: "Olivia Johnson",
        role: "Cryptography",
        avatar: "https://cdn.midjourney.com/c64c3d71-5c01-4d02-8cc2-866ea5003cc4/0_0.jpeg",
      },
    ],
  },
]

export default function SIGsSection() {
  // Call all hooks at the top level
  const proposeHover = useHover("button", "Propose SIG")

  // Pre-create all the hover handlers for SIGs
  const axis = useHover("button", "View Axis")
  const cyberhax = useHover("button", "View CyberHax")

  // Member hover handlers - we'll access them by index
  const memberHovers = [
    useHover("button", "Alex Chen"),
    useHover("button", "Maya Patel"),
    useHover("button", "Jamal Washington"),
    useHover("button", "Sophie Kim"),
    useHover("button", "Eliot Spencer"),
    useHover("button", "Zoe Martinez"),
    useHover("button", "Kai Tanaka"),
    useHover("button", "Olivia Johnson"),
  ]

  // Helper function to get the right hover props for a member
  const getMemberHover = (sigIndex: number, memberIndex: number) => {
    const baseIndex = sigIndex === 0 ? 0 : 4 // First 4 members are from first SIG
    return memberHovers[baseIndex + memberIndex]
  }

  return (
    <section id="sigs" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Special Interest <span className="text-primary">Groups</span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Where the real action happens. Each SIG is a focused team of students diving into high-level workshops and
            ambitious projects that push boundaries.
          </motion.p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {sigs.map((sig, index) => {
            // Use the pre-created hover handlers
            const sigHover = index === 0 ? axis : cyberhax

            return (
              <motion.div
                key={sig.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={sig.id}
                  className="border border-gray-800 bg-black/30 rounded-md overflow-hidden"
                  {...sigHover}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-black/50 rounded-full text-primary">{sig.icon}</div>
                      <h3 className="text-xl font-bold">{sig.name}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-6 text-gray-300 text-center">{sig.description}</p>

                      <h4 className="text-lg font-semibold mb-4 text-primary text-center">Members</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {sig.members.map((member, i) => {
                          return (
                            <motion.div
                              key={member.name}
                              className="flex flex-col items-center text-center"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                              {...getMemberHover(index, i)}
                            >
                              <Avatar className="w-16 h-16 border-2 border-primary">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <h5 className="font-medium mt-2">{member.name}</h5>
                              <Badge variant="outline" className="mt-1 text-gray-400 border-gray-700">
                                {member.role}
                              </Badge>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            )
          })}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-400">Want to start a new SIG? We're always looking to expand!</p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...proposeHover}
          >
            Propose a New SIG
          </Button>
        </div>
      </div>
    </section>
  )
}

