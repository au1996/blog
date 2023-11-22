# 元素垂直水平居中

::: tip 说明
让一个子元素在父元素内，垂直水平居中。  
这是一道常见的 css 笔试题, 这里汇总一些常用的解决思路。
:::

## 1.利用绝对定位

子元素相对于父元素绝对定位，设置 top、left 为 50%，然后设置 `margin-left`、`margin-top` 为自身宽高的负一半。缺点是必须知道自身的宽高，有一定的局限性。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>定位居中</title>
    <style>
      * {
        box-sizing: border-box;
      }
      .parent {
        position: relative;
        height: 200px;
        border: 2px dashed #f69c55;
      }
      .parent .child {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 100px;
        margin-top: -50px;
        margin-left: -100px;
        padding: 20px;
        color: #fff;
        background: #000;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">你毕业才两年，三年工作经验怎么来的？程序员回答：996</div>
    </div>
  </body>
</html>
```

## 2.利用 `flex` 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>flex居中</title>
    <style>
      .parent {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 140px;
        border: 2px dashed #f69c55;
      }
      .child {
        padding: 20px;
        color: #fff;
        background: #000;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">解决问题很容易，找到问题却很难。</div>
    </div>
  </body>
</html>
```

## 3.利用 css3 的 `transform` 属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>transform居中</title>
    <style>
      .parent {
        position: relative;
        min-width: 300px;
        height: 140px;
        border: 2px dashed #f69c55;
      }
      .child {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        color: #fff;
        background: #000;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">世界上有10种人，一种是懂二进制的，另一种是不懂二进制的</div>
    </div>
  </body>
</html>
```

## 4.利用 `table` 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>table居中</title>
    <style>
      .outer {
        display: table;
        width: 100%;
        height: 140px;
        border: 2px dashed pink;
      }
      .middle {
        display: table-cell;
        vertical-align: middle;
      }
      .inner {
        max-width: 300px;
        padding: 20px;
        margin: 0 auto;
        color: #fff;
        background: #000;
      }
    </style>
  </head>
  <body>
    <div class="outer">
      <div class="middle">
        <div class="inner">简单不先于复杂，而是在复杂之后。</div>
      </div>
    </div>
  </body>
</html>
```

## 5.利用 `grid` 布局

截止 2021 年，css 最为强大的布局属性。但考虑到浏览器兼容性，建议谨慎使用。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>grid居中</title>
    <style>
      .parent {
        display: grid;
        height: 140px;
        border: 2px dashed #f69c55;
      }
      .child {
        padding: 20px;
        margin: auto;
        color: #fff;
        background: #000;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">好的程序员能写出别人能读懂的代码。</div>
    </div>
  </body>
</html>
```
