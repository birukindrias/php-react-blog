<?php

use App\kernel\App;

class Users
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS users (
                  uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  username VARCHAR(50),
                  email VARCHAR(50),
                  password VARCHAR(50),
                  pimg VARCHAR(250),
                  bio VARCHAR(250),
                  remember_token VARCHAR(100) DEFAULT NULL
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
    public function down()
    {
        $SQL_QUERY = "DROP TABLE IF EXISTS  users";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
}
