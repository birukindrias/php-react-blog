<?php

namespace App\kernel;

use App\kernel\App;
use PDO;

abstract class dbModal
{

    // public static function primaryKey(): string
    // {
    //     return 'id';
    // }
    abstract public function attrs(): array;
    abstract public static function table_name(): string;
    // abstract public function primary_key(): array;
    public function save()
    {
        $table_name = $this->table_name();

        $array_key = $this->attrs();
        $input_keys = array_map(fn ($key) => ":$key", $array_key);
        $SQL_QUERY = "INSERT INTO $table_name (" .  implode(',', $this->attrs()) . ") VALUES (" .  implode(',', $input_keys) . ")";
        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($this->attrs() as $key) {
            $QUERY_STMT->bindValue(":$key", $this->{$key});
        }
        $QUERY_STMT->execute();
        return true;
    }
    public function savebyId($id)
    {
        $table_name = $this->table_name();
        $array_key = $this->attrs();
        $input_keys = array_map(fn ($key) => ":$key", $array_key);
        // $SQL_QUERY = "INSERT $table_name (user_id,post) VALUES (:user_id,post)";
        $SQL_QUERY = "INSERT $table_name (" .  implode(',', $this->attrs()) . ") VALUES (" .  implode(',', $input_keys) . ")";
        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($this->attrs() as $key) {
            $QUERY_STMT->bindValue(":$key", $this->{$key});
        }
        $QUERY_STMT->execute();
        return true;
    }
    public function update($id, array $values)
    {
        $table_name = $this->table_name();
        $array_key = array_keys($values);
        $input_keys = implode(",", array_map(fn ($key) => "$key = :$key", $array_key));
        $SQL_QUERY = "UPDATE $table_name SET $input_keys WHERE uid = $id";

        // var_dump(
        //     $SQL_QUERY
        // );
        // exit;
        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($array_key as $key) {
            // var_dump($values[$key]);
            $QUERY_STMT->bindValue(":$key", $values[$key]);
        }
        $QUERY_STMT->execute();
        return true;
    }
    public function updateUser($id)
    {
        $table_name = $this->table_name();
        $array_key = $this->attrs();
        $input_keys = implode(",", array_map(fn ($key) => "$key = :$key", $array_key));
        // $update_keys = implode(",", array_map(fn ($m) => "$m = :$m", $input_keys));
        // var_dump($update_keys)
        // $SQL_QUERY = "INSERT $table_name (user_id,post) VALUES (:user_id,post)";
        $SQL_QUERY = "UPDATE $table_name SET $input_keys WHERE remember_token = $id";

        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($this->attrs() as $key) {
            $QUERY_STMT->bindValue(":$key", $this->{$key});
        }

        // var_dump(
        //     $QUERY_STMT
        // );
        $QUERY_STMT->execute();
        // exit;

        return true;
    }

    public  static function FindOne(array $thisarrayok)
    {
        // var_dump($thisarrayok);
        $table_name = static::table_name();
        $array_key = array_keys($thisarrayok);
        $input_keys = implode(' AND ', array_map(fn ($key) => "$key = :$key", $array_key));

        // $input_keys = array_map(fn ($key) => "$key = :$key", $array_key);
        $SQL_QUERY = "SELECT * FROM $table_name WHERE $input_keys ";

        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($thisarrayok as $key => $value) {
            $QUERY_STMT->bindValue(":$key", $value);
        }

        $QUERY_STMT->execute();
        // var_dump(pdo_error(App::$kernel->db->pdo));

        $retu = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return $retu;
    }

