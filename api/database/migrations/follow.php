<?php

use App\kernel\App;

class follow
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS follow (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  firstname VARCHAR(50),
                  lastname VARCHAR(50),
                  email VARCHAR(50),
                  remember_token VARCHAR(100) DEFAULT NULL,
                  password VARCHAR(50)
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
    public function down()
    {
        $SQL_QUERY = "DROP TABLE IF EXISTS  follow";
        App::$kernel->db->pdo->exec($SQL_QUERY);    }
}
