import path from 'path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// eslint-disable-next-line import/no-unresolved,import/no-extraneous-dependencies
import Components from 'unplugin-vue-components/vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import visualizer from 'rollup-plugin-visualizer'
import WindiCSS from 'vite-plugin-windicss'

const rollupOptionsPlugins = []

if (process.env.analyse) {
  rollupOptionsPlugins.push(
    visualizer({
      open: true,
      gzipSize: true
    })
  )
}

const pageLoadingOption = { importMode: 'async' }

/** 開發環境使用同步載入，避免載入速度過慢 */
if (process.env.NODE_ENV === 'development') {
  pageLoadingOption.importMode = 'sync'
}

/** https://vitejs.dev/config/ */
export default defineConfig({
  resolve: {
    alias: { '@': `${path.resolve(__dirname, 'src')}/` }
  },
  root: 'src/client',
  plugins: [
    Vue(),
    /** https://windicss.org/integrations/vite.html */
    WindiCSS(),
    /** https://github.com/hannoeru/vite-plugin-pages */
    Pages(pageLoadingOption),
    /** https://github.com/JohnCampionJr/vite-plugin-vue-layouts */
    Layouts(),
    /** https://github.com/antfu/vite-plugin-components */
    Components({
      extensions: ['vue'],
      dts: true
    })
  ],
  cacheDir: '../../node_modules/.vite/client',
  build: {
    outDir: '../../dist/client',
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: rollupOptionsPlugins
    }
  }
})
