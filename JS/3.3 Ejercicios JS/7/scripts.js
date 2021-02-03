window.onload = function () {

	let fecha = new Date();
	let nombre = window.prompt("Introduce tu nombre");

	if(nombre == null || nombre == ""){
		
	} else {

		if (fecha.getHours() >= 6 && fecha.getHours() <= 12){

			alert("Buenos días " + nombre);

		} else if (fecha.getHours() >= 13 && fecha.getHours() <= 21){

			alert("Buenas tardes " + nombre);

		} else {

			alert("Buenas noches " + nombre);

		}

	}

}