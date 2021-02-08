window.onload = function () {

	let texto = document.getElementById("texto").textContent;
	let body = document.getElementsByTagName("body")[0];
	let mancha = document.createElement("p");
	let primerosCaracteres = document.createElement("p");
	let ultimosCaracteres = document.createElement("p");

	mancha.innerHTML = `La palabra "mancha" está en la posición: ${texto.indexOf("mancha")}`;

	primerosCaracteres.innerHTML = `Los 5 primeros caracteres son: ${texto.substring(0, 6)}`;

	ultimosCaracteres.innerHTML = `Los 5 últimos caracteres son: ${texto.substring(texto.length - 3)}`;

	body.appendChild(mancha);
	body.appendChild(primerosCaracteres);
	body.appendChild(ultimosCaracteres);

}