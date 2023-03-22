<?php

namespace App\app\controller\api;

use App\kernel\App;
use App\app\modal\Users;

class UserController
{
    public function index()
    {
        $Users = new Users();
        $data =  $Users->SelectAll();
        echo json_encode(['data' => $data]);
    }

    // posts
public
    function rand_chars()
    {
        $randomNumber = rand();
        return
        $randomNumber;
    } 
    public function create()
    {
        // echo  json_encode(['res' => 'this user already exist!']);
        // return true;
        $TOKEN = $this->rand_chars();
        if (App::$kernel->request->isPost()) {
            $Data = App::$kernel->request->getBody();
            $User = new Users();
            $json = file_get_contents('php://input'); // Returns data from the request body
            $decodedData = json_decode($json, true);
            $User->loadData($decodedData);
            $foundedUser = $User->FindOne(['email' => $decodedData['email']]);
            if (!$foundedUser) {
                if ($User->save()) {
                    # code...
                    // var_dump(    $decodedData);
                    $foundedUser = $User->FindOne(['email' => $decodedData['email']]);
                    // return  json_encode(['res' => $foundedUser[0]['password']]);
                    return  json_encode(['data' => ['user'=>
                    ['id' =>  $foundedUser[0]['id'],
                    'firstname' => $foundedUser[0]['firstname']
                ,'password' => $foundedUser[0]['password']
                ,'email' => $foundedUser[0]['email']
                
            ,'lastname' => $foundedUser[0]['lastname']],'token'=> $TOKEN]]);
                    // return  json_encode(['data' => [$foundedUser, 'token' => $s]]);

                }
            }else{
                return  json_encode(['res' => 'this user already exist!']);

            }

            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
}
