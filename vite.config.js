import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
import { resolve } from 'path'
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router']
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            'assets': resolve(__dirname, './src/assets')
        }
    }
})
