# 【ES6 系列】 90% 的前端都会使用 ES6 来简化代码，你都知道吗？

## 前言 (介绍 ECMAScript)

最初 `JavaScript` 语言有 2 份标准：

`ECMA-262`：主标准，由 ECMA 国际组织（`Ecma International`）负责管理（为了让最初的`JavaScript` 与最初的 `JScript` 能遵循同一套标准发展而诞生的 `ECMAScript` ，正好排到了作为 `Ecma` 的 `262` 号标准，所以得到 `ECMA-262` 编号。）

`ISO/IEC 16262`：第二标准，由国际标准化组织（`ISO`，`International Organization for Standardization`）和国际电子技术委员会（`IEC`，`International Electrotechnical Commission`）负责管理

出于商标版权的原因，规范标准中将这门语言称为 `ECMAScript` ，所以原则上 `JavaScript` 与 `ECMAScript` 指的是同一个东西，但有时也会加以区分：

- `JavaScript`：指语言及其实现
- `ECMAScript`：指语言标准及语言版本，比如 ES6 表示语言（标准）的第 6 版

## ECMAScript 发展历史

- ECMAScript 1（1997 年 6 月）：规范第一版
- ECMAScript 2（1998 年 6 月）：为了同步 ISO 标准，引入了一些小更新
- ECMAScript 3（1999 年 12 月）：增加了正则表达式、字符串处理、控制语句（do-while、switch）、异常处理（try-catch）等众多核心特性
- ECMAScript 4（2008 年 7 月废除)：本来是一次大规模升级（静态类型、模块、命名空间等），但跨度过大，出现了分歧，最终没能推广使用
- ECMAScript 5（2009 年 12 月）：变化不大，加了一些标准库特性和严格模式
- ECMAScript-5.1（2011 年 6 月）：又一次小更新，为了同步 ISO 标准
- ECMAScript 6（2015 年 6 月）：一大波更新，实现了当年 ES4 的许多设想，并正式改为按年份命名规范版本
- ECMAScript 2016（2016 年 6 月）：第一个年度版本，与 ES6 相比，发布周期较短，新特性也相对少些
- ECMAScript 2017（2017 年 6 月）：第二个年度版本...

> 以后的 ECMAScript 版本（ES2018、ES2019、ES2020 等）都在 6 月正式获准生效

## 开始 （聚焦 ES6）

这里引用 `阮一峰` 老师的 `ES6标准入门` 一书中的总结：ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版本以后的 `JavaScript` 的下一代标准，涵盖了 `ES2015、ES2016、ES2017` 等，而 `ES2015` 则是正式名称，特指当年发布的正式版本的语言标准 市面上提到的 ES6 一般是指 `ES2015` 标准，但有时也是泛指 `下一代 JavaScript`

**本文主要讲解以下内容:**

- 块级作用域（Block scoping，ES2015）
- 解构（Destructuring，ES2015）
- 箭头函数（Arrow Functions，ES2015）
- 模板字符串（template string，ES2015）
- 剩余参数 / 展开语法（Rest and spread parameters，ES2015）
- 对象字面量简写语法（Object shorthand，ES2015）
- 数组实例的 includes() （ES2016）
- Async/await 异步语法 (ES2017)

### 块级作用域

为什么需要块级作用域?

ES5 只有全局作用域和函数作用域，没有块级作用域，这导致很多场景不合理。

- 第一种场景，内层变量可能会覆盖外层变量。

```js
var tmp = new Date()
function fn() {
  console.log(tmp)
  if (false) {
    var tmp = 'hello world'
  }
}
fn() // undefined
```

以上代码的原意是， if 代码块的外部使用外层的 tmp 变量，内部使用内层的 tmp 变量。但是，函数 fn 执行后，输出结果为 undefined ，原因在于变量提升导致内层的 tmp 变量覆盖了外层的 tmp 变量。

- 第二种场景，用来计数的循环变量泄露为全局变量。

```js
var s = 'hello'
for (var i = O; i < s.length; i++) {
  console.log(s[i])
}
console.log(i) // 5
```

上面的代码中，变量 i 只用来控制循环，但是循环结束后，它并没有消失，而是泄露成了全局变量。

`let` 实际上为 `JavaScript` 新增了块级作用域。

