# 前端规范

所谓无规矩不成方圆，笔者在团队 `code-review` 中发现，不同时期不同开发人员写的代码可谓五花八门。因此我们提出了一些代码方面的规范，希望日后能形成团队的编码规范

制定规范的目的：

- 统一编码风格、规范、提高团队协作效率
- 在团队协作中输出可读性强，易维护、风格一致的代码

## HTML 篇

### 使用 `HTML5` 的 `doctype` 来启用标准模式

```html
<!DOCTYPE html>
```

### 统一使用 `utf-8` 编码

```html
<meta charset="utf-8" />
```

### 为 `html` 根元素指定 `lang` 属性

从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等

```html
<html lang="en">
  <!--  -->
</html>
```

### 自闭合标签无需闭合。

例如： `img`， `input`， `br`， `hr` 等

```html
<img src="https://xxx.png" alt="xxx" />
<input type="text" name="title" />
<br />
<hr />
```

### 使用语义化标签

```html
<!-- bad -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- good -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

## CSS 模块

### 不能漏写分号

```css
/* bad */
div {
  color: red;
}

/* good */
div {
  color: red;
}
```

### 选择器嵌套应少于 3 级

```css
/* bad */
.page .header .login #username input {
}

/* good */
#username input {
}
```

### 有效使用 css 选择器，

因遵循以下原则

- 保持简单，不要使用嵌套过多过于复杂的选择器
- 通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用
- 不要使用类选择器和 ID 选择器修饰元素标签
- 不要为了追求速度而放弃可读性与可维护性
- 避免使用 CSS 表达式

### 尽量不要改变元素默认行为。

保持默认的文本流。比如，移出一个图片下面的一个白块，不影响原本的显示：

```css
/* bad */
img {
  display: block;
}

/* good */
img {
  vertical-align: middle;
}
```

### 类似的，尽量不要改变浮动方式。

```css
/* bad */
div {
  width: 100px;
  position: absolute;
  right: 0;
}

/* good */
div {
  width: 100px;
  margin-left: auto;
}
```

### 不要让代码难于重写

让选择器更精确，减少`ID`、避免使用`!important`

```css
/* bad */
.bar {
  color: green !important;
}
.foo {
  color: red;
}

/* good */
.foo.bar {
  color: green;
}
.foo {
  color: red;
}
```

### 保持代码的简洁。

使用属性缩写。不必要的值不用写。

```css
/* bad */
div {
  transition: all 1s;
  top: 50%;
  margin-top: -10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
}

/* good */
div {
  transition: 1s;
  top: calc(50% - 10px);
  padding: 5px 10px 20px;
}
```

### 动画

除了变形和改变透明度用`animation`，其他尽量使用`transition`

```css
/* bad */
div:hover {
  animation: move 1s forwards;
}
@keyframes move {
  100% {
    margin-left: 100px;
  }
}

/* good */
div:hover {
  transition: 1s;
  transform: translateX(100px);
}
```

### 需要做透明效果是用 rgba，否则都用 16 进制表示：

```css
/* bad */
div {
  color: hsl(103, 54%, 43%);
}

/* good */
div {
  color: #5a3;
}
```

绘图
减少 HTTPS 请求，尽量用 CSS 绘图替代图片

```css
/* bad */
div::before {
  content: url(white-circle.svg);
}

/* good */
div::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
```

`id`及`class`命名

- class 应以功能过内容命名，不以表现形式命名，通用且有意义的词
- class 与 id 单词字母小写，多个单词组成时，使用中划线“-”分隔
- 使用 on 作为激活状态的 class，使用 hover 作为移上元素（hover）的 class

## JavaScript

建议采用 ESlint 规范，[点击链接查看](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)

### 变量命名

普通命名采用小驼峰式命名

```js
let userName = 'jack'
```

命名是复数的时候需要加 `s`，比如说我想声明一个数组，表示很多人的名字

```js
const names = []
```

每个常量都需命名，这样更利于别人读懂含义

```js
// bad
let row = Math.ceil(num / 10)

// good
const COL_NUM = 10
let row = Math.ceil(num / COL_NUM)
```

命名需要符合语义化，如果函数命名，可以采用加上动词前缀

- can 判断是否可执行某个动作
- has 判断是否含有某个值
- is 判断是否为某个值
- get 获取某个值
- set 设置某个值

```js
// 是否可阅读
function canRead(){
  return true;
}

// 获取姓名
function getName{
  return this.name
}
```

### 关于字符串

统一使用单引号而不是双引号

```js
// bad
const name = 'jack'

// good
const name = 'jack'
```

用字符串模板而不是 '+' 来拼接字符串

```js
// ES2022时代了，不会还有人不用模板字符串吧？
function sayHi(name) {
  return 'How are you, ' + name + '?'
}

// good
function sayHi(name) {
  return `How are you, ${name}?`
}
```

### 关于数组

用字面量赋值

```js
// bad
const items = new Array()

// good
const items = []
```

用扩展运算符做数组浅拷贝

```js
// bad
const arr = [1, 2, 3]
const copyArr = []

for (let i = 0; i < arr.length; i++) {
  copyArr[i] = arr[i]
}

// good
const copyArr = [...arr]
```

## Vue

推荐 Vue 官网推荐的风格指南[传送门](https://v3.cn.vuejs.org/style-guide/#%E8%A7%84%E5%88%99%E7%B1%BB%E5%88%AB)

vue2 的方法放置顺序

- components
- props
- data
- filter
- computed
- watch
- created
- mounted
- activited
- update
- beforeRouteUpdate
- metods
