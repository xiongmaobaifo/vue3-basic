import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default (({ mode }: { mode: string }) => {

  const { VITE_BASE_URL, VITE_TARGET_URL } = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue()],
    base: './',
    server: {
      port:5173,
      host:'0.0.0.0',
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_TARGET_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${VITE_BASE_URL}`), '')
        }
      }
    },
    //   配置路径别名
    resolve: {
      //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }
  })
})


