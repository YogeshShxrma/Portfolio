
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
            },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                illuminated: {
                    100: "#e5deff",
                    200: "#d6bcfa",
                    300: "#9b87f5",
                    400: "#7E69AB",
                    500: "#6357a1",
                    600: "#4A3B82",
                    700: "#322554",
                    800: "#1A1F2C",
                    900: "#121420",
                },
                // Folk art theme based on the image
                folk: {
                    purple: "#7C64B5", // from the purple trees
                    "purple-light": "#9A86D9",
                    "purple-dark": "#584A82",
                    blue: "#3E79A0", // from the blue bird
                    "blue-light": "#68A9D3",
                    "blue-dark": "#2A5670",
                    orange: "#D49768", // from the orange elements
                    "orange-light": "#F0B98E", 
                    "orange-dark": "#A86F45",
                    green: "#5DA87A", // from the green leaves
                    "green-light": "#7FD19F",
                    "green-dark": "#3E7154",
                    cream: "#F2EFE6", // background color
                    "cream-dark": "#E5DFD2",
                    dark: "#2C261E", // dark text/elements
                    text: "#383129",
                    "text-light": "#786F64",
                    border: "#D8D0C0",
                    accent: "#D45B3F", // accent color from the small orange elements
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 12px 2px rgba(124, 100, 181, 0.2)',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        boxShadow: '0 0 20px 5px rgba(124, 100, 181, 0.4)', 
                        transform: 'scale(1.01)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'glow-slow': 'glow 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
