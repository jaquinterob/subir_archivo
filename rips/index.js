var jq = jQuery.noConflict();
jq(document).ready(function() {
  inicializaciones();
  listeners();
});

function inicializaciones(){
  jq('#color').autocomplete({
    source: function(request, response){
      jq.ajax({
        url:"colores.php",
        dataType:"json",
        data:{q:request.term},
        success: function(data){
          response(data);
        }
      });
    },
    minLength: 1,
    select: function(event,ui){
      console.log(ui.item.label);
    }
  });
}
