// ----- JS -----

// Comprobar que funciona
alert();

// onload() -> Se dispara cuando todos los objetos del documento han sido creadas y todas las imágenes han sido cargadas
window.onload = function() {
	//Code
	// alert();

	//Evento sobre la 1ra imagen
	document.getElementById("img1").addEventListener("click", avisar, false);

	//Evento con funciones anónimas sobre la 2da imagen
	document.getElementById("img2").addEventListener("click", function() { 
		alert("Imagen 2");
	 }, false);

	 //Eventos con funciones flecha sobre la 3ra imagen
	 document.getElementById("img3").addEventListener("click", () => {
		 alert("Imagen 3");
	 }, false);
	document.getElementById("img3").addEventListener("click", e => {
		alert("Imagen 3");
	}, false);
}

//Las demás funciones se ponen fuera del onload()
function avisar() { 
	alert("Imagen 1");
}