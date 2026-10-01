/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
            'xs': '12px', 'sm': '14px', 'base': '16px', 'lg': '18px',
            'xl': '20px', '2xl': '24px', '3xl': '28px', '4xl': '36px',
            '5xl': '48px', '6xl': '60px', '7xl': '72px',
        },
        colors: {
            blood: '#8a0303',
            night: '#0a0a0f',
            moon: '#d1d5db',
        },
        keyframes: {
            blob: {
                '0%': { transform: 'translate(0px, 0px) scale(1)' },
                '33%': { transform: 'translate(50px, -50px) scale(1.1)' },
                '66%': { transform: 'translate(-40px, 20px) scale(0.9)' },
                '100%': { transform: 'translate(0px, 0px) scale(1)' },
            },
            fog: {
                '0%': { backgroundPosition: '0% center' },
                '100%': { backgroundPosition: '200% center' }
            },
            'credit-roll': {
                '0%': { top: '100%' },
                '100%': { top: '-150%' }
            }
        }
    }
  },
  plugins: [],
}
