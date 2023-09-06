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
      },
    },
    fontFamily: {
      'nature': ['Nature-Beauty'],
      'poppinsbold': ['poppinsbold'],
      'poppinsmedium': ['poppins_mediumregular'],
      'poppinsregular': ['poppinsregular'],
      'poppinssemibold': ['poppins_semiboldregular']
    }
  },
  plugins: [],
}
