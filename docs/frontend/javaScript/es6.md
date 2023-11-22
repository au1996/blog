# ES6 系列

::: tip 提示
这里将汇总一些常用的 `ES6` 语法
:::

## Array-filter

```js
const numbers = [3, 12, 54, 12, 4, 4, 3, 12, 16, NaN, NaN, 'NaN', 'NaN']
const filteredNumbers = numbers.filter((num, i) => numbers.indexOf(num) === i)
console.log(filteredNumbers) // [3, 12, 54, 4, 16, "NaN"] 过滤去重，会漏掉NaN

const people = [
  { name: 'Amy', gender: 'female', age: 28 },
  { name: 'James', gender: 'male', age: 13 },
  { name: 'Victor', gender: 'male', age: 17 },
  { name: 'David', gender: 'male', age: 25 },
  { name: 'Simon', gender: 'male', age: 33 },
]
const filteredPeople = people.filter((person) => person.age > 18)
console.log(filteredPeople) // 过滤 age > 18的值

const people2 = [
  { name: 'Amy', gender: 'female', age: '28' },
  { name: 'James', gender: 'male', age: 13 },
  { name: 'Victor', gender: 'male', age: null },
  { name: 'David', gender: 'male', age: 28 },
  { name: 'Simon', gender: 'male', age: undefined },
  { name: 'Anna', gender: 'female', age: 21 },
  { name: 'Jane', gender: 'female', age: NaN },
]
const filtered2 = people2.filter(typeof person.age === 'number' && !isNaN(person.age))
console.log(filtered2) // 过滤 age为数字
```

## 利用 Set 去重

```js
const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray) // Result: [1, 2, 3, 5]
```
