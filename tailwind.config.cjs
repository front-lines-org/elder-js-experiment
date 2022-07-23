module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.js', './src/**/*.ts'],
  theme: {
    primary: '#f9a1bc',
    secondary: '#ecc94b',
    fontFamily: {
      sans: ["'Libre Franklin', sans-serif"],
      serif: ["'Libre Franklin', sans-serif"],
      mono: ['ui-monospace'],
      display: ["'Libre Franklin', sans-serif"],
      body: ["'Libre Franklin', sans-serif"],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
