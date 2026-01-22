// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//   colors: {
//     bg: "#0a0f0d",
//     card: "rgba(16,22,20,0.65)",
//     green: "#3cff78",
//     greenSoft: "rgba(60,255,120,0.18)",
//     muted: "#9ca3af"
//   },
//   boxShadow: {
//     greenGlow: "0 0 30px rgba(60,255,120,0.45)",
//     cardGlow: "0 0 20px rgba(60,255,120,0.15)"
//   },
//   backdropBlur: {
//     glass: "14px"
//   }
// }

//   },
//   plugins: []
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7A1E2D",      // Burgundy (logo SR)
        primaryHover: "#8F2435",
        cement: "#8E8E8E",       // Grey tone
        darkbg: "#0f1211",       // Dark cement bg
        darkbg2: "#141817",
        lightbg: "#FAF7F2",      // Off-white (logo bg)
      },
      boxShadow: {
        glow: "0 0 0 0 rgba(0,0,0,0)", // disable neon glow
      },
      borderRadius: {
        xl: "14px",
      },
    },
  },
  plugins: [],
}
