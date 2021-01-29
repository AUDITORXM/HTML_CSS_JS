function sacarMensaje() {

	let nombre = document.getElementById("nombre");
	let ciudad = document.getElementById("ciudad");
	let h2 = document.createElement("h2");

	h2.textContent = "Hola, te llamas " + nombre.value + " y vives en " + ciudad.value;

	document.getElementsByTagName("body")[0].appendChild(h2);

}