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
        $posts = new Post();
        $data =  $posts->Leftjoin(
            'posts',
            'likes',
            'pid',
            'post_id',
        );
        if (count((array)$data) < 1) {
            return false;
        }
        echo json_encode(['posts' => $data]);
    }
    public function userPosts()
    {
        $user = new Post();
        $json = file_get_contents('php://input'); // Returns data from the request body
        $decodedData = json_decode($json, true);
        $foundedUser = $user->FindOne(['user_id' => $decodedData['id']]);
        // var_dump($decodedData['id']);
        // var_dump( $foundedUser);
        // $data =  $user->join(
        //     'users',
        //     'posts',
        //     'uid',
        //     'user_id',
        //     $foundedUser[0]['uid']
        // );
        if (!empty($foundedUser)) {
            echo json_encode(['posts' => array_reverse($foundedUser)]);
            return;
        } else {
            echo json_encode(['posts' => false]);
            return;
        }
    }
    /**
     * uniquePost
     *
     * @return void
     */
    public function uniquePost()
    {
        $post = new Post();

        $json = file_get_contents('php://input'); // Returns data from the request body
        $decodedData = json_decode($json, true);
        $foundedpost = $post->FindOne(['pid' => $decodedData['id']]);
        $data =  $post->join(
            'users',
            'posts',
            'pid',
            'user_id',
            $foundedpost[0]['pid']
        );
        if (!empty($foundedpost)) {
            echo json_encode(['posts' => $data]);
            return;
        } else {
            echo json_encode(['posts' => false]);
        }
    }
    /**
     * img
     *
     * @return void
     */

    public function img()
    {

        // ? echo json_encode(['posts' => array_reverse(App::$kernel->request->getBody())]);
        $imgName = App::$kernel->request->fileUpload('selectedFile', 'post_images');
        return  var_dump(App::$kernel->request->getBody());
    }
    // create post
    public  function create()
    {
        $Data = App::$kernel->request->getBody();
        // var_dump($Data);

        $imgName = App::$kernel->request->fileUpload('img', 'post_images');
        $User = new Post();
        if (App::$kernel->request->isPost()) {
            $json = file_get_contents('php://input'); // Returns data from the request body
            $decodedData = json_decode($json, true);
            $User = new Post();
            $Data['img'] = $imgName;
            var_dump($Data);
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
            $Likes = new Likes();
            $Likes->loadData($Data);

            if ($Likes->save()) {
                $foundedPost = $Likes->FindOne(['post_id' => $Data['post_id']]);
                return json_encode(['res' =>  $foundedPost]);
            }
            return  json_encode(['res' => 'false']);
        }
        if (App::$kernel->request->isGet()) {
            $Likes = new Likes();
            foreach ($Likes->SelectAll() as $key => $value) {
                var_dump($value);
            }
            return json_encode(['likes' =>  $Likes->SelectAll()]);
        }


        return  json_encode(['res' => 'true']);
    }
    public  function removelike()
    {
        // return "/api/createPost";
        $Data = App::$kernel->request->getBody();
        $imgName = App::$kernel->request->fileUpload('img', 'post_images');
        $Likes = new Likes();
        if (App::$kernel->request->isPost()) {
            $Likes = new Post();
            $Data['img'] = $imgName;
            $Likes->loadData($Data);

            if ($Likes->save()) {
                $foundedPost = $Likes->FindOne(['post' => $Data['post']]);
                return json_encode(['res' =>  $foundedPost]);
            }
            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
}
