<?php 

include("conexion.php");

$usu= filter_input(INPUT_POST, "usu");
$pass= filter_input(INPUT_POST, "pass");

$sql="SELECT *
FROM usuarios
WHERE usu='".$usu."';";


$res=$conexion->query($sql);
if (mysqli_num_rows($res)>0) {
	$registro = mysqli_fetch_assoc($res);
	if ($registro['pas']==$pass) {
		echo '1';
	}else{
		echo '0';
	}
	
}else{
	echo '-1';
}

?>