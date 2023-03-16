<?php

use App\kernel\App;

class users01
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS users (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  firstname VARCHAR(50),
                  lastname VARCHAR(50),
                  email VARCHAR(50),
                  password VARCHAR(50)
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
}
