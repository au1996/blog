import{_ as s,o as n,c as a,R as l}from"./chunks/framework.xW0OlkBD.js";const h=JSON.parse('{"title":"记录一些冷知识","description":"","frontmatter":{},"headers":[],"relativePath":"extend/tips.md","filePath":"extend/tips.md","lastUpdated":1714987180000}'),p={name:"extend/tips.md"},e=l(`<h1 id="记录一些冷知识" tabindex="-1">记录一些冷知识 <a class="header-anchor" href="#记录一些冷知识" aria-label="Permalink to &quot;记录一些冷知识&quot;">​</a></h1><h2 id="浏览器选项卡切换事件" tabindex="-1">浏览器选项卡切换事件 <a class="header-anchor" href="#浏览器选项卡切换事件" aria-label="Permalink to &quot;浏览器选项卡切换事件&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;visibilitychange&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// document.visibilityState</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// visible 显示 页面内容可以至少部分可见。这意味着该页面是非最小化窗口的前台选项卡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// hidden 隐藏 页面内容对用户不可见。这意味着文档要么是后台选项卡，要么是最小化窗口的一部分</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 或者操作系统屏幕锁定处于活动状态。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// prerender 预渲染 注意：这已从标准中删除</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 页面内容正在预渲染，并且对用户不可见（出于 document.hidden 的目的被视为隐藏）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文档可能会从此状态开始，但永远不会从另一个值转换到该状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.visibilityState </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;visible&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;我进来了&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (document.visibilityState </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hidden&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;我离开了&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;visibilitychange&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// document.visibilityState</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// visible 显示 页面内容可以至少部分可见。这意味着该页面是非最小化窗口的前台选项卡</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// hidden 隐藏 页面内容对用户不可见。这意味着文档要么是后台选项卡，要么是最小化窗口的一部分</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 或者操作系统屏幕锁定处于活动状态。。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// prerender 预渲染 注意：这已从标准中删除</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 页面内容正在预渲染，并且对用户不可见（出于 document.hidden 的目的被视为隐藏）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文档可能会从此状态开始，但永远不会从另一个值转换到该状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.visibilityState </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;visible&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;我进来了&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (document.visibilityState </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hidden&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    document.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;我离开了&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,3),o=[e];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{h as __pageData,_ as default};
