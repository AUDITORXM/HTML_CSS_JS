// Recogemos el elemento botón y le añadimos un escuchador de eventos para ejecutar la función nuevaVentana()
var abrirVentana = document.getElementById("abrirVentana").addEventListener("click", nuevaVentana, false);

// Esta función abrirá una ventana mediante el window.open() a la URL de Google con un ancho de 400px y alto de 300px
function nuevaVentana() {

	window.open("https://www.google.com", "", "width=400,height=300");

}