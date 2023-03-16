<?php

namespace App\app\modal;

use App\kernel\dbModal;
use App\kernel\Modal;

class Likes extends Modal
{
    public string $likes = '';
    public string $posts_id = '';
    public string $user_id = '';

    public static function table_name(): string
    {
        return 'likes';
    }
    public function rules(): array
    {
        return [
            'likes' => [self::RULE_REQUIRED],
            'posts_id' => [self::RULE_REQUIRED],
            'user_id' => [self::RULE_REQUIRED],
            // 'lastname' => [self::RULE_REQUIRED],
            // 'email' => [self::RULE_REQUIRED, [self::RULE_UNIQE], [self::RULE_EMAIL]],
            // 'password' => [self::RULE_PASS, [self::RULE_MAX, 'max' => 8]],
            // 'cpass' => [self::RULE_REQUIRED, [self::RULE_PASS, 'pass' => 'Password']],

        ];
    }
    public function login_a($arra)
    {
        var_dump($this->FindOne($arra));
    }
    public function attrs(): array
    {
        return [
            'likes', 'posts_id', 'user_id'
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