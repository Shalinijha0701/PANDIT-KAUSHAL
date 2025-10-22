/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#FF6B35',
        primary2: '#F7931E',
        gold: '#D4AF37',
        maroon: '#800020'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'Mukta']
      }
    }
  },
  plugins: []
}
