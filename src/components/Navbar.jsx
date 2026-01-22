
// import { Link } from "react-router-dom"
// import { useState } from "react"
// import DealerInquiryModal from "./DealerInquiryModal"

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [openDealer, setOpenDealer] = useState(false)

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,15,13,0.75)] backdrop-blur-xl border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

//           {/* LOGO + NAME */}
//           {/* <Link to="/" className="flex items-center gap-3">
//             <img
//               src="/logo.png"
//               alt="Company Logo"
//               className="h-10 w-auto"
//             />
//             <span className="text-xl font-bold tracking-wide">
//               SR CEMENT
//             </span>
//           </Link> */}

          

//           {/* LOGO + NAME */}
//             <Link
//               to="/"
//               className="flex items-center gap-2 sm:gap-3 shrink-0"
//             >
//               {/* LOGO */}
//               <img
//                 src="/logo.png"
//                 alt="SR Cement Logo"
//                 className="
//                   h-8 sm:h-9 md:h-10
//                   w-auto
//                   object-contain
//                 "
//               />

//               {/* BRAND NAME */}
//               <span
//                 className="
//                   text-lg sm:text-xl
//                   font-bold tracking-wide
//                   leading-none
//                   whitespace-nowrap
//                 "
//               >
//                 <span className="text-white">SR </span>
//                 <span className="text-[#7a1e2d]">CEMENT</span>
//               </span>
//             </Link>

//           {/* DESKTOP MENU */}
//             <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//             <li><Link className="hover:text-primary" to="/">Home</Link></li>
//             <li><Link className="hover:text-primary" to="/products">Products</Link></li>
//             <li><Link className="hover:text-primary" to="/about">About</Link></li>
//             <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
//           </ul>


//           {/* <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//             <li><Link className="hover:text-[#3cff78]" to="/">Home</Link></li>
//             <li><Link className="hover:text-[#3cff78]" to="/products">Products</Link></li>
//             <li><Link className="hover:text-[#3cff78]" to="/about">About</Link></li>
//             <li><Link className="hover:text-[#3cff78]" to="/contact">Contact</Link></li>
//           </ul> */}

//           {/* DESKTOP CTA */}
//           <button
//             onClick={() => setOpenDealer(true)}
//             className="hidden md:block btn-primary"
//           >
//             Dealer Inquiry
//           </button>

//           {/* MOBILE HAMBURGER */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setOpen(true)}
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE MENU OVERLAY */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black/60"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* MOBILE SLIDE MENU */}
//       <div
//         className={`fixed top-0 right-0 z-50 h-full w-72 bg-[rgba(10,15,13,0.95)]
//         backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="p-6 flex flex-col gap-6">

//           {/* CLOSE */}
//           <button
//             className="self-end text-xl"
//             onClick={() => setOpen(false)}
//           >
//             ✕
//           </button>

//           {/* MENU LINKS */}
//           <Link onClick={() => setOpen(false)} to="/" className="hover:text-[#3cff78]">
//             Home
//           </Link>
//           <Link onClick={() => setOpen(false)} to="/products" className="hover:text-[#3cff78]">
//             Products
//           </Link>
//           <Link onClick={() => setOpen(false)} to="/about" className="hover:text-[#3cff78]">
//             About
//           </Link>
//           <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-[#3cff78]">
//             Contact
//           </Link>

//           {/* MOBILE CTA */}
//           <button
//             onClick={() => {
//               setOpen(false)
//               setOpenDealer(true)
//             }}
//             className="btn-primary mt-4 w-full"
//           >
//             Dealer Inquiry
//           </button>
//         </div>
//       </div>

//       {/* DEALER INQUIRY MODAL */}
//       {openDealer && (
//         <DealerInquiryModal onClose={() => setOpenDealer(false)} />
//       )}
//     </>
//   )
// }







import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import DealerInquiryModal from "./DealerInquiryModal"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openDealer, setOpenDealer] = useState(false)
  const location = useLocation()

  const handleNavClick = (path) => {
    setOpen(false)

    if (location.pathname === path) {
      // same page → refresh + top
      window.location.reload()
    } else {
      // new page → scroll top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,15,13,0.75)] backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO + NAME */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <img
              src="/logo.png"
              alt="SR Cement Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />

            <span className="text-lg sm:text-xl font-bold tracking-wide leading-none whitespace-nowrap">
              <span className="text-white">SR </span>
              <span className="text-[#7a1e2d]">CEMENT</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <li>
              <Link onClick={() => handleNavClick("/")} to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => handleNavClick("/products")} to="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link onClick={() => handleNavClick("/about")} to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => handleNavClick("/contact")} to="/contact" className="hover:text-primary">
                Contact
              </Link>
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

          {/* MOBILE LINKS */}
          <Link onClick={() => handleNavClick("/")} to="/" className="hover:text-primary">
            Home
          </Link>
          <Link onClick={() => handleNavClick("/products")} to="/products" className="hover:text-primary">
            Products
          </Link>
          <Link onClick={() => handleNavClick("/about")} to="/about" className="hover:text-primary">
            About
          </Link>
          <Link onClick={() => handleNavClick("/contact")} to="/contact" className="hover:text-primary">
            Contact
          </Link>

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

      {/* DEALER INQUIRY MODAL */}
      {openDealer && (
        <DealerInquiryModal onClose={() => setOpenDealer(false)} />
      )}
    </>
  )
}
