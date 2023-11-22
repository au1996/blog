# webpack4常见配置

vue.config.js

```js
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //js sourceMap
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  //服务配置
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true, // 热更新
    compress: true,
    host: '0.0.0.0',
    port: 8001,
    open: false, // 自动打开浏览器
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: { // 服务器代理
      '/api': {
        target: 'http://blog.xueyueob.cn',
        changeOrigin: true,
        // secure: false,  // 如果是https接口，需要配置这个参数
      },
    },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: true,
    },
  },
  css: {
    sourceMap: false,
  },
  chainWebpack: (config) => {
    // 打包分析工具
    config
      .plugin('webpack-bundle-analyzer')
			.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // 别名
    config.resolve.alias.set('@', resolve('src')).set('@img', resolve('src/assets/img'))
    // 修改loader
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 5000,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:6].[ext]',
          },
        },
      })
    // 代码优化
    config.optimization
      // 代码切割
      .splitChunks({
        chunks: 'all', //async对异步引入的代码分割 initial对同步引入代码分割 all对同步异步引入的分割都开启
        minSize: 30000, //字节 引入的文件大于30kb才进行分割
        //maxSize: 50000, //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
        minChunks: 1, //模块至少使用次数
        maxAsyncRequests: 5, //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件（按需加载模块）
        maxInitialRequests: 3, //首页加载的时候引入的文件最多3个（加载初始页面）
        automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
        name: true, //缓存组里面的filename生效，覆盖默认命名
        cacheGroups: {
          //缓存组，将所有加载模块放在缓存里面一起分割打包
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 0,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: path.resolve(__dirname, 'src/components'),
            minChunks: 2, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      })
      .runtimeChunk({
        name: 'runtime',
      })
  },
  // 该对象将会被 webpack-merge 合并入最终的 webpack 配置
  configureWebpack: (config) => {
    let webpackConfig = []
    return {
      plugins: [
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, //匹配文件名
          threshold: 10240, //对超过10k的数据进行压缩
          deleteOriginalAssets: false, //是否删除源文件
        }),
        ...webpackConfig,
      ],
      externals: { // 外部 CDN 引用下面的依赖。node_modules不再下载
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        'element-ui': 'ELEMENT',
      },
    }
  },
}
```