/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        'straight': '0 0 0 2px',
        'inner-lg': 'inset 0px 0px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
