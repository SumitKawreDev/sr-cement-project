export default function ProductDetails({ product }) {
  if (!product) return null

  return (
    <div>
      <h2>{product.name}</h2>

      <div>{/* Large image placeholder */}</div>

      <p>{product.description}</p>

      <ul>
        {product.specs?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button>Send Inquiry</button>
    </div>
  )
}
