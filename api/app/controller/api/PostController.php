<?php

namespace App\app\controller\api;

use App\app\modal\Likes;
use App\kernel\App;
use App\app\modal\Post;
use App\app\modal\Users;

class PostController
{

    // posts
    public function index()
    {


        // return    var_dump($data );
        $posts = new Post();
        $data =  $posts->Leftjoin(
            'posts',
            'likes',
            'id',
            'post_id',
        );
        // var_dump(array_reverse($data));
        // var_dump("$data");
        // var_dump($data);
        echo json_encode(['posts' => $data]);
    }
    public function userPosts()
    {
        $user = new Users();

        $json = file_get_contents('php://input'); // Returns data from the request body
        $decodedData = json_decode($json, true);
        echo "<pre>";
        var_dump($decodedData);
        $foundedUser = $user->FindOne(['id' => $decodedData['id']]);
        var_dump($foundedUser);
        var_dump($foundedUser[0]['id']);

        // var_dump($foundedUser);
        // var_dump(
        //     $foundedUser[0]['id']
        // );

        $data =  $user->join(
            'users',
            'posts',
            'id',
            'user_id',
            $foundedUser[0]['id']
        );
        // var_dump($data);
        if (!empty($data)) {
            echo json_encode(['posts' => $data]);
            return;
        } else {
            echo json_encode(['posts' => false]);
        }


        // var_dump($data);
        // exit;
        // $posts = new Post();
        // $data =  $posts->SelectAll();
        // var_dump(array_reverse($data));
        // var_dump($data);
    }
    public function uniquePost()
    {
        $post = new Post();

        $json = file_get_contents('php://input'); // Returns data from the request body
        $decodedData = json_decode($json, true);
        $foundedpost = $post->FindOne(['id' => $decodedData['id']]);
        $data =  $post->join(
            'users',
            'posts',
            'id',
            'user_id',
            $foundedpost[0]['id']
        );
        // var_dump($foundedpost);
        // var_dump(
        //     $foundedpost[0]['id']
        // );


        // var_dump($data);

        if (!empty($foundedpost)) {
            echo json_encode(['posts' => $data]);
            return;
        } else {
            echo json_encode(['posts' => false]);
        }


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
    public  function likePost()
    {
        // return "/api/createPost";

        $json = file_get_contents('php://input'); // Returns data from the request body
        $Data = json_decode($json, true);
        $User = new Likes();
        if (App::$kernel->request->isPost()) {
            $User = new Likes();
            $User->loadData($Data);

            if ($User->save()) {
                $foundedPost = $User->FindOne(['post_id' => $Data['post_id']]);
                return json_encode(['res' =>  $foundedPost]);
            }
            return  json_encode(['res' => 'false']);
        }
        if (App::$kernel->request->isGet()) {
            $User = new Likes();
            return json_encode(['likes' =>  $User->SelectAll()]);
        }


        return  json_encode(['res' => 'true']);
    }
    public  function removelike()
    {
        // return "/api/createPost";
        $Data = App::$kernel->request->getBody();
        $imgName = App::$kernel->request->fileUpload('img', 'post_images');
        $User = new Likes();
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
