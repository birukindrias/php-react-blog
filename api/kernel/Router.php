<?php

namespace App\kernel;

use App\kernel\Exception\base;
use App\kernel\Request;

class Router
{
    public Request $request;
    public function __construct()
    {
        $this->request = new Request();
    }
    public function get($route, $callback)
    {
        $this->routes['get'][$route] = $callback;
    }
    public function post($route, $callback)
    {
        $this->routes['post'][$route] = $callback;
    }
    public function resolve()
    {
        // $path   =     $this->request->getPath();
        $callback = $this->routes[$this->request->getmethod()][$this->request->getPath()] ?? false;
        // var_dump($callback);
        if ($callback == false) {
            throw new base;
        }
        /**
         * @var \App\kernel\Controller $controller
         */
        $controller = new $callback[0]();
        $controller->action = $callback[1];
        // var_dump($controller->action);
        // $middlewares = $controller->getMiddlewares();
        // var_dump($middlewares);
        // foreach ($middlewares as $middleware) {
        //     $middleware->execute();
        // }
        // App::$kernel->controller = $controller;
        $callback[0] = $controller;
        return call_user_func($callback);
        // if (is_string($callback)) {
        //     // var_dump($callback);
        //     echo App::$kernel->view->renderView($callback);
        // } else {
        //     if ($callback == false) {
        //         throw new base;
        //     }
        //     /**
        //      * @var \App\kernel\Controller $controller
        //      */
        //     $controller = new $callback[0]();
        //     $controller->action = $callback[1];
        //     // var_dump($controller->action);
        //     // $middlewares = $controller->getMiddlewares();
        //     // var_dump($middlewares);
        //     // foreach ($middlewares as $middleware) {
        //     //     $middleware->execute();
        //     // }
        //     // App::$kernel->controller = $controller;
        //     $callback[0] = $controller;
        //     return call_user_func($callback);
          
        //     // $callback[0] = $controller;
        // }

        // echo "<pre>";
        // var_dump(

        //     $callback

        // );
        // echo "</pre>";
    }
}









// echo "# mvc_" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/birukindrias/mvc_.git
// git push http://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@github.com/birukindrias/mvc_.git
