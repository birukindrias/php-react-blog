<?php

namespace App\kernel;

use PDO;

class DB
{
  public \PDO $pdo;
  private $the_migrations_array = [];
  public function __construct($db_config)
  {

    $user = $db_config['USER'];
    $pass = $db_config['PASS'];
    $dns = $db_config['DNS'];

    $this->pdo = new PDO($dns, $user, $pass);
    $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($this->pdo) {
      // echo "fuck";
    }
  }
  public function apply_migrations($upd)
  {
    $this->create_table_migrations();
    $migrations_files = scandir(App::$HOME_PATH . "/database/migrations/");
    $NEW_MIGRATIONS = array_diff($migrations_files, $this->existing_migrations());
    if ($upd == 'down') {
      foreach ($migrations_files  as $migration_name) {
      if ($migration_name == '.' || $migration_name == '..') {
        continue;
      }
   
      require_once App::$HOME_PATH . "/database/migrations/$migration_name";
      $CLASS_NAMES = pathinfo($migration_name, PATHINFO_FILENAME);
      $CLASS = new $CLASS_NAMES;

      $CLASS->down();
   
        }
        $SQL_QUERY = "DROP TABLE IF EXISTS  migrations";
        App::$kernel->db->pdo->exec($SQL_QUERY);
        return true;
    }
    foreach ($NEW_MIGRATIONS as $migration_name) {
      if ($migration_name == '.' || $migration_name == '..') {
        continue;
      }
      require_once App::$HOME_PATH . "/database/migrations/$migration_name";
      $CLASS_NAMES = pathinfo($migration_name, PATHINFO_FILENAME);
      $CLASS = new $CLASS_NAMES;
      $CLASS->$upd();
      $this->the_migrations_array[] = $migration_name;
    }
    if (!empty($this->the_migrations_array)) {
      $this->save_migrations($this->the_migrations_array);
      // var_dump($this->the_migrations_array);

      echo "
      ****************
      *********
      ****

      MIGRATIONS APPLIED SUCCESSFULLY! 
       
      ****
      *********
      ****************\n" . PHP_EOL;
    } else {
      echo "
      ****************
      *********
      ****
      
      NOTHING TO MIGRATE!
       
      ****
      *********
      ****************\n" . PHP_EOL;
    }
  }
  public function create_table_migrations()
  {
    $SQL_QUERY = "CREATE TABLE IF NOT EXISTS migrations (
                  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                  migration_name VARCHAR(50)
       )
       ENGINE = INNODB;";
    $this->pdo->exec($SQL_QUERY);
  }
  public function existing_migrations()
  {
    $SQL_QUERY = "SELECT migration_name FROM migrations";
    $PDO_STMT = $this->pdo->prepare($SQL_QUERY);
    $PDO_STMT->execute();
    return $PDO_STMT->fetchAll(\PDO::FETCH_COLUMN);
  }
  public function save_migrations($migrations)
  {
    // $the_migrations_name = implode(',',  array_map(fn ($the_migration) => "':$the_migration'", $the_migrations));

    // //  implode(',', $input_keys) . ") VALUES (" .  $input_keys) 
    // $SQL_QUERY = "INSERT INTO migrations(migration_name)  VALUES($the_migrations_name)";
    // var_dump($SQL_QUERY);
    // $Stmt = $this->pdo->prepare($SQL_QUERY);
    // $str = implode(",", array_map(fn ($m) => "('$m')", $migrations));
    // $statement = $this->pdo->prepare("INSERT INTO migrations (migration)
    //         VALUES $str");
    // $statement->execute();
    // var_dump($Stmt);
    // $this->pdo->exec($SQL_QUERY);
    $str = implode(",", array_map(fn ($m) => "('$m')", $migrations));
    $statement = $this->pdo->prepare("INSERT INTO migrations (migration_name)
            VALUES $str");
    $statement->execute();
  }
}
