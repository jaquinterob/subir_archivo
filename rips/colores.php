<?php
include('config/conexion.php');
$color = $_GET['q'];
$sql="SELECT DISTINCT(nombres),id FROM rips.profesionales
WHERE CONCAT(id,' - ',nombres) LIKE '%$color%';";
$resultado = $connect->query($sql);
$datos = array();
while ($row=$resultado->fetch_assoc()){
  $datos[] = $row['id'].' - '.$row['nombres'];
}
echo json_encode($datos);
$connect->close();
?>
