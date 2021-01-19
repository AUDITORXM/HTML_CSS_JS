var tabla = document.getElementById("table").firstElementChild.firstElementChild;
tabla.addEventListener("click", cargarTabla);

var cont1 = document.getElementById("contenido1");
var cont2 = document.getElementById("contenido2");
var cont3 = document.getElementById("contenido3");

window.onload = function() {

	cont2.style.display = 'none';
	cont3.style.display = 'none';

}

function cargarTabla() {
	
	alert(tabla.firstElementChild.textContent);

}