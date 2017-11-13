var inicia = function(){
	var nuevo = function(){
		$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
   // console.log(data);
   $("#nombre").html("Hola, mi nombre es "+data.results[0].name.first+" "+
   	                 data.results[0].name.last);
   $("#foto").attr("src",data.results[0].picture.large);

   $("#email").html("my email es: "+data.results[0].email);
    $("#cumpleaños").html("mi cumpleaños es: "+data.results[0].dob);
    $("#address").html("my address es: "+data.results[0].street+" "+ data.results[0].city);
  }

});
	}
	//JSON = JavaScript Object Notation
	
     //alert("Lista la página")
     $("#btnNuevo").on("click",nuevo);

}

//Iniciamos JQuery
//Cuando la página está lista
//ejecuta la función inicia
$(document).ready(inicia);