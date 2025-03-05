import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MindsetSection from "@/components/mindset-section"
import SIGsSection from "@/components/sigs-section"
import WhoSection from "@/components/who-section"
import Footer from "@/components/footer"
import FontLoader from "@/components/font-loader"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-yinpin">
      <FontLoader />
      <Navbar />
      <Hero />
      <AboutSection />
      <MindsetSection />
      <SIGsSection />
      <WhoSection />
      <Footer />
    </main>
  )
}

