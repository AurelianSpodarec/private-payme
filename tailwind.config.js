function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        }
        return `rgb(var(${variableName}))`
    }
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [],
    theme: {
        extend: {
            colors: {
                skin: {
                    primary: {
                        "DEFAULT": "#000000",
                    }
                }
            },
            textColor: {
                skin: {
                    // base: withOpacity('--color-text-base'),
                    // leading: withOpacity('--color-text-leading'),
                    // muted: withOpacity('--color-text-muted'),
                    inverted: '',
                }
              },
              backgroundColor: {
                skin: {
                    // base: withOpacity('--color-bg-base')
                }
            },
            lineHeight: {
                "2" : "0.5rem"
            }
        },
    },
    plugins: [],
}