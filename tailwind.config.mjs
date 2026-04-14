/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f7b6c",
        "primary-hover": "#0b655a",
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
        accent: "#FF6F61",
        "primary-dark": "#064039",
        "timeline-line": "#CED4DA",
        "text-light": "#212529",
        "text-dark": "#f8f9fa",
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "card-text-light": "#6c757d",
        "card-text-dark": "#94a3b8",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        body: ["Merriweather", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
