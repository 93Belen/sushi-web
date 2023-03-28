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
      fontFamily: {
        'sans': 'var(--font)',
        'h1font': 'var(--h1font)'
      },
      colors: {
        myblack: '#2D2626',
        myfooter: '#453A3A',
        myred: '#E31837',
        mygreen: '#60FF42',
        mywhite: '#F6F2F6'
      }
    }
  },
  plugins: [],
}
