# cloudPantry项目文档

## 项目概述
本项目是一个现代化的CloudPantry，提供文件存储、管理和分享功能。系统采用前后端分离架构，前端使用HTML、Tailwind CSS和JavaScript构建，后端使用localStorage模拟数据存储。

## 主要功能
- 用户注册与登录
- 文件上传与下载
- 文件与文件夹管理
- 存储空间统计
- 响应式设计，适配各种设备
- 深色/浅色模式切换

## 技术栈
- 前端框架：原生JavaScript
- CSS框架：Tailwind CSS v3
- 图标库：Font Awesome
- 图表库：Chart.js
- 本地存储：localStorage

## 项目结构cloud-drive-system/
├── index.html          # 主页面
├── utils.js            # 工具函数
├── user.js             # 用户管理模块
├── file.js             # 文件管理模块
├── style.css           # 自定义样式
├── README.md           # 项目文档
└── assets/             # 静态资源
    └── icons/          # 图标资源
## 安装与使用
### 纯命令安装
1. 克隆项目到本地
2. 确保系统已安装 PHP，若未安装，可使用 Homebrew 在 macOS 上安装：`brew install php`<mcreference link="https://blog.csdn.net/m0_66441341/article/details/125129775" index="1">1</mcreference>。
3. 打开终端，导航到项目目录。
4. 若系统未安装，访问 `install.php` 文件，在浏览器中完成安装流程，输入管理员用户名、邮箱和密码。
5. 安装完成后，可在浏览器中打开 `index.html` 文件，使用创建的管理员账户登录使用。

### 宝塔安装
1. **安装宝塔面板**：
   - **CentOS系统**：执行命令 `yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh`<mcreference link="https://www.west.cn/docs/396201.html" index="2">2</mcreference>。
   - **Ubuntu系统**：执行命令 `wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh`<mcreference link="https://www.west.cn/docs/396201.html" index="2">2</mcreference>。
   - 执行命令后，在提示“你现在想安装宝塔控制面板吗？”时输入 `y` 并回车继续安装<mcreference link="https://blog.csdn.net/2301_81028896/article/details/143857238" index="4">4</mcreference>。
2. **登录宝塔面板**：安装成功后，在浏览器输入外网面板地址，使用安装过程中生成的账号和密码登录<mcreference link="https://blog.csdn.net/qq_59020256/article/details/136560589" index="3">3</mcreference> <mcreference link="https://blog.csdn.net/2301_81028896/article/details/143857238" index="4">4</mcreference>。
3. **配置环境**：在宝塔面板中配置 PHP 环境，并将项目文件上传到服务器指定目录。
4. **完成安装**：访问服务器上的 `install.php` 文件，按照页面提示完成系统安装，输入管理员用户名、邮箱和密码。

## 插件 API 教程
### 概述
插件 API 允许开发者扩展云盘系统的功能。`plugin-api.php` 文件是插件 API 的入口，通过该文件可以与系统数据库交互，实现各种插件功能。

### 数据库表结构
目前插件 API 使用 `plugins` 表来存储插件信息，表结构如下：
| 字段名 | 类型 | 描述 |
| ---- | ---- | ---- |
| id | INT | 插件 ID，自增主键 |
| name | VARCHAR(255) | 插件名称 |
| description | TEXT | 插件描述 |
| version | VARCHAR(20) | 插件版本 |

### API 端点
- `GET /plugin-api.php?action=getPlugins`：获取所有插件列表。返回一个 JSON 数组，包含所有插件的信息。

### 示例代码
以下是一个使用 JavaScript 的 `fetch` API 调用 `getPlugins` 端点的示例：
```javascript
fetch('plugin-api.php?action=getPlugins')
  .then(response => response.json())
  .then(data => {
    console.log('所有插件列表:', data);
  })
  .catch(error => {
    console.error('请求出错:', error);
  });
```

## 开发指南
1. 工具函数位于`utils.js`文件中
2. 用户管理功能位于`user.js`文件中
3. 文件管理功能位于`file.js`文件中
4. 界面样式使用Tailwind CSS类进行控制
5. 响应式设计通过Tailwind的断点系统实现

## 贡献
欢迎对项目提出建议和贡献代码，提交Pull Request前请确保代码通过测试。

## 许可证
本项目采用MIT许可证。
    
