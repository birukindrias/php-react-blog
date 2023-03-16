<?php

namespace App\app\controller;

use App\kernel\App;
use App\app\modal\Users;
use App\artisan_migrate;
use App\kernel\Controller;

class AuthControllers extends Controller
{
  public function index()
  {
    $title = 'AuthControllers';
    return $this->render('AuthControllers');
  }

  public  function create()
  {
     
    $this->setLayout('auth');
    // $this->layout = "auth";
    $user = new Users();

    $title = "signUp";
    if (App::$kernel->request->isPost()) {
      $req_body = App::$kernel->request->getBody();
      $user->loadData($req_body);
      $user->validateData();
      if ($user->save()) {
        $id = $user->FindOne(['email' => $req_body['email']])[0]['id'];
        // var_dump($id);
        // exit;
        App::$kernel->session->sessionSet('id', $id);
        $user_data = Users::findOne(['id' => $id]);

        $user->loadData($user_data);

        // var_dump($_SESSION);
        return App::$kernel->response->redirect('/');
      }
      return  $this->render('Auth/signup', [
        'title' => $title
      ]);
    }
    return  $this->render('Auth/signup', [
      'title' => $title
    ]);
  }

  public function login()
  {
    $user = new Users();
    $title = "success";
    if (App::$kernel->request->isPost()) {

      $req_body = App::$kernel->request->getBody();
      // var_dump($req_body);
      $user->loadData($req_body);

      // $user->validateData();
      // 'password' => $req_body['password']

      $user_data = Users::findOne(
        [

          'email' => $req_body['email'],
          'password' => $req_body['password']


        ]
      );
      // var_dump($user_data);

      if ($user_data) {

        return App::$kernel->response->redirect('/');
      }
      return  $this->render('Auth/login', [
        'title' => $title
      ]);
    }
    return  $this->render('Auth/login', [
      'title' => $title
    ]);
  }
  public  function logout()
  {
    session_unset();
    App::$kernel->session->sessionUnset('id');
    App::$kernel->response->redirect('/signup');

    return true;
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
