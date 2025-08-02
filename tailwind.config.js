/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cores estratégicas para conversão em telecom
        primary: {
          DEFAULT: '#1e40af', // Azul Royal - Confiança e tecnologia
          light: '#3b82f6',   // Azul mais claro
          dark: '#1e3a8a',    // Azul mais escuro
        },
        accent: {
          DEFAULT: '#1e40af', // Same as primary for consistency
          light: '#3b82f6',
          dark: '#1e3a8a',
        },
        // CTAs em verde - ação segura
        cta: {
          DEFAULT: '#16a34a', // Verde confiável
          light: '#22c55e',   // Verde limão
          dark: '#15803d',    // Verde escuro
          neon: '#84cc16',    // Verde neon para destaque
        },
        // Urgência e ofertas
        urgency: {
          yellow: '#eab308',  // Amarelo para ofertas
          orange: '#f97316', // Laranja moderado
          red: '#dc2626',    // Vermelho controlado
        },
        // Neutros para limpeza visual
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Cores de apoio
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
        'cta-glow': 'cta-glow 2s ease-in-out infinite',
        'urgency-pulse': 'urgency-pulse 1.5s ease-in-out infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'cta-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(22, 163, 74, 0.3)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(22, 163, 74, 0.5)',
            transform: 'scale(1.02)' 
          },
        },
        'urgency-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};