
var url;
var id;
var peticion= new XMLHttpRequest();
var datos;
var evento=new Array(); // aca guardamos el evento que coincide con el id luego de buscarlo entre los datos del JSON
var eventos; // para usar un metodo de arreglo sobre una variable, se debe declarar como array, ya sea asignandole una parte de un array o con new array()
var dom_evento;


$(document).ready(function () {

url=location.href;

id=parseInt(url.slice(url.length-1,url.length));

peticion.open('GET','./info.json',false);
peticion.send();

datos=JSON.parse(peticion.response);
eventos=datos.eventos;


for(var i=0;i<eventos.length;i++){

	if(eventos[i].id==id){
		evento=eventos[i];

	}
}



dom_evento="<div class='card'  style='width: 18rem;'>"+"<div class='card-body'>"+"<h5 class='card-title'>"+evento.nombre+"</h5>";
dom_evento+="<h6 class='card-subtitle mb-2 text-muted'>"+ evento.descripcion+"</h6>";
dom_evento+="<h6 class='card-subtitle mb-2 text-muted'>"+"Fecha:"+ evento.fecha+"</h6>";
dom_evento+="<h6 class='card-subtitle mb-2 text-muted'>"+"Lugar:"+ evento.lugar+"</h6>";
dom_evento+="<h6 class='card-subtitle mb-2 text-muted'>"+"# de invitados:"+ evento.invitados+"</h6>";
dom_evento+="<h6 class='card-subtitle mb-2 text-muted'>"+"Costo:"+ evento.precio+"</h6>";
dom_evento+="</div>";




document.getElementById("evento").innerHTML=dom_evento;


 

});
