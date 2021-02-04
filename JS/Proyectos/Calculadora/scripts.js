function validarContenido(usu){

var reg = /^[0-9]*$/;

	if (!usu.value.match(reg)){

		usu.value = "";
		alert("Sólo se deben introducir números");

	}

}

function anadirNumero(boton) {

	document.getElementById("datos").value += boton.textContent;

}

function calcularResultado(boton) {

	document.getElementById("datos").value = eval(document.getElementById("datos").value.toString());

}

// var num = document.getElementsByClassName("classname");

// for (var i = 0; i < num.length; i++) {
//     num[i].addEventListener('click', anadirNumero, false);
// }

// var anadirNumero = function() {
//     alert("attribute");
// };