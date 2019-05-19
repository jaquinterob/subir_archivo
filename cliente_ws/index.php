<?php
include('librerias/lib/nusoap.php');
$cliente=new nusoap_client('http://jevax.atwebpages.com/servicio.php',false);
$num1=90;
$num2=65;
$parametros=array('num1'=>$num1,'num2'=>$num2);
$res=$cliente->call('MiFuncion',$parametros);
print_r($res);
 ?>
