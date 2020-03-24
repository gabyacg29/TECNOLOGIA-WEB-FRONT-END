


var peticion= new XMLHttpRequest();
var datos;
var eventos;
var fecha_actual;
var eventos_pasados=new Array();

var dom_eventos_pasados="";

$(document).ready(function () {


peticion.open('GET','./info.json',false);
peticion.send();

console.log(peticion.status);
//console.log(peticion.response);
datos=JSON.parse(peticion.response);

fecha_actual=datos.fechaActual;
eventos=datos.eventos;


for (var i = 0; i <eventos.length; i++) {
  //console.log(eventos[i].fecha);
       if(eventos[i].fecha<fecha_actual){
             eventos_pasados.push(eventos[i]);

       }
}

//desplegar eventos futuros

for(var i=0;i<eventos_pasados.length;i++){	
 dom_eventos_pasados+="<div class='card-body' >";
  dom_eventos_pasados+="<h5 class='card-title'>";
  dom_eventos_pasados+=eventos_pasados[i].nombre;
  dom_eventos_pasados+="</h5>";
  dom_eventos_pasados+="<p class='card-text'>";
  dom_eventos_pasados+=eventos_pasados[i].fecha;
  dom_eventos_pasados+="</p>";
  dom_eventos_pasados+="<p class='card-text'>";
  dom_eventos_pasados+=eventos_pasados[i].descripcion;
  dom_eventos_pasados+="</p>";

  dom_eventos_pasados+="<a href='detalle.html?id=";
  dom_eventos_pasados+=eventos_pasados[i].id;
  dom_eventos_pasados+="'";

  dom_eventos_pasados+= "class='btn btn-primary'>Ir al evento</a>";
  dom_eventos_pasados+="</div>";

}

console.log(dom_eventos_pasados);

document.getElementById("pasados").innerHTML=dom_eventos_pasados;



});
