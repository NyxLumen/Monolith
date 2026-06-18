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
          bg: '#F4F4F6', // Base premium soft-gray mockup bg
          text: '#1F1F1F',
          muted: '#8A8A8E'
        }
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neo': '10px 10px 20px #cfcfd1, -10px -10px 20px #ffffff',
        'neo-sm': '5px 5px 10px #cfcfd1, -5px -5px 10px #ffffff',
        'neo-inset': 'inset 5px 5px 10px #cfcfd1, inset -5px -5px 10px #ffffff',
        'neo-inset-sm': 'inset 3px 3px 6px #cfcfd1, inset -3px -3px 6px #ffffff',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
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
  plugins: [],
}
