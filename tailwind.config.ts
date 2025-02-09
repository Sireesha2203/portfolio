module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend the theme with custom settings if needed
    },
  },
  plugins: [
    // Add any plugins if necessary
  ],
  // Enable smooth scrolling globally
  corePlugins: {
    scrollBehavior: true,  // This ensures scroll-behavior works for smooth scrolling
  },
}
