import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePublish from 'vite-plugin-publish'
import { VitePWA } from 'vite-plugin-pwa'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Project plugin
    plugins: [
      vue(),
      vueJsx(),
      VitePWA({
        injectRegister: 'script',
        scope: '/',
      }),
      Components({
        resolvers: [VantResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/, /\.tsx$/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      vitePublish(),
    ],
    // Basic configuration
    base: mode === 'production' ? 'https://cdn200.oss-cn-hangzhou.aliyuncs.com/next-mobile/' : '/',
    publicDir: 'public',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // Service configuration
    server: {
      port: 9527,
      https: false,
      open: true,
      proxy: {
        '/dev/api': {
          target: 'http://www.lwp.fun:7000',
          changeOrigin: true,
          rewrite: path => path.replace(/\/dev\/api/, ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      brotliSize: false,
      sourcemap: false,
      terserOptions: {
        compress: {
          // Remove console and debug from production environment
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
