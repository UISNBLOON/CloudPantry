<?php
// 检查是否已经安装
if (file_exists('config.php')) {
    header('Location: index.html');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 获取表单数据
    $adminUsername = $_POST['admin_username'];
    $adminEmail = $_POST['admin_email'];
    $adminPassword = $_POST['admin_password'];

    // 这里可以添加数据库连接和用户创建逻辑

    // 创建配置文件
    $configContent = "<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'cloud_pantry');
    
    define('ADMIN_USERNAME', '$adminUsername');
    define('ADMIN_EMAIL', '$adminEmail');
    define('ADMIN_PASSWORD', '$adminPassword');
?>";

    file_put_contents('config.php', $configContent);

    // 重定向到登录页面
    header('Location: index.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>云盘系统安装</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-inter bg-extra-light text-dark antialiased">
    <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-center text-primary">云盘系统安装</h2>
        <form method="post" class="space-y-4">
            <input type="text" name="admin_username" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary" placeholder="管理员用户名" required>
            <input type="email" name="admin_email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary" placeholder="管理员邮箱" required>
            <input type="password" name="admin_password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary" placeholder="管理员密码" required>
            <button type="submit" class="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">安装系统</button>
        </form>
    </div>
</body>
</html>