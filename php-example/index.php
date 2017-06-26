<?php

session_start();

include("config.php");

if(isset($_GET['logout'])) {
	 session_unset();
}

if(isset($_GET['code'])) {

	$url = "https://accounts.organicity.eu/realms/organicity/protocol/openid-connect/token";
	$content_data = array(
		'grant_type' => 'authorization_code',
		'code' => $_GET['code'],
		'redirect_uri' => $redirect_uri,
		'client_id' => $client_id,
		'client_secret' => $client_secret,
	);

    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($content_data)
        )
    );

    $context = stream_context_create($opts);
    $data = file_get_contents($url . "?" . $query, false, $context);
	if(!$data) {
		echo "FAIL";
		echo "<pre>";
		var_dump($http_response_header);
		echo "</pre>";
	} else {
		$json = json_decode($data);
	    $_SESSION['token'] = $json->{'access_token'};
		header('Location: ' . $origin_uri);
		exit();
	}
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Organicity Navigation 2.0</title>
		<link href="<?=$prefix;?>bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
		<link href="<?=$prefix;?>css/navbar.css" rel="stylesheet">
		<link href="<?=$prefix;?>css/oc.css" rel="stylesheet">
		<link href="<?=$prefix;?>css/yamm3/yamm.css" rel="stylesheet">
	</head>
	<body>
        <nav class="navbar navbar-default navbar-static-top yamm" style="margin-bottom: 0" >
            <div class="navbar-header" id="navbar-header"><a class="navbar-brand" href="/"><img src="/images/oc_logo.png" class="logo"></a></div>
            <div class="navbar-collapse collapse" id="oc-nav"></div>
        </nav>
	<div id="oc-nav"></div>

		<script src="<?=$prefix;?>js/jquery-3.2.0.min.js"></script>
		<script src="<?=$prefix;?>js/common-navigation.js"></script>
		<script src="<?=$prefix;?>js/jwt-decode.min.js"></script>
    	<script src="<?=$prefix;?>bootstrap-3.3.7/js/bootstrap.min.js"></script>

		<script>
		$( document ).ready(function() {
			var token = '<?=$_SESSION['token']; ?>';
      //var token = '';
			$("#oc-nav").organicityNavigation('<?=$login_uri; ?>', '<?=$signout_uri; ?>', token);
		});
		</script>
	</body>
</html>
