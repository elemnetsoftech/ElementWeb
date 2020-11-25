<?php
/*
Author: Javed Ur Rehman
Website: http://www.allphptricks.com/
*/
 
require('db.php');
include("auth.php"); //include auth.php file on all secure pages ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Element-Secure</title>
<link rel="stylesheet" href="css/dsh.css" />
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap" rel="stylesheet">
<link rel="icon"  type="image/png" href="favicon.png">
</head>
<body>
<div class="form">
<p>You are secure now</p>
<p>Welcome Back!</p>
<button onclick="window.location.href='home.html'">Home</button>
<button onclick="window.location.href='logout.php'" class="butt">Logout</button>


</div>
</body>
</html>
   