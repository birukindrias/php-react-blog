<?php

use App\app\controller\api\PostController;
use App\app\controller\api\UserController;

//? API ROUTE
$kernel::$kernel->router->post('/api/v1/createUser', [UserController::class, 'create']);
$kernel::$kernel->router->post('/api/v1/login', [UserController::class, 'login']);
$kernel::$kernel->router->post('/api/v1/update', [UserController::class, 'update']);
$kernel::$kernel->router->post('/api/v1/getotheruser', [UserController::class, 'getOtherUser']);
$kernel::$kernel->router->post('/api/v1/getuser', [UserController::class, 'getUser']);
$kernel::$kernel->router->post('/api/v1/createpost', [PostController::class, 'create']);
$kernel::$kernel->router->post('/api/v1/img', [PostController::class, 'img']);
$kernel::$kernel->router->get('/api/v1/posts', [PostController::class, 'index']); 
$kernel::$kernel->router->post('/api/v1/post', [PostController::class, 'uniquePost']); 
$kernel::$kernel->router->post('/api/v1/userposts', [PostController::class, 'userPosts']); 
$kernel::$kernel->router->post('/api/v1/like', [PostController::class, 'likePost']); 
$kernel::$kernel->router->get('/api/v1/like', [PostController::class, 'likePost']); 
$kernel::$kernel->router->post('/api/v1/removelike', [PostController::class, 'removelike']); 
$kernel::$kernel->router->post('/api/v1/search', [UserController::class, 'search']); 
// $kernel::$kernel->router->post('/api/v1/insert', [siteController::class, 'insertUser']);
// $kernel::$kernel->router->post('/api/v1/insertPost', [siteController::class, 'insertPost']);

