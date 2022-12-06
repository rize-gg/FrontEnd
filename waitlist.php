<?php
//$action = $_GET["action"] ?? null;
$email = $_GET["email"] ?? null;
if($email) {
    $current = file_get_contents('waitList.txt');
    $current .= $email." - ".date("Y-m-d H:i:s")."\n";
    file_put_contents('waitList.txt', $current);
}
?>
