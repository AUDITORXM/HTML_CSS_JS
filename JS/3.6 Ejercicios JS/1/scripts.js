var btn_comprobar = document.getElementById("comprobar_palabra").addEventListener("click", comprobarPalabra, false);

function comprobarPalabra() {

	let palabra = document.getElementById("palabra").value;
	let tieneE = false;
	let pos = [];

	for (let i = 0; i < palabra.length; i++) {
		
		if (palabra.charAt(i).toLowerCase() == "e") {
			
			tieneE = true;
			pos.push(i);

		}
		
	}

	console.log(pos);

	if (tieneE){

		for (let i = 0; i < pos.length; i++) {
			
			let p = document.createElement("p");
			p.innerHTML = `La palabra ${palabra} tiene la letra E en la posición ${pos[i]}`;
			document.getElementById("div_palabra").appendChild(p);
			
		}

	}

}