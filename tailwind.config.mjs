/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: 'hsl(0, 0, 100%)',
      black: 'hsl(0, 0, 0%)',
      'neutral-100': 'hsl(223, 64%, 98%)',
      'neutral-400': 'hsl(220, 14%, 75%)',
      'neutral-700': 'hsl(219, 9%, 45%)',
      'neutral-900': 'hsl(220, 13%, 13%)',
      'primary-400': 'hsl(26, 100%, 55%)',
      'primary-300': 'hsl(25, 100%, 94%)',
    },
    extend: {
      fontFamily: {
        sans: ['Kumbh Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
