<?php $host="fdb13.awardspace.net";
$user="2111145_prueba";
 $pass="Matrimonio@eterno1";
  $db="2111145_prueba";
$connect= new mysqli($host,$user,$pass,$db) or die ("error" .
mysqli_errno($connect)); if (!mysqli_set_charset($connect, "utf8")) {
printf("Error cargando el conjunto de caracteres utf8: %s\n",
mysqli_error($connect)); exit(); } ?>
