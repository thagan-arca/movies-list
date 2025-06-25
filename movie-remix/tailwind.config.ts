import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "animate-in": {
                    "0%, 100%": { opacity: "0", transform: "translateY(1rem)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            width: {
                "100": "25rem",
            },
            boxShadow: {
                normal: "0 1px 4px rgba(0, 0, 0, 0.2)",
            },
            animation: {
                entry: "animate-in 1s ease-out forwards;",
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                body: ["Avenir Next"],
            },
        },
    },
    plugins: [],
} satisfies Config;

// module.exports = {
//     theme: {
//         fontFamily: {
//             body: ['"Avenir"'],
//         },
//     },
// };
