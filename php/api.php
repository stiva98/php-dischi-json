<?php
header('Access-Control-Allow-Origin: *');

$string = file_get_contents ('database.json');
// var_dump($string);

$discs = json_decode($string, true);
// var_dump($discs);

header('Content-Type: application/json');
echo $string;