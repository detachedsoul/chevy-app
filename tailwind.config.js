/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{tsx, ts, js, jsx}",
        "./screens/**/*.{tsx, ts, js, jsx}",
        "./**/*.{tsx, ts, js, jsx}"
    ],
    theme: {
        extend: {
            colors: {
                "brand-purple": "#4637ca"
            },
            fontFamily: {
                "satoshi": "'Mulish-Regular'",
                "satoshi-light": "'Mulish Light'",
                "satoshi-bold": "'false'",
            }
        },
    },
    plugins: [],
}
