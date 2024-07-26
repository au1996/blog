# 记录一些冷知识

## 浏览器选项卡切换事件

```js
document.addEventListener('visibilitychange', function () {
  // document.visibilityState
  // visible 显示 页面内容至少部分可见。
  // 意味着该页面是非最小化窗口的前台选项卡

  // hidden 隐藏 页面内容对用户不可见。
  // 意味着文档是后台选项卡
  // 或者最小化窗口的一部分
  // 或者操作系统屏幕锁定处于活动状态

  // prerender 预渲染 注意：这已从标准中删除
  // 页面内容正在预渲染，并且对用户不可见（出于 document.hidden 的目的被视为隐藏）
  // 文档可能会从此状态开始，但永远不会从另一个值转换到该状态

  if (document.visibilityState == 'visible') {
    document.title = '我进来了'
    return
  }

  if (document.visibilityState == 'hidden') {
    document.title = '我离开了'
  }
})
```
