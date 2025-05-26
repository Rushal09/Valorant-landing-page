// tailwind.config.js
export default {
  darkMode: 'class', // 👈 Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
