<?php

namespace App\kernel;

class Request
{
    public function getPath()
    {
        $uri =  $_SERVER['REQUEST_URI'];
        $uri_cheak = strpos($uri, '?');
        if (!$uri_cheak) {
            return $uri;
        }
        // var_dump($uri);
        return  substr($uri, 0, $uri_cheak);
    }
    public function getmethod()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == 'GET') return 'get';
        else return 'post';
    }
    public function isGet()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            return true;
        }
    }
    public function isPost()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            return true;
        }
    }
    public function getBody()
    {
        $BODY = [];
        if ($this->isGet()) {
            foreach ($_GET as $key => $value) {
                $BODY[$key] = filter_input(INPUT_GET, $key, FILTER_SANITIZE_SPECIAL_CHARS);
            }
        }
        if ($this->isPost()) {
            foreach ($_POST as $key => $value) {
                $BODY[$key] = filter_input(INPUT_POST, $key, FILTER_SANITIZE_SPECIAL_CHARS);
            }
        }
        return $BODY;
    }
}
