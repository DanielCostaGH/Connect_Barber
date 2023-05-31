/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["oswaldR", "sans-serif"],
    },
    extend: {
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      colors: {
        red: "#9D3B3B",
      },
      height: {
        inp: "31.74px",
        btns: "37px",
        menu: "23.74px",
        logo: "102px",
      },
      width: {
        inp: "296px",
        btns: "147px",
        menu: "28px",
        logo: "102px",
      },
      
    },
  },
  plugins: [],
};
