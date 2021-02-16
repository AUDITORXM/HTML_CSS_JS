// Función flecha que se ejecuta al cargar el documento
$(() => {

	//Función que se ejecuta dando al primer botón, haciendo que el primer li de todas las ul se cambien a color rojo y sean negrita
	$("#primerPlato").click(function () {
		$("ul").find("li:first-child").css({
			"color": "red",
			"font-weight": "bold"
		});
	});

	// Función que, al hacer click en el segundo botón del documento, oculta o muestra (según el estado del párrafo) el párrafo con id p1 con una transición de 2 segundos (2000 milisegundos)
	$("#ocultarMostrarP").click(function () {
		$("#p1").slideToggle(2000);
	});

})