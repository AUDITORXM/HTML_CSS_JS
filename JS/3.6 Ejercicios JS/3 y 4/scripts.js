window.onload = function () {

	let texto = document.getElementById("texto").textContent;
	let div_script = document.getElementById("script");

	for (let i = 0; i <= texto.length; i++) {

		if (texto.charAt(i).toLowerCase() == "o"){

			div_script.innerHTML += `<p>La letra O está en la posición ${i}</p>`;

		}

	}

	div_script.innerHTML += `<p>La letra en la segunda posición es: ${texto.charAt(2)}</p>`; //Doy por hecho que cuando se pide la "posición, se pide el índice (contando desde 0), no referente a la segunda letra"
	div_script.innerHTML += `<p>La cantidad de caracteres totales es: ${texto.length}</p>`;

}