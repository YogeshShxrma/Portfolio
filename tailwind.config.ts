
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
                // Enhanced Gond art theme colors
                gond: {
                    // Light mode colors
                    light: {
                        bg: "#F7F5F0", // warm cream background
                        card: "#FFFFFF", // pure white for cards
                        text: "#2D2318", // warm dark brown for text
                        textLight: "#6B5B47", // lighter brown for secondary text
                        purple: "#6B4E8C", // deep purple for trees/elements
                        purpleLight: "#8A6BA8", // lighter purple variant
                        green: "#4A7C59", // forest green for trunks
                        greenLight: "#6B9E7A", // lighter green
                        orange: "#D4744A", // warm orange for accents
                        orangeLight: "#E8956B", // lighter orange
                        blue: "#4A6B8C", // peacock blue
                        blueLight: "#6B85A8", // lighter blue
                        brown: "#8B6B47", // earthy brown for outlines
                        cream: "#F2EFE6", // section backgrounds
                    },
                    // Dark mode colors
                    dark: {
                        bg: "#1A1B2E", // deep navy background
                        card: "#16213E", // darker navy for cards
                        text: "#E8E6E0", // warm off-white for text
                        textLight: "#B8B4A8", // muted text
                        purple: "#9B7ED9", // vibrant purple with glow potential
                        purpleLight: "#B899E8", // lighter purple variant
                        green: "#7ED99B", // neon teal green
                        greenLight: "#99E8B8", // lighter teal
                        orange: "#E89B47", // mustard orange
                        orangeLight: "#F0B76B", // lighter mustard
                        blue: "#4A9BE8", // bright peacock blue
                        blueLight: "#6BB0F0", // lighter blue
                        brown: "#C4A373", // warm light brown for outlines
                        cream: "#232847", // section backgrounds
                    }
                },
                // Legacy folk colors for backward compatibility
                folk: {
                    purple: "#6B4E8C",
                    "purple-light": "#8A6BA8",
                    "purple-dark": "#4A3665",
                    blue: "#4A6B8C",
                    "blue-light": "#6B85A8",
                    "blue-dark": "#334B65",
                    orange: "#D4744A",
                    "orange-light": "#E8956B", 
                    "orange-dark": "#A85A33",
                    green: "#4A7C59",
                    "green-light": "#6B9E7A",
                    "green-dark": "#335940",
                    cream: "#F7F5F0",
                    "cream-dark": "#E8E4D9",
                    dark: "#2D2318",
                    text: "#2D2318",
                    "text-light": "#6B5B47",
                    border: "#D4C4B0",
                    accent: "#D4744A",
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
                        boxShadow: '0 0 12px 2px rgba(155, 126, 217, 0.3)',
                        transform: 'scale(1)'
                    },
                    '50%': { 
                        boxShadow: '0 0 20px 5px rgba(155, 126, 217, 0.5)', 
                        transform: 'scale(1.02)'
                    }
                },
                'glow-orange': {
                    '0%, 100%': { 
                        boxShadow: '0 0 12px 2px rgba(232, 155, 71, 0.3)',
                    },
                    '50%': { 
                        boxShadow: '0 0 20px 5px rgba(232, 155, 71, 0.5)', 
                    }
                },
                'theme-switch': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(180deg)' }
                },
                'peacock-float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'glow-slow': 'glow 4s ease-in-out infinite',
                'glow-orange': 'glow-orange 3s ease-in-out infinite',
                'theme-switch': 'theme-switch 0.5s ease-in-out',
                'peacock-float': 'peacock-float 6s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
