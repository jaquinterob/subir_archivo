var jq = jQuery.noConflict();
jq(document).ready(function() {
inicialiaciones();
});

function inicialiaciones(){
  jq("#form_subir").submit(function(e){
    e.preventDefault();
    subir_archivo(this);
  });
}

function subir_archivo(form){
  //petición
  let peticion= new XMLHttpRequest();

  //progreso
  peticion.upload.addEventListener('progress',(event) =>{
    let porcentaje = Math.round((event.loaded / event.total) * 100);
    console.log(porcentaje);
   jq('#letrero').html(porcentaje+'%');
   jq("#estado").html('En progreso');
  });

  // finalizado
  peticion.addEventListener('load',() =>{
    jq("#estado").html('Completado');
    consultar_tabla();
  });

  // enviar datos
  peticion.open('post','includes/subir_includes.php');
  peticion.send(new FormData(form));

  // boton cancelar
  jq("#cancelar").click(function(){
    peticion.abort();
    jq("#estado").text('Abotado');
    alert('Abortado');
    console.log('abortado');
  });
}

function consultar_tabla(){
  let datosFormulario="token=1";
  jq.ajax({
    url:'includes/consulta_tabla_includes.php',
    type:'POST',
    data:datosFormulario,
    error:function(jq,status,str_error){
      M.toast({html:'error en la petición',classes:'red'});
    },
    timeout:10000,
    success:function(data){
      jq("#contenedor_tabla").html(data);
      M.toast({html:'Si salió?',classes:'green'});
    }
  });
}
