<?php

namespace App\kernel;

use App\kernel\App;
use PDO;

abstract class Modal extends dbModal
{
    public const RULE_EMAIL = 'email';
    public const RULE_REQUIRED = 'required';
    public const RULE_UNIQE = 'unique';
    public const RULE_MAX = 'max';
    public const RULE_PASS = 'password';
    public array $errors = [];
    public abstract function rules(): array;
    public function loadData(array $DATA)
    {
        foreach ($DATA as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }

    public function validateData()
    {
        foreach ($this->rules() as $key => $rules) {
            $value = $this->{$key};
            foreach ($rules as $rule) {
                $rule_name = $rule;

                if (!is_string($rule)) {
                    $rule_name = $rule[0];
                }
                if ($rule_name == self::RULE_REQUIRED and !$value) {
                    $this->ADD_ERROR($key, self::RULE_REQUIRED);
                }
                if ($rule_name == self::RULE_EMAIL and !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $this->ADD_ERROR($key, self::RULE_EMAIL);
                }
                if ($rule_name == self::RULE_PASS and strlen($value) <  8) {
                    $this->ADD_ERROR($key, self::RULE_PASS);
                }
            }
        }
    }

    public function errorMessages()
    {
        return [
            self::RULE_REQUIRED => 'This field is required',
            self::RULE_EMAIL => 'This field must be a valid email address',
            self::RULE_PASS => 'Minimum length of this field must be 8',
            self::RULE_MAX => 'Maximum length of this field must be {max}',
            // self::RULE_MATCH => 'This field must match {match}',
            // self::RULE_UNIQUE => 'This {attr} already exists'
        ];
    }

    public function ADD_ERROR($key, $rule_name)
    {
        echo $key . ' ' . $this->errorMessages()[$rule_name];
    }
}
