"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import * as React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { z } from "zod"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { useSpring, animated, config } from "@react-spring/web"
// Import useInView from react-intersection-observer, not from React
import { useInView } from "react-intersection-observer"

// Import the required components from @base-ui-components/react
import { Menu } from "@base-ui-components/react/menu"
import { Field } from "@base-ui-components/react/field"
import { Form } from "@base-ui-components/react/form"

// Form schemas
const joinSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  major: z.string().min(1, "Major is required"),
  year: z.string().min(1, "Year is required"),
  interests: z.string().min(10, "Please tell us more about your interests"),
  experience: z.string().optional(),
})

const proposeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  sigName: z.string().min(1, "SIG name is required"),
  description: z.string().min(20, "Please provide a more detailed description"),
  activities: z.string().min(20, "Please describe some proposed activities"),
  resources: z.string().optional(),
})

function ArrowSvg(props: React.ComponentProps<"svg">) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  )
}

export default function FormPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [formType, setFormType] = React.useState(searchParams.get("type") || "join")
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  // Use the imported useInView hook, not React.useInView
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  })

  // Update URL when form type changes
  React.useEffect(() => {
    router.push(`/form?type=${formType}`)
  }, [formType, router])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    // Validate based on form type
    const schema = formType === "join" ? joinSchema : proposeSchema
    const result = schema.safeParse(data)

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors)
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <animated.div ref={inViewRef} style={fadeIn} className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-between items-center">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-primary relative group">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to home</span>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <GlowingEffect disabled={false} />
              </div>
            </Link>

            {/* Form Type Selector Menu */}
            <Menu.Root>
              <Menu.Trigger className="flex h-10 items-center justify-center gap-1.5 rounded-md border border-gray-700 bg-gray-900 px-3.5 text-base font-medium text-white select-none hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-primary relative group">
                {formType === "join" ? "Join OCC" : "Propose SIG"} <ChevronDown className="-mr-1" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowingEffect disabled={false} />
                </div>
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner className="outline-none" sideOffset={8}>
                  <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-gray-900 py-1 text-white shadow-lg shadow-black/20 outline outline-1 outline-gray-700 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 z-50">
                    <Menu.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                      <ArrowSvg />
                    </Menu.Arrow>
                    <Menu.Item
                      className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-primary"
                      onClick={() => setFormType("join")}
                    >
                      Join OCC
                    </Menu.Item>
                    <Menu.Item
                      className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-primary"
                      onClick={() => setFormType("propose")}
                    >
                      Propose a SIG
                    </Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
          </div>

          <div className="mb-6">
            <GradientHeading size="lg" variant="light" weight="bold" className="mb-2">
              {formType === "join" ? "Apply to Join" : "Propose a New SIG"}
            </GradientHeading>
            <p className="text-gray-400">
              {formType === "join"
                ? "Join our community of hackers, builders, and deep thinkers."
                : "Have an idea for a new Special Interest Group? We're always looking to expand!"}
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-green-900/20 border border-green-700 rounded-lg p-6 text-center relative group">
              <h3 className="text-xl font-bold text-green-400 mb-2">Submission Successful!</h3>
              <p className="text-gray-300 mb-6">
                {formType === "join"
                  ? "Thank you for applying to join OCC. We'll review your application and get back to you soon."
                  : "Thank you for proposing a new SIG. We'll review your proposal and get back to you soon."}
              </p>
              <Button
                onClick={() => {
                  setIsSuccess(false)
                  router.push("/")
                }}
                className="bg-primary text-black hover:bg-primary/90 relative"
              >
                <span className="relative z-10">Return to Home</span>
                <div className="absolute inset-0 pointer-events-none">
                  <GlowingEffect disabled={false} />
                </div>
              </Button>
              <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} />
              </div>
            </div>
          ) : (
            <Form className="space-y-6" errors={errors} onClearErrors={() => setErrors({})} onSubmit={handleSubmit}>
              {/* Common Fields */}
              <Field.Root name="name" className="flex flex-col items-start gap-1">
                <Field.Label className="text-sm font-medium text-gray-300">Full Name</Field.Label>
                <Field.Control
                  placeholder="Your name"
                  className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 pl-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                />
                <Field.Error className="text-sm text-red-400" />
              </Field.Root>

              <Field.Root name="email" className="flex flex-col items-start gap-1">
                <Field.Label className="text-sm font-medium text-gray-300">Email</Field.Label>
                <Field.Control
                  type="email"
                  placeholder="you@example.com"
                  className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 pl-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                />
                <Field.Error className="text-sm text-red-400" />
              </Field.Root>

              {/* Join OCC Fields */}
              {formType === "join" && (
                <>
                  <Field.Root name="major" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">Major</Field.Label>
                    <Field.Control
                      placeholder="Computer Science"
                      className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 pl-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="year" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">Year</Field.Label>
                    <Field.Select className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 pl-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary">
                      <option value="">Select your year</option>
                      <option value="freshman">Freshman</option>
                      <option value="sophomore">Sophomore</option>
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                      <option value="graduate">Graduate</option>
                    </Field.Select>
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="interests" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">What are you interested in?</Field.Label>
                    <Field.TextArea
                      placeholder="Tell us about your interests and what you hope to gain from joining OCC."
                      className="min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-900 p-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="experience" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">Relevant Experience</Field.Label>
                    <Field.TextArea
                      placeholder="Share any relevant projects, skills, or experiences you have."
                      className="min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-900 p-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>
                </>
              )}

              {/* Propose SIG Fields */}
              {formType === "propose" && (
                <>
                  <Field.Root name="sigName" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">SIG Name</Field.Label>
                    <Field.Control
                      placeholder="e.g., WebDev, GameDev, etc."
                      className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 pl-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="description" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">SIG Description</Field.Label>
                    <Field.TextArea
                      placeholder="Describe the focus and goals of this Special Interest Group."
                      className="min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-900 p-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="activities" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">Proposed Activities</Field.Label>
                    <Field.TextArea
                      placeholder="What kinds of activities, projects, or workshops would this SIG organize?"
                      className="min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-900 p-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>

                  <Field.Root name="resources" className="flex flex-col items-start gap-1">
                    <Field.Label className="text-sm font-medium text-gray-300">Resources Needed</Field.Label>
                    <Field.TextArea
                      placeholder="What resources would this SIG need to be successful?"
                      className="min-h-[100px] w-full rounded-md border border-gray-700 bg-gray-900 p-3.5 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
                    />
                    <Field.Error className="text-sm text-red-400" />
                  </Field.Root>
                </>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black hover:bg-primary/90 h-12 font-medium relative"
              >
                <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                <div className="absolute inset-0 pointer-events-none">
                  <GlowingEffect disabled={false} />
                </div>
              </Button>
            </Form>
          )}
        </div>
      </animated.div>
    </div>
  )
}

