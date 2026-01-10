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
    message: ""
  })

  const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = () => {
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
Message: ${form.message}
`

    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")

    // Now wait for user to come back
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
              Order Inquiry
            </h2>

            <div className="space-y-3">
              <input name="name" placeholder="Customer Name" className="input py-2" onChange={handleChange} />
              <input name="mobile" placeholder="Mobile Number" className="input py-2" onChange={handleChange} />
              <input name="address" placeholder="Address" className="input py-2" onChange={handleChange} />
              <input value={productName} disabled className="input py-2 bg-black/30" />
              <input name="quantity" placeholder="Quantity" className="input py-2" onChange={handleChange} />
              <input name="size" placeholder="Size (if any)" className="input py-2" onChange={handleChange} />
              <input name="color" placeholder="Color (if any)" className="input py-2" onChange={handleChange} />
              <input name="duration" placeholder="Required in how many days" className="input py-2" onChange={handleChange} />

              <textarea
                name="message"
                placeholder="Additional message"
                className="input py-2 h-20"
                onChange={handleChange}
              />

              <button
                onClick={handleSend}
                className="btn-primary w-full mt-2"
              >
                Send
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
              Your inquiry has been sent successfully.
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
