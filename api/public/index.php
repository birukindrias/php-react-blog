<?php
use App\app\modal\Users;

include_once "../vendor/autoload.php";
// echo "<pre>";
// header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, PATCH, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Origin: *');

use App\kernel\App;
// use App\kernel\controller\siteController;

$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();
$db_config = [
    'userClass' => Users::class,
    'DNS' => $_ENV['DB_DNS'],
    'USER' => $_ENV['DB_USER'],
    'PASS' => $_ENV['DB_PASS'],
];

$kernel = new App($db_config);
include_once App::$HOME_PATH . "/routes/web.php";
include_once App::$HOME_PATH . "/routes/api.php";



$kernel::$kernel->run();
