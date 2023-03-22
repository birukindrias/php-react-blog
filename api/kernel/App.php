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
    $userId =  false;
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
