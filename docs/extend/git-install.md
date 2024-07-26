# Git 安装与配置

## 查询 git 安装情况

```sh
ps aux | grep git
```

或者

```sh
git --version
```

如果有，则不需要再次安装

## yum 方式

简单粗暴，直接输入命令

```sh
yum install git
```

> 但是不知为何装的是比较旧的版本 => 推荐使用 wget 方式

卸载 git

```sh
yum remove git
```

## wget 方式

下载安装包

```sh
wget https://github.com/git/git/archive/v2.24.1.tar.gz
```

解压安装包

```sh
tar -zxvf v2.24.1.tar.gz
```

安装编译源码所需依赖

```sh
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker
```

## 编译

时间较长，需耐心等待...

```sh
cd git-2.24.1/
make prefix=/usr/local/src/git all
```

安装 Git

```sh
make prefix=/usr/local/src/git install
```

## 配置环境变量

```sh
vim /etc/profile
```

在底部的 `PATH` 变量结尾加上相关配置信息即可

```sh
PATH=$PATH:/usr/local/src/git/bin
```

随后保存退出

```sh
:wq
```

更新环境配置

```sh
source /etc/profile
```

## 验证

```sh
export | grep git
```

查看 `git` 版本号

```sh
git --version
```
