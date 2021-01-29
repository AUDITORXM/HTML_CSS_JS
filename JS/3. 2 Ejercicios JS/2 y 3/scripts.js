var deAcuerdo;

function mostrarNombre() {
	
	mensaje = pedirDatos("nombre");
	alert("Tu nombre: " + mensaje);
	deAcuerdo = confirmar();
	mensajeFinal(deAcuerdo);

}

function mostrarEdad() {
	
	mensaje = pedirDatos("edad");
	alert("Tu edad: " + mensaje);
	deAcuerdo = confirmar();
	mensajeFinal(deAcuerdo);

}

function mostrarFecha() {

	mensaje = pedirDatos("fecha de nacimiento");
	alert("Tu fecha de nacimiento: " + mensaje);
	deAcuerdo = confirmar();
	mensajeFinal(deAcuerdo);

}

function pedirDatos(dato) {
	
	mensaje = prompt("Introduce tu " + dato);

	if (mensaje == null || mensaje == "") {

		return false;

	} else {

		return mensaje;

	}

}

function confirmar() {
	
	if(confirm("Estás de acuerdo?")){
		return true;
	} else {
		return false;
	}

}

function mensajeFinal(acuerdo) {
	
	if (acuerdo){

		alert("Entonces somos amigos");

	} else {

		alert("Bueno, ya nos veremos");

	}

}