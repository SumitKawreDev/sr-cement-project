import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 FOOTER NAV HANDLER (same as navbar)
  const handleFooterClick = (path) => {
    if (location.pathname === path) {
      // same page → refresh + top
      window.scrollTo({ top: 0, behavior: "auto" });
      window.location.reload();
    } else {
      // new page → navigate + top
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <footer className="bg-[#040412] border-t border-[#E6E0D6] mt-32">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-4">
            <span className="text-white/90">SR </span>
            <span className="text-primary">CEMENT</span>
          </h2>

          <p className="text-white/65 leading-relaxed max-w-sm">
            High-quality RCC & Cement products engineered for construction,
            infrastructure, and long-lasting performance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">
            Quick Links
          </h3>

          <ul className="space-y-3 text-white/65">
            <li>
              <button
                onClick={() => handleFooterClick("/")}
                className="hover:text-primary transition"
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => handleFooterClick("/products")}
                className="hover:text-primary transition"
              >
                Products
              </button>
            </li>

            <li>
              <button
                onClick={() => handleFooterClick("/about")}
                className="hover:text-primary transition"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => handleFooterClick("/contact")}
                className="hover:text-primary transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">
            Contact
          </h3>

          <ul className="space-y-3 text-white/65">
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

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-[#E6E0D6] py-6 text-center text-sm text-white/65">
        © {new Date().getFullYear()} SR Cement. All rights reserved.
      </div>
    </footer>
  );
}

