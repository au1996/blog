# 那些年，我们一起踩过的坑

## moment().startOf('week')

获取当前周的第一天，发现是周日，因为美国等基督教国家认为周日是第一天

```js
moment().startOf('week').format('YYYY-MM-DD HH:mm:ss')
// 2023-01-29 00:00:00 周日
```

参数改为`isoweek`，解决。`ISO`国际标准规定`周一`是当前周的开始

```js
moment().startOf('isoweek').format('YYYY-MM-DD HH:mm:ss')
// 2023-01-30 00:00:00 周一
```
