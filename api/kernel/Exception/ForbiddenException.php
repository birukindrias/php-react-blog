<?php

/**
 * User: birukindrias
 * Date: 7/25/2020
 * Time: 11:35 AM
 */

namespace App\kernel\Exception;
use App\kernel\App;



/**
 * Class ForbiddenException
 *
 * @author  birukindrias
 * @package birukindrias
 */
class ForbiddenException extends \Exception
{
    protected $message = 'You don\'t have permission to access this page';
    protected $code = 403;
}
