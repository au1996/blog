import{_ as s,o as a,c as n,R as l}from"./chunks/framework.hUnJMfMr.js";const g=JSON.parse('{"title":"Vue2.0 代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/vue/standard.md","filePath":"frontend/vue/standard.md","lastUpdated":1700645130000}'),p={name:"frontend/vue/standard.md"},e=l(`<h1 id="vue2-0-代码规范" tabindex="-1">Vue2.0 代码规范 <a class="header-anchor" href="#vue2-0-代码规范" aria-label="Permalink to &quot;Vue2.0 代码规范&quot;">​</a></h1><h2 id="_1-组件-实例的选项顺序" tabindex="-1">1.组件/实例的选项顺序 <a class="header-anchor" href="#_1-组件-实例的选项顺序" aria-label="Permalink to &quot;1.组件/实例的选项顺序&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  directives: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">updated</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">activated</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">unmounted</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: {},</span></span>
<span class="line"><span style="color:#24292E;">  directives: {},</span></span>
<span class="line"><span style="color:#24292E;">  mixins: [],</span></span>
<span class="line"><span style="color:#24292E;">  props: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  computed: {},</span></span>
<span class="line"><span style="color:#24292E;">  watch: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">updated</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">activated</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">unmounted</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  methods: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2-元素-attribute-的顺序" tabindex="-1">2.元素 attribute 的顺序 <a class="header-anchor" href="#_2-元素-attribute-的顺序" aria-label="Permalink to &quot;2.元素 attribute 的顺序&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">is</span></span>
<span class="line"><span style="color:#E1E4E8;">v-for</span></span>
<span class="line"><span style="color:#E1E4E8;">v-if</span></span>
<span class="line"><span style="color:#E1E4E8;">v-else-if</span></span>
<span class="line"><span style="color:#E1E4E8;">v-else</span></span>
<span class="line"><span style="color:#E1E4E8;">v-show</span></span>
<span class="line"><span style="color:#E1E4E8;">v-cloak</span></span>
<span class="line"><span style="color:#E1E4E8;">v-pre</span></span>
<span class="line"><span style="color:#E1E4E8;">v-once</span></span>
<span class="line"><span style="color:#E1E4E8;">id</span></span>
<span class="line"><span style="color:#E1E4E8;">ref</span></span>
<span class="line"><span style="color:#E1E4E8;">key</span></span>
<span class="line"><span style="color:#E1E4E8;">v-model</span></span>
<span class="line"><span style="color:#E1E4E8;">v-on</span></span>
<span class="line"><span style="color:#E1E4E8;">v-html</span></span>
<span class="line"><span style="color:#E1E4E8;">v-text</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">is</span></span>
<span class="line"><span style="color:#24292E;">v-for</span></span>
<span class="line"><span style="color:#24292E;">v-if</span></span>
<span class="line"><span style="color:#24292E;">v-else-if</span></span>
<span class="line"><span style="color:#24292E;">v-else</span></span>
<span class="line"><span style="color:#24292E;">v-show</span></span>
<span class="line"><span style="color:#24292E;">v-cloak</span></span>
<span class="line"><span style="color:#24292E;">v-pre</span></span>
<span class="line"><span style="color:#24292E;">v-once</span></span>
<span class="line"><span style="color:#24292E;">id</span></span>
<span class="line"><span style="color:#24292E;">ref</span></span>
<span class="line"><span style="color:#24292E;">key</span></span>
<span class="line"><span style="color:#24292E;">v-model</span></span>
<span class="line"><span style="color:#24292E;">v-on</span></span>
<span class="line"><span style="color:#24292E;">v-html</span></span>
<span class="line"><span style="color:#24292E;">v-text</span></span></code></pre></div><h2 id="_3-methods-方法命名" tabindex="-1">3.methods 方法命名 <a class="header-anchor" href="#_3-methods-方法命名" aria-label="Permalink to &quot;3.methods 方法命名&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1 动宾短语 good：jumpPage、openCarInfoDialog bad：go、nextPage、show、open、login</span></span>
<span class="line"><span style="color:#E1E4E8;">2 ajax 方法以 get、post 开头，以 data 结尾</span></span>
<span class="line"><span style="color:#E1E4E8;">good：getListData、postFormData</span></span>
<span class="line"><span style="color:#E1E4E8;">bad：takeData、confirmData、getList、postForm</span></span>
<span class="line"><span style="color:#E1E4E8;">3 事件方法以 on 开头（onTypeChange、onUsernameInput）</span></span>
<span class="line"><span style="color:#E1E4E8;">4 init、refresh 单词除外</span></span>
<span class="line"><span style="color:#E1E4E8;">5 尽量使用常用单词开头（set、get、open、close、jump）</span></span>
<span class="line"><span style="color:#E1E4E8;">6 驼峰命名（good: getListData）（bad: get_list_data、getlistData）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1 动宾短语 good：jumpPage、openCarInfoDialog bad：go、nextPage、show、open、login</span></span>
<span class="line"><span style="color:#24292E;">2 ajax 方法以 get、post 开头，以 data 结尾</span></span>
<span class="line"><span style="color:#24292E;">good：getListData、postFormData</span></span>
<span class="line"><span style="color:#24292E;">bad：takeData、confirmData、getList、postForm</span></span>
<span class="line"><span style="color:#24292E;">3 事件方法以 on 开头（onTypeChange、onUsernameInput）</span></span>
<span class="line"><span style="color:#24292E;">4 init、refresh 单词除外</span></span>
<span class="line"><span style="color:#24292E;">5 尽量使用常用单词开头（set、get、open、close、jump）</span></span>
<span class="line"><span style="color:#24292E;">6 驼峰命名（good: getListData）（bad: get_list_data、getlistData）</span></span></code></pre></div><h2 id="_4-生命周期注意点" tabindex="-1">4.生命周期注意点 <a class="header-anchor" href="#_4-生命周期注意点" aria-label="Permalink to &quot;4.生命周期注意点&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1 不在 mounted、created 之类的方法写逻辑，取 ajax 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">2 在 created 里面监听 Bus 事件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1 不在 mounted、created 之类的方法写逻辑，取 ajax 数据</span></span>
<span class="line"><span style="color:#24292E;">2 在 created 里面监听 Bus 事件</span></span></code></pre></div><h2 id="_5-基于模块开发" tabindex="-1">5.基于模块开发 <a class="header-anchor" href="#_5-基于模块开发" aria-label="Permalink to &quot;5.基于模块开发&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">每一个 vue 组件首先必须专注于解决一个单一的问题，独立的，可复用的，微小的和可测试的。</span></span>
<span class="line"><span style="color:#E1E4E8;">如果你的组件做了太多的事或是变得臃肿，请将其拆成更小的组件并保持单一的原则。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">每一个 vue 组件首先必须专注于解决一个单一的问题，独立的，可复用的，微小的和可测试的。</span></span>
<span class="line"><span style="color:#24292E;">如果你的组件做了太多的事或是变得臃肿，请将其拆成更小的组件并保持单一的原则。</span></span></code></pre></div><h2 id="_6-vue-组件命名" tabindex="-1">6.Vue 组件命名 <a class="header-anchor" href="#_6-vue-组件命名" aria-label="Permalink to &quot;6.Vue 组件命名&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">1.</span><span style="color:#E1E4E8;"> 有意义的: 不过于具体，也不过于抽象</span></span>
<span class="line"><span style="color:#FFAB70;">2.</span><span style="color:#E1E4E8;"> 简短: 2 到 3 个单词</span></span>
<span class="line"><span style="color:#FFAB70;">3.</span><span style="color:#E1E4E8;"> 具有可读性: 以便于沟通交流</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 推荐 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;app-header&gt;&lt;/app-header&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;user-list&gt;&lt;/user-list&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;range-slider&gt;&lt;/range-slider&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 避免 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;btn-group&gt;&lt;/btn-group&gt; &lt;!-- 虽然简短但是可读性差. 使用 </span><span style="color:#79B8FF;">\`button-group\`</span><span style="color:#E1E4E8;"> 替代 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;ui-slider&gt;&lt;/ui-slider&gt; &lt;!-- ui 前缀太过于宽泛，在这里意义不明确 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;slider&gt;&lt;/slider&gt; &lt;!-- 与自定义元素规范不兼容 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">1.</span><span style="color:#24292E;"> 有意义的: 不过于具体，也不过于抽象</span></span>
<span class="line"><span style="color:#E36209;">2.</span><span style="color:#24292E;"> 简短: 2 到 3 个单词</span></span>
<span class="line"><span style="color:#E36209;">3.</span><span style="color:#24292E;"> 具有可读性: 以便于沟通交流</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 推荐 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;app-header&gt;&lt;/app-header&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;user-list&gt;&lt;/user-list&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;range-slider&gt;&lt;/range-slider&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 避免 --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;btn-group&gt;&lt;/btn-group&gt; &lt;!-- 虽然简短但是可读性差. 使用 </span><span style="color:#005CC5;">\`button-group\`</span><span style="color:#24292E;"> 替代 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;ui-slider&gt;&lt;/ui-slider&gt; &lt;!-- ui 前缀太过于宽泛，在这里意义不明确 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;slider&gt;&lt;/slider&gt; &lt;!-- 与自定义元素规范不兼容 --&gt;</span></span></code></pre></div><h2 id="_7-验证组件的-props" tabindex="-1">7.验证组件的 props <a class="header-anchor" href="#_7-验证组件的-props" aria-label="Permalink to &quot;7.验证组件的 props&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">规则</p><ol><li>提供默认值</li><li>使用 type 属性校验类型</li><li>使用 props 之前先检查该 prop 是否存在</li></ol></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;range&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;max&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;min&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;range&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;max&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;min&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    max: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number, </span><span style="color:#6A737D;">// 这里添加了数字类型的校验</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    min: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    max: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number, </span><span style="color:#6A737D;">// 这里添加了数字类型的校验</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    min: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_8-只在需要时创建组件" tabindex="-1">8.只在需要时创建组件 <a class="header-anchor" href="#_8-只在需要时创建组件" aria-label="Permalink to &quot;8.只在需要时创建组件&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Vue.js 是一个基于组件的框架。如果你不知道何时创建组件可能会导致以下问题：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">如果组件太大, 可能很难重用和维护</span></span>
<span class="line"><span style="color:#E1E4E8;">如果组件太小，你的项目就会（因为深层次的嵌套而）被淹没，也更难使组件间通信</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">总结：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">1.</span><span style="color:#E1E4E8;"> 尽可能早地尝试构建出诸如模态框、提示框、工具条、菜单、头部等这些明显的（通用型）组件。</span></span>
<span class="line"><span style="color:#E1E4E8;">   总之，你知道的这些组件以后一定会在当前页面或者是全局范围内需要</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">2.</span><span style="color:#E1E4E8;"> 在每一个新的开发项目中，对于一整个页面或者其中的一部分，在进行开发前先尝试思考一下。</span></span>
<span class="line"><span style="color:#E1E4E8;">   如果你认为它有一部分应该是一个组件，那么就创建它吧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">3.</span><span style="color:#E1E4E8;"> 如果你不确定，那就不要。避免那些“以后可能会有用”的组件污染你的项目。</span></span>
<span class="line"><span style="color:#E1E4E8;">   它们可能会永远的只是（静静地）待在那里，这一点也不聪明。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Vue.js 是一个基于组件的框架。如果你不知道何时创建组件可能会导致以下问题：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">如果组件太大, 可能很难重用和维护</span></span>
<span class="line"><span style="color:#24292E;">如果组件太小，你的项目就会（因为深层次的嵌套而）被淹没，也更难使组件间通信</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">总结：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">1.</span><span style="color:#24292E;"> 尽可能早地尝试构建出诸如模态框、提示框、工具条、菜单、头部等这些明显的（通用型）组件。</span></span>
<span class="line"><span style="color:#24292E;">   总之，你知道的这些组件以后一定会在当前页面或者是全局范围内需要</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">2.</span><span style="color:#24292E;"> 在每一个新的开发项目中，对于一整个页面或者其中的一部分，在进行开发前先尝试思考一下。</span></span>
<span class="line"><span style="color:#24292E;">   如果你认为它有一部分应该是一个组件，那么就创建它吧</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209;">3.</span><span style="color:#24292E;"> 如果你不确定，那就不要。避免那些“以后可能会有用”的组件污染你的项目。</span></span>
<span class="line"><span style="color:#24292E;">   它们可能会永远的只是（静静地）待在那里，这一点也不聪明。</span></span></code></pre></div>`,19),o=[e];function t(c,r,E,i,y,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};
