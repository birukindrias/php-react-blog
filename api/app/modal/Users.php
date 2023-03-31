<?php

namespace App\app\modal;

use App\kernel\dbModal;
use App\kernel\Modal;

class Users extends Modal
{
    public string $username = '';
    public string $email = '';
    public string $password = '';
    public string $cpass = '';
    public string $pimg = '';
    public string $bio = '';

    public static function primaryKey(): string
    {
        return 'uid';
    }
    public static function table_name(): string
    {
        return 'users';
    }
    public function rules(): array
    {
        return [
            'username' => [self::RULE_REQUIRED],
            'email' => [self::RULE_REQUIRED, [self::RULE_UNIQE], [self::RULE_EMAIL]],
            'password' => [self::RULE_PASS, [self::RULE_MAX, 'max' => 8]],
            // 'cpass' => [self::RULE_REQUIRED, [self::RULE_PASS, $this->pass = $this->password]],

        ];
    }
    public function login_a($arra)
    {
        // var_dump($this->FindOne($arra));
    }
    public function attrs(): array
    {
        return [
            'username',
            'email',
            'password',
            'pimg',
            'bio',
            // 'cpass'

        ];
    }
}
// &lt;VirtualHost *:80&gt;     

// &lt;/VirtualHost&gt;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/birukindrias/mvc.git  
// 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
// git push -u origin main        https://github.com/birukindrias/mvc.git  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    
// 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


// git remote add origin https://github.com/birukindrias/mvc.git
// git branch -M main
// git push -u origin main



// git init
// git add .
// git commit -m "Initial commit"
// git  add origin https://github.com/birukindrias/mvc.git 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
// git push origin master