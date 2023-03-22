<?php

namespace App\app\controller\api;

use App\kernel\App;
use App\app\modal\Post;

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
        echo json_encode(['posts' => array_reverse($data)]);
    }
    public function img()
    {

        // echo json_encode(['posts' => array_reverse(App::$kernel->request->getBody())]);
        

     $imgName= App::$kernel->request->fileUpload('selectedFile','img');
     var_dump($imgName);
      return  var_dump(App::$kernel->request->getBody());
    }
    // create post
    public  function create()
    {
        // return "/api/createPost";
            $Data = App::$kernel->request->getBody();
            $imgName= App::$kernel->request->fileUpload('img','img');
            var_dump($imgName);
            $json = file_get_contents('php://input'); // Returns data from the request body
            // var_dump($json);
            $User = new Post();
            $decodedData = json_decode($json, true);
            var_dump("decodedData");
            var_dump($decodedData);
            $decodedData['img']=$imgName;
        if (App::$kernel->request->isPost()) {
            $json = file_get_contents('php://input'); // Returns data from the request body
            // var_dump($json);
            $User = new Post();
            $decodedData = json_decode($json, true);
            var_dump($decodedData);
            $decodedData['img']=$imgName;
            $User->loadData($decodedData);

            // var_dump(  $User);
            // var_dump($User->save());
            if ($User->save()) {
                $foundedPost = $User->FindOne(['post' => $decodedData['post']]);
        return json_encode(['res' =>   $decodedData]);

            }
            $Data = App::$kernel->request->getBody();
            $User = new Post();
            $json = file_get_contents('php://input'); // Returns data from the request body
            // var_dump($json);

            $decodedData = json_decode($json, true);
            // var_dump($decodedData);
            $User->loadData($decodedData);
            if ($User->save()) {
                $foundedPost = $User->FindOne(['post' => $decodedData['post']]);
                return  json_encode(['res' => $foundedPost]);
            }
            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
}
