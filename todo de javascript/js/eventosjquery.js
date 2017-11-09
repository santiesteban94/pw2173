var inicia = function(){
	//JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
   // console.log(data);
   $("nombre").html(data.results[0].name.first+" "+
   	                data.results[0].name.last);
   $("#foto").attr("src",data.results[0].picture.large);
  }
});
     //alert("Lista la página")

}

//Iniciamos JQuery
//Cuando la página está lista
//ejecuta la función inicia
$(document).ready(inicia);