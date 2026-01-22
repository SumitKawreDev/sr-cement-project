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
