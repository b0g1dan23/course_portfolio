import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                light: "#fff",
                dark: "#000",
                primary: {
                    400: "#D3E97A",
                    500: "#A9BA62",
                    600: "#7f8c49",
                    700: "#333D0A",
                    900: "#1A1F05"
                }
            }
        },
    },
    plugins: [],
}
export default config