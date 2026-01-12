export default function AboutSection() {
  return (
    <section className="mt-6">

      {/* ABOUT TEXT */}
      <div className="max-w-3xl">
        <p className="text-gray-400 leading-relaxed mb-6">
          At SR CEMENT PRODUCTS, we believe that every strong
          structure begins with a strong foundation. Established with
          a vision to deliver durable, reliable, and innovative cement
          based solutions, we have become a trusted name in the
          industry.
        </p>

        <p className="text-gray-400 leading-relaxed">
          With years of experience and modern manufacturing
          practices, we specialize in producing a wide range of high
          quality products such as paver blocks, fencing poles, cover
          blocks, precast boundary walls, fly ash bricks, and many
          more. Our products are designed to meet the highest
          standards of strength, precision, and sustainability.
        </p>

        <p className="text-gray-400 leading-relaxed">
          At SR CEMENT PRODUCTS, we don’t just manufacture
          cement items—we create solutions that add value to every
          project. Whether it’s residential, commercial, or industrial,
          we are here to help you “Make a Concrete Decision.”
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
