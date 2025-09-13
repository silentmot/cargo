import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)", "system-ui", "sans-serif"],
        cabin: ["var(--font-cabin)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0B5ED7", // primary blue
          50: "#E8F0FE",
          100: "#DDE7FD",
          200: "#B9CEFB",
          300: "#94B5F9",
          400: "#709BF7",
          500: "#4B82F5",
          600: "#2E6CEB",
          700: "#1F51B5",
          800: "#173E8A",
          900: "#102B5F",
        },
        accent: {
          DEFAULT: "#10B981", // emerald
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
