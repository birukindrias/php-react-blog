<?php

use App\kernel\App;

class Users
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS users (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  firstname VARCHAR(50),
                  lastname VARCHAR(50),
                  email VARCHAR(50),
                  password VARCHAR(50),
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
