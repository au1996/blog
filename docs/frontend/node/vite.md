# vite 配置优化

vite.config.ts

```js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import VitePluginVue from '@vitejs/plugin-vue'
import VitePluginCompression from 'vite-plugin-compression'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'
// import VitePluginBabel from 'vite-plugin-babel'

/**
 * https://cn.vitejs.dev/config/
 */
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild)
  const IS_DEV = command === 'serve'
  const IS_PRO = true
  const SHOW_DEV_TOOL = false

  const baseConfig = {
    base: '/v4/',
    plugins: [
      VitePluginVue(),
      VitePluginCompression({
        verbose: true, // 输出压缩结果
        disable: false, // 是否禁用
        threshold: 1024 * 10, // 体积大于 10kb 才会被压缩,单位 b
        algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz' // 生成的压缩包后缀
      })
      // VitePluginBabel()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@img': resolve(__dirname, 'src/assets/img')
      }
    },
    server: {
      port: 7001,
      open: false,
      proxy: {
        '/test': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          cookieDomainRewrite: 'localhost',
          rewrite: (path) => path.replace(/^\/test/, '')
        }
      }
    },
    esbuild: {
      pure: ['console.log', 'console.dir'],
      drop: ['debugger'] as Array<'console' | 'debugger'>
    },
    build: {
      // target: 'es2017',
      sourcemap: IS_DEV,
      manifest: IS_DEV,
      chunkSizeWarningLimit: 500, // 提高静态资源大小警告
      rollupOptions: {}
    }
  }

  if (!IS_DEV) {
    baseConfig.build.rollupOptions = {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
          'element-plus': ['element-plus'],
          'md-editor': ['@kangc/v-md-editor'],
          axios: ['axios', 'qs'],
          echarts: ['echarts', 'echarts-wordcloud'],
          xlsx: ['xlsx'],
          moment: ['moment'],
          exceljs: ['exceljs'],
          heic2any: ['heic2any'],
          pdfjs: ['pdfjs-dist', 'jspdf'],
          'docx-preview': ['docx-preview']
        }
      }
    }
  }

  if (IS_DEV && SHOW_DEV_TOOL) {
    baseConfig.plugins.push(VitePluginVueDevTools() as any)
  }
  return baseConfig
})

```
