/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#D9D28B',    // soft_sunlit_sage_light
          accent: '#B2BD7E',   // fresh_meadow_olive_accent
          moss: '#8E9162',     // earthy_moss_secondary
          primary: '#6A795D',  // deep_forest_slate_primary
          surface: '#F9F8F0',  // warm cream-tinted surface
          charcoal: '#262D21', // high-contrast deep charcoal-forest typography
          darkBg: '#1E241B',   // deep botanical dark theme background
          darkCard: '#2C3527', // elevated dark cards
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
