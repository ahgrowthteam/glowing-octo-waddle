import type { Config } from "tailwindcss";

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
                cream: "#fcf9f5",
                paper: "#ffffff",
                ink: {
                    DEFAULT: "#111111",
                    secondary: "#2b2926",
                    muted: "#6d6a63",
                },
                peri: "#c4d0f8",
                sky: "#bfe3f6",
                lilac: "#e2d3fa",
                mint: "#cdeecb",
                blush: "#ffd5cc",
                teal: "#bfe9d9",
                yellow: {
                    DEFAULT: "#ffd23f",
                    butter: "#ffe9a0",
                },
            },
            fontFamily: {
                display: ["ui-rounded", '"SF Pro Rounded"', '"Hiragino Maru Gothic ProN"', '"Quicksand"', "system-ui", "-apple-system", "sans-serif"],
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", '"SF Pro Text"', "system-ui", "sans-serif"],
            },
            borderRadius: {
                xl: "36px",
                lg: "26px",
                md: "18px",
                sm: "12px",
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
