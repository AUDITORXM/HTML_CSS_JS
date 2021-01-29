var parrafo = document.getElementById("parrafo");

function mostrarParrafo() {

	parrafo.style.display = "block";

}

function ocultarParrafo() {

	parrafo.style.display = "none";

}

function mostrarOcultar() {
	
	if (parrafo.style.display == "block"){
		parrafo.style.display = "none";
	} else {
		parrafo.style.display = "block";
	}

}