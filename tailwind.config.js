/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // preto puro
          light: '#1a1a1a',   // preto suave
          dark: '#000000',    // preto puro
        },
        secondary: {
          DEFAULT: '#1a1a1a', // cinza escuro
          light: '#333333',   // cinza médio
          dark: '#000000',    // preto puro
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#1a1a1a',
          800: '#0d0d0d',
          900: '#000000',
          950: '#000000',
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500 - verde para CTAs
          light: '#34d399',   // emerald-400
          dark: '#059669',    // emerald-600
        },
        light: '#f5f5f5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};