module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#a8b5a4',
          50: '#dae7d6',
          100: '#d0ddcc',
          200: '#c6d3c2',
          300: '#bcc9b8',
          400: '#b2bfae',
          500: '#a8b5a4',
          600: '#9eab9a',
          700: '#94a190',
          800: '#8a9786',
          900: '#808d7c',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
