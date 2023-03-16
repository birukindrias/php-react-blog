<?php
use App\kernel\App;

class Likes
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS  likes (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  liked VARCHAR(50)
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
    public function down()
    {
        $SQL_QUERY = "DROP TABLE IF EXISTS  Likes
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
}
