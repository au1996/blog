# 前端面试指南

:::tip 提示
这里将汇总一些常见的面试题
:::

## JavaScript

### 1. 闭包是什么? 闭包的用途?

## Vue

### 1. 虚拟 dom 是什么? 原理? 优缺点?

### 2. vue 和 react 在虚拟 dom 的 diff 上，做了哪些改进使得速度很快?

### 3. vue 和 react 里的 key 的作用是什么? 为什么不能用 Index？用了会怎样? 如果不加 key 会怎样?

### 4. vue 双向绑定的原理是什么?

### 5. vue 的 keep-alive 的作用是什么？怎么实现的？如何刷新的?

### 6. vue 是怎么解析 template 的? template 会变成什么?

### 7. Vue 如何解析指令? 模板变量? html 标签?

### 8. 用过 vue 的 render 吗? render 和 template 有什么关系

### 9. vue 有自己封装一些指令吗

## Nodejs

### 1. Nodejs 异步 IO 模型

### 2. libuv

### 3. Node 的日志和负载均衡怎么做的

### 4. 那前后端的分工是怎样的？哪些后端做哪些 node 做

## 浏览器

### 1. 什么是事件循环？

## 综合问题

### 1. 对前端工程化的理解

### 2. 前端性能优化有哪些工作

### 3. 设计模式

### 4. 微前端

## 手写题

### 1. 实现一个防抖函数?

### 2. 实现一个节流函数? 如果想要最后一次必须执行的话怎么实现?

### 3. 实现一个批量请求函数, 能够限制并发量?

### 4. 去除字符串中出现次数最少的字符，不改变原字符串的顺序

```js
"ababac" —— "ababa"
"aaabbbcceeff" —— "aaabbb"
```

### 5. 写出一个函数 trans，将数字转换成汉语的输出，输入为不超过 10000 亿的数字

```js
trans(123456) // 十二万三千四百五十六
trans(100010001) // 一亿零一万零一
```

### 6. 给几个数组, 可以通过数值找到对应的数组名称

```js
// 比如这个函数输入一个1，那么要求函数返回A
const A = [1, 2, 3]
const B = [4, 5, 6]
const C = [7, 8, 9]

function test(num) {}
```

### 7. 数组转树结构

```js
const arr = [
  {
    id: 1,
    name: '部门A',
    parentId: 2,
  },
  {
    id: 2,
    name: '部门B',
    parentId: 0,
  },
  {
    id: 3,
    name: '部门C',
    parentId: 1,
  },
  {
    id: 4,
    name: '部门D',
    parentId: 1,
  },
  {
    id: 5,
    name: '部门E',
    parentId: 2,
  },
  {
    id: 6,
    name: '部门F',
    parentId: 3,
  },
  {
    id: 7,
    name: '部门G',
    parentId: 2,
  },
  {
    id: 8,
    name: '部门H',
    parentId: 4,
  },
]
```
