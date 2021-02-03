var mostrar_datos = document.getElementById("mostrar_datos");
mostrar_datos.addEventListener("click", mostrarDatos, false);

function mostrarDatos() {

	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let email = document.getElementById("email").value;
	let ciudad = document.getElementById("ciudad").value;
	
	if (nombre == "" || apellido == "" || email == "" || ciudad == ""){

		alert("Faltan datos por rellenar");

	} else {

		let tabla = document.getElementById("tabla");

		let datos = [nombre, apellido, email, ciudad];

		for (let i = 0; i < tabla.rows.length; i++) {

			tabla.rows[i].insertCell(1);
			tabla.rows[i].cells[1].innerHTML = datos[i];

		}

		document.getElementById("txt_mostrar").style.display = "block";
		tabla.style.display = "block";

	}

}