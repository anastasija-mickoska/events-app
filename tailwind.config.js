module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', "sans-serif"],
      },
      colors: {
        brandBlue: "#1E90FF",
      },
    },
  },
  plugins: [],
};