
export default function Hero() {
  return (
    <section className="relative pt-44 pb-36 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-[#3cff78]/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-8">
            Engineering
            <span className="text-primary block">
              Strength
            </span>
            That Endures
          </h1>

          <p className="text-gray-700 font-semibold text-lg max-w-xl leading-relaxed">
            We manufacture high-performance industrial and construction products
            built for extreme durability, structural reliability, and long-term
            use across demanding environments.
          </p>

          {/* DIVIDER */}
        <div className="mt-12 h-px w-40 bg-gradient-to-r 
                from-[#7a1e2d] to-transparent" />
    
            </div>


        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* TAG */}
        
          <div className="glass p-4">
            <img
              src="/hero/home-hero.jpg"
              alt="Industrial Manufacturing Facility"
              className="w-full h-[420px] object-cover rounded-xl
                         transition-transform duration-700
                         hover:scale-[1.03]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
