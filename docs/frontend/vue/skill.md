# vue2.0 优化小技巧

::: tip 前言
作为深度代码洁癖，我们都希望能写出简单高效的代码，让我们的代码看起来更加优雅，

让我们抛弃繁杂的代码，一起开启简单的旅程~~
:::

## 利用 hook 监听组件的生命周期

1. 正常情况，父组件监听子组件是这样：

```html
<!-- Parent.vue -->
<Child @mounted="doSomething" />
```

```js
// Child.vue
mounted() {
  this.$emit("mounted");
}
```

2. 使用 hook 更简洁, 子组件无需任何操作

```html
<!-- Parent.vue -->
<Child @hook:mounted="doSomething" />

<!-- 这里不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以 -->
```

3. \$on('hook:') 监听自身的生命周期

```js
mounted () {
  window.addEventListener('resize', this.resizeHandler);
  this.$on("hook:beforeDestroy", () => {
    window.removeEventListener('resize', this.resizeHandler);
  })
}
```

4. 样例

```html
<v-chart
  @hook:mounted="loading = false"
  @hook:beforeUpdated="loading = true"
  @hook:updated="loading = false"
  :data="data"
/>
```

## watch 监听的小技巧

:::tip 参数
handler：其值是一个回调函数。即监听到变化时应该执行的函数

deep：其值是 true 或 false；确认是否深入监听。

immediate：其值是 true 或 false，确认是否以当前的初始值执行 handler 的函数
:::

如果你需要 wather 在实例初始化后立即运行，那么你所要做的就是将 wather 转换为具有 handler(newVal, oldVal) 函数以及即时 immediate: true 的对象。

```js
watch: {
	obj: {
		deep: true, // 这样obj的属性值变化时也会调用 handler
		immediate: true, // 初始化时便调用一次 handler
		handler(newObj, oldObj) {
			console.log("组件初始化我就会被调用", newObj, oldObj)
		}
	}
}
```

## require.context()简化代码

:::tip 使用
require.context(directory, useSubdirectories, regExp)

directory：说明需要检索的目录

useSubdirectories：是否检索子目录

regExp: 匹配文件的正则表达式,一般是文件名
:::

如页面需要导入多个组件,原始写法:

```js
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
...
components: {
  titleCom, bannerCom, cellCom, ...
}
```

这样就写了大量重复的代码,利用 require.context 可以写成：

```js
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach((key) => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components: modules
```

## 长列表性能优化

我们应该都知道 vue 会通过 `object.defineProperty` 对数据进行劫持，来实现视图响应数据的变化，
然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，
在大量数据展示的情况下，这能够很明显的减少组件初始化的时间。
所以，我们可以通过 `object.freeze` 方法来冻结一个对象，这个对象一旦被冻结，vue 就不会对数据进行劫持了。

```js
export default {
  data: () => ({
    list: [],
  }),
  async created() {
    const list = await axios.get('xxxx')
    this.list = Object.freeze(list)
  },
  methods: {
    // 此处做的操作都不能改变list的值
  },
}
```

::: warning 说明
另外需要特殊说明的是，这里只是冻结了 list 的值，引用不会被冻结，当我们需要 reactive 数据的时候，我们可以重新给 list 赋值。
:::

## 内容分发(slot)

:::tip 说明
插槽 slot，也是组件的一块 HTML 模板，这一块模板显示不显示、以及怎样显示由父组件来决定。
实际上，一个 slot 最核心的两个问题在这里就点出来了，是显示不显示和怎样显示。
:::

1. 默认插槽。又名单个插槽、匿名插槽，这类插槽没有具体名字，一个组件只能有一个该类插槽。

```html
<!-- 父组件 parent.vue -->
<template>
  <div class="parent">
    <h1>父容器</h1>
    <child>
      <div class="tmpl">
        <span>菜单1</span>
      </div>
    </child>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <h1>子组件</h1>
    <slot></slot>
  </div>
</template>
```

2. 具名插槽。
   匿名插槽没有 name 属性，所以叫匿名插槽。那么，插槽加了 name 属性，就变成了具名插槽。
   具名插槽可以在一个组件中出现 N 次，出现在不同的位置，只需要使用不同的 name 属性区分即可。

```html
<!-- 父组件 parent.vue -->
<template>
  <div class="parent">
    <h1>父容器</h1>
    <child>
      <!-- 简写：<template #header> -->
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </child>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <header>
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 匿名插槽 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

3. 作用域插槽。
   作用域插槽可以是默认插槽，也可以是具名插槽，不一样的地方是，作用域插槽可以为 slot 标签绑定数据，让其父组件可以获取到子组件的数据

```html
<!-- parent.vue -->
<template>
  <div class="parent">
    <h1>这是父组件</h1>
    <child v-slot="slotProps">
      <span class="green">{{ slotProps.user.name }}</span>
    </child>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <h1>这是子组件</h1>
    <slot :user="user"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          name: '小赵',
        },
      }
    },
  }
</script>
```
