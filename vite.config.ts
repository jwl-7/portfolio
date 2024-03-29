import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@fonts': path.resolve(__dirname, './src/fonts'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@images': path.resolve(__dirname, './src/images'),
            '@icons': path.resolve(__dirname, './src/icons'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@utils': path.resolve(__dirname, './src/utils')
        }
    }
})
