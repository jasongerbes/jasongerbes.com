/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.mdx',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.neutral,
        primary: colors.teal,
        body: {
          light: colors.white,
          dark: "#121212"
        }
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
