var jq = jQuery.noConflict();
jq(document).ready(function() {

pedir_datos();
});
var datos=[
          ['Task', 'Hours per Day'],
          ['John',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ];

function cargar_chart(datos) {
	 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(datos);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
}

function pedir_datos(){
	var datosformulario="token2=1";
	jq.ajax({
    url:"includes.php",//archivo a donde se envía.
    type:"POST",//metodo
    data:datosformulario,
    dataType: "json",
    error:function(jqXHR,text_status,strError){
    	M.toast({html:'el error es: '+strError, classes:'red'});
    },
    timeout:20000,//tiempo de espera
    success:function(data){
    	cargar_chart(data);
    }
});
}