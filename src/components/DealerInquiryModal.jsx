import { useEffect, useState } from "react"

export default function DealerInquiryModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    mobile: "",
    city: "",
    products: "",
    quantity: "",
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
      !form.company ||
      !form.mobile ||
      !form.city ||
      !form.products ||
      !form.quantity
    ) {
      setError("Please fill all required fields.")
      return
    }

    setError("")

    const text = `
DEALER / BULK INQUIRY

Name: ${form.name}
Company / Firm: ${form.company}
Mobile: ${form.mobile}
City: ${form.city}

Products Interested In:
${form.products}

Approx Bulk Quantity:
${form.quantity}

Message:
${form.message || "N/A"}
    `

    const url = `https://wa.me/919407271513?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    // wait until user returns from WhatsApp
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

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [waitingForWhatsApp])

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="glass w-full max-w-md p-6 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {!showThankYou ? (
          <>
            <h2 className="text-xl font-semibold mb-5">
              Dealer / Bulk Inquiry
            </h2>

            <div className="space-y-3">
              <input
                name="name"
                placeholder="Your Name *"
                className="input"
                onChange={handleChange}
              />
              <input
                name="company"
                placeholder="Company / Firm Name *"
                className="input"
                onChange={handleChange}
              />
              <input
                name="mobile"
                placeholder="Mobile Number *"
                className="input"
                onChange={handleChange}
              />
              <input
                name="city"
                placeholder="City / Location *"
                className="input"
                onChange={handleChange}
              />

              <textarea
                name="products"
                placeholder="Products you want to deal in * (e.g. Paver Block, Fly Ash Bricks)"
                className="input h-20"
                onChange={handleChange}
              />

              <input
                name="quantity"
                placeholder="Approx Monthly / Bulk Quantity *"
                className="input"
                onChange={handleChange}
              />

              {/* OPTIONAL */}
              <textarea
                name="message"
                placeholder="Additional message (optional)"
                className="input h-20"
                onChange={handleChange}
              />

              {error && (
                <p className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}

              <button
                onClick={handleSend}
                className="btn-primary w-full mt-2"
              >
                Send on WhatsApp
              </button>

              {waitingForWhatsApp && (
                <p className="text-sm text-gray-400 text-center mt-2">
                  Please complete sending the message on WhatsApp…
                </p>
              )}
            </div>
          </>
        ) : (
          /* THANK YOU */
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold mb-3 text-[#3cff78]">
              Thank You!
            </h3>
            <p className="text-gray-400 mb-6">
              Your dealer inquiry has been sent successfully.
            </p>
            <button
              onClick={onClose}
              className="btn-primary px-10"
            >
              Got it
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
