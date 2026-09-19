/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-bg': '#0D0D1A',
        'neon-surface': '#1A1A2E',
        'neon-purple': '#9D4EDD',
        'neon-purple-deep': '#5E2B94',
        'neon-purple-soft': '#EEDCFF',
        'neon-cyan': '#00D9FF',
        'neon-cyan-soft': '#B8F4FF',
        'neon-magenta': '#FF6FA3',
        'neon-magenta-deep': '#4F1237',
        'neon-magenta-soft': '#FFDAE8',
        'neon-orange': '#FF9500',
        'neon-lime': '#00FF88',
        'neon-blue': '#4D9FFF',
        'neon-lavender': '#C6A5FF',
        'neon-line': '#2A2A4A',
        'neon-line-soft': '#1F1F36',
        'neon-muted': '#B7B7D4',
        'neon-error': '#FF7A7A',
        'brand-orange': '#FF6B47',
      },
      borderRadius: {
        neon: '20px',
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(90deg,#FF6FA3,#FF9500)',
        'banner-gradient': 'linear-gradient(135deg,#9D4EDD,#00D9FF)',
        'page-gradient': 'linear-gradient(135deg,#1A1A2E,#0D0D1A)',
      },
      boxShadow: {
        'glow-card': '0 4px 12px rgba(157,78,221,0.12)',
        'glow-active': '0 6px 20px rgba(0,217,255,0.25), 0 0 2px rgba(0,217,255,0.35)',
        'glow-rim': '0 0 8px rgba(0,217,255,0.35)',
        'glow-cta': '0 6px 20px rgba(255,111,163,0.35)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
