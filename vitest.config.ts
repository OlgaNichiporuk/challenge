import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
const include = [/\.vue$/, /\.vue\?vue/, /\.stories\.ts$/, /\.[tj]s$/]

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname)
    }
  },
  plugins: [
    vue(),
    Components({
      dirs: ['~/components'],
      directoryAsNamespace: true,
      resolvers: [NaiveUiResolver()],
      include
    }),
    AutoImport({
      include,
      imports: ['vue', '@vueuse/head'],
      dirs: ['~/composables'],
      vueTemplate: true
    }),
    svgLoader()
  ],
})
