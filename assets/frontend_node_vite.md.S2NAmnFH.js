import{_ as s,o as n,c as a,R as l}from"./chunks/framework.xW0OlkBD.js";const d=JSON.parse('{"title":"vite 配置优化","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/node/vite.md","filePath":"frontend/node/vite.md","lastUpdated":1714987180000}'),p={name:"frontend/node/vite.md"},o=l(`<h1 id="vite-配置优化" tabindex="-1">vite 配置优化 <a class="header-anchor" href="#vite-配置优化" aria-label="Permalink to &quot;vite 配置优化&quot;">​</a></h1><p>vite.config.ts</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VitePluginVue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VitePluginCompression </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite-plugin-compression&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VitePluginVueDevTools </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite-plugin-vue-devtools&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// import VitePluginBabel from &#39;vite-plugin-babel&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * https://cn.vitejs.dev/config/</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">(({ </span><span style="color:#FFAB70;">command</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">ssrBuild</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(command, mode, ssrBuild)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> command </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;serve&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IS_PRO</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SHOW_DEV_TOOL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">baseConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&#39;/v4/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">VitePluginVue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">VitePluginCompression</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        verbose: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 输出压缩结果</span></span>
<span class="line"><span style="color:#E1E4E8;">        disable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否禁用</span></span>
<span class="line"><span style="color:#E1E4E8;">        threshold: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 体积大于 10kb 才会被压缩,单位 b</span></span>
<span class="line"><span style="color:#E1E4E8;">        algorithm: </span><span style="color:#9ECBFF;">&#39;gzip&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 压缩算法,可选 [ &#39;gzip&#39; , &#39;brotliCompress&#39; ,&#39;deflate&#39; , &#39;deflateRaw&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">        ext: </span><span style="color:#9ECBFF;">&#39;.gz&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 生成的压缩包后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// VitePluginBabel()</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@img&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src/assets/img&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">7001</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      open: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;/test&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          target: </span><span style="color:#9ECBFF;">&#39;http://localhost:3000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          cookieDomainRewrite: </span><span style="color:#9ECBFF;">&#39;localhost&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> path.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#85E89D;font-weight:bold;">\\/</span><span style="color:#DBEDFF;">test</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    esbuild: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pure: [</span><span style="color:#9ECBFF;">&#39;console.log&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;console.dir&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      drop: [</span><span style="color:#9ECBFF;">&#39;debugger&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#9ECBFF;">&#39;console&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;debugger&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// target: &#39;es2017&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sourcemap: </span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      manifest: </span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 提高静态资源大小警告</span></span>
<span class="line"><span style="color:#E1E4E8;">      rollupOptions: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseConfig.build.rollupOptions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        manualChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          vue: [</span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;vue-i18n&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;md-editor&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;@kangc/v-md-editor&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          axios: [</span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;qs&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          echarts: [</span><span style="color:#9ECBFF;">&#39;echarts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;echarts-wordcloud&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          xlsx: [</span><span style="color:#9ECBFF;">&#39;xlsx&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          moment: [</span><span style="color:#9ECBFF;">&#39;moment&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          exceljs: [</span><span style="color:#9ECBFF;">&#39;exceljs&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          heic2any: [</span><span style="color:#9ECBFF;">&#39;heic2any&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          pdfjs: [</span><span style="color:#9ECBFF;">&#39;pdfjs-dist&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;jspdf&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;docx-preview&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;docx-preview&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">IS_DEV</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SHOW_DEV_TOOL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseConfig.plugins.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">VitePluginVueDevTools</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> baseConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VitePluginVue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VitePluginCompression </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite-plugin-compression&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VitePluginVueDevTools </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite-plugin-vue-devtools&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// import VitePluginBabel from &#39;vite-plugin-babel&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * https://cn.vitejs.dev/config/</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">(({ </span><span style="color:#E36209;">command</span><span style="color:#24292E;">, </span><span style="color:#E36209;">mode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">ssrBuild</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(command, mode, ssrBuild)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> command </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;serve&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IS_PRO</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SHOW_DEV_TOOL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">baseConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&#39;/v4/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">VitePluginVue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">VitePluginCompression</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        verbose: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 输出压缩结果</span></span>
<span class="line"><span style="color:#24292E;">        disable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否禁用</span></span>
<span class="line"><span style="color:#24292E;">        threshold: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 体积大于 10kb 才会被压缩,单位 b</span></span>
<span class="line"><span style="color:#24292E;">        algorithm: </span><span style="color:#032F62;">&#39;gzip&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 压缩算法,可选 [ &#39;gzip&#39; , &#39;brotliCompress&#39; ,&#39;deflate&#39; , &#39;deflateRaw&#39;]</span></span>
<span class="line"><span style="color:#24292E;">        ext: </span><span style="color:#032F62;">&#39;.gz&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 生成的压缩包后缀</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// VitePluginBabel()</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    resolve: {</span></span>
<span class="line"><span style="color:#24292E;">      alias: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@img&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src/assets/img&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    server: {</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">7001</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      open: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      proxy: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;/test&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          target: </span><span style="color:#032F62;">&#39;http://localhost:3000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          cookieDomainRewrite: </span><span style="color:#032F62;">&#39;localhost&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">path</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> path.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#22863A;font-weight:bold;">\\/</span><span style="color:#032F62;">test/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    esbuild: {</span></span>
<span class="line"><span style="color:#24292E;">      pure: [</span><span style="color:#032F62;">&#39;console.log&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;console.dir&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      drop: [</span><span style="color:#032F62;">&#39;debugger&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">&lt;</span><span style="color:#032F62;">&#39;console&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;debugger&#39;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// target: &#39;es2017&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      sourcemap: </span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      manifest: </span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 提高静态资源大小警告</span></span>
<span class="line"><span style="color:#24292E;">      rollupOptions: {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    baseConfig.build.rollupOptions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      output: {</span></span>
<span class="line"><span style="color:#24292E;">        manualChunks: {</span></span>
<span class="line"><span style="color:#24292E;">          vue: [</span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;pinia&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;vue-i18n&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;element-plus&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;element-plus&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;md-editor&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;@kangc/v-md-editor&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          axios: [</span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;qs&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          echarts: [</span><span style="color:#032F62;">&#39;echarts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;echarts-wordcloud&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          xlsx: [</span><span style="color:#032F62;">&#39;xlsx&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          moment: [</span><span style="color:#032F62;">&#39;moment&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          exceljs: [</span><span style="color:#032F62;">&#39;exceljs&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          heic2any: [</span><span style="color:#032F62;">&#39;heic2any&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          pdfjs: [</span><span style="color:#032F62;">&#39;pdfjs-dist&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;jspdf&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;docx-preview&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;docx-preview&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">IS_DEV</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SHOW_DEV_TOOL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    baseConfig.plugins.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">VitePluginVueDevTools</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> baseConfig</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
