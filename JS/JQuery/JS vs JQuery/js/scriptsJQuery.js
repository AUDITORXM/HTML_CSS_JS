// ----- JQuery -----

// Comprobar que funciona
// $(() => {
// 	alert();
// });

// Evento document.ready
$(document).ready(function () {
	//Code
	alert("Documento Cargado");
});

// Otra forma
$(function () {
	alert("Doc listo");
});

// Con Arrow Function

$(() => {
	// Evento Click sobre Imagen 3
	$("#img3").click((e) => { 
		alert(`Ruta de la imagen: ${e.target.src}`);
	});
});