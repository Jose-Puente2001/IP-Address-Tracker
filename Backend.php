<?php

$ip = $_POST['ip'];
$ch = curl_init('http://ipwhois.app/json/'.$ip);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($ch);
curl_close($ch);
echo $json;



?>
