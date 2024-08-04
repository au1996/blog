import{aw as s,q as i,p as a,aR as t}from"./chunks/framework.CNwJN8zI.js";const g=JSON.parse('{"title":"那些年，我们一起踩过的坑","description":"","frontmatter":{},"headers":[],"relativePath":"extend/bug.md","filePath":"extend/bug.md","lastUpdated":1722761252000}'),e={name:"extend/bug.md"},n=t(`<h1 id="那些年-我们一起踩过的坑" tabindex="-1">那些年，我们一起踩过的坑 <a class="header-anchor" href="#那些年-我们一起踩过的坑" aria-label="Permalink to &quot;那些年，我们一起踩过的坑&quot;">​</a></h1><h2 id="moment-startof-week" tabindex="-1">moment().startOf(&#39;week&#39;) <a class="header-anchor" href="#moment-startof-week" aria-label="Permalink to &quot;moment().startOf(&#39;week&#39;)&quot;">​</a></h2><p>获取当前周的第一天，发现是周日，因为美国等基督教国家认为周日是第一天</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;week&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-01-29 00:00:00 周日</span></span></code></pre></div><p>参数改为<code>isoweek</code>，解决。<code>ISO</code>国际标准规定<code>周一</code>是当前周的开始</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">moment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;isoweek&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-01-30 00:00:00 周一</span></span></code></pre></div>`,6),h=[n];function p(l,k,d,r,o,c){return a(),i("div",null,h)}const m=s(e,[["render",p]]);export{g as __pageData,m as default};
