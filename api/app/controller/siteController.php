<?php

namespace App\app\controller;

use App\kernel\App;
use App\kernel\Controller;
use App\app\modal\Post;
use App\app\modal\Users;

class siteController extends Controller
{
    public function index()
    {
        return 'yses';
        $user = new Users();
        $post = new Post();
        $title = "success";
        App::$kernel->session->set_Flush('suc', 'Wellcome back');
        $id = App::$kernel->session->sessionGet('id');

        if ($id) {
            $user_data = Users::findOne(['id' => $id]);
            $data = $user_data[0];
            // var_dump($data);
            // $posts =$post->join('users','Posts',$id);
            $posSts = $post->join('users', 'Posts', 2);
            $posts = $post->joinTHREE('users', 'Posts', 'Likes');

            // var_dump($three);

            // $posts =$post->SelectAll();
            // var_dump($posts);

            $user->loadData($data);
            //    var_dump($user_data);
            // var_dump($user);
            App::$kernel->session->sessionSet('user', $user);

            return  $this->render('dashboard', [
                'title' => $title,
                'user' => $user,
                'posts' => $posts
            ]);
        }
        return  $this->render('home', [
            'title' => $title,
        ]);
    }

    public function profile()
    {
        $this->setLayout('main');

        $user = new Users();
        $title = "success";
        App::$kernel->session->set_Flush('suc', 'dik');
        $id = App::$kernel->session->sessionGet('id');
        if ($id) {
            $user_data = Users::findOne(['id' => $id]);
            $data = $user_data[0];
            // var_dump($data);
            $user->loadData($data);

            //    var_dump($user_data);
            // var_dump($user);

            return  $this->render('user/profile', [
                'title' => $title,
                'user' => $user,
            ]);
        }
        return  $this->render('user/profile', [
            'title' => $title,
        ]);
    }
    public function getall()
    {
        $users = new Users();
        $data =  $users->SelectAll();
        echo json_encode(['data' => $data]);
    }

    public function getposts()
    {
        $posts = new Post();
        $data =  $posts->SelectAll();
        echo json_encode(['posts' => $data]);
    }

    public function insertUser()
    {
        $title = "success";
        if (App::$kernel->request->isPost()) {
            // var_dump(App::$kernel->request->getBody());
            $DATA = App::$kernel->request->getBody();
            $USER = new Users();
            $json = file_get_contents('php://input'); // Returns data from the request body
            $team_data = json_decode($json, true);
            // $team_data = json_decode($DATA, true);
            // return  json_encode(['res' => $team_data]);
            $USER->LOAD_DATA($team_data);
            // // var_dump($DATA);
            // // $USER->Validate_Data();
            if ($USER->save()) {
                $aaa = $USER->FindOne(['email' => $team_data['email']]);

                return  json_encode(['res' => $aaa]);
            }
            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'succes']);
    }

    public  function insertPost()
    {
        $title = "success";
        if (App::$kernel->request->isPost()) {
            // var_dump(App::$kernel->request->getBody());
            $DATA = App::$kernel->request->getBody();
            $USER = new Post();
            $json = file_get_contents('php://input'); // Returns data from the request body
            $team_data = json_decode($json, true);
            // $team_data = json_decode($DATA, true);
            // return  json_encode(['res' => $team_data]);
            $USER->LOAD_DATA($team_data);
            // // var_dump($DATA);
            // // $USER->Validate_Data();
            if ($USER->save()) {

                $aaa = $USER->FindOne(['post' => $team_data['post']]);

                return  json_encode(['res' => $aaa]);
            }
            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'succes']);
    }
}
