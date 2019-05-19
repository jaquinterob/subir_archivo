<?php
foreach($_POST as $nombre_campo => $valor){
  $asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
  eval($asignacion);
}


if (isset($guardar_dash)) {
  $fi=fopen("datos.json",'w+') or die('problemas al crear archivo');
  if (fwrite($fi,$dash_panel)) {
    echo 'ok';
  } else {
    echo 'no se pudo';
  }
  fclose($fi);
}

if (isset($mostrar_dash)) {
  $dash_panel = file_get_contents("datos.json");
  echo $dash_panel;
}


?>
