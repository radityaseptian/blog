/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        secondary: '#2564eb',
      },
      backgroundColor: {
        primary: '#2564eb',
      },
      backgroundImage: {
        'hero-pattern': "url('/search.svg')",
      },
      boxShadow: {
        custom: '0px 2px 20px rgba(0,0,0,.05)',
      },
      fontFamily: {
        'poppins': 'poppins',
        'patua': 'patua',
        'source-sans': 'source-sans'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
