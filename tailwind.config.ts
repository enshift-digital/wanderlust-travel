import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "var(--color1)" /* Buttons/CTAs */,
        color2: "var(--color2)" /* Background */,
        color3: "var(--color3)" /* Highlight Sections */,
        color4: "var(--color4)" /* Navigation Bar/Accents */,
        color5: "var(--color5)" /* Footer/Text */,
      },
    },
  },
  plugins: [],
} satisfies Config;
