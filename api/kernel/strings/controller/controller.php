<?php
$fileinfo =  '
<?php

namespace App\controller;

use App\kernel\App;
use App\modal\Users;
use App\artisan_migrate;
use App\kernel\Controller;

class ' . $name . ' extends Controller
{
    public function ' . $name . '()
    {
       $title = ' . $name . ';
       return $ this -> render (' . $name . ') 
      
    }
  
    public  function create()
    {
      return ;

    }
      public  function insert()
    {
        if (App::$kernel->request->isPost()) {
            // var_dump(App::$kernel->request->getBody());
            $DATA = App::$kernel->request->getBody();
            $USER = new Users();

            $USER->LOAD_DATA($DATA);
            // var_dump($DATA);
            $USER->Validate_Data();
            $USER->save();
         return ;
        }

      
    }
    public  function update()
    {
      return ;

    }
    public  function edit()
    {
      return ;

    }
    public  function delete()
    {
      return ;

    }
}

';
