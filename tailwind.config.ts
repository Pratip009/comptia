import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // Tailwind blue-500
          DEFAULT: "#0D6EFD", // BHI brand blue
          dark: "#1E40AF", // Deep navy-blue
        },
        secondary: {
          light: "#F9FAFB",
          DEFAULT: "#FFFFFF",
          dark: "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
