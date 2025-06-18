// 用户管理模块
export const userModule = {
    // 用户注册
    register(username, email, password) {
        // 从localStorage加载用户数据
        let users = loadData('users') || [];
        
        // 检查用户名是否已存在
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return { success: false, message: '用户名已存在' };
        }
        
        // 检查邮箱是否已存在
        const existingEmail = users.find(user => user.email === email);
        if (existingEmail) {
            return { success: false, message: '邮箱已被注册' };
        }
        
        // 创建新用户
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
            username,
            email,
            password, // 注意：在实际应用中，密码应该加密存储
            role: 'user',
            storageUsed: 0,
            storageLimit: 10737418240, // 10GB
            createdAt: new Date().toISOString()
        };
        
        // 添加新用户到用户列表
        users.push(newUser);
        
        // 保存用户数据到localStorage
        saveData('users', users);
        
        return { success: true, message: '注册成功', user: newUser };
    },
    
    // 用户登录
    login(username, password) {
        // 从localStorage加载用户数据
        const users = loadData('users') || [];
        
        // 查找用户
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            return { success: true, message: '登录成功', user };
        } else {
            return { success: false, message: '用户名或密码错误' };
        }
    },
    
    // 用户登出
    logout() {
        appState.user = null;
        appState.isAdmin = false;
        localStorage.removeItem('currentUser');
        this.navigateTo('login');
    },
    
    // 导航到指定视图
    navigateTo(view) {
        appState.currentView = view;
        renderApp();
    }
};    