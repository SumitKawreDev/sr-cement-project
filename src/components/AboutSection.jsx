export default function AboutSection() {
  return (
    <section className="mt-6">

      {/* ABOUT TEXT */}
      <div className="max-w-3xl">
        <p className="text-gray-400 leading-relaxed mb-6">
          We are a trusted industrial manufacturing company with decades of
          experience delivering durable, high-performance products for
          demanding industries.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Our focus is on precision engineering, consistent quality, and
          long-term reliability that our clients can depend on.
        </p>
      </div>

      {/* SPACE AFTER ABOUT TEXT */}
      <div className="h-12"></div>

      {/* HORIZONTAL CARDS */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="glass p-6 glow-hover transition-all hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-2">
            25+ Years Experience
          </h3>
          <p className="text-gray-400 text-sm">
            Proven expertise in industrial manufacturing.
          </p>
        </div>

        <div className="glass p-6 glow-hover transition-all hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-2">
            Modern Manufacturing
          </h3>
          <p className="text-gray-400 text-sm">
            Advanced machinery and skilled workforce.
          </p>
        </div>

        <div className="glass p-6 glow-hover transition-all hover:-translate-y-1">
          <h3 className="text-lg font-semibold mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-400 text-sm">
            Strict quality checks at every production stage.
          </p>
        </div>

      </div>
    </section>
  )
}
