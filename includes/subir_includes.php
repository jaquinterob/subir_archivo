<?php
$nombre_temporal=$_FILES['archivo']['tmp_name'];
$nombre='indicadores.xls';
move_uploaded_file($nombre_temporal,'../archivos/'.$nombre);
?>
