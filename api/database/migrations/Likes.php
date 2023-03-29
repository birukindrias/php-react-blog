<?php
use App\kernel\App;

class Likes
{
    public function up()
    {
        $SQL_QUERY = "CREATE TABLE IF NOT EXISTS  likes (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  `litem` VARCHAR(50),
                  `post_id` VARCHAR(50),
                  `user_id` VARCHAR(50)
       )
       ENGINE = INNODB;";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
    public function down()
    {
        $SQL_QUERY = "DROP TABLE IF EXISTS  likes";
        App::$kernel->db->pdo->exec($SQL_QUERY);
    }
}
