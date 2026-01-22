
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    mobile: "",
    product: "",
    message: "",
  });

  const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mandatory fields validation
    if (!form.name || !form.address || !form.mobile) {
      setError("Please fill all required fields.");
      return;
    }

    setError("");

    const text = `
CONTACT INQUIRY

Name: ${form.name}
Mobile: ${form.mobile}
Address: ${form.address}
Product (if any): ${form.product || "N/A"}

Message:
${form.message || "N/A"}
    `;

    const url = `https://wa.me/919407271513?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setWaitingForWhatsApp(true);
  };

  useEffect(() => {
    if (!waitingForWhatsApp) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShowThankYou(true);
        setWaitingForWhatsApp(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [waitingForWhatsApp]);

  return (
    <div className="glass p-8">
      {!showThankYou ? (
        <>
          <h2 className="text-2xl font-semibold mb-8">
            Send <span className="text-primary">Inquiry</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Name *"
              className="input"
              onChange={handleChange}
            />

            <input
              name="address"
              placeholder="Address *"
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
              name="product"
              placeholder="Product (Optional)"
              className="input"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              className="input h-32"
              onChange={handleChange}
            />

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full">
              Submit
            </button>

            {waitingForWhatsApp && (
              <p className="text-sm text-gray-400 text-center">
                Please complete sending the message on WhatsApp…
              </p>
            )}
          </form>
        </>
      ) : (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="glass w-full max-w-md p-6 relative">
            {/* CLOSE */}
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Thank You!
              </h3>
              <p className="text-gray-400 mb-6">
                Your inquiry has been sent successfully.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="btn-primary px-10"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
