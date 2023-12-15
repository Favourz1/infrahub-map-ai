/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3888FF",
        primaryBlack: "#2C2C2C",
        secondaryBlack: "#383839"
      },
      animation: {
        'fadeInLeft': 'fadeInLeft 0.6s 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fadeInRight': 'fadeInRight 0.6s 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fadeInUp': 'fadeInUp 0.6s 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'bounceInTop': 'bounceInTop 1.1s 1.3s ease-in-out both',
      },
      keyframes: {
        slideDown: {
          '100%': { translate: '0 100%' },
        },
        slideUp: {
          '100%': { translate: '0 -100%' },
        },
        hide: {
          '100%': { display: 'none' },
        },
        fadeInLeft: {
          '0%': { translate: '-100px', opacity: '0' },
          '100%': { translate: '0', opacity: '1' },
        },
        fadeInRight: {
          '0%': { translate: '100px', opacity: '0' },
          '100%': { translate: '0', opacity: '1' },
        },
        fadeInUp: {
          '0%': { translate: '0 100px', opacity: '0' },
          '100%': { translate: '0 0', opacity: '1' },
        },
        bounceInTop: {
          '0%': { translate: '0 -300px', opacity: '0' },
          '38%': { translate: '0 0' },
          '55%': { translate: '0 -45px' },
          '72%': { translate: '0 0' },
          '81%': { translate: '0 -15px' },
          '90%': { translate: '0 0', opacity: '1' },
          '95%': { translate: '0 -8px' },
          '100%': { translate: '0 0', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

