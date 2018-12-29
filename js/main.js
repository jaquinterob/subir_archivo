var jq = jQuery.noConflict();
jq(document).ready(function() {

});

document.addEventListener('DOMContentLoaded',()=>{
  let form=document.getElementById('form_subir');
  form.addEventListener('submit',function(event) {
    event.preventDefault();
    subir_archivo(this);
  });
});

function subir_archivo(form){
  let btn_cancelar=document.getElementById('cancelar');
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
  });

  // enviar datos
  peticion.open('post','includes/subir_includes.php');
  peticion.send(new FormData(form));

  // boton cancelar


}
