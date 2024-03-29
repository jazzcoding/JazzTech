/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#3CA9FD",
        secondary: "#71C1FF",
        tertiary: "#97D2FF",
        light: "#CCE9FF",
        dark: "#313131",
        darkLight: "#7c7f82",
        darkBG: "#121212",
        lightBG: "#f5f5f5",
      },
      colors: {
        primary: "#3CA9FD",
        secondary: "#71C1FF",
        tertiary: "#97D2FF",
        light: "#CCE9FF",
        dark: "#313131",
        darkLight: "#7c7f82",
        darkBG: "#111111",
        lightBG: "#f5f5f5",
      },
      animation: {
        slide: "slide 1s ease-in-out alternate infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
