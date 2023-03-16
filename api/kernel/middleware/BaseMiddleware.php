<?php


namespace App\kernel\middleware;


abstract class BaseMiddleware
{
    abstract public function execute();
}
