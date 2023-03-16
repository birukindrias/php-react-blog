<?php
$fileinfo =  '
<?php
namespace App\modal;

use App\kernel\dbModal;
use App\kernel\Modal;

class ' . ucfirst($name) . ' extends Modal 
{
  

    public function table_name(): string
    {
        return ' . $name . 's;
    }
    public function rules(): array
    {
        return [
          
        ];
    }
    public function attrs(): array
    {
        return [
           

        ];
    }
      
}
';
$viewInfo =
    '<title>
   <?php echo $title ?>
</title>
<?php echo $th->code ?>
';
