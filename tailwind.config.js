/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          bg: '#E2E8F0', // Base light mode skeuomorphic bg (slate-200)
        }
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'badge-scale': 'badge-scale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        'badge-scale': {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-neumorphism-ui')
  ],
}
