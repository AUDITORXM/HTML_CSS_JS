var imagenGoogle = document.getElementById("imagenGoogle");
var imagenVentana = document.getElementById("imagenVentana");

imagenGoogle.addEventListener("click", abrirVentana, false);
imagenVentana.addEventListener("click", abrirVentana, false);

function abrirVentana(e) {

	if (e.target.id == "imagenGoogle") {
		window.open("https://www.google.com", "", "width=500,height=500,top=20,left=20");
	} else {
		let ventana = window.open("", "MiVentana", "width=300px,height=250px");
		ventana.document.write("<head><title>Mi Ventana</title></head>");
		ventana.document.write("<p>Soy una ventana de 300 x 200</p>");
	}

}