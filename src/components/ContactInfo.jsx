export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <p className="text-gray-400 leading-relaxed">
        For any inquiries related to products, orders, or partnerships,
        feel free to contact us using the details below.
      </p>

      <div className="glass p-5">
        <p className="text-[#3cff78] mb-1">Phone</p>
        <p className="text-gray-300">+91 98234 56789</p>
      </div>

      <div className="glass p-5">
        <p className="text-[#3cff78] mb-1">Email</p>
        <p className="text-gray-300">info@industrial.com</p>
      </div>

      <div className="glass p-5">
        <p className="text-[#3cff78] mb-1">WhatsApp</p>
        <p className="text-gray-300">+91 98234 56789</p>
      </div>

      <div className="glass p-5">
        <p className="text-[#3cff78] mb-1">Address</p>
        <p className="text-gray-300">
          Industrial Area, Balaghat, Madhya Pradesh
        </p>
      </div>

      {/* Map */}
      <div className="glass p-2">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Balaghat%20Madhya%20Pradesh&output=embed"
          className="w-full h-56 rounded-md border-0"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  )
}
