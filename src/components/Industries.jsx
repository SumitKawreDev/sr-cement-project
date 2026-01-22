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
    <section className="py-20 bg-[#0a0f0d]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold mb-12">
          Industries <span className="text-primary">We Serve</span>
        </h2>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="
                glass
                glow-hover
                min-h-[130px]
                flex items-center justify-center
                text-center
                px-8 py-10
                rounded-xl
              "
            >
              <p className="text-lg font-semibold leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
