# Vue2.0 代码规范

## 1.组件/实例的选项顺序

```js
export default {
  name: '',
  components: {},
  directives: {},
  mixins: [],
  props: {},
  data() {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  activated() {},
  unmounted() {},
  methods: {},
  render() {},
}
```

## 2.元素 attribute 的顺序

```md
is
v-for
v-if
v-else-if
v-else
v-show
v-cloak
v-pre
v-once
id
ref
key
v-model
v-on
v-html
v-text
```

## 3.methods 方法命名

```md
1 动宾短语 good：jumpPage、openCarInfoDialog bad：go、nextPage、show、open、login
2 ajax 方法以 get、post 开头，以 data 结尾
good：getListData、postFormData
bad：takeData、confirmData、getList、postForm
3 事件方法以 on 开头（onTypeChange、onUsernameInput）
4 init、refresh 单词除外
5 尽量使用常用单词开头（set、get、open、close、jump）
6 驼峰命名（good: getListData）（bad: get_list_data、getlistData）
```

## 4.生命周期注意点

```md
1 不在 mounted、created 之类的方法写逻辑，取 ajax 数据
2 在 created 里面监听 Bus 事件
```

## 5.基于模块开发

```md
每一个 vue 组件首先必须专注于解决一个单一的问题，独立的，可复用的，微小的和可测试的。
如果你的组件做了太多的事或是变得臃肿，请将其拆成更小的组件并保持单一的原则。
```

## 6.Vue 组件命名

```md
1. 有意义的: 不过于具体，也不过于抽象
2. 简短: 2 到 3 个单词
3. 具有可读性: 以便于沟通交流

<!-- 推荐 -->

<app-header></app-header>
<user-list></user-list>
<range-slider></range-slider>

<!-- 避免 -->

<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->
```

## 7.验证组件的 props

:::tip 规则

1. 提供默认值
2. 使用 type 属性校验类型
3. 使用 props 之前先检查该 prop 是否存在
   :::

```html
<template>
  <input type="range" v-model="value" :max="max" :min="min" />
</template>
```

```js
export default {
  props: {
    max: {
      type: Number, // 这里添加了数字类型的校验
      default() {
        return 10
      },
    },
    min: {
      type: Number,
      default() {
        return 0
      },
    },
    value: {
      type: Number,
      default() {
        return 4
      },
    },
  },
}
```

## 8.只在需要时创建组件

```md
Vue.js 是一个基于组件的框架。如果你不知道何时创建组件可能会导致以下问题：

如果组件太大, 可能很难重用和维护
如果组件太小，你的项目就会（因为深层次的嵌套而）被淹没，也更难使组件间通信

总结：

1. 尽可能早地尝试构建出诸如模态框、提示框、工具条、菜单、头部等这些明显的（通用型）组件。
   总之，你知道的这些组件以后一定会在当前页面或者是全局范围内需要

2. 在每一个新的开发项目中，对于一整个页面或者其中的一部分，在进行开发前先尝试思考一下。
   如果你认为它有一部分应该是一个组件，那么就创建它吧

3. 如果你不确定，那就不要。避免那些“以后可能会有用”的组件污染你的项目。
   它们可能会永远的只是（静静地）待在那里，这一点也不聪明。
```
