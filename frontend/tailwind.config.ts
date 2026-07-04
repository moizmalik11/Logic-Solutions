import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand (fixed — same in both modes) ──
        brand: {
          wood:    '#965C31', // Rich, elegant Wood/Walnut shade
          navy:    '#16233D', // Keeping for backward compat if needed
          brass:   '#965C31', // Remapping brass to wood
        },

        // ── Light Mode Semantic Tokens (Orange & White) ──
        light: {
          bg:          '#FAFAFA',
          surface:     '#FFFFFF',
          surfaceMuted:'#F4F4F5',
          text:        '#09090B',
          textMuted:   '#71717A',
          border:      '#E4E4E7',
          accent:      '#965C31',
          accentHover: '#7A4822',
        },

        // ── Dark Mode Semantic Tokens (Orange & Black) ──
        dark: {
          bg:          '#000000',
          surface:     '#0A0A0A',
          surfaceMuted:'#171717',
          text:        '#FAFAFA',
          textMuted:   '#A1A1AA',
          border:      '#27272A',
          accent:      '#965C31',
          accentHover: '#7A4822',
        },

        // ── Semantic / Status ──
        success: '#10B981',
        error:   '#EF4444',
        warning: '#F59E0B',

        // ── CSS-var aliases (kept for backward compat) ──
        background: 'var(--background)',
        foreground:  'var(--foreground)',
      },

      // ── Typography ──
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },

      // ── Animations ──
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      animation: {
        'fade-in-up':   'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'shimmer':      'shimmer 2.5s linear infinite',
        'blob':         'blob 7s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
