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
    public function isFILE()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'FILES') {
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
            foreach ($_FILES as $key => $value) {
                $BODY[$key] =  $value;
            }
        }

        return $BODY;
    }
    public function fileUpload($name, $path, $types = [] ?? '', $size = '' ?? null)

    {
        if (isset($_FILES[$name])) {
            // var_dump($_FILES[$name]);
            $errors = array();
            $file_name = $_FILES[$name]['name'];
            $file_size = $_FILES[$name]['size'];
            $file_tmp = $_FILES[$name]['tmp_name'];
            $file_type = $_FILES[$name]['type'];
            // $file_ext = strtolower(end(explode('.', $_FILES[$name]['name'])));
            $extensions = $types;
            // if ($types != []) {
            //     if (in_array($file_ext, $extensions) === false) {
            //         $errors[] = "extension not allowed, please choose a JPEG or PNG file.";
            //     }
            // }

            // if ($size != '') {
            //     if ($file_size > $size) {
            //         $errors[] = "File size must be excately $$size MB";
            //     }
            // }
            // if ($file_size > 10) {
            // if (empty($errors) == true) {
            $randNme = rand(0, 30000) . $file_name;
        $file_name=  str_replace('#','',$randNme);

            move_uploaded_file($file_tmp, dirname(__DIR__) . '/storage/' . $path . '/' . $file_name);

            return $randNme;
            // } else {
            //     return $errors;
            // }
            // }
        }

        return false;
    }
}