    public  static function getUser(array $thisarrayok)
    {
        // var_dump($thisarrayok);
        $table_name = static::table_name();
        $array_key = array_keys($thisarrayok);
        $input_keys = implode(' AND ', array_map(fn ($key) => "$key = :$key", $array_key));

        // $input_keys = array_map(fn ($key) => "$key = :$key", $array_key);
        $SQL_QUERY = "SELECT * FROM $table_name WHERE $input_keys";

        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($thisarrayok as $key => $value) {
            $QUERY_STMT->bindValue(":$key", $value);
        }

        $QUERY_STMT->execute();
        // var_dump(pdo_error(App::$kernel->db->pdo));

        $retu = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return $retu;
    }
    public  static function Like(array $thisarrayok)
    {
        // var_dump($thisarrayok);
        $table_name = static::table_name();
        $array_key = array_keys($thisarrayok);
        $input_keys = implode(' AND ', array_map(fn ($key) => "  $key Like :$key", $array_key));

        // $input_keys = array_map(fn ($key) => "$key = :$key", $array_key);
        $SQL_QUERY = "SELECT * FROM $table_name WHERE  $input_keys";

        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($thisarrayok as $key => $value) {
            $QUERY_STMT->bindValue(":$key", '%' . $value );
        }

        $QUERY_STMT->execute();
        // var_dump(pdo_error(App::$kernel->db->pdo));

        $retu = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return $retu;
    }
    public  static function innerJoin(array $thisarrayok)
    {
        // var_dump($thisarrayok);
        $table_name = static::table_name();
        $array_key = array_keys($thisarrayok);
        $input_keys = implode(' AND ', array_map(fn ($key) => "$key = :$key", $array_key));

        // $input_keys = array_map(fn ($key) => "$key = :$key", $array_key);
        $SQL_QUERY = "SELECT * FROM $table_name WHERE $input_keys";

        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        foreach ($thisarrayok as $key => $value) {
            $QUERY_STMT->bindValue(":$key", $value);
        }

        $QUERY_STMT->execute();
        // var_dump(pdo_error(App::$kernel->db->pdo));

        $retu = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return $retu;
    }
    public function SelectAll()
    {
        $table_name = static::table_name();
        $SQL_QUERY = "SELECT * FROM $table_name";
        $QUERY_STMT = App::$kernel->db->pdo->prepare($SQL_QUERY);
        // foreach ($this->attrs() as $key => $value) {
        //     $QUERY_STMT->bindValue(":$key", $value);
        // }
        $QUERY_STMT->execute();
        $data = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return
            array_reverse($data);
    }
    public function join($tablename1, $tablename2, $id, $id2, $idval = false)
    {
        // $qry = "SELECT emp.id,emp.FirstName, dept.dept_name FROM emp INNER JOIN dept on emp.id = dept.dept_id";
        // $sql = "SELECT * FROM $tablename1 LEFT  JOIN users on $tablename1.id = $tablename2.id AND $tablename1.id = $id";
        // $sql = "SELECT * FROM $tablename1  INNER JOIN $tablename2  ON $tablename1.id = $tablename2.user_id ";
        if ($idval) {
            $sql = "SELECT *
        FROM $tablename1
       INNER JOIN $tablename2
          ON $tablename1.$id = $tablename2.$id2 WHERE $tablename1.$id = $idval ";
        } else {
            $sql = "SELECT *
            FROM $tablename1
           INNER JOIN $tablename2
              ON $tablename1.$id = $tablename2.$id2";
        }
        // var_dump($sql);
        // $sql = "SELECT * FROM $tablename1  FULL JOIN $tablename2 ON $tablename1.id = $tablename2.id WHERE $tablename1.id = $id";
        //  SELECT * FROM users LEFT JOIN users on users.id = posts.id AND users.id = 357;
        $QUERY_STMT = App::$kernel->db->pdo->prepare($sql);
        // var_dump($QUERY_STMT);
        $QUERY_STMT->execute();
        $data = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        // var_dump($data);
        return        array_reverse($data);
    }
    public function Rightjoin($tablename1, $tablename2, $id, $id2, $idval = false)
    {
        // $qry = "SELECT emp.id,emp.FirstName, dept.dept_name FROM emp INNER JOIN dept on emp.id = dept.dept_id";
        // $sql = "SELECT * FROM $tablename1 LEFT  JOIN users on $tablename1.id = $tablename2.id AND $tablename1.id = $id";
        // $sql = "SELECT * FROM $tablename1  INNER JOIN $tablename2  ON $tablename1.id = $tablename2.user_id ";
        if ($idval) {
            $sql = "SELECT *
        FROM $tablename1
        RIGHT JOIN $tablename2
          ON $tablename1.$id = $tablename2.$id2 WHERE $tablename1.$id = $idval ";
        } else {
            $sql = "SELECT *
            FROM $tablename1
            RIGHT JOIN $tablename2
              ON $tablename1.$id = $tablename2.$id2";
        }
        // var_dump($sql);
        // $sql = "SELECT * FROM $tablename1  FULL JOIN $tablename2 ON $tablename1.id = $tablename2.id WHERE $tablename1.id = $id";
        //  SELECT * FROM users LEFT JOIN users on users.id = posts.id AND users.id = 357;
        $QUERY_STMT = App::$kernel->db->pdo->prepare($sql);
        // var_dump($QUERY_STMT);
        $QUERY_STMT->execute();
        $data = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        // var_dump($data);
        return        array_reverse($data);
    }
    /**
     * Leftjoin
     *
     * @param mixed tablename1
     * @param mixed tablename2
     * @param mixed id
     * @param mixed id2
     * @param mixed idval
     *
     * @return void
     */
    public function Leftjoin($tablename1, $tablename2, $id, $id2, $idval = false)
    {
        // $qry = "SELECT emp.id,emp.FirstName, dept.dept_name FROM emp INNER JOIN dept on emp.id = dept.dept_id";
        // $sql = "SELECT * FROM $tablename1 LEFT  JOIN users on $tablename1.id = $tablename2.id AND $tablename1.id = $id";
        // $sql = "SELECT * FROM $tablename1  INNER JOIN $tablename2  ON $tablename1.id = $tablename2.user_id ";
        if ($idval) {
            $sql = "SELECT *
        FROM $tablename1
        LEFT JOIN $tablename2
          ON $tablename1.$id = $tablename2.$id2 WHERE $tablename1.$id = $idval ";
        } else {
            $sql = "SELECT *
            FROM $tablename1
            LEFT JOIN $tablename2
              ON $tablename1.$id = $tablename2.$id2";
        }
        // $sql = "SELECT * FROM $tablename1  FULL JOIN $tablename2 ON $tablename1.id = $tablename2.id WHERE $tablename1.id = $id";
        //  SELECT * FROM users LEFT JOIN users on users.id = posts.id AND users.id = 357;
        $QUERY_STMT = App::$kernel->db->pdo->prepare($sql);
        // var_dump($QUERY_STMT);
        $QUERY_STMT->execute();
        $data = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        return array_reverse($data);
    }
    /**
     * joinTHREE
     *
     * @param mixed tablename1
     * @param mixed tablename2
     * @param mixed tablename3
     *
     * @return void
     */
    public function joinTHREE($tablename1, $tablename2, $tablename3)

