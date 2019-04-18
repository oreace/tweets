<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://stream.twitter.com/1.1/statuses/sample.json");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$headers = [
    'Authorization:OAuth oauth_consumer_key="H0rOip9Gc5lWfBkwsbAHikHfS",oauth_token="3424025068-CrqtCfBZW2nO7qJf906Kw63I0BLEymOxBTIWWqs",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1555577852",oauth_nonce="dw16FG2zlN4",oauth_version="1.0",oauth_signature="56Dn%2F7QLBXm8dBQMHtVodrKknHE%3D"',
    'Content-Type: application/json',
    'X-Rate-Limit-Limit: Yes'
];
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$trx = curl_exec ($ch);
curl_close ($ch);
if ($trx){
    print_r($trx);
}else{
    echo "error";
}
?>
