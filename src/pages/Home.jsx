// import Hero from "../components/Hero"

// export default function Home() {
//   return (
//     <main>

//       {/* ================= HERO SECTION ================= */}
//       <Hero />

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-32">
//         <h2 className="text-3xl font-bold mb-16">
//           Why <span className="text-[#3cff78]">Choose Us</span>
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="glass p-6 glow-hover">
//             <h3 className="text-xl font-semibold mb-3">
//               Industrial Strength
//             </h3>
//             <p className="text-gray-400">
//               Built for heavy-duty industrial and construction applications
//               with long-lasting durability.
//             </p>
//           </div>

//           <div className="glass p-6 glow-hover">
//             <h3 className="text-xl font-semibold mb-3">
//               Precision Manufacturing
//             </h3>
//             <p className="text-gray-400">
//               Advanced manufacturing processes ensure consistent quality
//               and accurate dimensions.
//             </p>
//           </div>

//           <div className="glass p-6 glow-hover">
//             <h3 className="text-xl font-semibold mb-3">
//               Trusted Quality
//             </h3>
//             <p className="text-gray-400">
//               Strict quality control and testing at every stage of production.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= CALL TO ACTION ================= */}
//       <section className="py-32 bg-black/40">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h3 className="text-3xl font-bold mb-6">
//             Looking for Reliable Industrial Products?
//           </h3>

//           <p className="text-gray-400 mb-10">
//             Contact us today to get expert guidance and a customized quote
//             based on your project requirements.
//           </p>

//           <div className="flex justify-center gap-4">
//             <button className="btn-primary">
//               Get Quote
//             </button>

//             <button className="btn-secondary">
//               View Products
//             </button>
//           </div>
//         </div>
//       </section>

//     </main>
//   )
// }




// import { useNavigate } from "react-router-dom"

// export default function Home() {
//   const navigate = useNavigate()

//   return (
//     <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">

//       {/* ================= HERO SECTION ================= */}
//       <section className="grid md:grid-cols-2 gap-14 items-center">

//         {/* ---------- LEFT CONTENT ---------- */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Industrial <span className="text-[#3cff78]">Strength</span>
//             <br />
//             Built to Last
//           </h1>

//           <p className="text-gray-400 max-w-xl mb-8">
//             High-performance industrial products engineered for durability,
//             reliability, and trust.
//           </p>

//           <div className="flex gap-4 mb-12">
//             <button
//               onClick={() => navigate("/contact")}
//               className="btn-primary"
//             >
//               Get Quote
//             </button>

//             <button
//               onClick={() => navigate("/products")}
//               className="btn-secondary"
//             >
//               View Products
//             </button>
//           </div>

//           <div className="flex gap-12">
//             <div>
//               <p className="text-[#3cff78] text-xl font-bold">25+</p>
//               <p className="text-sm text-gray-400">Years Experience</p>
//             </div>

//             <div>
//               <p className="text-[#3cff78] text-xl font-bold">100%</p>
//               <p className="text-sm text-gray-400">Quality Tested</p>
//             </div>

//             <div>
//               <p className="text-[#3cff78] text-xl font-bold">ISO</p>
//               <p className="text-sm text-gray-400">Certified</p>
//             </div>
//           </div>
//         </div>

//         {/* ---------- RIGHT IMAGE ---------- */}
//         <div className="glass p-4 relative">

//           <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full
//                            bg-[#1b3b28] text-[#3cff78]">
//             Trusted Manufacturing
//           </span>

//           <img
//             src="/hero/home-hero.jpg"
//             alt="Industrial Manufacturing"
//             className="w-full h-[360px] object-cover rounded-lg
//                        transition-transform duration-500 hover:scale-[1.02]"
//           />
//         </div>

//       </section>
//     </main>
//   )
// }



import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import Industries from "../components/Industries"
import ManufacturingProcess from "../components/ManufacturingProcess"
import PremiumBanner from "../components/PremiumBanner"

export default function Home() {
  return (
    <main className="bg-[#0a0f0d] text-gray-200">

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