```js
function fl() {
  let n = 5
  if (true) {
    let n = 10
  }
  console.log(n) // 5
}
```

上面的函数有两个代码块，都声明了变量 n，运行后输出 5 。这表示外层代码块不受内层代码块的影响。如果使用 var 定义变量 ，最后输出的值就是 10

那么我们能利用`块级作用域`做什么呢？

我们先来做道面试题

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
// 5 5 5 5 5
```

改成 `ES6` 中的 let

```js
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
// 0 1 2 3 4
```

看到这，相信聪明的你已经理解块级作用域的好处了 O(∩_∩)O

那么 `ES5` 能不能实现 `块级作用域` 的效果呢? 可以的，我们可以加个闭包

```js
for (var i = 0; i < 5; i++) {
  ;(function (index) {
    setTimeout(() => {
      console.log(index)
    }, 1000)
  })(i)
}
// 0 1 2 3 4
```

### 解构

> 解构 ：是将一个数据结构分解为更小的部分的过程。ES6 中，从数组和对象中提取值，对变量进行赋值。

那么解构有什么用处呢？

1. 可以大大的简化变量声明操作。

```js
// ES5
var foo = 1
var bar = 2
var baz = 3

// ES6
let [foo, bar, baz] = [1, 2, 3]
```

2. 变量交换：看起来如同镜像。赋值语句的左侧的解构模式，右侧是临时创建的数组字面量。x 被赋值为数组中的 y，y 被赋值为数组中的 x。

```js
let x = 1
let y = 2
;[x, y] = [y, x]
// x = 2, y = 1
```

3. 对象解构

```js
var obj = { x: 1, y: 2, c: 1 }
let { x, y } = obj
// x = 1
// y = 2
```

4. 字符串解构

```js
const [a, b, c, d, e] = 'hello'
// a => h
// b => e
// c => l
// d => l
// e => o
```

5. 函数参数解构

```js
const xueyue = {
  name: '雪月',
  age: 18,
}

function getAge({ name, age }) {
  return `${name}今年${age}岁`
}

getAge(xueyue) // 雪月今年18岁
```

### 箭头函数

`ES6` 允许使用箭头 `=>` 定义函数

```js
var f = v => v

// 等同于 ES5 的
var f = function (v) {
  return v
}
```

如果箭头函数不需要参数或需要多个参数，就使用圆括号代表参数部分。

```js
var f = () => 5
// 等同于 ES5 的
var f = function () {
  return 5
}

var sum = (numl, num2) => numl + num2
// 等同于 ES5 的
var sum = function (numl, num2) {
  return numl + num2
}
```

箭头函数可以与解构结合使用。

```js
canst full = ({ first , last }) => first + ' ' + last;
// 等同于 ES5 的
function full(person) {
  return person.first + ' ' + person.last;
}
```

箭头函数使得表达更加简洁

```js
const isEven = n => n % 2 === 0
const square = n => n * n

var result = values.sort((a, b) => a - b)
// 等同于 ES5 的
var result = values.sort(function (a, b) {
  return a - b
})
```

上面代码只用了两行，就定义了两个简单的工具函数。如果不用箭头函数，可能就要占用多行，而且还不如现在这样写醒目。

**箭头函数使用注意点**

1. 函数体内的 `this` 对象，就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误。
3. 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。
4. 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数。

上面四点中，第一点尤其值得注意。`this` 对象的指向是可变的，但是在箭头函数中，它是固定的。

```js
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id)
  }, 100)
}

// 转换成ES5
function foo() {
  var _this = this

  setTimeout(function () {
    console.log('id:', _this.id)
  }, 100)
}
```

上面代码中，转换后的 `ES5` 版本清楚地说明了，箭头函数里面根本没有自己的 `this`，而是引用外层的 `this`。

### 模板字符串

> 模板字符串（ template string ）是增强版的字符串 ，用反引号 ` (``) ` 标识 。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

```js
const { log } = console
const name = '雪月'
const age = 18

// 普通字符串拼接
const result = name + '今年' + age + '岁'
// 使用模板字符串
const result2 = `${name}今年${age}岁`
log(result) // 雪月今年18岁
log(result2) // 雪月今年18岁

