<?php

$ip = $_POST['ip'];

$ch = curl_init('http://ipwhois.app/json/'.$ip);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response
$ipwhois_result = json_decode($json, true);

// Country code output, field "country_code"
if(filter_var($ipwhois_result, FILTER_VALIDATE_IP)){

    echo 'ingrese una ip valida';
}

else{

	print_r($ipwhois_result);
}


?>