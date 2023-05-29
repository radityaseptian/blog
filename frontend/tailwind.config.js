/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#2564eb',
      },
      backgroundColor: {
        primary: '#2564eb',
      },
      backgroundImage: {
        'hero-pattern': "url('./public/search.svg')",
      },
      boxShadow: {
        custom: '0px 5px 20px rgba(0,0,0,.12)',
      },
      fontFamily: {
        'poppins': 'poppins',
        'patua': 'patua',
        'source-sans': 'source-sans'
      }
    },
  },
  plugins: [],
}
