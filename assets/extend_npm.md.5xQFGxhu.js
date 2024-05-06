import{_ as s,o as a,c as n,R as p}from"./chunks/framework.xW0OlkBD.js";const F=JSON.parse('{"title":"npm 相关内容","description":"","frontmatter":{},"headers":[],"relativePath":"extend/npm.md","filePath":"extend/npm.md","lastUpdated":1714987180000}'),e={name:"extend/npm.md"},l=p(`<h1 id="npm-相关内容" tabindex="-1">npm 相关内容 <a class="header-anchor" href="#npm-相关内容" aria-label="Permalink to &quot;npm 相关内容&quot;">​</a></h1><h2 id="获取当前源" tabindex="-1">获取当前源 <a class="header-anchor" href="#获取当前源" aria-label="Permalink to &quot;获取当前源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span></span></code></pre></div><h2 id="设置官方源" tabindex="-1">设置官方源 <a class="header-anchor" href="#设置官方源" aria-label="Permalink to &quot;设置官方源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://registry.npmjs.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://registry.npmjs.org</span></span></code></pre></div><h2 id="设置淘宝源" tabindex="-1">设置淘宝源 <a class="header-anchor" href="#设置淘宝源" aria-label="Permalink to &quot;设置淘宝源&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">registry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://registry.npmmirror.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">registry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://registry.npmmirror.com</span></span></code></pre></div><h2 id="同步淘宝源" tabindex="-1">同步淘宝源 <a class="header-anchor" href="#同步淘宝源" aria-label="Permalink to &quot;同步淘宝源&quot;">​</a></h2><p><a href="https://npmmirror.com/package/text-view" target="_blank" rel="noreferrer">https://npmmirror.com/package/text-view</a></p><h2 id="查看包大小" tabindex="-1">查看包大小 <a class="header-anchor" href="#查看包大小" aria-label="Permalink to &quot;查看包大小&quot;">​</a></h2><p><a href="https://pkg-size.dev/" target="_blank" rel="noreferrer">https://pkg-size.dev/</a></p><h2 id="解决报错问题" tabindex="-1">解决报错问题 <a class="header-anchor" href="#解决报错问题" aria-label="Permalink to &quot;解决报错问题&quot;">​</a></h2><p>npm 安装出错 npm ERR! request to <a href="https://registry.npmjs.org/express" target="_blank" rel="noreferrer">https://registry.npmjs.org/express</a> failed, reason: unable to verify the first certificate</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">strict-ssl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">strict-ssl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre></div><p>npm ERR! Unexpected end of JSON input while parsing near &#39;...0ZdrK\\nakdExSu6TFq5es&#39;</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">verify</span></span>
<span class="line"><span style="color:#6A737D;"># 最后</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span></span>
<span class="line"><span style="color:#6A737D;"># 或者</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache</span><span style="color:#24292E;"> </span><span style="color:#032F62;">verify</span></span>
<span class="line"><span style="color:#6A737D;"># 最后</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div>`,16),o=[l];function t(r,c,i,y,d,h){return a(),n("div",null,o)}const g=s(e,[["render",t]]);export{F as __pageData,g as default};
