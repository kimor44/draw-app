import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        text: 'var(--text)',
        'text-40': 'var(--text-40)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'accent-40': 'var(--accent-40)',
        accentForeground: 'var(--accent-foreground)'
      },
      boxShadow: {
        navbar:
          '0 10px 15px -3px rgb(var(--shadow-navbar)), 0 4px 6px -4px rgb(var(--shadow-navbar))'
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateX(-20px) translateY(20px)' },
          '33%': { transform: 'translateX(-15px) translateY(10px)' },
          '66%': { transform: 'translateX(-10px) translateY(5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
