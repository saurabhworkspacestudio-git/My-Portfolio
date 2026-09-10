/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandDark: '#0C0D0E',
        brandCard: '#131518',
        brandBorder: 'rgba(232, 237, 242, 0.08)',
        emeraldAccent: '#10B981',
        mintAccent: '#34D399',
        accentText: '#E8EDF2',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
