
import { useParams } from "react-router-dom"
import { useState } from "react"
import products from "../data/products"
import OrderInquiryModal from "../components/OrderInquiryModal"

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  const [showMore, setShowMore] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  if (!product) {
    return (
      <div className="text-center text-gray-400 pt-40">
        Product not found
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-6 pt-40 pb-32">
      <div className="grid md:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="glass p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-4 leading-relaxed">
            {showMore
              ? product.description
              : product.description.slice(0, 1000) + "..."}
          </p>

          {/* <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#3cff78] text-sm mb-6"
          >
            {showMore ? "View Less" : "View More"}
          </button> */}

          {/* 🔥 SPECIFICATIONS */}
          {showMore && product.specifications !== null && (
            <div className="glass p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Product Specifications
              </h3>

              <ul className="space-y-2 text-sm text-gray-300">
                <li><b>Model:</b> {product.specifications.model}</li>
                <li><b>Thickness:</b> {product.specifications.thickness}</li>
                <li><b>Area / Block:</b> {product.specifications.areaPerBlock}</li>
                <li><b>100 Sqft:</b> {product.specifications.piecesPer100Sqft}</li>
                <li><b>Weight:</b> {product.specifications.weight}</li>
              </ul>

              <div className="flex gap-3 mt-4 items-center">
                <span className="text-sm text-gray-400">
                  <b>Colors:</b>
                </span>

                {product.specifications.colors.map((c, i) => (
                  <span
                    key={i}
                    className={`w-6 h-6 rounded-full border border-white/20 ${
                      c === "red"
                        ? "bg-red-500"
                        : c === "yellow"
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setOpenForm(true)}
            className="btn-primary"
          >
            Order Inquiry
          </button>
        </div>
      </div>

      {openForm && (
        <OrderInquiryModal
          productName={product.name}
          onClose={() => setOpenForm(false)}
        />
      )}
    </main>
  )
}




// import { useParams } from "react-router-dom"
// import { useState } from "react"
// import products from "../data/products"
// import OrderInquiryModal from "../components/OrderInquiryModal"

// export default function ProductDetails() {
//   const { id } = useParams()
//   const product = products.find(p => p.id === Number(id))
//   const [openForm, setOpenForm] = useState(false)

//   if (!product) {
//     return (
//       <div className="text-center text-gray-400 pt-40">
//         Product not found
//       </div>
//     )
//   }

//   return (
//     <main className="max-w-6xl mx-auto px-6 pt-40 pb-32">
//       <div className="grid md:grid-cols-2 gap-12">

//         {/* IMAGE */}
//         <div className="glass p-4">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-lg"
//           />
//         </div>

//         {/* DETAILS */}
//         <div>
//           <h1 className="text-3xl font-bold mb-6">
//             {product.name}
//           </h1>

//           {/* FULL DESCRIPTION ALWAYS */}
//           <p className="text-gray-400 mb-8 leading-relaxed">
//             {product.description}
//           </p>

//           {/* SPECIFICATIONS (ONLY IF EXISTS) */}
//           {product.specifications && (
//             <div className="glass p-6 mb-8">
//               <h3 className="text-lg font-semibold mb-4">
//                 Product Specifications
//               </h3>

//               <ul className="space-y-2 text-sm text-gray-300">
//                 <li><b>Model:</b> {product.specifications.model}</li>
//                 <li><b>Thickness:</b> {product.specifications.thickness}</li>
//                 <li><b>Area / Block:</b> {product.specifications.areaPerBlock}</li>
//                 <li><b>100 Sqft:</b> {product.specifications.piecesPer100Sqft}</li>
//                 <li><b>Weight:</b> {product.specifications.weight}</li>
//               </ul>
//             </div>
//           )}

//           <button
//             onClick={() => setOpenForm(true)}
//             className="btn-primary"
//           >
//             Order Inquiry
//           </button>
//         </div>
//       </div>

//       {openForm && (
//         <OrderInquiryModal
//           productName={product.name}
//           onClose={() => setOpenForm(false)}
//         />
//       )}
//     </main>
//   )
// }
