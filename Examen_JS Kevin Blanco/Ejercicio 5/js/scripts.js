// Usamos el onload para que se ejecute el código en su interior al cargar por completo el documento
window.onload = function () {

	// Creamos una ventana emergente que pida un número al usuario y lo guardamos en una variable
	let numero = window.prompt("Teclea un número");

	// Validamos que sea numérico y que sea menor que 100, y en ese caso, creamos un elemento p en el que le introducimos el cuadrado del número y lo añadimos al body. En caso contrario, validamos por qué falla y mandamos su correspondiente mensaje de error
	if (parseInt(numero) && parseInt(numero) < 100) {

		let p = document.createElement("p")
		p.innerHTML = `El cuadrado de ${numero} es: ${numero * numero}`;
		document.getElementsByTagName("body")[0].appendChild(p);

	} else if (isNaN(parseInt(numero))) {

		alert("'" + numero + "'" + " no es un valor numérico");

	} else {

		alert(numero + " no es menor que 100");

	}

};