var boton = document.getElementById("convertir").addEventListener("click", convertir, false);

var txt_arabico = document.getElementById("arabico"); //Si uso el .value me sale null
var txt_romano = document.getElementById("romano"); //Si uso el .value me sale null

function convertir() {

	if (txt_arabico.value == "" && txt_romano.value == ""){

		alert("No se ha introducido ningún valor para convertir");

	} else if (txt_arabico.value == ""){

		romanoArabe();

	} else if (txt_romano.value == ""){

		arabeRomano(txt_arabico.value);

	}

}


function arabeRomano(n) {

	let numeros = [1, 5, 10, 50, 100, 500, 1000];
	let letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	let res = [];
	let num, letra, val, pos, insert;

	for (var i = 6; num = numeros[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if (n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num);

			// Restamos el actual
			n -= r * num;

			if (r < 4) {
				// Metemos las letras
				while (r--) {
					res.push(letra);
				}

			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1;

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M');

				// Insertamos el string
				res.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			res.push('');
		}
	}

	for (let i = 0; i < res.length; i++) {
		
		txt_romano.value += res[i];
		
	}

	txt_arabico.value == "";

}

function romanoArabe() {

	let valor = 0;
	let total = 0;
	let prev = 0;

	for (var i = 0; i < txt_romano.value.length; i++) {
		var actual = conversor(txt_romano.value.charAt(i));
		if (actual > prev) {

			total -= 2 * valor;
		}
		if (actual !== prev) {
			valor = 0;
		}
		valor += actual;
		total += actual;
		prev = actual;
	}

	txt_arabico.value = total;
	txt_romano.value = "";

}

function conversor(letra) {
	switch (letra.toUpperCase()) {
		case "I": return 1;
		case "V": return 5;
		case "X": return 10;
		case "L": return 50;
		case "C": return 100;
		case "D": return 500;
		case "M": return 1000;
		default: return -1;
	}
}