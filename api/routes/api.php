<?php

use App\app\controller\api\PostController;
use App\kernel\App;
use App\app\controller\api\UserController;
use App\app\controller\postsController;

// // API ROUTE
$kernel::$kernel->router->post('/api/v1/createUser', [UserController::class, 'createUser']);
$kernel::$kernel->router->post('/api/v1/createpost', [PostController::class, 'createPost']);

// $kernel::$kernel->router->post('/api/v1/insert', [siteController::class, 'insertUser']);
// $kernel::$kernel->router->post('/api/v1/insertPost', [siteController::class, 'insertPost']);
$kernel::$kernel->router->get('/api/v1/posts', [PostController::class, 'getAllPosts']); 
