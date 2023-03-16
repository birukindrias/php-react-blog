<?php

namespace App\app\controller;

// use App\app\modal\Likes as ModalLikes;
use App\app\modal\Post;
use App\app\modal\Likes;
use App\kernel\App;
use App\modal\Users;
use App\artisan_migrate;
use App\kernel\Controller;

class postsController extends Controller
{
  // public function postsController()
  // {
  //    $title = postsController;
  //    return $this->ender(postsController) ;

  // }

  public  function create()
  {
    return;
  }
  public  function Post()
  {
    if (App::$kernel->request->isPost()) {
      var_dump(App::$kernel->request->getBody());
      $DATA = App::$kernel->request->getBody();
      $USER = new Post();

      $USER->loadData($DATA);
      // var_dump($DATA);
      // $USER->loadData();
      // $id        = App::$kernel->session->sessionGet('id');
      // var_dump($id);

      // $USER->savebyId($id);
      // exit;
      return App::$kernel->response->redirect('/');
    }
  }
  public  function Like()
  {

    if (App::$kernel->request->isPost()) {
      // var_dump(App::$kernel->request->getBody());
      $DATA = App::$kernel->request->getBody();
      $USER = new Likes();

      $USER->loadData($DATA);
      // var_dump($DATA);
      // $USER->loadData();
      $id
        = App::$kernel->session->sessionGet('id');
      var_dump($id);

      $USER->save();
      // exit;
      return App::$kernel->response->redirect('/');
    }
    return;
  }
  public  function edit()
  {
    return;
  }
  public  function delete()
  {
    return;
  }
}
