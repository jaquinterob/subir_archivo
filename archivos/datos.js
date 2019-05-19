var jq = jQuery.noConflict();
jq(document).ready(function() {
  manipulacion();
});

function manipulacion(){
  var dash_panel = new Object();
  dash_panel.objetivo = 09;
  dash_panel.v7_8 = 45;
  dash_panel.v8_9 = 890;
  guardar_objeto(JSON.stringify(dash_panel));
}

function guardar_objeto(obj){
  var datosformulario="guardar_dash=1&dash_panel="+obj;
  jq.ajax({
    url:"prueba_archivo.php",
    type:"POST",
    data:datosformulario,
    error:function(jqXHR,text_status,strError){
      alert('no funcionó el error fue: '+strError);
    },
    timeout:10000,
    success:function(data){
      alert(data);
    }
  });
}

function mostrar_dash(){
  var datosformulario="mostrar_dash=1";
  jq.ajax({
    url:"prueba_archivo.php",
    type:"POST",
    data:datosformulario,
    error:function(jqXHR,text_status,strError){
      alert('no funcionó el error fue: '+strError);
    },
    timeout:10000,
    success:function(data){
      let dash = JSON.parse(data);
      jq("#publicado").html(dash.objetivo);
    }
  });
}
