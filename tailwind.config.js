/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{tsx, ts, js, jsx}",
        "./screens/**/*.{tsx, ts, js, jsx}",
        "./utils/**/*.{tsx, ts, js, jsx}",
        "./**/*.{tsx, ts, js, jsx}"
    ],
    theme: {
        extend: {
            colors: {
                "brand-purple": "#4637ca",
                "input-bg": "#fefefe",
                "brand-red": "#ff0000",
                "brand-green": "#34c759"
            },
            fontFamily: {
                "mulish": "'Mulish'",
                "mulish-light": "'Mulish Light'",
                "satoshi-bold": "'false'",
            },
            borderColor: {
                "input": "rgba(70, 55, 202, 0.10)",
            }
        },
    },
    plugins: [],
}
