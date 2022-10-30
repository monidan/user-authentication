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
      }
    },
  },
  plugins: [],
}
