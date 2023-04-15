/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.mdx'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.neutral,
        primary: colors.teal
      }),
      fontSize: {
        base: ['1rem', { lineHeight: '1.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
    },
  },
}
