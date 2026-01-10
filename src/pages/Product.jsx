// import { useEffect } from "react"
// import products from "../data/products"
// import ProductCard from "../components/ProductCard"

// export default function Product() {

//   useEffect(() => {
//     // 🔥 Restore scroll position when coming back
//     const scrollY = sessionStorage.getItem("productScrollY")

//     if (scrollY) {
//       window.scrollTo({
//         top: Number(scrollY),
//         behavior: "instant"
//       })
//     }
//   }, [])

//   return (
//     <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">

//       <h1 className="text-4xl font-bold mb-16">
//         Our <span className="text-[#3cff78]">Products</span>
//       </h1>

//       <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {products.map((product, index) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             index={index}
//           />
//         ))}
//       </section>

//     </main>
//   )
// }





import products from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
      <h1 className="text-4xl font-bold mb-12">
        Our <span className="text-[#3cff78]">Products</span>
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-400">No products available</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="glass p-4 rounded-xl hover:scale-[1.02] transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold text-lg mb-2">
                {product.name}
              </h3>

              <p className="text-sm text-gray-400">
                {product.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
