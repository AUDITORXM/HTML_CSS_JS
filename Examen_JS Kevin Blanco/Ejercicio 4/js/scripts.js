// Recogemos el formulario y le añadimos un escuchador de eventos para validar la información que contiene
var formulario = document.getElementById("formulario").addEventListener("submit", validarDatos, false);

// Función para validar los campos Nombre y DNI del formulario, en caso de que algún dato sea erróneo devolvemos false para evitar que el formulario se mande. En caso contrario, todo se mandará correctamente
function validarDatos() {

	let nombre = document.getElementById("nombre").value;
	let dni = document.getElementById("dni").value;
	let valido = true;

	if (nombre == "") {
		alert("Nombre no introducido");
		valido = false;
	}

	if (dni.length != 9) {
		alert("DNI incorrecto");
		valido = false;
	}

	return valido;

}