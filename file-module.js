// 导入云存储服务 API 工具
import { aliyunOSS, tencentCOS } from './cloud-storage-api.js';

// 文件管理模块
export const fileModule = {
    // 获取当前路径下的文件和文件夹
    getCurrentItems() {
        const currentPathStr = JSON.stringify(appState.currentPath);
        
        // 获取当前路径下的文件夹
        const folders = appState.folders.filter(folder => 
            JSON.stringify(folder.path) === currentPathStr
        );
        
        // 获取当前路径下的文件
        const files = appState.files.filter(file => 
            JSON.stringify(file.path) === currentPathStr
        );
        
        return { folders, files };
    },
    
    // 集成云存储服务上传文件
    uploadToCloudStorage: function(file, storageType, config) {
        if (storageType === 'aliyun') {
            aliyunOSS.init(config.accessKeyId, config.accessKeySecret, config.endpoint, config.bucket);
            aliyunOSS.uploadFile(file, function(success) {
                if (success) {
                    console.log('文件上传到阿里云 OSS 成功');
                } else {
                    console.log('文件上传到阿里云 OSS 失败');
                }
            });
        } else if (storageType === 'tencent') {
            tencentCOS.init(config.secretId, config.secretKey, config.region, config.bucket);
            tencentCOS.uploadFile(file, function(success) {
                if (success) {
                    console.log('文件上传到腾讯云 COS 成功');
                } else {
                    console.log('文件上传到腾讯云 COS 失败');
                }
            });
        }
    },

    // 创建新文件夹
    createFolder(name) {
        const newFolder = {
            id: appState.folders.length > 0 ? Math.max(...appState.folders.map(folder => folder.id)) + 1 : 1,
            name,
            path: [...appState.currentPath],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        appState.folders.push(newFolder);
        saveData('folders', appState.folders);
        renderApp();
    },
    
    // 进入文件夹
    enterFolder(folderId) {
        const folder = appState.folders.find(f => f.id === folderId);
        if (folder) {
            appState.currentPath.push(folder.name);
            renderApp();
        }
    },
    
    // 生成分享链接
    generateShareLink: function(fileId, password = null, expirationTime = null) {
        // 假设这里有一个后端接口来处理分享链接的生成
        // 实际使用时需要替换为真实的后端 API 调用
        const apiUrl = 'https://your-api-domain.com/generate-share-link';
        const data = {
            fileId: fileId,
            password: password,
            expirationTime: expirationTime
        };
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('分享链接生成成功:', result.shareLink);
            return result.shareLink;
        })
        .catch(error => {
            console.error('分享链接生成失败:', error);
        });
    },

    // 返回上级目录
    goBack() {
        if (appState.currentPath.length > 0) {
            appState.currentPath.pop();
            renderApp();
        }
    }
};