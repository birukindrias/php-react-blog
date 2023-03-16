<?php
/**
 * User: TheCodeholic
 * Date: 7/25/2020
 * Time: 11:33 AM
 */

namespace App\kernel\middleware;


use App\kernel\App;
use App\kernel\Exception\ForbiddenException;

/**
 * Class AuthMiddleware
 *
 * @author  birukindrias
 */
class AuthMiddleware extends BaseMiddleware
{
    protected array $actions = [];

    public function __construct($actions = [])
    {
        $this->actions = $actions;
    }

    public function execute()
    {
        if (App::isGuest()) {
            var_dump(App::isGuest());
            var_dump(App::isGuest());
            var_dump(App::isGuest());
            var_dump($this->actions);
            if (!empty($this->actions) || in_array(App::$kernel->controller->action, $this->actions)) {
                throw new ForbiddenException();
            }
        }
    }
}
