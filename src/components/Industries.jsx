export default function Industries() {
  const industries = [
    "Infrastructure Projects",
    "Road & Highway Construction",
    "Residential & Commercial Buildings",
    "Industrial Manufacturing",
    "Government & Municipal Projects",
    "Agriculture & Rural Development"
  ]

  return (
    <section className="py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold mb-14">
          <span className="text-[#1F2933]">Industries </span>
          <span className="text-[#7A1E2D]">We Serve</span>
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                glass
                glow-hover
                min-h-[130px]
                flex items-center justify-center
                font-semibold
                text-center
                text-lg 
                px-8 py-10
                rounded-xl
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
