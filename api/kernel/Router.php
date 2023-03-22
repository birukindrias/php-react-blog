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
        $callback[0] = $controller;
        return call_user_func($callback);
    }
}


