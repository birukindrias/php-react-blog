<?php
$target = __DIR__.'/../storage/files/img/';
$link = 'images';
symlink($target, $link);
$ioa = scandir(__DIR__.'/../storage/files/img/');
var_dump(__DIR__.'/../storage/files');
var_dump($ioa);
echo readlink($link);
?>
