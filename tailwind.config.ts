import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
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
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                cream: "#FAF8F5",
                paper: "#FFFFFF",
                surface: {
                    DEFAULT: "#FAF8F5",
                    subtle: "#F3EFE8",
                    elevated: "#FFFFFF",
                    dark: "#101114",
                    "dark-elevated": "#181A20",
                },
                ink: {
                    DEFAULT: "#101114",
                    secondary: "#2B2D33",
                    muted: "#5E626B",
                },
                cobalt: {
                    DEFAULT: "#3B5BDB",
                    bright: "#4361EE",
                    soft: "#EEF2FF",
                },
                emeraldBrand: {
                    DEFAULT: "#0F9D68",
                    soft: "#E6F7F0",
                },
                discord: {
                    DEFAULT: "#5865F2",
                    hover: "#4752C4",
                    soft: "#EEF0FE",
                },
                peri: "#c4d0f8",
                sky: {
                    ...colors.sky,
                    DEFAULT: "#bfe3f6",
                },
                lilac: "#e2d3fa",
                mint: "#cdeecb",
                blush: "#ffd5cc",
                teal: {
                    ...colors.teal,
                    DEFAULT: "#bfe9d9",
                },
                yellow: {
                    ...colors.yellow,
                    DEFAULT: "#ffd23f",
                    butter: "#ffe9a0",
                },
            },
            fontFamily: {
                display: ["var(--font-display)", '"Plus Jakarta Sans"', "system-ui", "sans-serif"],
                sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
                mono: ["var(--font-mono)", '"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
            },
            borderRadius: {
                sm: "6px",
                md: "8px",
                lg: "12px",
                xl: "16px",
                "2xl": "20px",
                "3xl": "24px",
            },
            boxShadow: {
                hairline: "0 0 0 1px rgba(16, 17, 20, 0.08)",
                xs: "0 1px 2px rgba(16, 17, 20, 0.04)",
                soft: "0 1px 2px rgba(16, 17, 20, 0.04), 0 8px 24px rgba(16, 17, 20, 0.06)",
                card: "0 1px 2px rgba(16, 17, 20, 0.04), 0 10px 28px rgba(16, 17, 20, 0.05)",
                lift: "0 2px 6px rgba(16, 17, 20, 0.06), 0 20px 48px rgba(16, 17, 20, 0.12)",
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
                "shimmer": {
                    "0%": { transform: "translateX(-150%)" },
                    "50%": { transform: "translateX(150%)" },
                    "100%": { transform: "translateX(150%)" }
                },
                "marquee": {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-33.333333%)" }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "marquee": "marquee 25s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
