# npm 相关内容

## 获取当前源

```sh
npm get registry
```

## 设置官方源

```sh
npm config set registry https://registry.npmjs.org
```

## 设置淘宝源

```sh
npm config set registry https://registry.npmmirror.com
```

## 同步淘宝源

https://npmmirror.com/package/text-view

## 查看包大小

https://pkg-size.dev/

## 解决报错问题

npm 安装出错 npm ERR! request to https://registry.npmjs.org/express failed, reason: unable to verify the first certificate

```sh
npm config set strict-ssl false
```

npm ERR! Unexpected end of JSON input while parsing near '...0ZdrK\nakdExSu6TFq5es'

```sh
npm cache clean --force
# 或者
npm cache verify
# 最后
npm install
```
