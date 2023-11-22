# 【手摸手】 带你搭建一套基于 Vite 2.0 + Vue 3.0 + Vue-Router 4.0 + Vuex 4.0 + Element-plus 的后台管理系统

- [在线预览](https://admin.xyob.top)

- [代码仓库](https://github.com/au1996/vue3-element-admin)

- [TypeScript 版本](https://github.com/au1996/vue3-element-admin-ts)

## 前言（介绍 Vite）

`Vite` 是一个开发构建工具，开发过程中它利用浏览器 `native ES Module` 特性导入组织代码，生产中利用 `rollup` 作为打包工具，它有如下特点：

- 光速启动
- 热模块替换
- 按需编译

详细内容可以点击 [Vite 官网传送门](https://cn.vitejs.dev/)

## 开始（项目搭建）

请确保你的电脑上成功安装 Node.js，本项目使用 Vite 构建工具，需要 Node.js 版本 >= 12.0.0。

查看 Node.js 版本：

```shell
node -v
```

### 使用 Vite 快速初始化项目

使用 NPM:

```shell
npm init @vitejs/app
```

使用 Yarn:

```shell
yarn create @vitejs/app
```

然后按照终端提示完成以下操作：

1. 输入项目名称

例如：本项目名称 **vue3-element-admin**

2. 选择模板

我们选择 `vue`，会自动安装 Vue3

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:

```shell
# npm 6.x
npm init @vitejs/app my-vue-app --template vue

# npm 7+, 需要额外的双横线：
npm init @vitejs/app my-vue-app -- --template vue

# yarn
yarn create @vitejs/app my-vue-app --template vue
```

支持的模板预设包括：

- vanilla
- vue
- react
- preact
- lit-element
- svelte

3. 安装依赖

```shell
cd ./vue3-element-admin
npm install
```

4. 启动项目

```shell
npm run dev
```

如上图所示，表示 Vite + Vue3 简单的项目骨架搭建完毕，下面我们来为这个项目集成 Vue Router、Vuex、Element Plus、Sass。

### 修改 Vite 配置文件

Vite 配置文件 `vite.config.js` 位于根目录下，项目启动时会自动读取。

本项目先做一些简单配置，例如：设置 `@` 指向 `src` 目录、 服务启动端口、打包路径、代理等。

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: '/', // 开发或生产环境服务的公共基础路径。
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve('./src'), // 设置 `@` 指向 `src` 目录
        '@img': resolve('./src/assets/img'),
      },
    },
    server: {
      port: 7001, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      // 设置代理，根据项目实际情况配置
      proxy: {
        '/api': 'http://admin.xueyueob.cn/api',
      },
    },
  }
})
```

### 目录结构

```shell
├── publish/
└── src/
    ├── assets/                    // 静态资源目录
    ├── components/                // 公共组件目录
    ├── layout/                    // 项目布局目录
    ├── router/                    // 路由配置目录
    ├── store/                     // 状态管理目录
    ├── styles/                    // 通用样式目录
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── index.html
├── vite.config.js                 // Vite 配置文件
└── package.json
```

### 集成路由管理工具 Vue Router

1. 安装支持 Vue3 的路由工具 vue-router@next

```shell
npm i vue-router@next
```

2. 创建 `src/router/index.js` 文件

在 `src` 下创建 `router` 目录，然后在 `router` 目录里新建 `index.js` 文件：

```
└── src/
  ├── router/
    ├── index.js  // 路由配置文件
```

```js
import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true },
      },
      {
        path: '/user',
        component: () => import('@/views/user/user.vue'),
        name: 'User',
        meta: { title: '用户', icon: 'el-icon-user-solid', roles: ['admin', 'editor'] },
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
```

根据本项目路由配置的实际情况，你需要在 src 下创建 views 目录，用来存储页面组件。

可直接复制代码 [Demo 传送门](https://github.com/au1996/vue3-element-admin)

3. 在 main.js 文件中挂载路由配置

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
```

### 集成状态管理工具 Vuex

1. 安装支持 Vue3 的状态管理工具 vuex@next

```shell
npm i vuex@next
```

2. 创建 `src/store/index.js` 文件

在 `src` 下创建 `store` 目录，然后在 `store` 目录里新建 `index.js` 文件：

```
└── src/
  ├── store/
    ├── modules/
      ├── app.js
      ├── tagsView.js
    ├── index.js  // store 配置文件
```

这里我使用 [import.meta.globEager](https://cn.vitejs.dev/guide/features.html#glob-import) 函数导入 `modules` 目录下的所有模块：(自动化、一劳永逸)

```js
// indes.js
import { createStore } from 'vuex'

const modulesFiles = import.meta.globEager('./modules/*.js')
const pathList = []

for (const path in modulesFiles) {
  pathList.push(path)
}

const modules = pathList.reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({
  modules,
})

export default store
```

```js
// app.js
const state = {
  device: 'desktop',
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
}

const actions = {
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
```

使用方式

```js
// app tagsView 就是modules目录下的模块
this.$store.dispatch('app/toggleDevice', 'mobile')
this.$store.dispatch('tagsView/addVisitedView', 'user')
```

3. 在 `main.js` 文件中挂载 Vuex 配置

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
```

### 集成 UI 框架 Element Plus

1. 安装支持 Vue3 的 UI 框架 Element Plus

```shell
npm i element-plus
```

2. 在 main.js 文件中挂载 Element Plus

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
```

### 集成 CSS 预编译器 Sass

1. 安装 `sass`

```shell
npm i sass -D
```

2. 使用

```html
<style lang="scss">
  ...
</style>
```

至此，一个基于 `Vite` + `Vue3` + `Vue Router` + `Vuex` + `Element Plus` + `Sass` 的前端项目开发环境搭建完毕，项目 Demo 托管在 [GitHub 仓库](https://github.com/au1996/vue3-element-admin)，需要的同学可以去下载下来，参考学习。

## 结束（答疑解惑）

我们标题说的是搭建一套后台管理系统项目。没体现啊？标题党？稳住，咱们接着往下看 ^-^

我们先去下载一份[@PanJiaChen](https://github.com/PanJiaChen) 大佬开发维护的 `67.2K` Star 的 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 后台管理系统模板。接着我们复制 `src` 目录替换掉我们的 `src` 目录，替换前备份一下，然后把上面文中的 `router` `store` `main.js` 替换回来。运行项目

你会发现一大堆报错，这很正常。因为 vue3 相对 vue2 有一些重大更改；element-ui 跟 element-plus 也有少量更改；所以我们解决报错的过程就是 vue2 升级 vue3 的过程；由于篇幅较长，就不把解决报错的过程罗列出来了。感兴趣的同学可以去 `vue` 官网查看更改 [vue 官网传送门](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)

另外，喜欢 `TypeScript` 的同学，我也写了一套 `TypeScript` 版本。楼下自取 ^\_^

- [JavaScript 版本](https://github.com/au1996/vue3-element-admin)

- [TypeScript 版本](https://github.com/au1996/vue3-element-admin-ts)
