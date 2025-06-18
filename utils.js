// 工具函数 - 从localStorage加载数据
export function loadData(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('加载数据失败:', error);
        return null;
    }
}

// 工具函数 - 保存数据到localStorage
export function saveData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('保存数据失败:', error);
    }
}

// 工具函数 - 格式化文件大小
export function formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 工具函数 - 格式化日期
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

// 工具函数 - 获取文件图标
export function getFileIcon(fileType) {
    switch (fileType) {
        case 'document':
            return 'fa-file-text-o';
        case 'image':
            return 'fa-file-image-o';
        case 'video':
            return 'fa-file-video-o';
        case 'audio':
            return 'fa-file-audio-o';
        case 'presentation':
            return 'fa-file-powerpoint-o';
        case 'spreadsheet':
            return 'fa-file-excel-o';
        case 'pdf':
            return 'fa-file-pdf-o';
        case 'archive':
            return 'fa-file-archive-o';
        default:
            return 'fa-file-o';
    }
}

// 工具函数 - 获取文件颜色
export function getFileColor(fileType) {
    switch (fileType) {
        case 'document':
            return 'text-primary';
        case 'image':
            return 'text-secondary';
        case 'video':
            return 'text-danger';
        case 'audio':
            return 'text-warning';
        case 'presentation':
            return 'text-primary';
        case 'spreadsheet':
            return 'text-success';
        case 'pdf':
            return 'text-danger';
        case 'archive':
            return 'text-dark-light';
        default:
            return 'text-dark';
    }
}

// 工具函数 - 获取可读的文件类型
export function getReadableFileType(fileType) {
    switch (fileType) {
        case 'document':
            return '文档';
        case 'image':
            return '图片';
        case 'video':
            return '视频';
        case 'audio':
            return '音频';
        case 'presentation':
            return '演示文稿';
        case 'spreadsheet':
            return '电子表格';
        case 'pdf':
            return 'PDF 文件';
        case 'archive':
            return '压缩文件';
        default:
            return '文件';
    }
}

// 工具函数 - 格式化时间为"多久前"
export function formatTimeAgo(timestamp) {
    const now = new Date();
    const timeDiff = now - new Date(timestamp);
    
    // 计算分钟、小时、天
    const minutes = Math.floor(timeDiff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
        return `${days}天前`;
    } else if (hours > 0) {
        return `${hours}小时前`;
    } else if (minutes > 0) {
        return `${minutes}分钟前`;
    } else {
        return '刚刚';
    }
}    