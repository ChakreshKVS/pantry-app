import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"], 
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(210, 20%, 30%)", 
        input: "hsl(210, 20%, 40%)", 
        ring: "hsl(210, 20%, 50%)", 
        background: "hsl(210, 20%, 10%)",
        foreground: "hsl(210, 20%, 95%)", 
        primary: {
          DEFAULT: "hsl(210, 100%, 60%)",
          foreground: "hsl(210, 20%, 95%)", 
        },
        secondary: {
          DEFAULT: "hsl(45, 100%, 50%)", 
          foreground: "hsl(210, 20%, 10%)", 
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 60%)", 
          foreground: "hsl(210, 20%, 95%)", 
        },
        muted: {
          DEFAULT: "hsl(210, 20%, 30%)",
          foreground: "hsl(210, 20%, 95%)", 
        },
        accent: {
          DEFAULT: "hsl(300, 100%, 60%)", 
          foreground: "hsl(210, 20%, 10%)", 
        },
        popover: {
          DEFAULT: "hsl(210, 20%, 20%)", 
          foreground: "hsl(210, 20%, 95%)", 
        },
        card: {
          DEFAULT: "hsl(210, 20%, 15%)", 
          foreground: "hsl(210, 20%, 95%)", 
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
