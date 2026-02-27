/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'space-blue': '#0B1120',
                'card-blue': '#172554',
                'neon-cyan': '#38BDF8',
                'neon-indigo': '#818CF8',
            },
            boxShadow: {
                '3d-cyan': '0 10px 15px -3px rgba(56, 189, 248, 0.5), 0 4px 6px -4px rgba(56, 189, 248, 0.5)',
                '3d-indigo': '0 10px 15px -3px rgba(129, 140, 248, 0.5), 0 4px 6px -4px rgba(129, 140, 248, 0.5)',
                '3d-dark': '5px 5px 15px rgba(0,0,0,0.5)',
            },
        },
    },
    plugins: [],
}
