/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
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
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        pearly: {
          white: '#F5F3F0',
          cream: '#FAF8F5',
          silver: '#E8E6E3',
        },
        nacre: {
          light: '#FFF9F5',
          medium: '#F0E8E0',
          dark: '#D8CFC5',
        },
        iridescent: {
          violet: '#9D4EDD',
          teal: '#00D9FF',
          turquoise: '#00F5FF',
          gold: '#FFD700',
          lavender: '#C77DFF',
          cyan: '#48CAE4',
        },
      },
      backgroundImage: {
        'iridescent-gradient': 'linear-gradient(135deg, #9D4EDD 0%, #00D9FF 33%, #00F5FF 66%, #FFD700 100%)',
        'pearly-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,243,240,0) 100%)',
        'cosmic-overlay': 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
        'noise-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'bioluminescent': '0 0 20px rgba(157, 78, 221, 0.3), 0 0 40px rgba(0, 217, 255, 0.2), 0 0 60px rgba(0, 245, 255, 0.1)',
        'bioluminescent-strong': '0 0 30px rgba(157, 78, 221, 0.5), 0 0 60px rgba(0, 217, 255, 0.3), 0 0 90px rgba(0, 245, 255, 0.2)',
        'soft-glow': '0 4px 20px rgba(157, 78, 221, 0.15)',
        'iridescent-glow': '0 0 40px rgba(157, 78, 221, 0.4), 0 0 80px rgba(0, 217, 255, 0.3)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gentle-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scale-in': 'scale-in 1.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      letterSpacing: {
        'spacious': '0.05em',
        'luxe': '0.1em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};