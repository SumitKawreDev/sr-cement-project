export default function ManufacturingProcess() {
  const steps = [
    {
      title: "Raw Material Selection",
      desc: "High-grade raw materials selected for maximum durability."
    },
    {
      title: "Precision Manufacturing",
      desc: "Advanced machinery ensures strength and accuracy."
    },
    {
      title: "Quality Inspection",
      desc: "Strict quality checks at every production stage."
    },
    {
      title: "Curing & Finishing",
      desc: "Controlled curing for long-lasting performance."
    },
    {
      title: "Packaging & Dispatch",
      desc: "Safe packaging and timely delivery."
    },
    {
      title: "Safe Delivery",
      desc: "Timely and secure delivery to our clients."
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-2">
      <h2 className="text-4xl font-bold mb-16">
        Our <span className="text-primary">Manufacturing Process</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="glass glow-hover p-6">
            <span className="text-primary font-bold">
              Step {index + 1}
            </span>

            <h3 className="text-xl font-semibold mt-3 mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600 font-semibold leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
