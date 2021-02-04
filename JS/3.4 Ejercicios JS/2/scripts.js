var imgPrincipal = document.getElementById("imagen").addEventListener("click", function() {actualizarImagen(this)}, false);
var imagenes = [
	"img/img1.png",
	"img/img2.png",
	"img/img3.png",
	"img/img4.png",
	"img/img5.png"
]

function actualizarImagen(imagen){

	let imgNuevo = Math.floor(Math.random() * 4) + 1;

	imagen.src = imagenes[imgNuevo];

}