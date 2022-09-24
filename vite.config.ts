import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AppConsts from "./src/infrastructure/scripts/AppConsts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: AppConsts.packDirectoryPrefix,
  server: {
    port: 5858
    // proxy: {
    //     '/admin': {
    //         target: 'http://localhost:6789/admin',
    //         ws: false,
    //         changeOrigin: true
    //     }
    // }

    // 设置 https 代理
    // proxy: {
    //   '/api': {
    //     target: 'your https address',
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.vue', '.scss', '.css', '.less'],
    alias: {
      '@/': resolve('src') + '/',
    }
  },
  // CSS 预处理器
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    // postcss: {
    //   plugins: [
    //     require('autoprefixer')
    //   ]
    // }
  },
  build: {
    assetsDir: 'static/img',
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
})