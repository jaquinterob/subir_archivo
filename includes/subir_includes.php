<?php
  $nombre_temporal=$_FILES['archivo']['tmp_name'];
  $nombre=$_FILES['archivo']['name'];
  echo $nombre_temporal.'<br><br>';
  echo $nombre;
  move_uploaded_file($nombre_temporal,'../archivos/'.$nombre);

?>
