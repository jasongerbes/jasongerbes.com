/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.zinc,
        primary: colors.teal,
      }),
      fontSize: {
        base: ['1rem', { lineHeight: '1.75rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      screens: {
        xs: '350px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
}
