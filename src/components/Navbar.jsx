import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,15,13,0.75)] backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO + NAME */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-wide">
            SR CEMENT
          </span>
        </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <li><Link className="hover:text-[#3cff78]" to="/">Home</Link></li>
            <li><Link className="hover:text-[#3cff78]" to="/products">Products</Link></li>
            <li><Link className="hover:text-[#3cff78]" to="/about">About</Link></li>
            <li><Link className="hover:text-[#3cff78]" to="/contact">Contact</Link></li>
          </ul>

          {/* DESKTOP CTA */}
          <button className="hidden md:block btn-primary">
            Get Quote
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-[rgba(10,15,13,0.95)]
        backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* CLOSE */}
          <button
            className="self-end text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* MENU LINKS */}
          <Link onClick={() => setOpen(false)} to="/" className="hover:text-[#3cff78]">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/product" className="hover:text-[#3cff78]">
            Product
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className="hover:text-[#3cff78]">
            About
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-[#3cff78]">
            Contact
          </Link>

          {/* CTA */}
          <button className="btn-primary mt-4">
            Get Quote
          </button>
        </div>
      </div>
    </>
  )
}
