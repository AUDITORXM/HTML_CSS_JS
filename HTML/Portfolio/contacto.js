var sendData = document.getElementById("submit");
sendData.addEventListener("click", validar);

function validar() {
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var mensaje = document.getElementById("mensaje").value;

	if (nombre != "" || apellidos != "" || mensaje != "") {
		
		sendData.submit();

	} else {

		alert("Faltan datos por rellenar");

	}

}