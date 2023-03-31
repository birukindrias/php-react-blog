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
    public function rand_chars()
    {
        $randomNumber = rand();
        return $randomNumber;
    }
    public function getUser()
    {
        $json = file_get_contents('php://input'); // Returns data from the request body
        $token = json_decode($json, true);

        $user = new Users();
        $foundedUser = $user->FindOne(['remember_token' => $token['token']]);
        // var_dump($userData);
        // var_dump($token);
        return  json_encode(['data' => ['user' =>
        [
            'id' =>  $foundedUser[0]['uid'],
            'username' => $foundedUser[0]['username'],
            'bio' => $foundedUser[0]['bio'], 'password' => $foundedUser[0]['password'], 'email' => $foundedUser[0]['email'], 'img' => $foundedUser[0]['img']
        ], 'token' => $token]]);
        // echo json_encode(['user'=>$userData], true);
    }
    public function getOtherUser()
    {
        $json = file_get_contents('php://input'); // Returns data from the request body
        $token = json_decode($json, true);

        $user = new Users();
        $foundedUser = $user->FindOne(['uid' => $token['id']]);
        // var_dump($userData);
        // var_dump($token);
        return  json_encode(['data' => ['user' =>
        [
            'id' =>  $foundedUser[0]['uid'],
            'username' => $foundedUser[0]['username'],
            'bio' => $foundedUser[0]['bio'], 'password' => $foundedUser[0]['password'], 'email' => $foundedUser[0]['email'], 'img' => $foundedUser[0]['img']
        ], 'token' => $token]]);
        // echo json_encode(['user'=>$userData], true);
    }
    public function search()
    {
        $json = file_get_contents('php://input'); // Returns data from the request body
        $token = json_decode($json, true);

        $user = new Users();
        $foundedUser = $user->Like(['username' => $token['searchuser']]);
        // var_dump($userData);
        // var_dump($token);
        if (!empty($foundedUser)) {
            return  json_encode(['data' => [
                'users' =>
                $foundedUser
            ]]);
        }
        return json_encode(['data' => [
            'users' =>
            null
        ]]);

        // echo json_encode(['user'=>$userData], true);
    }
    public function create()
    {
        // echo  json_encode(['res' => 'this user already exist!']);
        // return true;
        $TOKEN = $this->rand_chars();
        if (App::$kernel->request->isPost()) {

            $User = new Users();
            $json = file_get_contents('php://input'); // Returns data from the request body
            $decodedData = json_decode($json, true);
            $imgName = App::$kernel->request->fileUpload('profile', 'profile');
            $decodedData['pimg'] = $imgName;
            $User->loadData($decodedData);

            $foundedUser = $User->FindOne(['email' => $decodedData['email']]);
            if (!$foundedUser) {

                if ($User->save()) {
                    # code...
                    // var_dump(    $decodedData);
                    $foundedUser = $User->FindOne(['email' => $decodedData['email']]);
                    $User->update($foundedUser[0]['uid'], ['remember_token' => $TOKEN]);

                    // return  json_encode(['res' => $foundedUser[0]['password']]);
                    return  json_encode(['data' => ['user' =>
                    [
                        'id' =>  $foundedUser[0]['uid'],
                        'username' => $foundedUser[0]['username'],
                        'password' => $foundedUser[0]['password'],
                        'bio' => $foundedUser[0]['bio'],
                        'email' => $foundedUser[0]['email']
                    ], 'token' => $TOKEN]]);
                    // return  json_encode(['data' => [$foundedUser, 'token' => $s]]);

                }
            } else {
                return  json_encode(['res' => 'this user already exist!']);
            }

            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
    public function update()
    {
        // echo  json_encode(['res' => 'this user already exist!']);
        // return true;
        $TOKEN = $this->rand_chars();
        if (App::$kernel->request->isPost()) {

            $User = new Users();
            $decodedData = App::$kernel->request->getBody();

            $imgName = App::$kernel->request->fileUpload('img', 'profile');

            $decodedData['img'] = $imgName;
            $foundedUser = $User->FindOne(['remember_token' => $decodedData['remember_token']]);
            if ($imgName) {
                $decodedData['img'] = $imgName;
            } else {
                $decodedData['img'] = $foundedUser[0]['img'];
            }
            // var_dump($decodedData['img']);

            $User->loadData($decodedData);

            if ($foundedUser) {
                $User->updateUser($foundedUser[0]['remember_token']);
                $foundedUser = $User->FindOne(['remember_token' => $decodedData['remember_token']]);
                // var_dump($foundedUser);

                return  json_encode(['data' => ['user' =>
                [
                    'id' =>  $foundedUser[0]['uid'],
                    'username' => $foundedUser[0]['username'],
                    'password' => $foundedUser[0]['password'],
                    'email' => $foundedUser[0]['email'],
                    'bio' => $foundedUser[0]['bio'],

                    'img' => $foundedUser[0]['img']
                ], 'token' => $decodedData['remember_token']]]);
                return  json_encode(['res' => 'profile updated!']);
            } else {
                return  json_encode(['res' => 'this user already exist!']);
            }

            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
    public function login()
    {
        // echo  json_encode(['res' => 'this user already exist!']);
        // return true;
        $TOKEN = $this->rand_chars();
        if (App::$kernel->request->isPost()) {
            $User = new Users();
            $json = file_get_contents('php://input'); // Returns data from the request body
            $decodedData = json_decode($json, true);
            $User->loadData($decodedData);
            $foundedUser = $User->FindOne(['email' => $decodedData['email'], 'password' => $decodedData['password']]);
            if ($foundedUser) {

                $foundedUser = $User->FindOne(['email' => $decodedData['email']]);
                $User->update($foundedUser[0]['uid'], ['remember_token' => $TOKEN]);

                // return  json_encode(['res' => $foundedUser[0]['password']]);
                return  json_encode(['data' => ['user' =>
                [
                    'id' =>  $foundedUser[0]['uid'],
                    'bio' => $foundedUser[0]['bio'],
                    'firstname' => $foundedUser[0]['firstname'],
                    'password' => $foundedUser[0]['password'], 'email' => $foundedUser[0]['email'], 'lastname' => $foundedUser[0]['lastname']
                ], 'token' => $TOKEN]]);
                // return  json_encode(['data' => [$foundedUser, 'token' => $s]]);
            } else {

                echo json_encode(['error' => 'this user does not exist!']);
                return   false;
            }

            return  json_encode(['res' => 'false']);
        }


        return  json_encode(['res' => 'true']);
    }
}
