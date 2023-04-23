import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [
      '~/assets/styles/main.css'
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
  plugins: [
    '~/plugins/vue-click-outside'
  ],
  imports: {
    dirs: ['stores']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    },
    {
      path: '~/components/global',
      pathPrefix: false,
      global: true
    }
  ],
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-first',
      }),
    ]
  }
})
