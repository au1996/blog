# 页面锚点定位

1. 第一种方法，也是最简单的方法。用 `a` 标签，在 `href` 属性中写入 `div` 的 `id`。如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        height: 600px;
        width: 600px;
        border: 2px solid pink;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <a href="#div1">to div1</a>
    <a href="#div2">to div2</a>
    <a href="#div3">to div3</a>
    <div id="div1">div1</div>
    <div id="div2">div2</div>
    <div id="div3">div3</div>
  </body>
</html>
```

2. 第二种方法是用 js 的 `srollIntoView` 方法，推荐:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        width: 600px;
        height: 600px;
        border: 2px solid pink;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div id="btnBox">
      <button>one</button>
      <button>two</button>
      <button>three</button>
    </div>
    <div id="one">one</div>
    <div id="two">two</div>
    <div id="three">three</div>

    <script>
      /*
        如何滚动页面也是DOM没有解决的一个问题。为了解决这个问题，浏览器实现了一些方法，
      以方便开发人员如何更好的控制页面的滚动。在各种专有方法中， 
      HTML5选择了scrollIntoView()作为标准方法。
      scrollIntoView()可以在所有的HTML元素上调用，通过滚动浏览器窗口或某个容器元素，
      调用元素就可以出现在视窗中。如果给该方法传入true作为参数，或者不传入任何参数，那么
      窗口滚动之后会让调动元素顶部和视窗顶部尽可能齐平。如果传入false作为参数，调用元素
      会尽可能全部出现在视口中（可能的话，调用元素的底部会与视口的顶部齐平。）不过顶部
      不一定齐平，例如：
      // 让元素可见
      document.forms[0].scrollIntoView();
      当页面发生变化时，一般会用这个方法来吸引用户注意力。实际上，为某个元素设置焦点也
      会导致浏览器滚动显示获得焦点的元素。
        支持该方法的浏览器有 IE、Firefox、Safari和Opera。
      */
      let btnBoxDom = document.getElementById('btnBox')
      btnBoxDom.addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON') {
          let id = e.target.innerText
          document.getElementById(id).scrollIntoView()
        }
      })
    </script>
  </body>
</html>
```
