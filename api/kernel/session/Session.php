<?php

namespace App\kernel\session;

use users;
use App\kernel\Exception\base;

class Session
{
    public const FLASH_KEY = "flash_messages";
    public function __construct()
    {
        $flashMessages = $_SESSION[self::FLASH_KEY] ?? [];
        foreach ($flashMessages as $key => &$flashMessage) {
            $flashMessage['read'] = true;
            // var_dump($flashMessage);
        }
        $_SESSION[self::FLASH_KEY] = $flashMessages;
    }
    public function set_Flush($key, $msg)
    {
        $_SESSION[self::FLASH_KEY][$key] = [
            'message' => $msg,
            'read' => true
        ];
    }
    public function get_Flush($key)
    {
        return  $_SESSION[self::FLASH_KEY][$key]['message'] ?? 0;
    }
    public function sessionSet($key, $value)
    {
        $_SESSION[$key] =  $value;
        return true;
    }
    public function sessionGet($key)
    {
        return $_SESSION[$key];
    }
    public function sessionUnset($key)
    {
        unset($_SESSION[$key]);
        return true;
    }

    public function __destruct()
    {
        $flashMessages = $_SESSION[self::FLASH_KEY] ?? [];
        foreach ($flashMessages as $key =>  &$flashMessage) {
            if ($flashMessage['read']) {
                unset($flashMessages[$key]);
            }
        }
        $_SESSION[self::FLASH_KEY] = $flashMessages;
    }
}
