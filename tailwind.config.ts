
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
				'linguaglee-pink': '#e49dc2',
				'linguaglee-gold': '#f4d03f',
				'linguaglee-lavender': '#e8d5e8'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'allura': ['Allura', 'cursive']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			blur: {
				'xs': '2px'
			},
			textShadow: {
				'glow': '0 0 10px rgba(236, 43, 141, 0.5), 0 0 20px rgba(236, 43, 141, 0.3), 0 0 30px rgba(236, 43, 141, 0.2)'
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
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'50%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'glow': {
					'0%, 100%': {
						textShadow: '0 0 5px rgba(236, 43, 141, 0.5), 0 0 10px rgba(236, 43, 141, 0.3), 0 0 15px rgba(236, 43, 141, 0.2)',
						opacity: '0.8'
					},
					'50%': {
						textShadow: '0 0 10px rgba(236, 43, 141, 0.8), 0 0 20px rgba(236, 43, 141, 0.6), 0 0 30px rgba(236, 43, 141, 0.4)',
						opacity: '1'
					}
				},
				'sparkle-text': {
					'0%, 100%': {
						textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(236, 43, 141, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(236, 43, 141, 0.6), 0 0 30px rgba(236, 43, 141, 0.4)',
						transform: 'scale(1.02)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'shimmer': 'shimmer 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'sparkle-text': 'sparkle-text 3s ease-in-out infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-glow': {
					textShadow: '0 0 10px rgba(236, 43, 141, 0.5), 0 0 20px rgba(236, 43, 141, 0.3), 0 0 30px rgba(236, 43, 141, 0.2)'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
