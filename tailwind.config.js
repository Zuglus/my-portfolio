/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mv-skifer': ['MV-SKIFER', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
      colors: {
        primary: '#04061B',
        secondary: '#3624A6',
      },
    },
  },
  plugins: [],
};