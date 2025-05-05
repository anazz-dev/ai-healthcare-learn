import type { Config } from "tailwindcss";
const typography = require("@tailwindcss/typography");

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  		fontFamily: {
        // Ensure sans-serif fonts are prioritized for readability
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "Roboto", "\"Helvetica Neue\"", "Arial", "\"Noto Sans\"", "sans-serif", "\"Apple Color Emoji\"", "\"Segoe UI Emoji\"", "\"Segoe UI Symbol\"", "\"Noto Color Emoji\""],
      },
  		fontSize: {
        // Slightly larger base font size for better readability
        sm: ["0.875rem", { lineHeight: "1.4rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }], // Increased line height
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
  		 typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground / 0.9"), // Slightly less than pure black/white
            maxWidth: "75ch", // Optimal line length for readability
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.DEFAULT / 0.8"),
              },
              textDecoration: "none", // Cleaner look
            },
            h1: {
              fontWeight: "700",
              color: theme("colors.foreground"),
            },
            h2: {
              fontWeight: "600",
              color: theme("colors.foreground"),
              marginTop: "2em",
              marginBottom: "1em",
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.foreground"),
              marginTop: "1.6em",
              marginBottom: "0.6em",
            },
            strong: {
              color: theme("colors.foreground"),
              fontWeight: "600",
            },
            blockquote: {
              borderLeftColor: theme("colors.border"),
              color: theme("colors.muted.foreground"),
              fontStyle: "normal",
            },
            code: {
              color: theme("colors.primary.DEFAULT"),
              backgroundColor: theme("colors.muted.DEFAULT"),
              padding: "0.2em 0.4em",
              borderRadius: theme("borderRadius.sm"),
              fontWeight: "400",
            },
            "pre code": {
              color: "inherit",
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              fontWeight: "inherit",
            },
            pre: {
              backgroundColor: theme("colors.muted.DEFAULT"),
              borderRadius: theme("borderRadius.md"),
              padding: theme("spacing.4"),
            },
            // Add more customizations as needed based on Material Design / Google Blog style
          },
        },
      }),
  		 extend: {
  			colors: {
  				background: "hsl(var(--background))",
  				foreground: "hsl(var(--foreground))",
  				// ... (rest of the existing colors)
          sidebar: {
  				DEFAULT: "hsl(var(--sidebar-background))",
  				foreground: "hsl(var(--sidebar-foreground))",
  				primary: "hsl(var(--sidebar-primary))",
  				"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
  				accent: "hsl(var(--sidebar-accent))",
  				"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
  				border: "hsl(var(--sidebar-border))",
  				ring: "hsl(var(--sidebar-ring))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))",
  			},
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			 destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			chart: {
  				"1": "hsl(var(--chart-1))",
  				"2": "hsl(var(--chart-2))",
  				"3": "hsl(var(--chart-3))",
  				"4": "hsl(var(--chart-4))",
  				"5": "hsl(var(--chart-5))",
  			},
  			},
  			borderRadius: {
  				lg: "var(--radius)",
  				md: "calc(var(--radius) - 2px)",
  				 sm: "calc(var(--radius) - 4px)",
  			},
  			keyframes: {
  				"accordion-down": {
  					from: {
  						 height: "0",
  					},
  					to: {
  						 height: "var(--radix-accordion-content-height)",
  					},
  				},
  				"accordion-up": {
  					from: {
  						 height: "var(--radix-accordion-content-height)",
  					},
  					to: {
  						 height: "0",
  					},
  				},
  			},
  			 animation: {
  				"accordion-down": "accordion-down 0.2s ease-out",
  				"accordion-up": "accordion-up 0.2s ease-out",
  			},
  		},
  },
  plugins: [require("tailwindcss-animate"), typography], // Add the typography plugin
} satisfies Config;

