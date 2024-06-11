# nginx 安装与配置

## 查询服务器 nginx 安装情况

```sh
ps aux | grep nginx
```

如果有，则不需要再次安装

## 一、下载

- 环境：linux
- 安装目录：/usr/local/

```sh
wget http://nginx.org/download/nginx-1.13.1.tar.gz
```

## 二、安装

### 1、安装 Nginx 依赖

(1) gcc、gcc-c++

```sh
yum install gcc
yum install gcc-c++
```

(2) pcre 、zilb

```sh
yum -y install pcre*
yum -y install zlib*
```

(3) openssl （支持 https 协议）

```sh
yum -y install openssl
yum -y install openssl-devel
```

### 2、安装 Nginx

(1) 解压安装包

```sh
tar -z -xv -f nginx-1.13.1.tar.gz
```

(2) 编译

```sh
cd nginx-1.13.1
```

```sh
./configure --prefix=/usr/local/nginx --with-http_ssl_module --with-http_stub_status_module --with-pcre --with-http_v2_module
```

```md
--prefix：设置安装路径
--with-http_stub_status_module：支持 nginx 状态查询
--with-http_ssl_module：支持 https
--with-pcre：为了支持 rewrite 重写功能，必须制定 pcre
--with-http_v2_module：为了支持 http2
```

(3) 安装

```sh
make
make install
```

(4) 启动

```sh
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```

(5) 效果

访问 http://域名/

```md
Welcome to nginx!
```

## 三、负载均衡

这里用的是 指定轮询几率 的权重分配方式，指定 两台服务器的访问几率。这里配置的 1：1 的访问几率，可以根据服务器的硬件条件配置相应的比例。这种配置有个缺陷就是访问请求 随机的在两台服务器间跳转，还需要解决不同服务器间 session 共享问题。

```sh
upstream tomcatServer {
  server 192.168.0.1:8680  weight=10;
  server 192.168.0.2:8680  weight=10;
}
```

除了这种方式外，还有 ip_hash 方式。每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可解决 session 的问题：

```sh
upstream tomcatServer {
  ip_hash;
  server 192.168.0.1:8680;
  server 192.168.0.2:8680;
}
```

还有一种，按后端服务器的响应时间来分配请求，响应时间短的优先分配：

```sh
upstream tomcatServer {
  server 192.168.0.1:8680;
  server 192.168.0.2:8680;
  fair;
}
```

最后，我们要把访问请求 映射到负载均衡上：

```sh
location /{
  proxy_pass http://tomcatServer/;
}
```

## 四、重启服务

进入 nginx 安装目录下：

```sh
./nginx -t
./nginx -s reload
```

## 五、配置

Nginx 的配置内容都写在 /usr/local/nginx/conf/nginx.conf 中，先来看看这个文件一些配置项的含义：

```sh
# 开启的线程数，一般跟逻辑CPU核数一致
worker_processes  1;

# 定位全局错误日志文件，级别以notice显示，还有debug,info,warn,error,crit模式，debug输出最多，crir输出最少，根据实际环境而定
# error_log  logs/error.log;
# error_log  logs/error.log  notice;
# error_log  logs/error.log  info;

# 指定进程id的存储文件位置
# pid        logs/nginx.pid;


events {
    # 定义每个进程的最大连接数,受系统进程的最大打开文件数量限制。
    worker_connections  1024;
}


http {
    include       mime.types;
    # 核心模块指令，默认设置为二进制流，也就是当文件类型未定义时使用这种方式
    default_type  application/octet-stream;

    # log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    # access_log  logs/access.log  main;

    # 静态资源服务器使用时，可以提高约两倍效率。 反向代理服务器时，没作用
    sendfile        on;
    # 开启防止网络阻塞
    # tcp_nopush     on;

    # 开启防止网络阻塞
    # tcp_nodelay    on;

    # 设置客户端连接保存活动的超时时间
    keepalive_timeout  65;

    # 设置允许客户端请求的最大的单个文件字节数
    client_max_body_size    200m;

    # 指定来自客户端请求头的headebuffer大小
    # client_header_buffer_size  32k;

    # 指定连接请求试图写入缓存文件的目录路径
    # client_body_temp_path /dev/shm/client_body_temp;

    # 指定客户端请求中较大的消息头的缓存最大数量和大小，目前设置为4个32KB
    # large client_header_buffers 4 32k;


    # gzip  on;

    server {
        # 监听端口，其中 http 是80，https 是 443
        listen       80;

        # 主机域名
        server_name  localhost;

        # 设置访问的语言编码
        # charset koi8-r;

        # 设置虚拟主机访问日志的存放路径及日志的格式为main
        # access_log  logs/host.access.log  main;

        # 监听所有的 / 访问路径，并将它转化相应服务器
        location / {
             proxy_pass http://tomcatServer/;
        }

        # 配置负载均衡
        upstream tomcatServer {
             server 192.168.0.1:8680  weight=10;
             server 192.168.0.2:8680  weight=10;
        }


        # error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }


    # HTTPS server
    server {
        # 监听https请求
        listen       443 ssl;
        # 主机域名
        server_name  api.gogo.cn;

        # 公钥，他会被发送到连接服务器的每个客户端
        ssl_certificate      /usr/local/cert/lxcx.pem;

        # 私钥，是用来解密的
        ssl_certificate_key  /usr/local/cert/lxcx.key;

        # 缓存在所有工作进程之间共享，1MB可以存储4000个会话
        ssl_session_cache    shared:SSL:1m;

        # 会话超时时间
        ssl_session_timeout  30m;

        # Nginx 只允许使用 TLS 协议
        # 指令用于启动特定的加密协议
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

        # 选择加密套件
        ssl_ciphers HIGH:!aNULL:!MD5:!EXPORT56:!EXP;

        # 设置协商加密算法时，优先使用我们服务端的加密套件，而不是客户端浏览器的加密套件
        ssl_prefer_server_ciphers  on;

        proxy_connect_timeout 500;
        proxy_send_timeout 500;
        proxy_read_timeout 500;
        client_max_body_size 200m;
        location / {
           proxy_pass http://172.27.0.11:8680/;
        }
    }

    server {
      listen       443 ssl;
      server_name  admin.gogo.cn;

      ssl_certificate      /usr/local/cert/lxcx.pem;
      ssl_certificate_key  /usr/local/cert/lxcx.key;

      ssl_session_cache    shared:SSL:1m;
      ssl_session_timeout  5m;

      ssl_ciphers  HIGH:!aNULL:!MD5;
      ssl_prefer_server_ciphers  on;

      location / {
        proxy_pass http://172.27.0.11:8380/;
        proxy_connect_timeout 500;
        proxy_send_timeout 500;
        proxy_read_timeout 500;
        client_max_body_size 200m;
      }
    }

}
```

## 六、ssl 证书安装与部署

https://cloud.tencent.com/document/product/400/35244
