/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'min': '1535px'},

      'xl': {'min': '1279px'},

      'lg': {'min': '1023px'},

      'md': {'min': '767px'},

      'sm': {'min': '639px'},
    }
  },
  plugins: [],
}