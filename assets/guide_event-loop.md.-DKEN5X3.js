import{_ as s,o as n,c as a,R as l}from"./chunks/framework.hUnJMfMr.js";const p="/blog/assets/prototype.LSsO0Vih.png",o="/blog/assets/stack.fZ0Ytqd9.jpg",e="/blog/assets/heap.TBPv4KSs.jpg",c="/blog/assets/stack-heap.DueGljZj.png",t="/blog/assets/queue.xRN0hGhO.jpg",r="/blog/assets/js-stack.a5lepCAp.png",E="/blog/assets/event-loop-ui.izf-Iel7.png",y="/blog/assets/node-event-loop.QifeMqPv.png",b=JSON.parse('{"title":"【js 进阶】全篇干货 ！一篇文章让你彻底弄懂栈、堆、队列、执行栈、执行上下文、跟事件循环（Event Loop）的关系","description":"","frontmatter":{},"headers":[],"relativePath":"guide/event-loop.md","filePath":"guide/event-loop.md","lastUpdated":1700645130000}'),i={name:"guide/event-loop.md"},d=l(`<h1 id="【js-进阶】全篇干货-一篇文章让你彻底弄懂栈、堆、队列、执行栈、执行上下文、跟事件循环-event-loop-的关系" tabindex="-1">【js 进阶】全篇干货 ！一篇文章让你彻底弄懂栈、堆、队列、执行栈、执行上下文、跟事件循环（Event Loop）的关系 <a class="header-anchor" href="#【js-进阶】全篇干货-一篇文章让你彻底弄懂栈、堆、队列、执行栈、执行上下文、跟事件循环-event-loop-的关系" aria-label="Permalink to &quot;【js 进阶】全篇干货 ！一篇文章让你彻底弄懂栈、堆、队列、执行栈、执行上下文、跟事件循环（Event Loop）的关系&quot;">​</a></h1><h2 id="前言-本文背景" tabindex="-1">前言（本文背景） <a class="header-anchor" href="#前言-本文背景" aria-label="Permalink to &quot;前言（本文背景）&quot;">​</a></h2><p>网上有很多讲解 <code>Event Loop</code> 的文章，但大多数都过于片面，少数相对全面的也仍有一些知识盲区，甚至一些文章还传播错误的知识，结果就是让我们 <code>似懂非懂</code>。这篇文章让你彻底弄懂！</p><h2 id="开始-前置知识点" tabindex="-1">开始（前置知识点） <a class="header-anchor" href="#开始-前置知识点" aria-label="Permalink to &quot;开始（前置知识点）&quot;">​</a></h2><p>已经了解 <code>JS数据类型</code>、<code>栈</code>、<code>堆</code>、<code>队列</code>、<code>执行栈</code>、<code>执行上下文</code> 的同学可以跳过这一段；</p><h3 id="js-数据类型" tabindex="-1">JS 数据类型 <a class="header-anchor" href="#js-数据类型" aria-label="Permalink to &quot;JS 数据类型&quot;">​</a></h3><p>JS 数据类型分为两大类：<code>原始类型 | 基本类型</code> 、<code>引用类型</code></p><p>原始类型包含七种：</p><ul><li><code>number</code></li><li><code>string</code></li><li><code>boolean</code></li><li><code>undefined</code></li><li><code>symbol (ES2015)</code></li><li><code>bigint (ES2020)</code></li><li><code>null (特殊的原始类型)</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;str&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;undefined&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sym&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;symbol&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">666</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bigint&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;object&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 原理是这样的，不同的对象在底层都表示为二进制，</span></span>
<span class="line"><span style="color:#6A737D;">// 在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，</span></span>
<span class="line"><span style="color:#6A737D;">// null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">666</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;str&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;boolean&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;undefined&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sym&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;symbol&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">666</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bigint&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;object&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 原理是这样的，不同的对象在底层都表示为二进制，</span></span>
<span class="line"><span style="color:#6A737D;">// 在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，</span></span>
<span class="line"><span style="color:#6A737D;">// null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”</span></span></code></pre></div><p>引用类型只有一种 <code>Object</code>：</p><ul><li><code>Object</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">x</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#E1E4E8;">fn </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Function</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">fn </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">x</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x</span></span>
<span class="line"><span style="color:#24292E;">fn </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Function</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">fn </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// true</span></span></code></pre></div><p>所以 <code>Function</code> 算是 <code>Object</code> 的子类型, 这涉及到 <code>原型链</code> 的知识点</p><p><img src="`+p+`" alt="solar"></p><p>其实 <code>Object</code> 还包含很多子类型，比如 <code>Array</code>、<code>RegExp</code>、<code>Math</code>、<code>Map</code>、<code>Set</code>、<code>WeakMap</code>、<code>WeakSet</code> 等</p><p><strong>特殊提示</strong>：为了方便操作原始类型，<code>ECMAScript</code> 提供了 <code>3</code> 种特殊的引用类型：<code>Number</code>、<code>String</code> 和<code>Boolean</code>。 这些类型具有上面介绍的其他<code>引用类型</code>一样的特点，但也具有与各自<code>原始类型</code>对应的<code>特殊行为</code>。每当用到某个<code>原始类型</code>的方法或属性时， 后台都会创建一个相应<code>原始包装类型</code>的对象，从而暴露出操作<code>原始类型</code>的各种方法。来看下面的例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;some text&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s1.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上面等同于下面的操作</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;some text&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> s1.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例1</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;some text&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">s1.color </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(s1.color) </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#6A737D;">// 原因就是第二行代码运行时会临时创建一个String对象，而当第三行代码执行时，这个对象已经被销毁了</span></span>
<span class="line"><span style="color:#6A737D;">// 实际上，第三行代码在这里创建了自己的String 对象，但这个对象没有color 属性。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例2</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;some text&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6A737D;">// 如果传给 Object 的是字符串，则会创建一个 String 的实例。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例3</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;25&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(value) </span><span style="color:#6A737D;">// 转型函数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> number) </span><span style="color:#6A737D;">// &quot;number&quot;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(value) </span><span style="color:#6A737D;">// 构造函数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> obj) </span><span style="color:#6A737D;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#6A737D;">// 如果是数值，则会创建 Number 的实例。布尔值则会得到 Boolean 的实例。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例4</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> falseObject </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> falseObject </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> falseValue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> falseValue </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> falseObject) </span><span style="color:#6A737D;">// object</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> falseValue) </span><span style="color:#6A737D;">// boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(falseObject </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(falseValue </span><span style="color:#F97583;">instanceof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;some text&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> s2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s1.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 上面等同于下面的操作</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;some text&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> s2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> s1.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例1</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;some text&#39;</span></span>
<span class="line"><span style="color:#24292E;">s1.color </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;red&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(s1.color) </span><span style="color:#6A737D;">// undefined</span></span>
<span class="line"><span style="color:#6A737D;">// 原因就是第二行代码运行时会临时创建一个String对象，而当第三行代码执行时，这个对象已经被销毁了</span></span>
<span class="line"><span style="color:#6A737D;">// 实际上，第三行代码在这里创建了自己的String 对象，但这个对象没有color 属性。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例2</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;some text&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">String</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#6A737D;">// 如果传给 Object 的是字符串，则会创建一个 String 的实例。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例3</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;25&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(value) </span><span style="color:#6A737D;">// 转型函数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> number) </span><span style="color:#6A737D;">// &quot;number&quot;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(value) </span><span style="color:#6A737D;">// 构造函数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> obj) </span><span style="color:#6A737D;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#6A737D;">// 如果是数值，则会创建 Number 的实例。布尔值则会得到 Boolean 的实例。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 举例4</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> falseObject </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> falseObject </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> falseValue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> falseValue </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> falseObject) </span><span style="color:#6A737D;">// object</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> falseValue) </span><span style="color:#6A737D;">// boolean</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(falseObject </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(falseValue </span><span style="color:#D73A49;">instanceof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Boolean</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// false</span></span></code></pre></div><p>上面 <code>3</code> 种特殊的引用类型：<code>Number</code>、<code>String</code> 和<code>Boolean</code> 可能给你增加了心智负担，我很抱歉~但这是一个有趣的事实 O(∩_∩)O</p><h3 id="栈-stack" tabindex="-1">栈（stack） <a class="header-anchor" href="#栈-stack" aria-label="Permalink to &quot;栈（stack）&quot;">​</a></h3><p><code>栈</code>（stack） 、<code>堆</code>（heap）、 <code>队列</code>（queue）是 <code>js</code> 的三种数据结构</p><p><strong>栈的特点是：出口跟入口是同一个，遵循着 <code>先进后出</code>、<code>后进先出</code> 的原则。数据只能顺序的入栈，顺序的出栈。</strong></p><p>一图胜千言：</p><p><img src="`+o+'" alt="solar"></p><h3 id="堆-heap" tabindex="-1">堆（heap） <a class="header-anchor" href="#堆-heap" aria-label="Permalink to &quot;堆（heap）&quot;">​</a></h3><p><strong>堆的特点是 <code>无序</code> 的 <code>key-value</code> <code>键值对</code> 存储方式。</strong></p><p>堆的存取方式跟 <strong>顺序</strong> 没有关系，不局限 <strong>出入口</strong>。</p><p>一图胜千言：</p><p><img src="'+e+`" alt="solar"></p><p>我们想要在书架上找到想要的<code>书籍</code>，最直接的方式就是通过查找<code>书名</code>，书名就是我们的 <code>key</code>。拿着这把 <code>key</code>，就可以轻松拿到对应的<code>书籍</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">这里提一句网上流传的知识点：</span></span>
<span class="line"><span style="color:#e1e4e8;">javascript代码在执行的时候会将不同的变量存于内存中的不同位置</span></span>
<span class="line"><span style="color:#e1e4e8;">栈内存：存放原始数据类型 以及 引用数据类型的指针</span></span>
<span class="line"><span style="color:#e1e4e8;">堆内存：存放引用数据类型的值</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">请注意：不存在闭包的时候，上面的结论是对的。</span></span>
<span class="line"><span style="color:#e1e4e8;">但是存在闭包时， \`闭包\` 用到的变量（原始数据类型、引用数据类型）</span></span>
<span class="line"><span style="color:#e1e4e8;">都会存到 [[Scopes]]（函数的属性---存着这个函数的闭包链---其中的Closure代表闭包）中，</span></span>
<span class="line"><span style="color:#e1e4e8;">然后放到 堆内存，为了不增加心智负担，这篇文章不讲闭包。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">这里提一句网上流传的知识点：</span></span>
<span class="line"><span style="color:#24292e;">javascript代码在执行的时候会将不同的变量存于内存中的不同位置</span></span>
<span class="line"><span style="color:#24292e;">栈内存：存放原始数据类型 以及 引用数据类型的指针</span></span>
<span class="line"><span style="color:#24292e;">堆内存：存放引用数据类型的值</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">请注意：不存在闭包的时候，上面的结论是对的。</span></span>
<span class="line"><span style="color:#24292e;">但是存在闭包时， \`闭包\` 用到的变量（原始数据类型、引用数据类型）</span></span>
<span class="line"><span style="color:#24292e;">都会存到 [[Scopes]]（函数的属性---存着这个函数的闭包链---其中的Closure代表闭包）中，</span></span>
<span class="line"><span style="color:#24292e;">然后放到 堆内存，为了不增加心智负担，这篇文章不讲闭包。</span></span></code></pre></div><p>感兴趣的同学可以点击<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noreferrer">MDN 了解闭包</a></p><p><strong>下图助你理解 <code>栈内存</code>、<code>堆内存</code></strong>：</p><p><img src="`+c+'" alt="solar"></p><p><strong>为什么会有栈内存和堆内存之分？</strong></p><p>通常与垃圾回收机制有关。为了使程序运行时占用的内存最小。</p><p>当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了，内存栈里面的数据就清空了<code>(闭包是个例外，内存栈销毁了，但是闭包如果用到了内存栈里面的数据，闭包会把数据存下来。所以说： 闭包不能乱用)</code> 。因此，所有在方法中定义的变量都是放在栈内存中的；</p><p>当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是 <code>堆内存</code> 。<code>堆内存</code> 中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用，则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在某个时机的时候回收它。（具体看 <code>JS运行环境</code> 的垃圾回收机制）</p><h3 id="队列-queue" tabindex="-1">队列（queue） <a class="header-anchor" href="#队列-queue" aria-label="Permalink to &quot;队列（queue）&quot;">​</a></h3><p><strong>队列的特点是是 <code>先进先出</code>，数据存取时 &quot;从队尾插入，从队头取出&quot;。</strong></p><p>与栈的区别：栈的存入取出都在顶部一个出入口，而队列分两个，一个出口，一个入口</p><p>一图胜千言：</p><p><img src="'+t+`" alt="solar"></p><h3 id="执行栈-js-stack" tabindex="-1">执行栈（JS stack） <a class="header-anchor" href="#执行栈-js-stack" aria-label="Permalink to &quot;执行栈（JS stack）&quot;">​</a></h3><p><code>执行栈</code> 又称为 <code>执行上下文栈</code> 或 <code>调用栈</code></p><p>程序执行进入一个执行环境时（比如整个 <code>script标签</code> 或 <code>进入一个函数内部</code>），它的 <code>执行上下文</code> 就会被创建，执行上下文中包含了函数的<code>参数</code>和<code>局部变量</code>, 并被推入 <code>执行栈</code> 中(入栈)；程序执行完成后，它的执行上下文就会被销毁，并从栈顶被推出(出栈)，继续执行下一个<code>执行上下文</code>。</p><p>因为 <code>JS</code> 执行中最先进入<code>全局环境</code>，所以最开始处于 <strong>栈底的是全局环境的执行上下文</strong> 。而处于 <strong>栈顶的是当前正在执行函数的执行上下文</strong>，当函数调用完成后，它就会从栈顶被推出。</p><p><strong>请注意：</strong> 上面提到的<code>栈内存</code>，其实包含在<code>执行栈</code>里面，或者说，<code>栈内存</code>就是<code>执行栈</code>，只不过上面讲<code>栈内存</code>的时候没有讲<code>执行上下文</code>的概念。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;I am bar&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;I am bar&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span></code></pre></div><p>一图胜千言：</p><p><img src="`+r+`" alt="solar"></p><h3 id="执行上下文" tabindex="-1">执行上下文 <a class="header-anchor" href="#执行上下文" aria-label="Permalink to &quot;执行上下文&quot;">​</a></h3><p><strong>概念：以下内容摘抄自 <code>《JavaScript高级程序设计---第4版》</code> 中的第 4 章，第 2 节</strong></p><p>执行上下文（以下简称“上下文”）的概念在 <code>JavaScript</code> 中是颇为重要的。变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为。 每个上下文都有一个关联的变量对象<code>（variable object）</code>，而这个上下文中定义的所有变量和函数都存在于这个对象上。虽然无法通过代码访问变量对象，但后台处理数据会用到它。</p><p>全局上下文是最外层的上下文。根据 <code>ECMAScript</code> 实现的宿主环境，表示全局上下文的对象可能不一样。 在浏览器中，全局上下文就是我们常说的 <code>window</code> 对象（第 12 章会详细介绍），因此所有通过 <code>var</code> 定 义的全局变量和函数都会成为 <code>window</code> 对象的属性和方法。使用 <code>let</code> 和 <code>const</code> 的顶级声明不会定义在全局上下文中，但在作用域链解析上效果是一样的。 上下文在其所有代码都执行完毕后会被销毁，包括定义 在它上面的所有变量和函数（全局上下文在应用程序退出前才会被销毁，比如关闭网页或退出浏览器）。</p><p>每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个<code>执行栈</code>上。 在函数执行完之后，<code>执行栈</code>会弹出该函数上下文，将控制权返还给之前的执行上下文。<code>ECMAScript</code> 程序的执行流就是通过这个<code>执行栈</code>进行控制的。</p><p>上下文中的代码在执行的时候，会创建变量对象的一个<code>作用域链</code>（scope chain）。这个作用域链决定 了各级上下文中的代码在访问变量和函数时的顺序。代码正在执行的上下文的变量对象始终位于作用域 链的最前端。如果上下文是函数，则其活动对象（activation object）用作变量对象。活动对象最初只有 一个定义变量：<code>arguments</code>。（全局上下文中没有这个变量。）作用域链中的下一个变量对象来自包含上 下文，再下一个对象来自再下一个包含上下文。以此类推直至<code>全局上下文</code>；<code>全局上下文</code>的变量对象始终 是<code>作用域链</code>的最后一个变量对象。</p><p>代码执行时的<code>标识符</code>解析是通过沿作用域链逐级搜索<code>标识符</code>名称完成的。搜索过程始终从作用域链 的最前端开始，然后逐级往后，直到找到<code>标识符</code>。（如果没有找到<code>标识符</code>，那么通常会报错。）</p><p><strong>大白话</strong>：所谓 <code>执行上下文</code>，就是指 <code>一段代码</code>。这里只能打比方了，别问我为啥要打 <code>比方</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在上面的 执行栈 例子中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局执行上下文是这个</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;I am bar&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// foo()创造的执行上下文是这个</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;I am bar&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bar()创造的执行上下文是这个</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;I am bar&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每个上下文都拥有一个作用域链、用于搜索变量和函数、还有一些比如this等, 需要抽象的理解~.~</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在上面的 执行栈 例子中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局执行上下文是这个</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;I am bar&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// foo()创造的执行上下文是这个</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;I am bar&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bar()创造的执行上下文是这个</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;I am bar&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 每个上下文都拥有一个作用域链、用于搜索变量和函数、还有一些比如this等, 需要抽象的理解~.~</span></span></code></pre></div><h3 id="前置知识点总结" tabindex="-1">前置知识点总结 <a class="header-anchor" href="#前置知识点总结" aria-label="Permalink to &quot;前置知识点总结&quot;">​</a></h3><p><strong>以下内容摘抄自 <code>《JavaScript高级程序设计---第4版》</code> 中的第 4 章，第 4 节</strong></p><ul><li>原始值大小固定，因此保存在栈内存上</li><li>从一个变量到另一个变量复制原始值会创建该值的第二个副本</li><li>引用值是对象，存储在堆内存上</li><li>包含引用值的变量实际上只包含指向相应对象的一个指针，而不是对象本身</li><li>从一个变量到另一个变量复制引用值只会复制指针，因此结果是两个变量都指向同一个对象</li><li><code>typeof</code> 操作符可以确定值的原始类型，而 <code>instanceof</code> 操作符用于确保值的引用类型</li><li>任何变量（不管包含的是原始值还是引用值）都存在于某个执行上下文中（也称为作用域）。这个上下文（作用域）决定了变量的生命周期，以及它们可以访问代码的哪些部分</li><li>执行上下文分<code>全局上下文</code>、<code>函数上下文</code>和<code>块级上下文</code></li><li>代码执行流每进入一个新上下文，都会创建一个<code>作用域链</code>，用于搜索变量和函数</li><li>函数或块的<code>局部上下文</code>不仅可以访问自己作用域内的变量，而且也可以访问任何<code>包含上下文</code>乃至<code>全局上下文</code>中的变量</li><li>全局上下文只能访问<code>全局上下文</code>中的变量和函数，不能直接访问局部上下文中的任何数据</li><li>变量的执行上下文用于确定什么时候<code>释放内存</code></li><li><code>JavaScript</code> 是使用垃圾回收的编程语言，开发者不需要操心内存分配和回收。<code>JavaScript</code> 的垃圾回收程序可以总结如下</li><li>离开作用域的值会被自动标记为可回收，然后在垃圾回收期间被删除</li><li>主流的垃圾回收算法是标记清理，即先给当前不使用的值加上标记，再回来回收它们的内存</li><li>引用计数是另一种垃圾回收策略，需要记录值被引用了多少次。<code>JavaScript</code> 引擎不再使用这种算法，但某些旧版本的 IE 仍然会受这种算法的影响，原因是 <code>JavaScript</code> 会访问非原生<code>JavaScript</code> 对象（如 DOM 元素</li><li>引用计数在代码中存在循环引用时会出现问题</li><li>解除变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。为促进内存回收，全局对象、全局对象的属性和循环引用都应该在不需要时解除引用</li></ul><h2 id="聚焦-事件循环-event-loop" tabindex="-1">聚焦（事件循环 Event Loop） <a class="header-anchor" href="#聚焦-事件循环-event-loop" aria-label="Permalink to &quot;聚焦（事件循环 Event Loop）&quot;">​</a></h2><p><strong>JavaScript 的一大特点就是单线程，而这个线程中拥有唯一的一个事件循环。</strong></p><div class="tip custom-block"><p class="custom-block-title">为什么是单线程？</p><p>试想一下，如果 <code>JavaScript</code> 是多线程的，那么当两个线程同时对 <code>DOM</code> 进行一项操作，例如一个向其添加事件，而另一个删除了这个 <code>DOM</code>，此时该如何处理？ 可能你会反驳，我们不是可以用 <code>web worker</code> 创造多线程环境吗？这是因为：使用 <code>web worker</code> 有着诸多限制，在 <code>worker</code> 内， 不能直接操作 <code>DOM</code> 节点，也无法使用 <code>window、parent</code> 这些对象。不过 <code>Worker</code> 线程可以获取 <code>navigator</code> 对象和 <code>location</code> 对象。具体内容可以点击 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#web_workers_api" target="_blank" rel="noreferrer">MDN 链接</a> 了解。总之，我们可以认为 <code>JavaScript</code> 是单线程。</p></div><p><strong>以下内容摘抄自 <code>《你不知道的JavaScript--中卷》</code> 中的第 1 章，第 7 节</strong></p><p>实际上，<code>JavaScript</code> 程序总是至少分为两个块：第一块<code>现在运行</code>；下一块<code>将来运行</code>，以响应某个事件。尽管程序是<code>一块一块</code>执行的，但是所有这些块共享对<code>程序作用域和状态</code>的访问， 所以对状态的修改都是在之前<code>累积</code>的修改之上进行的</p><p>一旦有事件需要运行，事件循环就会运行，直到队列清空。事件循环的每一轮称为一个 <code>tick</code> 。<code>用户交互</code>、<code>IO</code> 和<code>定时器</code>会向事件队列中加入事件。</p><p>任意时刻，一次只能从队列中处理一个<code>事件</code>。执行事件的时候，可能直接或间接地引发一个或多个后续事件。</p><p><code>并发</code>是指两个或多个事件链随时间发展交替执行，以至于从更高的层次来看，就像是同时在运行（尽管在任意时刻只处理一个事件）。</p><p>通常需要对这些<code>并发</code>执行的<code>“进程”</code>（有别于操作系统中的进程概念）进行某种形式的交互协调，比如需要确保执行顺序或者需要防止竞态出现。这些<code>“进程”</code>也可以通过把自身 分割为更小的块，以便其他<code>“进程”</code>插入进来。</p><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">介绍基本概念</p><ol><li><code>JavaScript</code> 代码的执行过程中，除了依靠 <code>执行栈</code> 来搞定函数的执行顺序外，还依靠任务队列 <code>task queue</code> 来搞定 <code>异步代码</code> 的执行。</li><li>一个线程中，事件循环是唯一的，但是任务队列可以拥有多个</li><li>任务队列又分为 <code>macro-task</code>（宏任务）与 <code>micro-task</code>（微任务），在 <code>ECMAScript</code> 中，<code>macro-task</code> 称为 <code>task</code>、<code>micro-task</code> 称为 <code>jobs</code></li><li><code>macro-task</code> 大概包括：<code>script(整体代码)</code>, <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>, <code>I/O</code>, <code>UI rendering</code></li><li><code>micro-task</code> 大概包括: <code>process.nextTick</code>, <code>Promise</code>, <code>MutationObserver</code></li><li><code>setTimeout/Promise</code> 等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务</li><li>来自不同任务源的任务会进入到不同的任务队列。其中 <code>setTimeout</code> 与 <code>setInterval</code> 是同源的</li><li>其中每一个任务的执行，无论是 <code>macro-task</code> 还是 <code>micro-task</code>，都是借助<code>执行栈</code>来完成</li></ol></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 有些同学对于setTimeout的理解存在偏差。这里大概说一下：</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout中的回调函数才是进入任务队列的任务</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout作为一个任务分发器，这个函数会立即执行，</span></span>
<span class="line"><span style="color:#6A737D;">// 而它所要分发的任务，也就是它的第一个参数，才是延迟执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">666</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 有些同学对于setTimeout的理解存在偏差。这里大概说一下：</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout中的回调函数才是进入任务队列的任务</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout作为一个任务分发器，这个函数会立即执行，</span></span>
<span class="line"><span style="color:#6A737D;">// 而它所要分发的任务，也就是它的第一个参数，才是延迟执行</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 类似的还有 async 函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">log</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> console</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">one</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myFunc</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">one</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">myFunc</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 6 4 1 7 2 5</span></span>
<span class="line"><span style="color:#6A737D;">// async函数碰到await关键字之前都是同步代码，</span></span>
<span class="line"><span style="color:#6A737D;">// 就算碰到await关键字还是会执行对应的代码，只有碰到异步任务时，才会暂停整个函数，</span></span>
<span class="line"><span style="color:#6A737D;">// 等清空执行栈里面的同步代码时，才重新恢复执行async函数剩下的内容</span></span>
<span class="line"><span style="color:#6A737D;">// 先看后面的内容再回来看会比较明白</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 类似的还有 async 函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">log</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> console</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">one</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myFunc</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">one</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">myFunc</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 6 4 1 7 2 5</span></span>
<span class="line"><span style="color:#6A737D;">// async函数碰到await关键字之前都是同步代码，</span></span>
<span class="line"><span style="color:#6A737D;">// 就算碰到await关键字还是会执行对应的代码，只有碰到异步任务时，才会暂停整个函数，</span></span>
<span class="line"><span style="color:#6A737D;">// 等清空执行栈里面的同步代码时，才重新恢复执行async函数剩下的内容</span></span>
<span class="line"><span style="color:#6A737D;">// 先看后面的内容再回来看会比较明白</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">事件循环的顺序</p><p>事件循环的顺序，决定了 <code>JavaScript</code> 代码的执行顺序。</p><ol><li>它从 <code>script(整体代码)</code> 开始第一次循环。之后全局上下文进入执行栈。直到<code>执行栈</code>清空</li><li>然后执行所有的 <code>micro-task</code>。当所有可执行的 <code>micro-task</code> 执行完毕之后，本轮循环结束。</li><li>下一轮循环再次从 <code>macro-task</code> 开始，找到 <code>macro-task</code> 中的第一个任务放进<code>执行栈</code>，</li><li>然后再执行此<code>macro-task</code>中的同步代码，同步代码执行完毕后，执行此宏任务中所有的 <code>micro-task</code>，</li><li>又一轮循环结束。这样一直循环下去。</li></ol><p>当我们在执行 <code>setTimeout</code> 任务中遇到 <code>setTimeout</code> 时， 它仍然会将对应的任务分发到 <code>macro-task</code> 队列中去，但是该任务就得等到下一轮事件循环执行。</p><p>上面是为了减少心智负担，漏掉一些内容，那么在浏览器环境中：</p><ol><li><p>什么时候调用 <code>requestAnimationFrame</code></p><p>根据 <code>MDN文档</code>得知 浏览器在下次<code>渲染（UI render）</code>之前调用指定的回调函数更新动画。 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次渲染之前执行</p></li><li><p>什么时候进行 <code>渲染（UI render）</code></p><p>根据 <code>HTML Standard</code>，一轮事件循环执行结束之后，下轮事件循环执行之前开始进行 <code>UI render</code>。 即：<code>macro-task</code> 任务执行完毕，接着执行完所有的 <code>micro-task</code> 任务后， 此时本轮循环结束，如果要执行 <code>UI render</code>，先调用<code>requestAnimationFrame</code>, 然后执行 <code>UI render</code>。<code>UI render</code> 完毕之后接着进行下一轮循环;</p></li><li><p>什么时候调用 <code>requestIdleCallback</code></p><p><code>requestIdleCallback</code> 会在每次 <code>检查是否要渲染（check）</code> 结束, 发现距离下一帧的刷新还有时间， 就执行一下这个。如果时间不够，就下一帧再说。</p></li></ol><p>4.结论<code>micro-task</code> 结束 -&gt; <code>requestAnimationFrame</code> -&gt; <code>requestIdleCallback</code> -&gt; <code>UI render</code></p></div><p>对 <code>requestAnimationFrame</code> 感兴趣的同学可以点击 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame" target="_blank" rel="noreferrer">MDN 链接</a></p><p>对 <code>requestIdleCallback</code> 感兴趣的同学可以点击 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback" target="_blank" rel="noreferrer">MDN 链接</a></p><p>一图胜千言：</p><p><img src="`+E+`" alt="solar"></p><h3 id="简单题" tabindex="-1">简单题 <a class="header-anchor" href="#简单题" aria-label="Permalink to &quot;简单题&quot;">​</a></h3><p>我们来做一道简单的题：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script start&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;promise2&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;script end&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出结果：</span></span>
<span class="line"><span style="color:#6A737D;">// script start</span></span>
<span class="line"><span style="color:#6A737D;">// script end</span></span>
<span class="line"><span style="color:#6A737D;">// promise1</span></span>
<span class="line"><span style="color:#6A737D;">// promise2</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮事件循环： script start   script end   promise1   promise2</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮事件循环： setTimeout</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script start&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;promise1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;promise2&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;script end&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出结果：</span></span>
<span class="line"><span style="color:#6A737D;">// script start</span></span>
<span class="line"><span style="color:#6A737D;">// script end</span></span>
<span class="line"><span style="color:#6A737D;">// promise1</span></span>
<span class="line"><span style="color:#6A737D;">// promise2</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮事件循环： script start   script end   promise1   promise2</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮事件循环： setTimeout</span></span></code></pre></div><p>你做对了吗？做对了？那你很棒！没做对？那我来给你解释解释~</p><ul><li>最开始从 script(整体代码) 开始第一次循环。之后全局上下文进入执行栈，</li><li>执行代码，打印 <strong>script start</strong></li><li>接着遇到 <code>setTimeout</code>，知道它是异步代码中的宏任务，把 <code>function () { console.log(&#39;setTimeout&#39;) }</code> 放入宏任务队列</li><li>接着遇到 <code>Promise.resolve().then</code>，知道它是异步代码中的微任务，把 <code>function () { console.log(&#39;promise1&#39;) }</code> 放入微任务队列</li><li>执行代码，打印 <strong>script end</strong></li><li>此时<code>script(整体代码)</code> 执行完毕，弹出 <code>执行栈</code>，接着检查有没有<code>微任务</code>,</li><li>发现微任务队列中有微任务，把微任务队列中，第一个入队列的微任务从微任务队列取出，放入 <code>执行栈</code></li><li>执行代码，打印 <strong>promise1</strong>, 隐式<code>return undefined</code>,遇到<code>.then</code>,向微任务队列加入一个 <code>function () { console.log(&#39;promise1&#39;) }</code>,然后出栈；</li><li>继续检查有没有<code>微任务</code>，发现有，放入 <code>执行栈</code>，</li><li>执行代码，打印 <strong>promise2</strong>，继续检查有没有<code>微任务</code>，发现没有，本轮循环结束。</li><li><code>下一轮循环开始前的操作</code>：检查是否要 <code>重新渲染</code> 页面， 判断是否执行 <code>requestAnimationFrame</code> <code>requestIdleCallback</code> <code>UI render</code>；结束以后</li><li>开始下一轮循环，检查 <code>宏任务队列</code> 中，是否有任务,发现有 <code>function () { console.log(&#39;setTimeout&#39;) }</code>，放入 <code>执行栈</code></li><li>执行代码，打印 <strong>setTimeout</strong></li><li>检查微任务队列，发现没有，本轮循环结束，执行<code>下一轮循环开始前的操作</code></li></ul><p>这里推荐一个网站，帮助你理解事件循环<a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" target="_blank" rel="noreferrer">点击链接</a></p><p>再来一道题：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">recursionMicrotask</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    i</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">recursionMicrotask</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;end&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">recursionMicrotask</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果你想体验页面卡死就把 if else 注释掉</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">recursionMicrotask</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">666</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    i</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">recursionMicrotask</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;end&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">recursionMicrotask</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果你想体验页面卡死就把 if else 注释掉</span></span></code></pre></div><p>这道题是为了让你直观的感受到，<code>微任务</code>可以无限创建<code>微任务</code>，导致进不了 <code>下一轮循环</code>，如果 <code>微任务不会结束</code> 会导致页面卡死~</p><h2 id="总结-事件循环-so-esay" tabindex="-1">总结（事件循环 so esay） <a class="header-anchor" href="#总结-事件循环-so-esay" aria-label="Permalink to &quot;总结（事件循环 so esay）&quot;">​</a></h2><h3 id="浏览器环境" tabindex="-1">浏览器环境： <a class="header-anchor" href="#浏览器环境" aria-label="Permalink to &quot;浏览器环境：&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">宏任务：setTimeout、setInterval、script(整体代码)、UI 事件交互、postMessage、</span></span>
<span class="line"><span style="color:#E1E4E8;">MessageChannel、XMLHttpRequest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">微任务：Promise.then/catch、MutationObserver、queueMicrotask（chrome71+才支持）、</span></span>
<span class="line"><span style="color:#E1E4E8;">requestAnimationFrame（为了好记忆，其实不是，它是微任务结束 ui render 执行前的回调函数）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">宏任务：setTimeout、setInterval、script(整体代码)、UI 事件交互、postMessage、</span></span>
<span class="line"><span style="color:#24292E;">MessageChannel、XMLHttpRequest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">微任务：Promise.then/catch、MutationObserver、queueMicrotask（chrome71+才支持）、</span></span>
<span class="line"><span style="color:#24292E;">requestAnimationFrame（为了好记忆，其实不是，它是微任务结束 ui render 执行前的回调函数）</span></span></code></pre></div><h3 id="node-环境-v11" tabindex="-1">Node 环境：V11+ <a class="header-anchor" href="#node-环境-v11" aria-label="Permalink to &quot;Node 环境：V11+&quot;">​</a></h3><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">宏任务：setTimeout 、setInterval 、setImmediate、I/O</span></span>
<span class="line"><span style="color:#E1E4E8;">微任务：Promise.then/catch、process.nextTick（优先级大于其它的微任务）、</span></span>
<span class="line"><span style="color:#E1E4E8;">queueMicrotask（v11.0+才支持）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Node 事件循环分为六个阶段：</span></span>
<span class="line"><span style="color:#E1E4E8;">timers： 计时器阶段，用于处理 setTimeout 以及 setInterval 的回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">pending callbacks： 用于执行某些系统操作的回调，例如 TCP 错误</span></span>
<span class="line"><span style="color:#E1E4E8;">idle, prepare： Node 内部使用，不用做过多的了解</span></span>
<span class="line"><span style="color:#E1E4E8;">poll： 轮询阶段，执行队列中的 I/O 队列，并检查定时器是否到时</span></span>
<span class="line"><span style="color:#E1E4E8;">check： 执行 setImmediate 的回调</span></span>
<span class="line"><span style="color:#E1E4E8;">close callbacks： 处理关闭的回调，例如 socket.destroy()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">每个阶段都有各自的宏队列，只有当本阶段的宏队列中的任务处理完以后，才会进入下一个阶段。</span></span>
<span class="line"><span style="color:#E1E4E8;">在执行的过程中会不断检测微队列中是否存在待执行任务，若存在，则执行微队列中的任务，</span></span>
<span class="line"><span style="color:#E1E4E8;">等到微队列为空了，再执行宏队列中的任务。</span></span>
<span class="line"><span style="color:#E1E4E8;">这一点与浏览器非常类似，但在 Node 11.x 版本之前，并不是这样的运行机制，</span></span>
<span class="line"><span style="color:#E1E4E8;">而是运行完当前阶段队列中的所有宏任务以后才会去检测微任务队列。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">宏任务：setTimeout 、setInterval 、setImmediate、I/O</span></span>
<span class="line"><span style="color:#24292E;">微任务：Promise.then/catch、process.nextTick（优先级大于其它的微任务）、</span></span>
<span class="line"><span style="color:#24292E;">queueMicrotask（v11.0+才支持）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Node 事件循环分为六个阶段：</span></span>
<span class="line"><span style="color:#24292E;">timers： 计时器阶段，用于处理 setTimeout 以及 setInterval 的回调函数</span></span>
<span class="line"><span style="color:#24292E;">pending callbacks： 用于执行某些系统操作的回调，例如 TCP 错误</span></span>
<span class="line"><span style="color:#24292E;">idle, prepare： Node 内部使用，不用做过多的了解</span></span>
<span class="line"><span style="color:#24292E;">poll： 轮询阶段，执行队列中的 I/O 队列，并检查定时器是否到时</span></span>
<span class="line"><span style="color:#24292E;">check： 执行 setImmediate 的回调</span></span>
<span class="line"><span style="color:#24292E;">close callbacks： 处理关闭的回调，例如 socket.destroy()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">每个阶段都有各自的宏队列，只有当本阶段的宏队列中的任务处理完以后，才会进入下一个阶段。</span></span>
<span class="line"><span style="color:#24292E;">在执行的过程中会不断检测微队列中是否存在待执行任务，若存在，则执行微队列中的任务，</span></span>
<span class="line"><span style="color:#24292E;">等到微队列为空了，再执行宏队列中的任务。</span></span>
<span class="line"><span style="color:#24292E;">这一点与浏览器非常类似，但在 Node 11.x 版本之前，并不是这样的运行机制，</span></span>
<span class="line"><span style="color:#24292E;">而是运行完当前阶段队列中的所有宏任务以后才会去检测微任务队列。</span></span></code></pre></div><p>一图胜千言：感兴趣的同学可以点击 <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" target="_blank" rel="noreferrer">nodejs 官网</a></p><p><img src="`+y+`" alt="solar"></p><p>检验 node.js 环境：谁先打印？</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setTimeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;setImmediate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 你多次运行就会发现，打印是随机的</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout  setImmediate</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#6A737D;">// setImmediate setTimeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这就是符合 node.js 环境的事件循环规律的：</span></span>
<span class="line"><span style="color:#6A737D;">// 每个阶段都有各自的宏队列，只有当本阶段的宏队列中的任务处理完以后，才会进入下一个阶段</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setTimeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;setImmediate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 你多次运行就会发现，打印是随机的</span></span>
<span class="line"><span style="color:#6A737D;">// setTimeout  setImmediate</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#6A737D;">// setImmediate setTimeout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 这就是符合 node.js 环境的事件循环规律的：</span></span>
<span class="line"><span style="color:#6A737D;">// 每个阶段都有各自的宏队列，只有当本阶段的宏队列中的任务处理完以后，才会进入下一个阶段</span></span></code></pre></div><p>那怎样才能固定先输出 <code>setImmediate</code> 呢？</p><p>我们可以利用 <code>poll</code> 阶段的下一个阶段是 <code>check</code> 阶段这个设定：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fs&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./async.js&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;setTimeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;setImmediate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fs&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./async.js&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;setTimeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;setImmediate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="完整版总结" tabindex="-1">完整版总结 <a class="header-anchor" href="#完整版总结" aria-label="Permalink to &quot;完整版总结&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">总结</p><ol><li>js 是单线程的，代码从上往下运行；</li><li>代码分为：同步、异步；先同步、后异步</li><li>异步分为：宏任务、微任务； 先宏任务、后微任务（注意：全局 Script 算一个宏任务）</li><li>相关规定：每当运行一段同步代码时，都会将代码压入调用栈中，等代码执行完毕以后出栈，当调用栈为空时，对于这两个任务队列的检测情况步骤如下：</li><li>步骤 1：检测微任务队列是否为空，若不为空，则取出一个微任务入栈执行，然后执行步骤 1；若为空，此轮事件循环结束，执行步骤 2；</li><li>步骤 2：检测宏任务队列是否为空，若不为空，则取出一个宏任务入栈执行，然后执行步骤 1；若为空，直接执行步骤 1</li><li>……步骤 1、步骤 2 往复循环</li><li>一轮事件循环执行结束之后，下轮事件循环执行之前开始进行 <code>UI render</code></li><li><code>UI render</code> 执行之前会执行 <code>requestAnimationFrame</code></li><li><code>requestAnimationFrame</code> 执行之后，<code>UI render</code> 执行之前，浏览器会判断要不要执行 <code>requestIdleCallback</code></li></ol></div><h3 id="检验一下" tabindex="-1">检验一下 <a class="header-anchor" href="#检验一下" aria-label="Permalink to &quot;检验一下&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环：1 7 6 8</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环：2 4 3 5</span></span>
<span class="line"><span style="color:#6A737D;">// 第三轮循环：9 11 10 12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环：1 7 6 8</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环：2 4 3 5</span></span>
<span class="line"><span style="color:#6A737D;">// 第三轮循环：9 11 10 12</span></span></code></pre></div><h2 id="后记-头脑风暴" tabindex="-1">后记（头脑风暴） <a class="header-anchor" href="#后记-头脑风暴" aria-label="Permalink to &quot;后记（头脑风暴）&quot;">​</a></h2><p>给大家出一道面试题：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">888</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 0 1 4 2 3 5 6 888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环 0 1 4 2 3 5 6</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环 888</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">888</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 0 1 4 2 3 5 6 888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环 0 1 4 2 3 5 6</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环 888</span></span></code></pre></div><p>答对了是吧？如果你理解了上面的总结 ！那我改造一丢丢：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">888</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 0 1 2 3 4 5 6 888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环 0 1 2 3 4 5 6</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环 888</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">888</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 0 1 2 3 4 5 6 888</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 第一轮循环 0 1 2 3 4 5 6</span></span>
<span class="line"><span style="color:#6A737D;">// 第二轮循环 888</span></span></code></pre></div><p>有没有心态炸裂的感觉？知道答案的同学可以发表在评论区 ~</p><h2 id="加上事件冒泡" tabindex="-1">加上事件冒泡 <a class="header-anchor" href="#加上事件冒泡" aria-label="Permalink to &quot;加上事件冒泡&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">.outer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">200</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pink</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">.inner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;outer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inner&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> outer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.outer&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> inner </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.inner&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MutationObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mutate&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }).</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(outer, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        attributes: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">innerClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inner click&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inner timeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inner promise&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        outer.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-random-inner&#39;</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inner end&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// e.stopPropagation()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">outerClick</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;outer click&#39;</span><span style="color:#E1E4E8;">, e.target)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;outer timeout&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;outer promise&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        outer.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;data-random-outer&#39;</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;outer end&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      inner.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, innerClick)</span></span>
<span class="line"><span style="color:#E1E4E8;">      outer.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, outerClick)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      inner.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      outer.</span><span style="color:#B392F0;">setAttribute</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;xueyue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      outer.</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">.outer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">200</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pink</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">.inner</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;outer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inner&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> outer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.outer&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> inner </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.inner&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MutationObserver</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mutate&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }).</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(outer, {</span></span>
<span class="line"><span style="color:#24292E;">        attributes: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">innerClick</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inner click&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inner timeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inner promise&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        outer.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data-random-inner&#39;</span><span style="color:#24292E;">, Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inner end&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// e.stopPropagation()</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">outerClick</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;outer click&#39;</span><span style="color:#24292E;">, e.target)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;outer timeout&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;outer promise&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        outer.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;data-random-outer&#39;</span><span style="color:#24292E;">, Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;outer end&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      inner.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, innerClick)</span></span>
<span class="line"><span style="color:#24292E;">      outer.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, outerClick)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      inner.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      outer.</span><span style="color:#6F42C1;">setAttribute</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;xueyue&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">666</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      outer.</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">我根据浏览器的表现做了个总结：</span></span>
<span class="line"><span style="color:#e1e4e8;">点击事件，没阻止冒泡的情况下：</span></span>
<span class="line"><span style="color:#e1e4e8;">程序调用：会先执行完inner同步代码，然后冒泡出去，执行outer同步代码，</span></span>
<span class="line"><span style="color:#e1e4e8;">清空执行栈以后再执行微任务；属于同一个宏任务。</span></span>
<span class="line"><span style="color:#e1e4e8;">用户点击：会先冒泡出去，算两个点击事件（宏任务）；然后执行代码。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">我根据浏览器的表现做了个总结：</span></span>
<span class="line"><span style="color:#24292e;">点击事件，没阻止冒泡的情况下：</span></span>
<span class="line"><span style="color:#24292e;">程序调用：会先执行完inner同步代码，然后冒泡出去，执行outer同步代码，</span></span>
<span class="line"><span style="color:#24292e;">清空执行栈以后再执行微任务；属于同一个宏任务。</span></span>
<span class="line"><span style="color:#24292e;">用户点击：会先冒泡出去，算两个点击事件（宏任务）；然后执行代码。</span></span></code></pre></div>`,115),F=[d];function u(g,C,h,m,A,B){return n(),a("div",null,F)}const v=s(i,[["render",u]]);export{b as __pageData,v as default};
