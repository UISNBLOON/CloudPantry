# cloudPantry项目文档

## 项目概述
本项目是一个现代化的云盘系统，提供文件存储、管理和分享功能。系统采用前后端分离架构，前端使用HTML、Tailwind CSS和JavaScript构建，后端使用localStorage模拟数据存储。

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
1. 克隆项目到本地
2. 在浏览器中打开index.html文件
3. 首次使用需要进行系统安装
4. 创建管理员账户后即可登录使用

## 开发指南
1. 工具函数位于`utils.js`文件中
2. 用户管理功能位于`user.js`文件中
3. 文件管理功能位于`file.js`文件中
4. 界面样式使用Tailwind CSS类进行控制
5. 响应式设计通过Tailwind的断点系统实现

## 贡献
欢迎对项目提出建议和贡献代码，提交Pull Request前请确保代码通过测试。

## 许可证
本项目采用GPL-3.0许可证。
    
