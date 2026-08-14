import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#070B08',
          light: '#0F1710',
          dark: '#030504',
        },
        forest: {
          glass: 'rgba(15, 43, 24, 0.70)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(20, 56, 32, 0.85)',
          deep: '#0F2B18',
        },
        lime: {
          vibrant: '#8AD74C',
          bio: '#3FAE2A',
          glow: 'rgba(138, 215, 76, 0.25)',
        },
        nature: {
          gold: '#E8D07C',
          goldGlow: 'rgba(232, 208, 124, 0.20)',
        },
        offwhite: {
          warm: '#F7F6F2',
          muted: '#A3B18A',
        },
      },
      borderRadius: {
        'btn': '18px',
        'card': '24px',
        'container': '36px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        brand: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        'serif-logo': ['var(--font-baskerville)', 'Libre Baskerville', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'lime-glow': '0 0 25px rgba(138, 215, 76, 0.35)',
        'gold-glow': '0 0 25px rgba(232, 208, 124, 0.30)',
      },
      backdropBlur: {
        '2xl': '40px',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(138, 215, 76, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(138, 215, 76, 0.5)' },
        },
      },
      animation: {
        'slideUp': 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slideIn': 'slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
