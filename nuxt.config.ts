import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: [
      '~/assets/styles/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-first'
      }),
    ]
  }
})
