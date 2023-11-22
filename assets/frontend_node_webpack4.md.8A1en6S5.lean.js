import{_ as s,o as n,c as a,R as l}from"./chunks/framework.hUnJMfMr.js";const C=JSON.parse('{"title":"webpack4常见配置","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/node/webpack4.md","filePath":"frontend/node/webpack4.md","lastUpdated":1700645130000}'),p={name:"frontend/node/webpack4.md"},o=l(`<h1 id="webpack4常见配置" tabindex="-1">webpack4常见配置 <a class="header-anchor" href="#webpack4常见配置" aria-label="Permalink to &quot;webpack4常见配置&quot;">​</a></h1><p>vue.config.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dir</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, dir)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//js sourceMap</span></span>
<span class="line"><span style="color:#E1E4E8;">  productionSourceMap: process.env.</span><span style="color:#79B8FF;">NODE_ENV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;production&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//服务配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    clientLogLevel: </span><span style="color:#9ECBFF;">&#39;warning&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    historyApiFallback: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 热更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    compress: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    host: </span><span style="color:#9ECBFF;">&#39;0.0.0.0&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">8001</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    open: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">    overlay: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      warnings: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      errors: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: { </span><span style="color:#6A737D;">// 服务器代理</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/api&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;http://blog.xueyueob.cn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// secure: false,  // 如果是https接口，需要配置这个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    quiet: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// necessary for FriendlyErrorsPlugin</span></span>
<span class="line"><span style="color:#E1E4E8;">    watchOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      poll: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceMap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chainWebpack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 打包分析工具</span></span>
<span class="line"><span style="color:#E1E4E8;">    config</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">plugin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack-bundle-analyzer&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">			.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack-bundle-analyzer&#39;</span><span style="color:#E1E4E8;">).BundleAnalyzerPlugin)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 别名</span></span>
<span class="line"><span style="color:#E1E4E8;">    config.resolve.alias.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@img&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/assets/img&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 修改loader</span></span>
<span class="line"><span style="color:#E1E4E8;">    config.module</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">rule</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;images&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">loader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        limit: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        fallback: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;file-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;img/[name].[hash:6].[ext]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 代码优化</span></span>
<span class="line"><span style="color:#E1E4E8;">    config.optimization</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 代码切割</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">splitChunks</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//async对异步引入的代码分割 initial对同步引入代码分割 all对同步异步引入的分割都开启</span></span>
<span class="line"><span style="color:#E1E4E8;">        minSize: </span><span style="color:#79B8FF;">30000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//字节 引入的文件大于30kb才进行分割</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//maxSize: 50000, //50kb，尝试将大于50kb的文件拆分成n个50kb的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        minChunks: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//模块至少使用次数</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxAsyncRequests: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//同时加载的模块数量最多是5个，只分割出同时引入的前5个文件（按需加载模块）</span></span>
<span class="line"><span style="color:#E1E4E8;">        maxInitialRequests: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//首页加载的时候引入的文件最多3个（加载初始页面）</span></span>
<span class="line"><span style="color:#E1E4E8;">        automaticNameDelimiter: </span><span style="color:#9ECBFF;">&#39;~&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//缓存组和生成文件名称之间的连接符</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//缓存组里面的filename生效，覆盖默认命名</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheGroups: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//缓存组，将所有加载模块放在缓存里面一起分割打包</span></span>
<span class="line"><span style="color:#E1E4E8;">          vendors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;chunk-vendors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            priority: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: </span><span style="color:#9ECBFF;">&#39;initial&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// only package third parties that are initially dependent</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          elementUI: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;chunk-elementUI&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// split elementUI into a single package</span></span>
<span class="line"><span style="color:#E1E4E8;">            priority: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// the weight needs to be larger than libs and app or it will be packaged into libs or app</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">_</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">element-ui(</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// in order to adapt to cnpm</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          commons: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;chunk-commons&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            test: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/components&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            minChunks: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//  minimum common number</span></span>
<span class="line"><span style="color:#E1E4E8;">            priority: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            reuseExistingChunk: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">runtimeChunk</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;runtime&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 该对象将会被 webpack-merge 合并入最终的 webpack 配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">configureWebpack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> webpackConfig </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CompressionPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$|</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">html</span><span style="color:#F97583;">$|</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//匹配文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">          threshold: </span><span style="color:#79B8FF;">10240</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//对超过10k的数据进行压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">          deleteOriginalAssets: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//是否删除源文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">webpackConfig,</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      externals: { </span><span style="color:#6A737D;">// 外部 CDN 引用下面的依赖。node_modules不再下载</span></span>
<span class="line"><span style="color:#E1E4E8;">        vue: </span><span style="color:#9ECBFF;">&#39;Vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;VueRouter&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        axios: </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;element-ui&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;ELEMENT&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#E36209;">dir</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, dir)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//js sourceMap</span></span>
<span class="line"><span style="color:#24292E;">  productionSourceMap: process.env.</span><span style="color:#005CC5;">NODE_ENV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;production&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//服务配置</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    clientLogLevel: </span><span style="color:#032F62;">&#39;warning&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    historyApiFallback: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    hot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 热更新</span></span>
<span class="line"><span style="color:#24292E;">    compress: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    host: </span><span style="color:#032F62;">&#39;0.0.0.0&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">8001</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    open: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">    overlay: {</span></span>
<span class="line"><span style="color:#24292E;">      warnings: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      errors: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    proxy: { </span><span style="color:#6A737D;">// 服务器代理</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/api&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;http://blog.xueyueob.cn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// secure: false,  // 如果是https接口，需要配置这个参数</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    quiet: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// necessary for FriendlyErrorsPlugin</span></span>
<span class="line"><span style="color:#24292E;">    watchOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      poll: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  css: {</span></span>
<span class="line"><span style="color:#24292E;">    sourceMap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chainWebpack</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 打包分析工具</span></span>
<span class="line"><span style="color:#24292E;">    config</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">plugin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;webpack-bundle-analyzer&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">			.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;webpack-bundle-analyzer&#39;</span><span style="color:#24292E;">).BundleAnalyzerPlugin)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 别名</span></span>
<span class="line"><span style="color:#24292E;">    config.resolve.alias.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@img&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;src/assets/img&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 修改loader</span></span>
<span class="line"><span style="color:#24292E;">    config.module</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">rule</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;images&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">loader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">options</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        limit: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        fallback: {</span></span>
<span class="line"><span style="color:#24292E;">          loader: </span><span style="color:#032F62;">&#39;file-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          options: {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;img/[name].[hash:6].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 代码优化</span></span>
<span class="line"><span style="color:#24292E;">    config.optimization</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 代码切割</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">splitChunks</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        chunks: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//async对异步引入的代码分割 initial对同步引入代码分割 all对同步异步引入的分割都开启</span></span>
<span class="line"><span style="color:#24292E;">        minSize: </span><span style="color:#005CC5;">30000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//字节 引入的文件大于30kb才进行分割</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//maxSize: 50000, //50kb，尝试将大于50kb的文件拆分成n个50kb的文件</span></span>
<span class="line"><span style="color:#24292E;">        minChunks: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//模块至少使用次数</span></span>
<span class="line"><span style="color:#24292E;">        maxAsyncRequests: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//同时加载的模块数量最多是5个，只分割出同时引入的前5个文件（按需加载模块）</span></span>
<span class="line"><span style="color:#24292E;">        maxInitialRequests: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//首页加载的时候引入的文件最多3个（加载初始页面）</span></span>
<span class="line"><span style="color:#24292E;">        automaticNameDelimiter: </span><span style="color:#032F62;">&#39;~&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//缓存组和生成文件名称之间的连接符</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//缓存组里面的filename生效，覆盖默认命名</span></span>
<span class="line"><span style="color:#24292E;">        cacheGroups: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//缓存组，将所有加载模块放在缓存里面一起分割打包</span></span>
<span class="line"><span style="color:#24292E;">          vendors: {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;chunk-vendors&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">node_modules</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            priority: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            chunks: </span><span style="color:#032F62;">&#39;initial&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// only package third parties that are initially dependent</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          elementUI: {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;chunk-elementUI&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// split elementUI into a single package</span></span>
<span class="line"><span style="color:#24292E;">            priority: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// the weight needs to be larger than libs and app or it will be packaged into libs or app</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">node_modules</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">_</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">element-ui(</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">)/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// in order to adapt to cnpm</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          commons: {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;chunk-commons&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            test: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src/components&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            minChunks: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//  minimum common number</span></span>
<span class="line"><span style="color:#24292E;">            priority: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            reuseExistingChunk: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">runtimeChunk</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;runtime&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 该对象将会被 webpack-merge 合并入最终的 webpack 配置</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">configureWebpack</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> webpackConfig </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CompressionPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$|</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">html</span><span style="color:#D73A49;">$|</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//匹配文件名</span></span>
<span class="line"><span style="color:#24292E;">          threshold: </span><span style="color:#005CC5;">10240</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//对超过10k的数据进行压缩</span></span>
<span class="line"><span style="color:#24292E;">          deleteOriginalAssets: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//是否删除源文件</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">webpackConfig,</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      externals: { </span><span style="color:#6A737D;">// 外部 CDN 引用下面的依赖。node_modules不再下载</span></span>
<span class="line"><span style="color:#24292E;">        vue: </span><span style="color:#032F62;">&#39;Vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;VueRouter&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        axios: </span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;element-ui&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;ELEMENT&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{C as __pageData,d as default};
