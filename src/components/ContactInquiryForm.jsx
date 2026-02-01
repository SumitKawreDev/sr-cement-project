import { useEffect, useState } from "react"

export default function ContactInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  })

  const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = () => {
    // Mandatory validation
    if (!form.name || !form.mobile || !form.message) {
      setError("Please fill all required fields.")
      return
    }

    setError("")

    const text = `
CONTACT INQUIRY

Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email || "N/A"}

Message:
${form.message}
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

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [waitingForWhatsApp])

  return (
    <div className="glass p-6 w-full max-w-md mx-auto">

      {!showThankYou ? (
        <>
          <h2 className="text-xl font-semibold mb-6">
            Send Inquiry
          </h2>

          <div className="space-y-4">
            <input
              name="name"
              placeholder="Your Name *"
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
              name="email"
              placeholder="Email (optional)"
              className="input"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message *"
              className="input h-24"
              onChange={handleChange}
            />

            {error && (
              <p className="text-red-700 text-sm">
                {error}
              </p>
            )}

            <button
              onClick={handleSend}
              className="btn-primary w-full"
            >
              Send Inquiry
            </button>

            {waitingForWhatsApp && (
              <p className="text-sm text-gray-700 text-center mt-2">
                Please complete sending the message on WhatsApp…
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-2xl font-bold text-[#3cff78] mb-3">
            Thank You!
          </h3>
          <p className="text-gray-700 mb-6">
            Your inquiry has been sent successfully.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="btn-primary px-10"
          >
            Got it
          </button>
        </div>
      )}
    </div>
  )
}
