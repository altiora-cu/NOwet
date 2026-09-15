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
        turquesa: {
          DEFAULT: "var(--nowet-turquesa)",
          aa: "var(--nowet-turquesa-aa)",
          900: "var(--nowet-turquesa-900)",
          100: "var(--nowet-turquesa-100)",
          50: "var(--nowet-turquesa-50)",
        },
        cian: {
          DEFAULT: "var(--nowet-cian)",
          aa: "var(--nowet-cian-aa)",
          claro: "var(--nowet-cian-claro)",
        },
        magenta: {
          DEFAULT: "var(--magenta)",
          900: "var(--magenta-900)",
          100: "var(--magenta-100)",
        },
        "verde-lima": "var(--verde-lima)",
        amarillo: "var(--amarillo)",
        wa: {
          600: "var(--wa-600)",
          500: "var(--wa-500)",
        },
        ink: {
          900: "var(--ink-900)",
          700: "var(--ink-700)",
          500: "var(--ink-500)",
        },
        line: "var(--line)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        xs: "0.9375rem",
        sm: "1.0625rem",
        base: "1.125rem",
        lg: "1.375rem",
        xl: "1.75rem",
        "2xl": "2.25rem",
        "3xl": "clamp(2.5rem, 6vw, 4rem)",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,35,74,.06), 0 2px 8px rgba(0,35,74,.05)",
        md: "0 4px 12px rgba(0,35,74,.08), 0 12px 32px rgba(0,35,74,.07)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        micro: "180ms",
        hover: "280ms",
        reveal: "600ms",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
