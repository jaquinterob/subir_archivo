/**
* @Date:   2018-08-26T13:28:24-05:00
 * @Last modified time: 2018-10-10T19:43:57-05:00
*firma:John Alexander Quintero Berrio
*/
var prueba_json="{'nombre':'john','apellido':'Quintero', 'padres':{'madre':'Rosalba','padre':'Dario'}}";
console.log(prueba_json);

function Envio(origen,destino,carga){
  this.origen=origen;
  this.destino=destino;
  this.carga=carga;
  this.enviar=function(){
    return "Enviando "+carga+" desde "+origen+" para "+destino;
  }
  this.recibir=function(){
    return "recibiendo "+carga+" en "+destino+" enviado desde "+origen;
  }
}

Envio.prototype.cancelar = function () {
  return "cancelando este envío de un: "+this.carga;
};

Envio.prototype.pesando = function (peso) {
  return "El peso es: "+peso;
};


function Conferencia(fecha,discursantes,musicos){
  this.fecha=fecha;
  this.discursantes=discursantes;
  this.musicos=musicos;

}

Conferencia.prototype.describir = function () {
  return 'Conferencia del '+this.fecha+', el primer discursante es: '+this.discursantes[0]+', segundo discursante '+this.discursantes[1]+' y ultimo discursante '+this.discursantes[2]+' director de música '+this.musicos.director+', pianista '+this.musicos.pianista;
};


var discursantes=[
'Andrea Perez',
'Jose Martinez',
'Alejandro lópez'
];

function Musicos(director,pianista) {
  this.director=director;
  this.pianista=pianista;

}

var musicos = new Musicos('Sebastian Lopera','John Quintero');

var conferencia1=new Conferencia('22 de agosto de 2018',discursantes,musicos);

console.log(conferencia1.describir());



var eva = jQuery.noConflict();
eva(document).ready(function() {
  console.log(prueba_json);
  var envio1=new Envio("La Apartada", "Medellín", "Auto");
  var envio2=new Envio("Bogotá", "Saboyá", "maquina de cocer");
  var envio3=new Envio("Florencia", "Ibagué", "libro");
  console.log(envio1.pesando(12));
  console.log(envio2.pesando(14));
    console.log(envio3.pesando(34));

  inicializaciones();
});

function inicializaciones(){



  M.AutoInit();
  eva("#paso2").hide();
}

function mandar_php(){
  if (validar_formulario()) {
    var datosformulario="token=1&nombre="+eva("#nombre").val()+"&apellido="+eva("#apellido").val()+"&correo="+eva("#correo").val()+"&celular="+eva("#celular").val();//variable que se envia
    eva.ajax({
      url:"includes.php",//archivo a donde se envía.
      type:"POST",//metodo
      data:datosformulario,
      error:function(jqXHR,text_status,strError){
        M.toast({html:'el error es: '+strError, classes:'red'});
      },
      timeout:10000,//tiempo de espera
      success:function(data){
        var res=data.split("|");
        if (res[0]==1) {
          M.toast({html:res[1],classes:'blue'});
          limpiar_formulario();
        } else {
          M.toast({html:res[1],classes:'red'});
        }
      }
    });
  } else {
    M.toast({html:'Faltan campos por completar',classes:'red'});
  }
}

function validar_formulario(){
  var v=0;
  if(eva("#nombre").val()==""){
    v++;
    eva("#nombre").addClass('invalid');
  }else{
    eva("#nombre").removeClass('invalid');
  }

  if(eva("#apellido").val()==""){
    v++;
    eva("#apellido").addClass('invalid');
  }else{
    eva("#apellido").removeClass('invalid');
  }

  if(eva("#correo").val()==""){
    v++;
    eva("#correo").addClass('invalid');
  }else{
    eva("#correo").removeClass('invalid');
  }

  if (eva("#celular").val()=="" || eva("#celular").val()==0) {
    v++;
    eva("#celular").addClass('invalid');
  } else {
    eva("#celular").removeClass('invalid');
  }

  if (v==0) {
    return true;
  } else {
    return false;
  }
}

function ir_paso2(){
  eva("#paso1").hide('fast');
  eva("#paso2").show('slow');
}

function consultar() {
  ir_paso2();
  cargar_contactos();
}

function cargar_contactos() {
  var datosformulario="token2=1";
  eva.ajax({
    url:"includes.php",//archivo a donde se envía.
    type:"POST",//metodo
    data:datosformulario,
    error:function(jqXHR,text_status,strError){
      M.toast({html:'el error es: '+strError, classes:'red'});
    },
    timeout:10000,//tiempo de espera
    success:function(data){
      eva("#contenedor_contactos").html(data);
    }
  });

}

function limpiar_formulario(){
  eva("#nombre").val('');
  eva("#apellido").val('');
  eva("#correo").val('');
  eva("#celular").val('');
  eva(".card-content").hide('fast');
  eva(".card-content").show('slow');
}

function atras(){
  eva("#paso2").hide('fast');
  eva("#paso1").show('slow');
}

function f_prueba_json() {
  var datosformulario="prueba_json="+prueba_json;
  eva.ajax({
    url:"includes.php",//archivo a donde se envía.
    type:"POST",//metodo
    data:datosformulario,
    // dataType: "json",
    error:function(jqXHR,text_status,strError){
      console.log(text_status);
    },
    timeout:10000,//tiempo de espera
    success:function(data){
      console.log(data);
    }
  });
}
