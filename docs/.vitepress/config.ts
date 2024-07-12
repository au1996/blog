import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  title: '雪月欧巴',
  description: '雪月的博客',
  base: '/blog/',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    math: true,
    languageAlias: {
      注释: 'html',
    },
  },

  sitemap: {
    hostname: 'https://au1996.github.io/blog/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/blog/icons/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['script', { src: '/blog/js/live2d/live2d.min.js' }],
    ['script', { src: '/blog/js/live2d/live2d.0.min.js' }],
    ['script', { src: '/blog/js/live2d/index.js' }],
  ],

  themeConfig: {
    logo: { src: '/images/logo.png', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://github.com/au1996/blog' }],
    search: {
      provider: 'local',
    },
    nav: getNav(),
    sidebar: {
      '/guide/': getGuide(),
      '/life/': getLife(),
      '/frontend/html-css/': getFrontendHtmlCss(),
      '/frontend/javaScript/': getFrontendJavaScript(),
      '/frontend/vue/': getFrontendVue(),
      '/frontend/node/': getFrontendNode(),
      '/interview/': getInterview(),
      '/extend/': getExtend(),
    },
  },
})

function getNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/',
      activeMatch: '^/$',
    },
    {
      text: '指南',
      link: '/guide/',
      activeMatch: '/guide/',
    },
    {
      text: '前端',
      items: [
        {
          text: 'html-css',
          link: '/frontend/html-css/',
          activeMatch: '^/frontend/html-css/',
        },
        {
          text: 'javaScript',
          link: '/frontend/javaScript/',
          activeMatch: '^/frontend/javaScript/',
        },
        {
          text: 'vue',
          link: '/frontend/vue/',
          activeMatch: '^/frontend/vue/',
        },
        {
          text: 'node',
          link: '/frontend/node/',
          activeMatch: '^/frontend/node/',
        },
      ],
    },
    {
      text: '生活',
      link: '/life/',
      activeMatch: '/life/',
    },
    {
      text: '修仙',
      link: '/interview/',
      activeMatch: '^/interview/',
    },
    {
      text: '扩展',
      link: '/extend/',
      activeMatch: '/extend/',
    },
  ]
}

function getGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '文章指南',
      collapsed: false,
      items: [
        {
          text: '浏览器的进程模型-消息队列',
          link: '/guide/borwer-message',
        },
        {
          text: '浏览器的页面渲染顺序',
          link: '/guide/borwer-render',
        },
        {
          text: '你不知道的Css之包含块',
          link: '/guide/css-block',
        },
        {
          text: 'Event-Loop-事件循环',
          link: '/guide/event-loop',
        },
        {
          text: 'ES6系列-简化代码',
          link: '/guide/es6-simplify-code',
        },
        // {
        //   text: 'ES6系列-ES2017-ES2021',
        //   link: '/guide/es2017-2021',
        // },
        {
          text: 'this指向',
          link: '/guide/this',
        },
        {
          text: 'prototype原型链',
          link: '/guide/prototype',
        },
        {
          text: '从零开发一个Chrome扩展程序',
          link: '/guide/chrome-extensions',
        },
        {
          text: 'vue3后台管理系统',
          link: '/guide/vite-vue3',
        },
        // {
        //   text: '作用域与闭包',
        //   link: '/guide/scope',
        // },
        // {
        //   text: '前端规范',
        //   link: '/guide/standard',
        // },
      ],
    },
  ]
}

function getLife(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '生活感悟',
      collapsed: false,
      items: [
        {
          text: '七省吾身',
          link: '/life/seven-provinces',
        },
        {
          text: '20岁的雪月',
          link: '/life/xueyue-age20',
        },
        {
          text: '2020年终总结',
          link: '/life/xueyue-year2020',
        },
        {
          text: '2023年终总结',
          link: '/life/xueyue-year2023',
        },
        {
          text: '纪念吾之好友',
          link: '/life/friend-lcp',
        },
      ],
    },
  ]
}

function getFrontendHtmlCss(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'html-css',
      items: [
        {
          text: '元素居中',
          link: '/frontend/html-css/element-centered',
        },
        {
          text: '锚点定位',
          link: '/frontend/html-css/scroll-into-view',
        },
        {
          text: '特殊样式',
          link: '/frontend/html-css/css-style',
        },
        {
          text: 'border绘制三角形',
          link: '/frontend/html-css/triangle',
        },
      ],
    },
  ]
}

function getFrontendJavaScript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'javaScript',
      items: [
        {
          text: '深复制',
          link: '/frontend/javaScript/deepClone',
        },
        {
          text: 'ES6系列',
          link: '/frontend/javaScript/es6',
        },
        {
          text: '小技巧',
          link: '/frontend/javaScript/handwriting',
        },
      ],
    },
  ]
}

function getFrontendVue(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'vue',
      items: [
        {
          text: 'vue2代码规范',
          link: '/frontend/vue/standard',
        },
        {
          text: 'vue2常见的修饰符',
          link: '/frontend/vue/modifier',
        },
        {
          text: 'vue2优化小技巧',
          link: '/frontend/vue/skill',
        },
      ],
    },
  ]
}

function getFrontendNode(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'node',
      items: [
        {
          text: 'koa',
          link: '/frontend/node/koa',
        },
        {
          text: 'webpack4',
          link: '/frontend/node/webpack4',
        },
        {
          text: 'vite',
          link: '/frontend/node/vite',
        },
      ],
    },
  ]
}

function getInterview() {
  return [
    {
      text: '前端修仙之路',
      items: [
        {
          text: '知识汇总',
          link: '/interview/overview',
        },
        {
          text: '面试真题',
          link: '/interview/real-question',
        },
        // {
        //   text: '每周一题',
        //   link: '/interview/one',
        // },
      ],
    },
  ]
}

function getExtend(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '扩展',
      collapsed: false,
      items: [
        {
          text: 'bit',
          link: '/extend/bit',
        },
        {
          text: 'git',
          link: '/extend/git',
        },
        {
          text: 'npm',
          link: '/extend/npm',
        },
        {
          text: '热知识',
          link: '/extend/tips',
        },
        {
          text: '踩坑记录',
          link: '/extend/bug',
        },
        {
          text: 'nginx安装配置',
          link: '/extend/nginx-install',
        },
      ],
    },
  ]
}
