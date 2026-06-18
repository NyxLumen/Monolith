/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mono: {
          bg: '#E2E8F0', // Base light mode skeuomorphic bg (slate-200)
          bgdark: '#1E293B', // Base dark mode skeuomorphic bg (slate-800)
        }
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
      boxShadow: {
        // Raised neumorphic state (light from top-left, shadow on bottom-right)
        'raised-light': '-6px -6px 14px rgba(255, 255, 255, 0.9), 6px 6px 14px rgba(163, 177, 198, 0.4)',
        // Recessed neumorphic state (inset shadows with matching light source)
        'recessed-light': 'inset -6px -6px 14px rgba(255, 255, 255, 0.85), inset 6px 6px 14px rgba(163, 177, 198, 0.4)',
        // Mini key raised (for small tactile keys / buttons)
        'key-raised-light': '-3px -3px 8px rgba(255, 255, 255, 0.9), 3px 3px 8px rgba(163, 177, 198, 0.35)',
        // Mini key recessed
        'key-recessed-light': 'inset -3px -3px 8px rgba(255, 255, 255, 0.85), inset 3px 3px 8px rgba(163, 177, 198, 0.35)',
        
        // Dark Mode equivalents
        'raised-dark': '-6px -6px 14px rgba(255, 255, 255, 0.05), 6px 6px 14px rgba(0, 0, 0, 0.5)',
        'recessed-dark': 'inset -6px -6px 14px rgba(255, 255, 255, 0.03), inset 6px 6px 14px rgba(0, 0, 0, 0.5)',
        'key-raised-dark': '-3px -3px 8px rgba(255, 255, 255, 0.05), 3px 3px 8px rgba(0, 0, 0, 0.5)',
        'key-recessed-dark': 'inset -3px -3px 8px rgba(255, 255, 255, 0.03), inset 3px 3px 8px rgba(0, 0, 0, 0.5)',
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
  plugins: [],
}
