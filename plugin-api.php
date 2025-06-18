<?php

// 插件 API 入口文件

// 检查是否已经安装
if (!file_exists('config.php')) {
    header('Location: install.php');
    exit;
}

// 加载配置文件
if (!file_exists('config.php')) {
    die('配置文件不存在，请先完成系统安装。');
}
require_once 'config.php';

// 插件 API 类
class PluginAPI {
    private $conn;

    public function __construct() {
        // 建立数据库连接
        $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        if ($this->conn->connect_error) {
            die('数据库连接失败: ' . $this->conn->connect_error);
        }
    }

    // 示例 API 方法：获取所有插件列表
    public function getPlugins() {
        $sql = "SELECT * FROM plugins";
        $result = $this->conn->query($sql);

        if ($result->num_rows > 0) {
            $plugins = array();
            while ($row = $result->fetch_assoc()) {
                $plugins[] = $row;
            }
            return $plugins;
        } else {
            return array();
        }
    }

    // 可添加更多 API 方法

    public function __destruct() {
        // 关闭数据库连接
        $this->conn->close();
    }
}

// 处理 API 请求
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $api = new PluginAPI();
    $action = $_GET['action'] ?? '';

    switch ($action) {
        case 'getPlugins':
            $plugins = $api->getPlugins();
            header('Content-Type: application/json');
            echo json_encode($plugins);
            break;
        default:
            header('HTTP/1.1 400 Bad Request');
            echo '无效的请求';
            break;
    }
}

?>