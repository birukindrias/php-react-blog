<?php

use App\kernel\App;

class Posts
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS  posts (
                  pid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  title VARCHAR(1050),
                  post VARCHAR(1050),
                  img VARCHAR(1050),
                  user_id VARCHAR(50)
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
    public function down()
    {
        $SQL_QUERY = "DROP TABLE IF EXISTS  posts";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
}