// ${} 大括号可以放入任意的 JavaScript 表达式，可以进行运算
const result3 = `${name}今年${age * 2}岁`
log(result3) // 雪月今年36岁
```

### 剩余参数 / 展开语法

ES6 引入了 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用 `arguments` 对象了。 `rest` 参数搭配的变量是一个数组，该变量将多余的参数放入其中。

```js
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort()
}
// 使用 rest
const sortNumbers = (...numbers) => numbers.sort()
```

比较上面的两种写法可以发现， `rest` 参数的写法更自然也更简洁。

扩展运算符（ `spread` ）是三个点（...） 如同 `rest` 参数的逆运算 将一个数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```

下面是扩展运算符取代 `apply` 方法的一个实际例子 应用 `Math.max` 方法简化求出数组中的最大元素。

```js
// ESS 的写法
Math.max.apply(null, [14, 3, 77])
// ES6 的写法
Math.max(...[14, 3, 77])
// 等同于
Math.max(14, 3, 77)
```

扩展运算符提供了数组合并的新写法。

```js
//  ESS
;[1, 2].concat(more)
// ES6
;[1, 2, ...more]
```

对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

```js
let z = { a: 3, b: 'bb' }
let n = { ...z }
n // { a: 3, b: 'bb' }
n === z // false
```

**特别注意：** `...`扩展对象，只能做到当对象属性是 `基本数据类型` 才是 `深拷贝`，如果是 `引用数据类型`，那就是浅拷贝。

```js
let z = { a: 3, b: 'bb', c: { name: 'ccc' } }
let n = { ...z }

n // { a: 3, b: 'bb', c: { name: 'ccc' } }
n === z // false
n.c === z.c // true
// n.c 跟 z.c 是同一个引用地址
```

### 对象字面量简写语法

```js
const name = '雪月'

// ES5写法
const obj = {
  name: name,
  f: function () {
    console.log(this.name)
  },
}

// ES6简写
const obj2 = {
  name,
  f() {
    console.log(this.name)
  },
}

obj.f() // 雪月
obj2.f() // 雪月
```

使用 `vue` 的同学是不是感到很熟悉

```js
new Vue({
  el: '#app',
  data() {
    return {
      list: [],
    }
  },
})
```

### 数组实例的 includes()

Array.prototype.includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 includes 方法类似。ES2016 引入了该方法。

```js
;[1, 2, 3].includes(2) // true
;[1, 2, 3].includes(4) // false
;[1, 2, NaN].includes(NaN) // true
```

没有该方法之前，我们通常使用数组的 indexOf 方法，检查是否包含某个值。

```js
// ES5
if (arr.indexOf(el) !== -1) {
  // ...
}

// ES6
if (arr.includes(el)) {
  // ...
}

// 那么 indexOf 能不能做到类似于 includes 的写法呢？ 我们可以利用 ~ 位运算符
if (~arr.indexOf(el)) {
  // ...
}
```

indexOf 方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对 NaN 的误判。

```js
;[NaN].indexOf(NaN)
// -1
```

includes 使用的是不一样的判断算法，就没有这个问题

```js
;[NaN].includes(NaN)
// true
```

### Async/await 异步语法

`ES2017` 标准引入了 `async` 函数，使得异步操作变得更加方便。

`async` 函数是什么？一句话，它就是 `Generator` 函数的语法糖。

```js
async function getTitle(url) {
  let response = await fetch(url)
  let html = await response.text()
  return html.match(/<title>([\s\S]+)<\/title>/i)[1]
}

getTitle('https://tc39.github.io/ecma262/').then((res) => console.log(res))
```

上面代码中，函数 `getTitle` 内部有三个操作：`抓取网页`、`取出文本`、`匹配页面标题`。只有这三个操作全部完成，才会执行 `then` 方法里面的 `console.log`

## 结束（意犹未尽）

文章介绍了 `ES6` 常用的一些语法以及使用场景; 但是 `ES6` 内容不止于此，有兴趣的同学可以去 `阮一峰老师的` [ES6 入门教程](https://es6.ruanyifeng.com/#README) 一书中查看详细内容。如果您认可这本书，也可以去正版渠道购买书籍。这样可以使出版社不因出版开源书籍而亏钱，进而鼓励更多的作者开源自己的书籍。
