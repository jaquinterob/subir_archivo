<?php
# @Date:   2018-08-26T13:17:22-05:00
# @Last modified time: 2018-10-10T19:46:31-05:00



date_default_timezone_set('America/Bogota');
foreach($_POST as $nombre_campo => $valor){
	$asignacion = "\$" . $nombre_campo . "='" . $valor . "';";
	eval($asignacion);
}

if (isset($prueba_json)) {
	foreach($prueba_json as $valor) {
		foreach($valor as $clave2 => $valor2) {
			echo "$clave2 => $valor2\n";
		}
	}
		// $prueba_json = json_decode($prueba_json);
	echo 'si existe la variable prueba_json y su valor es: '.$prueba_json;
}

// if (isset($token)) {
// 		$sql="INSERT INTO `datos_personales`(`nombre`, `apellido`, `correo`, `celular`, `fecha_creacion`)
// 		 VALUES ('".$nombre."','".$apellido."','".$correo."','".$celular."',now());";
// 	if ($connect->query($sql)) {
// 		echo '1|se guarda correctamente en la base de datos';
// 	}else{
// 		echo '0|No se puedo guardar en la base de datos';
// 	}
// }
//
// if (isset($token2)) {
// 	$sql="SELECT * FROM `datos_personales`;";
//
// 	$rs=$connect->query($sql);
//
// 	echo '   <thead>
//           <tr>
//               <th>Nombre</th>
// 							<th>apellido</th>
//               <th>Corrreo</th>
// 							<th>Celular</th>
//               <th>Fecha y hora de creación</th>
//           </tr>
//         </thead>';
//
// 	if (mysqli_num_rows($rs)>0) {
//
//
// 		while($reg=mysqli_fetch_assoc($rs)){
// 			echo '<tbody>
// 		          <tr>
// 		            <td>'.$reg['nombre'].'</td>
// 								<td>'.$reg['apellido'].'</td>
// 		            <td>'.$reg['correo'].'</td>
// 								<td>'.$reg['celular'].'</td>
// 		            <td>'.$reg['fecha_creacion'].'</td>
// 		          </tr>
// 		        </tbody>
//       ';
// 		}
//
// 	}
//
//
// }
//
// $connect->close();
?>
