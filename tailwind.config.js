const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-nolinear': 'linear-gradient(to right bottom, #000000, transparent, transparent, transparent, transparent)'
      },
    },
    fontFamily: {
      nature: ['Nature-Beauty'],
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      display: ["var(--font-calsans)"],
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
