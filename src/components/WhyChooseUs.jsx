export default function WhyChooseUs() {
  const points = [
    {
      title: "25+ Years Experience",
      desc: "Decades of experience in manufacturing and supplying industrial and construction products."
    },
    {
      title: "Heavy Duty Products",
      desc: "Products designed to handle high load, rough usage, and long-term performance."
    },
    {
      title: "Modern Manufacturing",
      desc: "Advanced machinery and skilled workforce ensure precision and consistency."
    },
    {
      title: "Quality Assurance",
      desc: "Strict quality checks at every stage to meet industrial standards."
    }
  ]

  return (
    <section className="py-2">
      <h2 className="text-4xl font-bold mb-12">
        Why <span className="text-[#3cff78]">Choose Us</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((item, index) => (
          <div key={index} className="glass p-6 glow-hover">
            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
