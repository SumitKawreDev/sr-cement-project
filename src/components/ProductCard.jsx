import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function ProductCard({ product, index }) {
  const navigate = useNavigate()

  const handleClick = () => {
    // 🔥 Save current scroll position
    sessionStorage.setItem(
      "productScrollY",
      window.scrollY.toString()
    )

    // 👉 Navigate to product details
    navigate(`/product/${product.id}`)
  }

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="
        glass
        overflow-hidden
        cursor-pointer
        glow-hover
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}
      <div className="h-44 bg-black/40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      {/* PRODUCT NAME */}
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug">
          {product.name}
        </h3>
      </div>
    </motion.div>
  )
}
