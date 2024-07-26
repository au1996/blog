# Node 安装与配置

## Linux 环境安装 Node

Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：

- [官网下载地址](https://nodejs.org/en/download/package-manager)
- [文件下载地址](https://nodejs.org/dist/v16.20.2/)

```sh
cd /usr/local/node/                                // 文件夹不存在就创建一个
wget https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz  // 下载
tar xf node-v16.20.2-linux-x64.tar.xz              // 解压

cd node-v16.20.2-linux-x64/                        // 进入解压目录
./bin/node -v                                      // 执行node命令 查看版本
# v16.20.2
```

> 如果执行 `./bin/node -v` 报错，提示无法执行二进制文件：可执行文件格式错误。可能是 `node` 文件和 `linux` 版本对不上，
> 尝试下载对应的 `arm` 格式的包进行解压，比如上面的包对应的 `arm` 的地址为：
> https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-arm64.tar.xz

解压文件的 `bin` 目录底下包含了 `node、npm` 等命令，我们可以使用 `ln` 命令来设置软连接：

```sh
ln -s /usr/local/node/node-v16.20.2-linux-x64/bin/node /usr/bin/node
node -v
# v16.20.2

ln -s /usr/local/node/node-v16.20.2-linux-x64/bin/npm /usr/bin/npm
npm -v
# 8.19.4
```

## npm -g 全局安装问题

> npm install -g xxx 全局安装后，xxx 无法使用

1. 修改`/etc/profile` 文件

```sh
vim /etc/profile
```

2. 在末尾添加以下内容

```sh
export PATH="$PATH:/usr/local/node/node-v16.20.2-linux-x64/bin"
```

## Linux 环境升级 Node

### 使用 n 模块来管理 node 的各种版本

查看当前 node 版本

```sh
node -v
# v16.20.2 # 初始node版本
```

1. 通过 npm 安装 n

```sh
npm install -g n
```

2. 通过 n 安装指定版本

```sh
n 14.21.3
```

3. 再查看当前 node 版本：

```sh
node -v
# v16.20.2
# 没有变化
```

### 升级异常

如果你发现 `node` 版本没有任何变化，那最有可能的情况就是，你的 `node` 的安装目录和 `n` 默认的路径不一样

查看 `node` 当前安装路径

```sh
which node
# /opt/node/bin/node
# 输出的路径只是举例
```

而 `n` 默认安装路径是 `/usr/local`，若你的 `node` 不是在此路径下，`n` 切换版本就不能把 `bin、lib、include、share` 复制该路径中，
所以我们必须通过 `N_PREFIX` 变量来修改 `n` 的默认 `node` 安装路径

编辑环境配置文件：

```sh
vim ~/.bash_profile
```

将下面两行代码插入到文件末尾：

```sh
export N_PREFIX=/usr/bin/node # 此路径是上面安装后设置的软连接；方便以后切换
export PATH=$N_PREFIX/bin:$PATH
```

> `N_PREFIX` 是一个环境变量，通常在 `Unix` 和 `类Unix` 系统中使用。它指定了 `Node.js` 安装的位置的前缀路径

保存退出

```sh
# 按键盘Esc
:wq
```

执行 source 使修改生效

```sh
source ~/.bash_profile
```

确认一下环境变量是否生效

```sh
echo $N_PREFIX
# /usr/bin/node
```

这时候我们重新安装：

```sh
n 14.21.3
```

再查看当前 node 版本：

```sh
node -v
# v14.21.3
```

说明修改成功
