<?php

use App\app\controller\AuthControllers;
use App\kernel\App;
use App\app\controller\siteController;
use App\app\controller\postsController;

// // WEB ROUTE
App::$kernel->router->get('/', [siteController::class, 'index']);

/**
 * Auth
 */
App::$kernel->router->post('/signup', [AuthControllers::class, 'create']);
App::$kernel->router->get('/signup', [AuthControllers::class, 'create']);
App::$kernel->router->post('/login', [AuthControllers::class, 'login']);
App::$kernel->router->get('/login', [AuthControllers::class, 'login']);
App::$kernel->router->get('/logout', [AuthControllers::class, 'logout']);

/**
 * User
 */
App::$kernel->router->get('/profile', [siteController::class, 'profile']);
App::$kernel->router->post('/Post', [postsController::class, 'Post']);
App::$kernel->router->post('/likes', [postsController::class, 'Like']);
// App::$kernel->router->get('/signup', [AuthControllers::class, 'signUp']);
