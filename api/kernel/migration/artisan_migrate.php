<?php
include_once $dir . "/vendor/autoload.php";

use App\kernel\App;

$dotenv = Dotenv\Dotenv::createImmutable($dir);
$dotenv->load();
 $db_config = [
    'DNS' => $_ENV['DB_DNS'],
    'USER' => $_ENV['DB_USER'],
    'PASS' => $_ENV['DB_PASS'],
];
$kernel = new App($db_config);

$kernel::$kernel->db->apply_migrations($upd);

exit;
