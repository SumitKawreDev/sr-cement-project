export default function ContactForm() {
  return (
    <div className="glass w-full max-w-xl p-10 glow-hover">

      <h2 className="text-2xl font-bold mb-8">
        Send <span className="text-[#3cff78]">Inquiry</span>
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Name"
          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-[#3cff78]"
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-[#3cff78]"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-[#3cff78]"
        />

        <input
          type="text"
          placeholder="Product (Optional)"
          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-[#3cff78]"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-[#3cff78]"
        ></textarea>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Submit
        </button>

      </form>
    </div>
  )
}
