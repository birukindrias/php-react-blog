<?php

namespace App\kernel;

use users;
use App\kernel\Modal;
use App\kernel\Exception\base;
use App\kernel\session\Session;

class App
{
  public ?Controller $controller = null;

  public Router $router;
  public View $view;
  public Request $request;
  public Response $response;
  public Session $session;
  public DB $db;
  // <publ></publ>ic string $layout = "main";
  public static  $kernel;
  public static  $HOME_PATH;
  public static $user = null;

  public function __construct($_config)
  {
    // $userClass = new   $_config['userClass'];

    self::$HOME_PATH = dirname(__DIR__);
    self::$kernel = $this;
    $this->session = new Session();
    $this->request = new Request();
    $this->router = new Router();

    $this->view = new View();

    $this->response = new Response();
    $this->db = new DB($_config);
    // $userId = App::$kernel->session->sessionGet('id') ?? false;
    $userId =  false;
    // if (!$userId) {
    //     $userId = false;
    // }
    // var_dump($userId);
    // var_dump(self::isGuest());
    // if ($userId !== false) {
    //   $key = $userClass::primaryKey();
    //   // var_dump($this->userClass);
    //   $this->user = $userClass::getUser([$key => $userId]);
    //   // var_dump($this->user);
    //   $userClass->loadData($this->user);
    // }
  }

  public static function isGuest()
  {
    // var_dump(!self::$kernel->user);
    if (self::$kernel->user == null) {
      return true;
    }
    return false;
  }


  public function run()
  {
    try {
      echo  $this->router->resolve();
    } catch (\Exception $e) {
    //   $this->response->setStatusCode($e->getCode());
    //   echo App::$kernel->view->render('error', ['er' => $e]);
    ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);
    var_dump($e);

    }
  }
}
