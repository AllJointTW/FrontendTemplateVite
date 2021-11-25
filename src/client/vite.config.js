import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': `${path.resolve(__dirname, 'src')}/` } },
  cacheDir: '../../node_modules/.vite/client',
  plugins: [vue()]
})
