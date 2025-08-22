import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

export default {
    integrations: [
        react(),
        tailwind()
    ],
    output: 'static',
    build: {
        static: true
    },
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    }
}