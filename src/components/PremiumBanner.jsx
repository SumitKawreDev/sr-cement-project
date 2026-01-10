export default function PremiumBanner() {
  return (
    <section className="relative mt-32">
      <img
        src="/banners/industry.jpg"
        alt="Industrial Manufacturing"
        className="w-full h-[420px] object-cover"
      />

      <div className="absolute inset-0 bg-black/70 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Built With <span className="text-[#3cff78]">Industrial Strength</span>
          </h2>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            Our products are trusted across large-scale infrastructure,
            government, and industrial projects for consistent quality
            and long-term performance.
          </p>
        </div>
      </div>
    </section>
  )
}
