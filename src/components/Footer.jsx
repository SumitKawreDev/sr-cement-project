// // import { Link } from "react-router-dom";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-[#0a0f0c] border-t border-white/10 mt-32">
// //       {/* TOP FOOTER */}
// //       <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

// //         {/* BRAND */}
// //         <div>
// //           <h2 className="text-2xl font-bold tracking-wide mb-4">
// //             SR <span className="text-[#3cff78]">CEMENT</span>
// //           </h2>

// //           <p className="text-gray-400 leading-relaxed max-w-sm">
// //             High-quality RCC & Cement products engineered for
// //             construction, infrastructure, and long-lasting performance.
// //           </p>
// //         </div>

// //         {/* QUICK LINKS */}
// //         <div>
// //           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

// //           <ul className="space-y-3 text-gray-400">
// //             <li>
// //               <Link
// //                 to="/"
// //                 className="hover:text-[#3cff78] transition"
// //               >
// //                 Home
// //               </Link>
// //             </li>

// //             <li>
// //               <Link
// //                 to="/products"
// //                 className="hover:text-[#3cff78] transition"
// //               >
// //                 Products
// //               </Link>
// //             </li>

// //             <li>
// //               <Link
// //                 to="/about"
// //                 className="hover:text-[#3cff78] transition"
// //               >
// //                 About
// //               </Link>
// //             </li>

// //             <li>
// //               <Link
// //                 to="/contact"
// //                 className="hover:text-[#3cff78] transition"
// //               >
// //                 Contact
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* CONTACT */}
// //         <div>
// //           <h3 className="text-lg font-semibold mb-4">Contact</h3>

// //           <ul className="space-y-3 text-gray-400">
// //             <li className="flex items-center gap-2">
// //               📍 <span>India</span>
// //             </li>

// //             <li className="flex items-center gap-2">
// //               📞 <span>+91 9407271513</span>
// //             </li>

// //             <li className="flex items-center gap-2">
// //               ✉️ <span>srcementbgt@gmail.com</span>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* BOTTOM BAR */}
// //       <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
// //         © {new Date().getFullYear()} SR Cement. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }







// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0e1110] border-t border-white/10 mt-32">
//       {/* TOP FOOTER */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

//         {/* BRAND */}
//         <div>
//           <h2 className="text-2xl font-bold tracking-wide mb-4">
//             SR <span className="text-primary">CEMENT</span>
//           </h2>

//           <p className="text-gray-400 leading-relaxed max-w-sm">
//             High-quality RCC & Cement products engineered for
//             construction, infrastructure, and long-lasting performance.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

//           <ul className="space-y-3 text-gray-400">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-primary transition"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/products"
//                 className="hover:text-primary transition"
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 className="hover:text-primary transition"
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:text-primary transition"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact</h3>

//           <ul className="space-y-3 text-gray-400">
//             <li className="flex items-center gap-2">
//               📍 <span>India</span>
//             </li>

//             <li className="flex items-center gap-2">
//               📞 <span>+91 9407271513</span>
//             </li>

//             <li className="flex items-center gap-2">
//               ✉️ <span>srcementbgt@gmail.com</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} SR Cement. All rights reserved.
//       </div>
//     </footer>
//   );
// }









import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  // const location = useLocation();

  // const handleFooterClick = (path) => {
  //   if (location.pathname === path) {
  //     // Same page → refresh + top
  //     window.location.reload();
  //   } else {
  //     // New page → top
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };

  return (
    <footer className="bg-[#0e1110] border-t border-white/10 mt-32">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-4">
            <span className="text-white">SR </span>
            <span className="text-[#7a1e2d]">CEMENT</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            High-quality RCC & Cement products engineered for
            construction, infrastructure, and long-lasting performance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                to="/"
                onClick={() => handleFooterClick("/")}
                className="hover:text-primary transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={() => handleFooterClick("/products")}
                className="hover:text-primary transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => handleFooterClick("/about")}
                className="hover:text-primary transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => handleFooterClick("/contact")}
                className="hover:text-primary transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              📍 <span>India</span>
            </li>

            <li className="flex items-center gap-2">
              📞 <span>+91 9407271513</span>
            </li>

            <li className="flex items-center gap-2">
              ✉️ <span>srcementbgt@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SR Cement. All rights reserved.
      </div>
    </footer>
  );
}
