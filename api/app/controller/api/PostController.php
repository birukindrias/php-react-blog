<?php

namespace App\app\controller\api;

use App\kernel\App;
use App\app\modal\Post;
use App\app\modal\Users;

class PostController
{

    // posts
    public function index()
    {
        $posts = new Post();

        $data =  $posts->SelectAll();

        // return    var_dump($data );
        $posts = new Post();
        $data =  $posts->SelectAll();
        // var_dump(array_reverse($data));
        // var_dump($data);
        echo json_encode(['posts' => $data]);
    }
    public function userPosts()
    {
        $user = new Users();

        $json = file_get_contents('php://input'); // Returns data from the request body
        $decodedData = json_decode($json, true);
        $foundedUser = $user->FindOne(['remember_token' => $decodedData['remember_token']]);

        // var_dump($foundedUser);

        $data =  $user->join(
            'users',
            'posts',
            'id',
            'user_id',
            $foundedUser[0]['id']
        );
        if (empty($data)) {
            echo json_encode(['posts' => null]);
            return;
        }
        echo json_encode(['posts' => $data]);


        // var_dump($data);
        // exit;
        // $posts = new Post();
        // $data =  $posts->SelectAll();
        // var_dump(array_reverse($data));
        // var_dump($data);
    }
    public function img()
    {

        // ? echo json_encode(['posts' => array_reverse(App::$kernel->request->getBody())]);
        $imgName = App::$kernel->request->fileUpload('selectedFile', 'post_images');
        return  var_dump(App::$kernel->request->getBody());
    }
    // create post
    public  function create()
    {
        // return "/api/createPost";
        $Data = App::$kernel->request->getBody();
        $imgName = App::$kernel->request->fileUpload('img', 'post_images');
        $User = new Post();
        if (App::$kernel->request->isPost()) {
            $User = new Post();
            $Data['img'] = $imgName;
            $User->loadData($Data);

            if ($User->save()) {
                $foundedPost = $User->FindOne(['post' => $Data['post']]);
                return json_encode(['res' =>  $foundedPost]);
            }
            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
}
