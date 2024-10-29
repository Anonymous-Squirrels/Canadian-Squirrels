import type {Config} from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
  	extend: {
  		colors: {
  			'sq-violet': '#7B61FF',
  			'dim-gray': '#828282',
  			'button-color': '#5237D8',
			'light-purple':'#EDE7FF', //light mode
			'dark-purple':"#5C3095",  //light mode
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contact-us': "url('/assets/contact-bg.png')", // Fix: use double quotes around the path
      },
  		keyframes: {
  			'dotted-bounce': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(0%)'
  				}
  			},
  			slideIn: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			'fade-out': {
  				'0%': { opacity: '1' },
  				'90%': { opacity: '1' },
  				'100%': { opacity: '0' },
  			},
  			'bounce-slow': {
  				'0%, 100%': {
  					transform: 'translateY(0)',
  					animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
  				},
  				'50%': {
  					transform: 'translateY(-25%)',
  					animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  				},
  			},
  			'dotted-line': {
  				'0%': {
  					strokeDashoffset: '0'
  				},
  				'100%': {
  					strokeDashoffset: '24'
  				}
  			}
  		},
  		animation: {
  			'dotted-bounce': 'bounce 20s infinite alternate',
  			slideIn: 'slideIn 0.5s forwards',
  			'fade-out': 'fade-out 20s ease-in-out forwards',
  			'bounce-slow': 'bounce-slow 1.5s infinite',
  			'dotted-line': 'dotted-line 1.5s linear infinite',
  		},
  		boxShadow: {
  			'custom1': '0 20px 100px -15px rgb(123 97 255 / 0.5)',
  			'valuesContainerShadow': '0px 0px 5px 5px rgba(123 97 255 / 0.3)',
  			'ContainerShadow': '0px 0px 5px 5px rgb(211,177,255)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [addVariablesForColors,
    require('tailwind-scrollbar-hide'),
      require("tailwindcss-animate")
],
};

function addVariablesForColors({addBase, theme}: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
