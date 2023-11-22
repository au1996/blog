# Egg.js 是什么?

:::tip 介绍
Egg.js 为企业级框架和应用而生，我们希望由 Egg.js 孕育出更多上层框架，帮助开发团队和开发人员降低开发和维护成本。
:::

[官网传送](https://eggjs.org/zh-cn/intro/quickstart.html)

## package.json配置：
```json
{
  "name": "xueyue",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "egg": {
    "declarations": true
  },
  "dependencies": {
    "egg": "^2.15.1",
    "egg-scripts": "^2.11.0",
    "egg-static": "^2.2.0",
    "egg-view": "^2.1.2",
    "egg-view-ejs": "^2.0.1"
  },
  "devDependencies": {
    "autod": "^3.0.1",
    "autod-egg": "^1.1.0",
    "egg-bin": "^4.11.0",
    "egg-ci": "^1.11.0",
    "egg-mock": "^3.21.0",
    "eslint": "^5.13.0",
    "eslint-config-egg": "^7.1.0"
  },
  "engines": {
    "node": ">=10.0.0"
  },
  "scripts": {
    "start": "egg-scripts start --daemon --title=egg-server-xueyue",
    "stop": "egg-scripts stop --title=egg-server-xueyue",
    "dev": "egg-bin dev",
    "debug": "egg-bin debug",
    "test": "npm run lint -- --fix && npm run test-local",
    "test-local": "egg-bin test",
    "cov": "egg-bin cov",
    "lint": "eslint .",
    "ci": "npm run lint && npm run cov",
    "autod": "autod"
  },
  "ci": {
    "version": "10"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "author": "",
  "license": "MIT"
}
```

## 开发项目
```shell
npm run dev
```

## 启动项目
```shell
npm run start
```

## 停止项目
```shell
npm run stop
```
