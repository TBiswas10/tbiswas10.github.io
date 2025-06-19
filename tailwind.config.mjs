import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          dark: "#fff", // white in dark mode
        },
        accent: {
          DEFAULT: "#fbbf24", // yellow-400
          dark: "#fff", // white in dark mode
        },
        secondary: {
          DEFAULT: "#6366f1", // indigo-500
          dark: "#fff", // white in dark mode
        },
        background: {
          DEFAULT: "#f8fafc", // slate-50
          dark: "#000", // black in dark mode
        },
        card: {
          DEFAULT: "#ffffff", // white for cards
          dark: "#18181b", // near-black for cards in dark mode
        },
        muted: {
          DEFAULT: "#e5e7eb", // gray-200
          dark: "#27272a", // dark muted
        },
        text: {
          DEFAULT: "#1e293b", // slate-800
          dark: "#fff", // white in dark mode
        },
        "text-secondary": {
          DEFAULT: "#64748b", // slate-500
          dark: "#d1d5db", // gray-300 in dark mode
        },
      },
      fontFamily: {
        heading: ["Poppins", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
