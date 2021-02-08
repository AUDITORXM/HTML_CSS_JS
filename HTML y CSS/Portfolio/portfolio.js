var tabla = document.getElementsByClassName("tabla_contenido");

window.onload = function() {
	
	eliminarContenido();

};


function mostrarContenido(index) {

	eliminarContenido();

	tabla[index].style.visibility = "visible";
	tabla[index].style.width = "35%";

}

function eliminarContenido() {

	for (let i = 0; i < tabla.length; i++) {
		
		tabla[i].style.visibility = "collapse";
		tabla[i].style.width = "0%";
		
	}
	
}