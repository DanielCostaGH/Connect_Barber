/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'oswaldbold': ['Oswald-Bold', 'sans-serif'],
    },
    extend: {
  
      height:{
        inp: '31.74px',
        btns: '37px',
        menu: '23.74px',
        logo: '102px',
      },
      width:{
        inp: '296px',
        btns: '147px',
        menu: '28px',
        logo: '102px',
      },
      colors: {
        
      },
    },
  },
  plugins: [],
}
