var datos = document.getElementById('div_datos');
var enviar = document.getElementById("submit").addEventListener("click", validarVacios);

function validarVacios() {

	var vacio = new Boolean(false);

	for (var i = 0; i < datos.childElementCount - 1; i++) {

		if (datos.children[i].value == "") {

			alert("'" + datos.children[i].placeholder + "' falta por rellenar");
			vacio = true;

		}

	}

	if (vacio == false){

		validarDatos();

	}

}

function validarDatos() {

	var regex = [/^[a-zA-Z]+$/, /^[679]{1}[0-9]{8}$/, /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/];

	for (var i = 0; i < regex.length; i++){

		if (!datos.children[i].value.match(regex[i])){

			alert("No has introducido un " + datos[i].placeholder + " correcto");
	
		}

	}

}