    {
        // $qry = "SELECT emp.id,emp.FirstName, dept.dept_name FROM emp INNER JOIN dept on emp.id = dept.dept_id";
        // $sql = "SELECT * FROM $tablename1 LEFT  JOIN users on $tablename1.id = $tablename2.id AND $tablename1.id = $id";
        $sqDl = "SELECT * 
        FROM $tablename1  
        JOIN $tablename2  
        
        ON $tablename1.id = $tablename2.user_id 
        JOIN $tablename3 
        ON $tablename3.posts_id = $tablename1.id";
        $sql = "
         SELECT * FROM $tablename2 LEFT JOIN $tablename1 ON $tablename2.user_id = $tablename1.id LEFT JOIN $tablename3 ON $tablename3.posts_id = $tablename2.id;
";
        //         $SQL = "
        //          SELECT * FROM Posts RIGHT JOIN users ON Posts.user_id = users.id LEFT JOIN Likes ON Likes.posts_id = Posts.id;
        // ";
        // $sql = "SELECT * FROM $tablename1  FULL JOIN $tablename2 ON $tablename1.id = $tablename2.id WHERE $tablename1.id = $id";
        //  SELECT * FROM users LEFT JOIN users on users.id = posts.id AND users.id = 357;
        // var_dump($sql);

        $QUERY_STMT = App::$kernel->db->pdo->prepare($sql);
        // var_dump($QUERY_STMT);
        $QUERY_STMT->execute();
        $data = $QUERY_STMT->fetchAll(PDO::FETCH_ASSOC);
        // echo "<pre>";
        // var_dump($data);
        return array_reverse($data);
    }
}
