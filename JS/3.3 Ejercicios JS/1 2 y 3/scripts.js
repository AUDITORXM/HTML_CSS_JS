var nums = document.getElementById("numeros");

function mostrar() {

	nums.innerHTML = "";

	for (let i = 0; i <= 100; i++) {

		if (i%5 == 0) {
			let p = document.createElement("p");
			p.innerHTML = i;
			nums.appendChild(p);
		}

	}

}

function mostrarInvertido() {

	nums.innerHTML = "";

	for (let i = 100; i >= 0; i--) {

		if (i % 5 == 0) {
			let p = document.createElement("p");
			p.innerHTML = i;
			nums.appendChild(p);
		}

	}

}

function mostrarPares() {
	
	nums.innerHTML = "";

	for (let i = 0; i <= 50; i++) {

		if (i%2 == 0){

			let p = document.createElement("p");
			p.innerHTML = i;
			nums.appendChild(p);

		}

	}

}