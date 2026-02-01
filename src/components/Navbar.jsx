import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import DealerInquiryModal from "./DealerInquiryModal"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openDealer, setOpenDealer] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // 🔹 NAV CLICK HANDLER (TOP + REFRESH LOGIC)
  const handleNavClick = (path) => {
    setOpen(false)

    if (location.pathname === path) {
      // same page → force refresh + top
      window.scrollTo({ top: 0, behavior: "auto" })
      window.location.reload()
    } else {
      // new page → navigate + top
      navigate(path)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 50)
    }
  }
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO + BRAND */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
             <img
              src="/logo.png"
              alt="SR Cement"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8  font-semibold text-sm text-muted">
            <li>
              <button onClick={() => handleNavClick("/")} className="hover:text-primary">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("/products")} className="hover:text-primary">
                Products
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("/about")} className="hover:text-primary">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("/contact")} className="hover:text-primary">
                Contact
              </button>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <button
            onClick={() => setOpenDealer(true)}
            className="hidden md:block btn-primary"
          >
            Dealer Inquiry
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl text-text"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[#F6F2EA]/5 backdrop-blur-xl backdrop-saturate-150"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
          className={`fixed top-0 right-0 z-50 h-full w-72
          bg-[#F6F2EA]/95 backdrop-blur-lg
          border-l border-gray-200 shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
        <div className="p-6 flex flex-col gap-6 text-text">

          {/* CLOSE */}
          <button
            className="self-end text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* MOBILE LINKS */}
          <button onClick={() => handleNavClick("/")} className="text-left hover:text-primary">
            Home
          </button>
          <button onClick={() => handleNavClick("/products")} className="text-left hover:text-primary">
            Products
          </button>
          <button onClick={() => handleNavClick("/about")} className="text-left hover:text-primary">
            About
          </button>
          <button onClick={() => handleNavClick("/contact")} className="text-left hover:text-primary">
            Contact
          </button>

          {/* MOBILE CTA */}
          <button
            onClick={() => {
              setOpen(false)
              setOpenDealer(true)
            }}
            className="btn-primary mt-4 w-full"
          >
            Dealer Inquiry
          </button>
        </div>
      </div>

      {/* ================= DEALER MODAL ================= */}
      {openDealer && (
        <DealerInquiryModal onClose={() => setOpenDealer(false)} />
      )}
    </>
  )
}
