<?php

use App\app\controller\api\PostController;
use App\app\controller\api\UserController;

//? API ROUTE
$kernel::$kernel->router->post('/api/v1/createUser', [UserController::class, 'create']);
$kernel::$kernel->router->post('/api/v1/createpost', [PostController::class, 'create']);
$kernel::$kernel->router->post('/api/v1/getuser', [PostController::class, 'getUser']);
$kernel::$kernel->router->post('/api/v1/img', [PostController::class, 'img']);
$kernel::$kernel->router->get('/api/v1/posts', [PostController::class, 'index']); 
// $kernel::$kernel->router->post('/api/v1/insert', [siteController::class, 'insertUser']);
// $kernel::$kernel->router->post('/api/v1/insertPost', [siteController::class, 'insertPost']);

