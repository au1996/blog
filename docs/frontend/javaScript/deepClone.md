# 一文让你彻底掌握 JavaScript 深拷贝

## 前言

> 评价一个深拷贝是否完善，请检查以下问题是否都解决了：

- 基本类型数据是否能拷贝？
- 键和值都是基本类型的普通对象是否能拷贝？
- Symbol 作为对象的 key 是否能拷贝？
- Date 和 RegExp 对象类型是否能拷贝？
- Map 和 Set 对象类型是否能拷贝？
- Function 对象类型是否能拷贝？（函数我们一般不用深拷贝）
- 对象的原型是否能拷贝？
- 不可枚举属性是否能拷贝？
- 循环引用是否能拷贝？

## 乞丐版

- [查看代码](https://au1996.github.io/interview/deep-clone/demo1.html)

```js
function deepClone(target) {
  if (typeof target === 'object' && target !== null) {
    return JSON.parse(JSON.stringify(target))
  } else {
    return target
  }
}
```

会出现以下问题：

- 类型被转换：`Date` 引用类型会变成字符串
- 键值会消失：当值为 `Function`、`Undefined`、`Symbol` 这几种类型
- 键值变成空对象：当值为 `Map`、`Set`、`RegExp` 这几种类型
- 无法拷贝：`不可枚举`属性、对象的`原型链`属性
- 如果存在`循环引用`：执行会报错
- 如果存在 `BigInt` 类型：执行会报错
- 补充：详细内容请查看官方文档：[JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## 简化版

- [查看代码](https://au1996.github.io/interview/deep-clone/demo2.html)

```js
function deepClone(target) {
  if (typeof target === 'object' && target) {
    let cloneObj = target.constructor === Array ? [] : {}

    for (const key in target) {
      cloneObj[key] = deepClone(target[key])
    }
    return cloneObj
  } else {
    return target
  }
}
```

会出现以下问题：

- 只考虑了 `Object` 和 `Array`
- `Date` `、RegExp` `、Map` 、`Set` 都变成了 `Object`，且值也不正确。
- 丢失了属性名为 `Symbol` 类型的属性
- 丢失了`不可枚举`的属性
- `原型`上的属性被添加到拷贝的对象中
- 不能处理`循环引用`

## 完美版

- [查看代码](https://au1996.github.io/interview/deep-clone/demo3.html)

```js
function deepClone(target) {
  // WeakMap作为记录对象Hash表（用于防止循环引用）
  const hash = new WeakMap()

  // 判断是否为object类型的辅助函数，减少重复代码
  function isObject(target) {
    return (typeof target === 'object' && target) || typeof target === 'function'
  }

  function clone(data) {
    // 基础类型直接返回值
    if (!isObject(data)) {
      return data
    }

    // 日期或者正则对象则直接构造一个新的对象返回
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data)
    }

    // 处理函数
    if (typeof data === 'function') {
      return new Function('return ' + data.toString())()
    }

    // 如果该对象已存在，则直接返回该对象
    const exist = hash.get(data)

    if (exist) {
      return exist
    }

    // 处理Map对象
    if (data instanceof Map) {
      const result = new Map()
      hash.set(data, result)

      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val))
        } else {
          result.set(key, val)
        }
      })

      return result
    }

    // 处理Set对象
    if (data instanceof Set) {
      const result = new Set()
      hash.set(data, result)

      data.forEach((val) => {
        if (isObject(val)) {
          result.add(clone(val))
        } else {
          result.add(val)
        }
      })

      return result
    }

    // 收集键名（考虑了以Symbol作为key以及不可枚举的属性）
    const keys = Reflect.ownKeys(data)

    // 利用 getOwnPropertyDescriptors 方法可以获得对象的所有属性以及对应的属性描述
    const allDesc = Object.getOwnPropertyDescriptors(data)

    // 结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链，
    // 这里得到的result是对data的浅拷贝
    const result = Object.create(Object.getPrototypeOf(data), allDesc)

    // 新对象加入到map中，进行记录
    hash.set(data, result)

    // Object.create()是浅拷贝，所以要判断并递归执行深拷贝
    keys.forEach((key) => {
      const val = data[key]

      // 属性值为 对象类型 或 函数对象 的话也需要进行深拷贝
      if (isObject(val)) {
        result[key] = clone(val)
      } else {
        result[key] = val
      }
    })

    return result
  }

  return clone(target)
}
```
