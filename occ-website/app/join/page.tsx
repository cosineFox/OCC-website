import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
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

          <h1 className="text-3xl font-bold mb-2">Apply to Join</h1>
          <p className="text-gray-400 mb-8">Join our community of hackers, builders, and deep thinkers.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input id="major" placeholder="Computer Science" className="bg-gray-900 border-gray-800" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <select id="year" className="w-full h-10 px-3 py-2 bg-gray-900 border border-gray-800 rounded-md">
                <option value="">Select your year</option>
                <option value="freshman">Freshman</option>
                <option value="sophomore">Sophomore</option>
                <option value="junior">Junior</option>
                <option value="senior">Senior</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">What are you interested in?</Label>
              <Textarea
                id="interests"
                placeholder="Tell us about your interests and what you hope to gain from joining OCC."
                className="bg-gray-900 border-gray-800 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience</Label>
              <Textarea
                id="experience"
                placeholder="Share any relevant projects, skills, or experiences you have."
                className="bg-gray-900 border-gray-800 min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

