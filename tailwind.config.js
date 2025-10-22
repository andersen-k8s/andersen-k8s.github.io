/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f172a",
          accent: "#38bdf8"
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 10% 0%, rgba(56,189,248,0.10) 0%, rgba(15,23,42,0) 60%), radial-gradient(900px 500px at 90% 20%, rgba(56,189,248,0.08) 0%, rgba(15,23,42,0) 60%)'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(2,6,23,0.45)',
      }
    },
  },
  plugins: [],
}
