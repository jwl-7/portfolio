import { defineConfig } from 'vite'
import path from 'path'
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@': path.resolve(__dirname, './src'),
            '@images': path.resolve(__dirname, './src/images'),
            '@components': path.resolve(__dirname, './src/components')
        },
    },
})
