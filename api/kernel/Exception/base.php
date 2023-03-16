<?php

namespace App\kernel\Exception;

class base extends \Exception
{

    protected $message = "page not found";
    protected $code = 404;
    // throw new \Exception("Error Processing Request", 404);
}
