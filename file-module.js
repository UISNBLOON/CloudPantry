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
    
    // 返回上级目录
    goBack() {
        if (appState.currentPath.length > 0) {
            appState.currentPath.pop();
            renderApp();
        }
    }
};    