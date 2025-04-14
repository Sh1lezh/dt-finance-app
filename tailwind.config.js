/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers your file types
  ],
  theme: {
    extend: {
      // Add custom theme extensions here (colors, fonts, etc.)
      colors: {
        primary: '#4F46E5', // Example primary color (Indigo)
        secondary: '#10B981', // Example secondary color (Emerald)
        accent: '#F59E0B',   // Example accent color (Amber)
        dark: '#111827',     // Example dark background
        light: '#F9FAFB',    // Example light background
      }
    },
  },
  plugins: [],
}