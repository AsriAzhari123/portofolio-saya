/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ["Roboto Mono"],
    },
    extend: {
      colors: {
        dark: {
          500: "#39393A",
          700: "#242526",
          800: "#1E1F20",
          900: "#18191a",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}
