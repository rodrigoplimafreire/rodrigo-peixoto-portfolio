import type { Config } from 'tailwindcss';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                brand: {
                    black: '#0a0a0a',   // Preto
                    white: '#f4f4f5',   // Branco
                    silver: '#D9D9D9',  // Cinza (About Section)
                    blue: '#5271FF',    // Azul (Novo Destaque)
                    gray: '#27272a',    // Cinza chumbo
                }
            },
            fontSize: {
                '10xl': '10rem',
                '11xl': '12rem',
                '12xl': '14rem',
                'huge': '18rem',
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tightest': '-0.08em',
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
            }
        },
    },
    plugins: [],
} satisfies Config;