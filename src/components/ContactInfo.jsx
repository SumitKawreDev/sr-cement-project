export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <p className="text-gray-600 font-semibold leading-relaxed">
        For any inquiries related to products, orders, or partnerships,
        feel free to contact us using the details below.
      </p>

      <div className="glass p-5">
        <p className="text-primary font-semibold mb-1">Phone</p>
        <p className="text-gray-600 font-semibold">+91 9407271513</p>
      </div>

      <div className="glass p-5">
        <p className="text-primary font-semibold mb-1">Email</p>
        <p className="text-gray-600 font-semibold">srcementbgt@gmail.com</p>
      </div>

      <div className="glass p-5">
        <p className="text-primary font-semibold mb-1">WhatsApp</p>
        <p className="text-gray-600 font-semibold">+91 9407271513</p>
      </div>

      <div className="glass p-5">
        <p className="text-primary font-semibold mb-1">Address</p>
        <p className="text-gray-600 font-semibold">
          Suhana Nagar Chakarwahi, Malajkhand
        </p>
      </div>

      {/* Map */}
      <div className="glass p-2">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Malajkhand%20Madhya%20Pradesh&output=embed"
          className="w-full h-56 rounded-md border-0"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  )
}
