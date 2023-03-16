<?php

namespace App\kernel;

use App\kernel\middleware\BaseMiddleware;
use App\kernel\middleware\AuthMiddleware;

class Controller
{
    public string $layout ="main";
    public string $action = '';
    protected array $middlewares = [];
    public function __construct() {
        $this->registerMiddleware(new AuthMiddleware(['profile']));

    }
    public function render($file_name, $params = [])
    {
        return App::$kernel->view->render($file_name, $params);
    }
    public function file($file, $params = [])
    {
        return App::$kernel->view->renderView($file, $params);
    }

    public function setLayout($layout)
    {
        $this->layout = $layout;
    }

    /**
     * @return \App\kernel\middleware\BaseMiddleware[]
     */
    public function registerMiddleware(BaseMiddleware $middleware)
    {
        $this->middlewares[] = $middleware;
    }

    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }
}
