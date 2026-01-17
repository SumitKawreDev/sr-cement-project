// import { useEffect, useState } from "react"

// export default function OrderInquiryModal({ productName, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//     quantity: "",
//     size: "",
//     color: "",
//     duration: "",
//     message: ""
//   })

//   const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false)
//   const [showThankYou, setShowThankYou] = useState(false)

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSend = () => {
//     const text = `
// Order Inquiry
// Product: ${productName}
// Name: ${form.name}
// Mobile: ${form.mobile}
// Address: ${form.address}
// Quantity: ${form.quantity}
// Size: ${form.size}
// Color: ${form.color}
// Required in: ${form.duration} days
// Message: ${form.message}
// `

//     const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`
//     window.open(url, "_blank")

//     // Now wait for user to come back
//     setWaitingForWhatsApp(true)
//   }

//   useEffect(() => {
//     if (!waitingForWhatsApp) return

//     const handleVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         setShowThankYou(true)
//         setWaitingForWhatsApp(false)
//       }
//     }

//     document.addEventListener("visibilitychange", handleVisibilityChange)

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange)
//     }
//   }, [waitingForWhatsApp])

//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
//       <div className="glass w-full max-w-md p-6 relative">

//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-white"
//         >
//           ✕
//         </button>

//         {!showThankYou ? (
//           <>
//             <h2 className="text-xl font-semibold mb-5">
//               Order Inquiry
//             </h2>

//             <div className="space-y-3">
//               <input name="name" placeholder="Customer Name" className="input py-2" onChange={handleChange} />
//               <input name="mobile" placeholder="Mobile Number" className="input py-2" onChange={handleChange} />
//               <input name="address" placeholder="Address" className="input py-2" onChange={handleChange} />
//               <input value={productName} disabled className="input py-2 bg-black/30" />
//               <input name="quantity" placeholder="Quantity" className="input py-2" onChange={handleChange} />
//               <input name="size" placeholder="Size (if any)" className="input py-2" onChange={handleChange} />
//               <input name="color" placeholder="Color (if any)" className="input py-2" onChange={handleChange} />
//               <input name="duration" placeholder="Required in how many days" className="input py-2" onChange={handleChange} />

//               <textarea
//                 name="message"
//                 placeholder="Additional message"
//                 className="input py-2 h-20"
//                 onChange={handleChange}
//               />

//               <button
//                 onClick={handleSend}
//                 className="btn-primary w-full mt-2"
//               >
//                 Send
//               </button>

//               {waitingForWhatsApp && (
//                 <p className="text-sm text-gray-400 text-center mt-2">
//                   Please complete sending the message on WhatsApp…
//                 </p>
//               )}
//             </div>
//           </>
//         ) : (
//           /* THANK YOU */
//           <div className="text-center py-10">
//             <h3 className="text-2xl font-bold mb-3 text-[#3cff78]">
//               Thank You!
//             </h3>
//             <p className="text-gray-400 mb-6">
//               Your inquiry has been sent successfully.
//             </p>
//             <button
//               onClick={onClose}
//               className="btn-primary px-10"
//             >
//               Got it
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }






// import { useEffect, useRef, useState } from "react";

// export default function OrderInquiryModal({ productName, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//     quantity: "",
//     size: "",
//     color: "",
//     duration: "",
//     message: ""
//   });

//   const [waitingForWhatsApp, setWaitingForWhatsApp] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);

//   // Track that user actually left the page
//   const hasLeftPage = useRef(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSend = () => {
//     const text = `
// Order Inquiry
// Product: ${productName}
// Name: ${form.name}
// Mobile: ${form.mobile}
// Address: ${form.address}
// Quantity: ${form.quantity}
// Size: ${form.size}
// Color: ${form.color}
// Required in: ${form.duration} days
// Message: ${form.message}
// `;

//     const url = `https://wa.me/919407271513?text=${encodeURIComponent(text)}`;

//     // IMPORTANT: mark intent BEFORE redirect
//     setWaitingForWhatsApp(true);
//     hasLeftPage.current = false;

//     // ✅ SAME TAB redirect (MOST RELIABLE ON MOBILE)
//     window.location.href = url;
//   };

//   useEffect(() => {
//     if (!waitingForWhatsApp) return;

//     const onVisibilityChange = () => {
//       if (document.hidden) {
//         // WhatsApp opened
//         hasLeftPage.current = true;
//       } else if (hasLeftPage.current) {
//         // User returned from WhatsApp
//         setShowThankYou(true);
//         setWaitingForWhatsApp(false);
//       }
//     };

//     const onPageShow = () => {
//       // Fallback for mobile browsers
//       if (hasLeftPage.current) {
//         setShowThankYou(true);
//         setWaitingForWhatsApp(false);
//       }
//     };

//     document.addEventListener("visibilitychange", onVisibilityChange);
//     window.addEventListener("pageshow", onPageShow);

//     return () => {
//       document.removeEventListener("visibilitychange", onVisibilityChange);
//       window.removeEventListener("pageshow", onPageShow);
//     };
//   }, [waitingForWhatsApp]);

//   return (
//     <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
//       <div className="glass w-full max-w-md p-6 relative">

//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-white"
//         >
//           ✕
//         </button>

//         {!showThankYou ? (
//           <>
//             <h2 className="text-xl font-semibold mb-5">
//               Order Inquiry
//             </h2>

//             <div className="space-y-3">
//               <input name="name" placeholder="Customer Name" className="input py-2" onChange={handleChange} />
//               <input name="mobile" placeholder="Mobile Number" className="input py-2" onChange={handleChange} />
//               <input name="address" placeholder="Address" className="input py-2" onChange={handleChange} />
//               <input value={productName} disabled className="input py-2 bg-black/30" />
//               <input name="quantity" placeholder="Quantity" className="input py-2" onChange={handleChange} />
//               <input name="size" placeholder="Size (if any)" className="input py-2" onChange={handleChange} />
//               <input name="color" placeholder="Color (if any)" className="input py-2" onChange={handleChange} />
//               <input name="duration" placeholder="Required in how many days" className="input py-2" onChange={handleChange} />

//               <textarea
//                 name="message"
//                 placeholder="Additional message"
//                 className="input py-2 h-20"
//                 onChange={handleChange}
//               />

//               <button
//                 onClick={handleSend}
//                 className="btn-primary w-full mt-2"
//               >
//                 Send
//               </button>

//               {waitingForWhatsApp && (
//                 <p className="text-sm text-gray-400 text-center mt-2">
//                   Please complete sending the message on WhatsApp…
//                 </p>
//               )}
//             </div>
//           </>
//         ) : (
//           /* THANK YOU (ONLY AFTER RETURN) */
//           <div className="text-center py-10">
//             <h3 className="text-2xl font-bold mb-3 text-[#3cff78]">
//               Thank You!
//             </h3>
//             <p className="text-gray-400 mb-6">
//               Your inquiry has been sent successfully.
//             </p>
//             <button
//               onClick={onClose}
//               className="btn-primary px-10"
//             >
//               Got it
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



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

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button onClick={handleSend} className="btn-primary w-full">
                Send
              </button>

              {waitingForWhatsApp && (
                <p className="text-sm text-gray-400 text-center">
                  Please complete sending on WhatsApp…
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-[#3cff78]">Thank You!</h3>
            <p className="text-gray-400 mt-2">
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
