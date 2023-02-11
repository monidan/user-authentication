/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand-heading': 'Mina',
      },
      boxShadow: {
        'straight': '0 0 0 2px',
        'inner-lg': 'inset 0px 0px 4px rgba(0, 0, 0, 0.25)',
        'center-sm': '0px 0px 8px 1px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
