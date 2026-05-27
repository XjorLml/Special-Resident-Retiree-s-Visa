import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#C41E3A", // crimson red — CTAs, headers, key actions
          secondary: "#1E2A3A", // deep navy — grounds the red, avoids all-red fatigue
          accent: "#E8A838", // amber gold — contrast pop, badges, highlights
          muted: "#F5E6E8", // blush tint — backgrounds, hover states, cards
          danger: "#991B1B", // darker red — errors (distinct from primary)
        },
      },
    },
  },
  plugins: [],
};
export default config;
