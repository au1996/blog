# 收集 css 特殊样式

## 添加字体文件

```css
@font-face {
  font-family: 'ruanmeng';
  src: url(../ttf/ruanmeng.ttf) format('truetype');
}
```

单独使用

```css
p {
  font-family: 'ruanmeng';
}
```

全局使用

```css
body {
  font-family: 'ruanmeng';
}
```

## input 标签 focus 更改样式

添加一行样式即可

```css
input[type='text']:focus {
  outline: 1px solid #afecab;
}
```

## :focus-within 操作 父元素 或者 祖先元素

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 一个元素获得焦点，或该元素的后代元素获得焦点。都可以触发 :focus-within */
      body:focus-within {
        background: pink;
      }
      .box:focus-within {
        background: blue;
      }
      .box {
        margin-bottom: 10px;
      }
      div {
        padding: 20px;
        width: 200px;
        height: 200px;
        border: 1px dashed #000;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <input type="text" value="子元素1号" />
    </div>
    <div>
      <input type="text" value="子元素2号" />
    </div>
  </body>
</html>
```

## img 标签底部空白间隙

`img`一直以来有一个很大的问题就是`底部空白间隙`，原因是因为`行内元素`默认的垂直对齐方式为 `baseline` 造成的字体下方会有间隙。

**目前有 4 种解决方案**

第一种：修改 img 元素的垂直对齐方式； **（推荐 1）**

```css
img {
  vertical-align: bottom;
}
```

第二种：将 img 变成块级元素，不受行内基线的影响； **（推荐 2）**

```css
img {
  display: block;
}
```

第三种：将父元素的`font-size`变为 `0`；**（不推荐）**

```css
div {
  font-size: 0;
}
```

第四种：将`img`父元素行高变为 `0`；**（不推荐）**

```css
div {
  line-height: 0;
}
```
