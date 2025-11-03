module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                // Viewport width based font sizes
                'vw-xs': '1.5vw',
                'vw-sm': '2vw',
                'vw-base': '2.5vw',
                'vw-lg': '3vw',
                'vw-xl': '4vw',
                'vw-2xl': '5vw',
                'vw-3xl': '6vw',
                'vw-4xl': '7vw',
                'vw-5xl': '8vw',
                'vw-6xl': '9vw',
                'vw-7xl': '10vw',
            },
            lineHeight: {
                // Viewport width based line heights (proporcionals als fonts)
                'vw-xs': '1.5vw',
                'vw-sm': '2.5vw',
                'vw-base': '3.5vw',
                'vw-lg': '4.5vw',
                'vw-xl': '6vw',
                'vw-2xl': '7.5vw',
                'vw-3xl': '9vw',
                'vw-4xl': '10.5vw',
                'vw-5xl': '12vw',
                'vw-6xl': '13.5vw',
                'vw-7xl': '15vw',
            }
        }
    },
    plugins: []
}