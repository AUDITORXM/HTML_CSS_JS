var validar_datos = document.getElementById("validar_datos");
validar_datos.addEventListener("click", validarDatos, false);

function validarDatos() {

	let nombre = document.getElementById("nombre");
	let edad = document.getElementById("edad");

	if (nombre == "" || edad == ""){

		alert("No se han introducido todos los datos");

	} else {

		if (!isNaN(edad) && edad <= 100){

			alert("Edad válida");

		} else {

			alert("Edad introducida errónea");

		}

	}

}