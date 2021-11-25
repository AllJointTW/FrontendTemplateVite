import path from 'path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import visualizer from 'rollup-plugin-visualizer'
import antdDayjs from 'vite-plugin-antd-dayjs'

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

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '~': `${path.resolve(__dirname, 'src')}/` } },
  cacheDir: '../../node_modules/.vite/dashboard',
  plugins: [
    Vue(),
    /** https://github.com/hannoeru/vite-plugin-pages */
    Pages(pageLoadingOption),
    /** https://github.com/JohnCampionJr/vite-plugin-vue-layouts */
    Layouts(),
    /** https://github.com/antfu/vite-plugin-components */
    Components({
      extensions: ['vue'],
      dts: true,
      /** resolvers for custom components */
      resolvers: [AntDesignVueResolver()]
    }),
    /** https://github.com/nekocode/antd-dayjs-vite-plugin */
    antdDayjs({ preset: 'antdv3' })
  ],
  build: {
    outDir: '../../dist/dashboard',
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: rollupOptionsPlugins
    }
  }
})
