import { useEffect, useState } from "react"

export default function OrderInquiryModal({ productName, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    quantity: "",
    size: "",
    color: "",
    duration: "",
    message: "" // OPTIONAL
  })

  const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = () => {
    // ✅ Mandatory validation
    if (
      !form.name ||
      !form.mobile ||
      !form.address ||
      !form.quantity ||
      !form.size ||
      !form.color ||
      !form.duration
    ) {
      setError("Please fill all required fields.")
      return
    }

    setError("")

    const text = `
Order Inquiry
Product: ${productName}
Name: ${form.name}
Mobile: ${form.mobile}
Address: ${form.address}
Quantity: ${form.quantity}
Size: ${form.size}
Color: ${form.color}
Required in: ${form.duration} days
Message: ${form.message || "N/A"}
`

    const url = `https://wa.me/919407271513?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    setWaitingForWhatsApp(true)
  }

  useEffect(() => {
    if (!waitingForWhatsApp) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShowThankYou(true)
        setWaitingForWhatsApp(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [waitingForWhatsApp])

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="glass w-full max-w-md p-6 relative">

        <button onClick={onClose} className="absolute top-3 right-3">✕</button>

        {!showThankYou ? (
          <>
            <h2 className="text-xl font-semibold mb-5">Order Inquiry</h2>

            <div className="space-y-3">
              <input name="name" placeholder="Customer Name *" className="input" onChange={handleChange} />
              <input name="mobile" placeholder="Mobile Number *" className="input" onChange={handleChange} />
              <input name="address" placeholder="Address *" className="input" onChange={handleChange} />
              <input value={productName} disabled className="input bg-black/30" />
              <input name="quantity" placeholder="Quantity *" className="input" onChange={handleChange} />
              <input name="size" placeholder="Size *" className="input" onChange={handleChange} />
              <input name="color" placeholder="Color *" className="input" onChange={handleChange} />
              <input name="duration" placeholder="Required in days *" className="input" onChange={handleChange} />

              {/* OPTIONAL */}
              <textarea
                name="message"
                placeholder="Additional message (optional)"
                className="input h-20"
                onChange={handleChange}
              />

              {error && <p className="text-red-700 text-sm">{error}</p>}

              <button onClick={handleSend} className="btn-primary w-full">
                Send
              </button>

              {waitingForWhatsApp && (
                <p className="text-sm text-gray-700 text-center">
                  Please complete sending on WhatsApp…
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
            <p className="text-gray-700 font-semibold mt-2">
              Your inquiry has been sent successfully.
            </p>
            <button onClick={onClose} className="btn-primary mt-6">
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
