import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
// eslint-disable-next-line import/no-unresolved
import generatedRoutes from 'virtual:generated-pages'
// eslint-disable-next-line import/no-unresolved
import { setupLayouts } from 'virtual:generated-layouts'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'virtual:windi.css'
import App from './App.vue'

/** https://github.com/JohnCampionJr/vite-plugin-vue-layouts */
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

NProgress.configure({
  showSpinner: false,
  minimum: 0.1
})

const app = createApp(App)
const head = createHead()

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

router.afterEach(() => {
  NProgress.done()
})

customAxios.defaults.onDownloadProgress = (e) => {
  const calculatePercentage = (loaded, total) =>
    Math.floor(loaded * 1.0) / total
  const percentage = calculatePercentage(e.loaded, e.total)
  NProgress.set(percentage)
}
customAxios.interceptors.response.use((response) => {
  NProgress.done()
  return response
})

app.use(head)
app.use(router)
app.provide('axios', customAxios)

app.mount('#app')