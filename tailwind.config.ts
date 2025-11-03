import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define uma cor principal para o tema do site
        cyan: {
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        // Cor de fundo mais escura para o tema
        gray: {
          800: '#1f2937', // Para cards e header
          900: '#111827', // Para o background principal
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;