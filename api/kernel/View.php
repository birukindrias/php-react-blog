<?php

namespace App\kernel;

class View extends Controller
{

  public  string $title = '';
  public function render($file_name, $params = [])
  {
    $layout = $this->layouts();
    $file = $this->file($file_name, $params);
    return str_replace("{cont}", $file, $layout);
  }
  public function renderView($file)
  {

    $this->title = $this->title;
    ob_start();
    include_once App::$HOME_PATH . "/resources/views/" . "$file.php";
    return ob_get_clean();
  }
  public function file($file, $params = [])
  {
    foreach ($params as $key => $value) {
      $$key = $value;
    }
    
    ob_start();
    include_once App::$HOME_PATH . "/resources/views/" . "$file.php";
    return ob_get_clean();
  }
  public function layouts()
  {
    // $Controller=new Controller();
    $layout   = $this->layout;

    ob_start();
    include_once App::$HOME_PATH . "/resources/views/layout/$layout.php";
    return ob_get_clean();
  }
}
