// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

if(formulario.nombres.value.trim().length==0){
	//alert("Nombre obligatorio");
	document.getElementById("errornombres").innerHTML="Nombre obligatorio";
	return false;
}


if(formulario.contrasena.value.trim().length==0){
	//alert("Contraseña obligatoria");
	document.getElementById("errorContrasena").innerHTML="Contraseña obligatoria";
	return false;
}


if(formulario.contrasena.value!=formulario.confirmacion.value){
	//alert("Confirmacion de contraseña no coincide");
	document.getElementById("errorConfirmacion").innerHTML="Confirmacion de contraseña no coincide";

	return false;
}





//Expresion regular del correo
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!re.test(formulario.email.value)){
	//alert("Email invalido");
	document.getElementById("errorEmail").innerHTML="Email invalido";
	return false;
  
}

if(formulario.tipo.value=="-1"){
	//alert("El tipo de usuario es obligatorio");
	document.getElementById("errorTipo").innerHTML="El tipo de usuario es obligatorio";
	return false;
}


if(!formulario.acepto.checked){
	//alert("Por favor acepte los terminos y condiciones");
	document.getElementById("errorAcepto").innerHTML="Por favor acepte los terminos y condiciones";
	return false;
}

return true;

}
