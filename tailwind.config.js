/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom True Metallic Gold Palette (Bypasses default yellow/amber)
        gold: {
          50: '#FDFBF7',
          100: '#FAF4EC',
          200: '#F3E5AB', // Muted cream gold
          300: '#EAD180',
          400: '#E3BE59',
          500: '#D4AF37', // True Metallic Gold (Warm, elegant)
          600: '#C5A029', // Antique Gold / Brass (Deep, non-yellow)
          700: '#A3811E',
          800: '#816315',
          900: '#5F460D', // Deep Obsidian Gold
        }
      }
    },
  },
  plugins: [],
}