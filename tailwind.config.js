 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 'var(--font)',
      colors: {
        black: '#2D2626',
        footer: '#453A3A',
        red: '#E31837',
        green: '#60FF42',
        white: '#F6F2F6'
      }
    }
  },
  plugins: [],
}
