

var peticion= new XMLHttpRequest();
var datos;
var eventos;
var fecha_actual;
var eventos_pasados=new Array();
var eventos_futuros=new Array();

var dom_eventos_pasados="";
var dom_eventos_futuros="";

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

       }else{
        eventos_futuros.push(eventos[i]);
       }
}


//desplegar eventos pasados

for(var i=0;i<2;i++){
  dom_eventos_pasados+="<div class='card-body'>";
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


//desplegar eventos futuros

for(var i=0;i<2;i++){
  dom_eventos_futuros+="<div class='card-body'>";
  dom_eventos_futuros+="<h5 class='card-title'>";
  dom_eventos_futuros+=eventos_futuros[i].nombre;
  dom_eventos_futuros+="</h5>";
  dom_eventos_futuros+="<p class='card-text'>";
  dom_eventos_futuros+=eventos_futuros[i].fecha;
  dom_eventos_futuros+="</p>";
  dom_eventos_futuros+="<p class='card-text'>";
  dom_eventos_futuros+=eventos_futuros[i].descripcion;
  dom_eventos_futuros+="</p>";
  dom_eventos_futuros+="<a href='detalle.html?id=";
  dom_eventos_futuros+=eventos_futuros[i].id;
  dom_eventos_futuros+="'";

  dom_eventos_futuros+= "class='btn btn-primary'>Ir al evento</a>";
  dom_eventos_futuros+="</div>";

  

}

console.log(dom_eventos_futuros);

document.getElementById("proximos").innerHTML=dom_eventos_futuros;





});
