// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#7A1E2D",      // Burgundy (logo SR)
//         primaryHover: "#8F2435",
//         cement: "#8E8E8E",       // Grey tone
//         darkbg: "#0f1211",       // Dark cement bg
//         darkbg2: "#141817",
//         lightbg: "#FAF7F2",      // Off-white (logo bg)
//       },
//       boxShadow: {
//         glow: "0 0 0 0 rgba(0,0,0,0)", // disable neon glow
//       },
//       borderRadius: {
//         xl: "14px",
//       },
//     },
//   },
//   plugins: [],
// }






/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      /* =========================
         BRAND COLORS (SR CEMENT)
      ========================= */
      colors: {
        /* PRIMARY BRAND */
        primary: "#7A1E2D",          // SR logo burgundy
        primaryHover: "#8F2435",

        /* BACKGROUNDS */
        cementBg: "#F6F2EA",         // main cement / poster bg
        cementSoft: "#FBF8F2",       // light section bg
        cementBorder: "#E2DDD4",     // soft borders

        /* TEXT */
        textMain: "#1F2933",         // industrial dark text
        textMuted: "#6B7280",

        /* UTILITY */
        whiteSoft: "#FFFFFFCC",
      },

      /* =========================
         SHADOW SYSTEM (NO NEON)
      ========================= */
      boxShadow: {
        soft: "0 6px 18px rgba(0,0,0,0.08)",
        card: "0 10px 28px rgba(0,0,0,0.10)",
        brand: "0 8px 22px rgba(122,30,45,0.30)",
      },

      /* =========================
         BORDER RADIUS
      ========================= */
      borderRadius: {
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
      },

      /* =========================
         BACKDROP BLUR
      ========================= */
      backdropBlur: {
        xs: "6px",
        sm: "10px",
        md: "14px",
      },

      /* =========================
         FONT WEIGHT TWEAK
      ========================= */
      fontWeight: {
        medium: "500",
        semibold: "600",
      },
    },
  },

  plugins: [],
};
