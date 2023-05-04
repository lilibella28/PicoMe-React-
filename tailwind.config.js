/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
       'google-bg': 'rgb(66, 133, 246)',
       'facebook-bg': 'rgb(59, 89, 152)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

