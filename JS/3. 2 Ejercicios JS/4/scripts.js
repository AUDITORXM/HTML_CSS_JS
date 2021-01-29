function preguntas() {
	
	let mayor = false;
	let clave = false;

	if (confirm("Eres mayor de Edad?")) {
		mayor = true;
	}

	if (confirm("Tienes clave de usuario?")){
		clave = true;
	}

	if (mayor && clave){
		alert("Estás autorizado para pasar a este sitio.");
	} else {
		alert("Lo siento, no puedes pasar.");
	}

}