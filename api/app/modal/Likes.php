<?php

namespace App\app\modal;

use App\kernel\dbModal;
use App\kernel\Modal;

class Likes extends Modal
{
    public string $post_id = '';
    public string $litem= '';
    public string $user_id = '';


    public static function table_name(): string
    {
        return 'likes';
    }
    public function rules(): array
    {
        return [
            'litem' => [self::RULE_REQUIRED],
            'post_id' => [self::RULE_REQUIRED],
            'user_id' => [self::RULE_REQUIRED],

        ];
    }
    public function attrs(): array
    {
        return [
            'litem',
            'post_id',
            'user_id',
        ];
    }
}
