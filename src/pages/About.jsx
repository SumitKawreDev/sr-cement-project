import AboutSection from "../components/AboutSection"

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
      <h1 className="text-4xl font-bold">
  About <span className="text-[#3cff78]">Us</span>
</h1>

{/* GREEN ACCENT LINE */}
{/* <div className="w-16 h-[2px] bg-[#3cff78] mt-3 mb-14"></div> */}


{/* extra spacing under heading */}
<div className="h-6"></div>

<AboutSection />
    </main>
  )
}
  