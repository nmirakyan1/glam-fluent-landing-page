
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
				'linguaglee-lavender': '#e8d5e8',
				'gold': '#ffd700',
				'champagne': {
					50: '#fef7ed',
					100: '#fdf2d9',
					200: '#fae6b3',
					300: '#f7d482',
					400: '#f2bb4f',
					500: '#eea92b',
					600: '#d88f20',
					700: '#b3711c',
					800: '#90591e',
					900: '#74481c'
				}
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'allura': ['Allura', 'cursive'],
				'sans': ['Inter', 'DM Sans', 'system-ui', 'sans-serif']
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
				'twinkle': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1) rotate(0deg)'
					},
					'25%': {
						opacity: '0.8',
						transform: 'scale(1.2) rotate(90deg)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.5) rotate(180deg)'
					},
					'75%': {
						opacity: '0.6',
						transform: 'scale(1.1) rotate(270deg)'
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
						textShadow: '0 0 20px rgba(236, 43, 141, 1), 0 0 30px rgba(236, 43, 141, 0.8), 0 0 40px rgba(236, 43, 141, 0.6)',
						opacity: '1'
					}
				},
				'sparkle-text': {
					'0%, 100%': {
						textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(236, 43, 141, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 25px rgba(236, 43, 141, 0.8), 0 0 35px rgba(255, 215, 0, 0.6)',
						transform: 'scale(1.03)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'shimmer': 'shimmer 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'sparkle-text': 'sparkle-text 3s ease-in-out infinite'
			},
			animationDelay: {
				'300': '300ms',
				'500': '500ms',
				'700': '700ms',
				'900': '900ms',
				'1100': '1100ms',
				'1300': '1300ms',
				'1500': '1500ms',
				'1700': '1700ms',
				'1900': '1900ms'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-glow': {
					textShadow: '0 0 10px rgba(236, 43, 141, 0.5), 0 0 20px rgba(236, 43, 141, 0.3), 0 0 30px rgba(236, 43, 141, 0.2)'
				},
				'.animation-delay-300': {
					animationDelay: '300ms'
				},
				'.animation-delay-500': {
					animationDelay: '500ms'
				},
				'.animation-delay-700': {
					animationDelay: '700ms'
				},
				'.animation-delay-900': {
					animationDelay: '900ms'
				},
				'.animation-delay-1100': {
					animationDelay: '1100ms'
				},
				'.animation-delay-1300': {
					animationDelay: '1300ms'
				},
				'.animation-delay-1500': {
					animationDelay: '1500ms'
				},
				'.animation-delay-1700': {
					animationDelay: '1700ms'
				},
				'.animation-delay-1900': {
					animationDelay: '1900ms'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
