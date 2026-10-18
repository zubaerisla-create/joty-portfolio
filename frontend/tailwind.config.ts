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
        canvas: "#FFFCF7",
        charcoal: {
          DEFAULT: "#242126",
          muted: "#3B373E",
          subtle: "#5A5460",
        },
        "muted-gray": {
          DEFAULT: "#77717A",
          light: "#A49FA8",
          subtle: "#E4DFDE",
        },
        "pastel-pink": {
          DEFAULT: "#F6C7D8",
          soft: "#FDF0F4",
          border: "#E9B3C6",
          dark: "#B85D80",
        },
        "butter-yellow": {
          DEFAULT: "#FFF2B8",
          soft: "#FFFBEA",
          border: "#EEDAA0",
          dark: "#9E841B",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(36, 33, 38, 0.03)",
        card: "0 4px 20px -2px rgba(36, 33, 38, 0.05)",
        highlight: "0 0 0 1px rgba(36, 33, 38, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
