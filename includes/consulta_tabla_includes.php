<?php
require_once('../librerias/PHPExcel/Classes/PHPExcel/IOFactory.php');
date_default_timezone_set('America/Bogota');
foreach($_POST as $nombre_campo => $valor){
  $asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
  eval($asignacion);
}


if (isset($token)) {
  $PHPExcel=PHPExcel_IOFactory::load('../archivos/indicadores.xls');
  $PHPExcel->setActiveSheetIndex(0);
  $numRows=$PHPExcel->setActiveSheetIndex(0)->getHighestRow();
  echo "      <table>
  <thead>
  <tr>
  <th>".$PHPExcel->getActiveSheet()->getCell('A1')->getCalculatedValue()."</th>
  <th>".$PHPExcel->getActiveSheet()->getCell('B1')->getCalculatedValue()."</th>
  <th>".$PHPExcel->getActiveSheet()->getCell('C1')->getCalculatedValue()."</th>
  <th>".$PHPExcel->getActiveSheet()->getCell('D1')->getCalculatedValue()."</th>
  </tr>
  </thead>";
  for ($i=2;  $i<= $numRows; $i++) {
    echo "<tbody>
    <tr>
    <td>".$PHPExcel->getActiveSheet()->getCell('A'.$i)->getCalculatedValue()."</td>
    <td>".$PHPExcel->getActiveSheet()->getCell('B'.$i)->getCalculatedValue()."</td>
    <td>".$PHPExcel->getActiveSheet()->getCell('C'.$i)->getCalculatedValue()."</td>
    <td>".$PHPExcel->getActiveSheet()->getCell('D'.$i)->getCalculatedValue()."</td>
    </tr>";
  }
  echo "</tbody>
  </table>";
}



 ?>
