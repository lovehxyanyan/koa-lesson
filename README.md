## 环境准备
**1. 购买云主机**
在 https://cloud.tencent.com/product/cvm 购买云主机，购买之后就可以拥有对应权限的用户名和密码
**2. 下载SSH客户端**
下载SSH客户端，如secureCRT、ZenTermLite、OpenSSH、Iterm2
**3. 登录云主机**
通过上述软件登录云主机，我们以Iterm2为例
```sh
/* ssh 用户名@IP */
ssh next@122.51.165.177
/* 输入密码 */
```

### 安装node

**1. 更新系统**
```
sudo yum -y update
```
**2. 安装node**

**3. 检查版本**
```
node -v
```


### 上传代码
上传代码可以借助github来保持代码的同步，这个需要做一些简单的配置

**1. 在github上新建一个项目**
点击[+](https://github.com/new)在github新建一个项目，把本地项目关联上远程仓库并提交

**2. 在CVM上配置SSH key**
```
ssh-keygen
```
在输入密码的时候直接两次回车就好，这样就可以免密拉取github代码了。

**3. 将SSH公钥在github上进行配置**
在[SSH and GPG keys](https://github.com/settings/keys)新增SSH Key。通过获取到的公钥粘贴到对应的富文本中。
```
cat ssh/_rsa.pub
```
### 启动服务
编辑 pm2 配置文件，然后 pm2 start 即可
```
pm2 ecosystem
```
- 修改 ecosystem.config.js 把 scripts 选项改成 npm start
- 修改 app.js 模块引用方式，把 import 改成 require

```js
require('lesson-5')
```
开启服务
```
pm2 start
```