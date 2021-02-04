var anterior = document.getElementById("anterior").addEventListener("click", function() {cambiarImagen(this)}, false);
var siguiente = document.getElementById("siguiente").addEventListener("click", function() {cambiarImagen(this)}, false);
var imagen = document.getElementById("imagen");

var imagenes = [
	"img/img1.png",
	"img/img2.png",
	"img/img3.png",
	"img/img4.png",
	"img/img5.png"
]
var index = 0;

function cambiarImagen(boton) {

	if (boton.id == "anterior"){

		if (index == 0){
			index = imagenes.length - 1;
		} else {
			index--;
		}

		imagen.src = imagenes[index];

	} else {

		if (index == imagenes.length - 1){
			index = 0;
		} else {
			index++;
		}

		imagen.src = imagenes[index];

	}

}