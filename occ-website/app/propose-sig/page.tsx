import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProposeSIGPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-2">Propose a New SIG</h1>
          <p className="text-gray-400 mb-8">
            Have an idea for a new Special Interest Group? We're always looking to expand!
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Your name" className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sig-name">SIG Name</Label>
              <Input id="sig-name" placeholder="e.g., WebDev, GameDev, etc." className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">SIG Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the focus and goals of this Special Interest Group."
                className="bg-gray-900 border-gray-800 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="activities">Proposed Activities</Label>
              <Textarea
                id="activities"
                placeholder="What kinds of activities, projects, or workshops would this SIG organize?"
                className="bg-gray-900 border-gray-800 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resources">Resources Needed</Label>
              <Textarea
                id="resources"
                placeholder="What resources would this SIG need to be successful?"
                className="bg-gray-900 border-gray-800 min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
              Submit Proposal
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

