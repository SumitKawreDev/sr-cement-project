
import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import Industries from "../components/Industries"
import ManufacturingProcess from "../components/ManufacturingProcess"
import PremiumBanner from "../components/PremiumBanner"

export default function Home() {
  return (
    // <main className="bg-[#0a0f0d] text-gray-200">
    <main className="bg-cementBg min-h-screen">

      {/* HERO */}
      <Hero />

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-6">
        <WhyChooseUs />
      </div>

      {/* INDUSTRIES */}
      <Industries />

      {/* MANUFACTURING PROCESS */}
      <ManufacturingProcess />

      {/* PREMIUM BANNER */}
      <PremiumBanner />

    </main>
  )
}
