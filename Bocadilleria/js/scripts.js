var bocadillos = [
	{
		"nombre": "Bocadillo de Atún y Pavo",
		"imagen": "img/bocadillo1.png",
		"ingredientes": [
			"Barra de Pan",
			"2 latas atún en aceite",
			"55 g taquitos de fiambre de pavo",
			"Mayonesa",
			"Pimienta"
		]
	},
	{
		"nombre": "Bocadillo de lomo en manteca colorá",
		"imagen": "img/bocadillo2.png",
		"ingredientes": [
			"Barra de Pan",
			"2 panes para bocadillo",
			"Lomos en manteca"
		]
	},
	{
		"nombre": "Bocadillo Quijote",
		"imagen": "img/bocadillo3.png",
		"ingredientes": [
			"2 huevos",
			"Jamón serrano",
			"Queso manchego",
			"1 tomate pequeño",
			"Sal",
			"AOVE",
			"Pan rústico"
		]
	}

];

var bebidas = [
	{
		"nombre": "Coca-Cola",
		"imagen": "img/cocacola.png"
	},
	{
		"nombre": "Pepsi",
		"imagen": "img/pepsi.png"
	},
	{
		"nombre": "Aquarius",
		"imagen": "img/aquarius.png"
	}
];

function cargarBocadillos() {

	let body = document.getElementsByTagName("body")[0];

	for (let i = 0; i < bocadillos.length; i++) {

		let divGeneral = document.createElement("div");
		divGeneral.setAttribute("class", "lista_bocadillos");

		body.appendChild(divGeneral);
		
		let div = document.createElement("div");
		let h2 = document.createElement("h2");
		let img = document.createElement("img");

		h2.textContent = bocadillos[i].nombre;
		img.setAttribute("src", bocadillos[i].imagen);
		img.setAttribute("class", "img_bocadillo");
		let ul = document.createElement("ul");
		let li = [];

		for (let j = 0; j < bocadillos[i].ingredientes.length; j++) {

			li[j] = document.createElement("li");
			li[j].textContent = bocadillos[i].ingredientes[j];
			ul.appendChild(li[j]);

		}

		let button = document.createElement("button");
		button.setAttribute("class", "btn_ingredientes");
		button.setAttribute("onclick", "mostrar(this)");
		button.textContent = ">";

		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(button);
		divGeneral.appendChild(div);
		divGeneral.appendChild(ul);
	}

}

function cargarBebidas() {

	let body = document.getElementsByTagName("body")[0];

	for (let i = 0; i < bebidas.length; i++) {

		let divGeneral = document.createElement("div");
		divGeneral.setAttribute("class", "lista_bebidas");
		
		let div = document.createElement("div");
		let h2 = document.createElement("h2");
		h2.textContent = bebidas[i].nombre;

		let img = document.createElement("img");
		img.setAttribute("src", bebidas[i].imagen);

		let button = document.createElement("button");
		button.setAttribute("class", "btn_tipo_bebida");
		button.setAttribute("onclick", "mostrar(this)");
		button.textContent = ">";

		let divRadio = document.createElement("div");
		divRadio.setAttribute("class", "tipo_bebida");

		let inputFrio = document.createElement("input");
		inputFrio.setAttribute("type", "radio");
		inputFrio.setAttribute("id", "frio_" + bebidas[i].nombre);
		inputFrio.setAttribute("name", "tipo_bebida_" + bebidas[i].nombre);
		inputFrio.setAttribute("value", "frio");

		let labelFrio = document.createElement("label");
		labelFrio.setAttribute("for", "frio_" + bebidas[i].nombre);
		labelFrio.textContent = "Bebida Fría";

		let inputTiempo = document.createElement("input");
		inputTiempo.setAttribute("type", "radio");
		inputTiempo.setAttribute("id", "tiempo_" + bebidas[i].nombre);
		inputTiempo.setAttribute("name", "tipo_bebida_" + bebidas[i].nombre);
		inputTiempo.setAttribute("value", "tiempo");

		let labelTiempo = document.createElement("label");
		labelTiempo.setAttribute("for", "tiempo_" + bebidas[i].nombre);
		labelTiempo.textContent = "Bebida del Tiempo";

		divRadio.appendChild(inputFrio);
		divRadio.appendChild(labelFrio);
		divRadio.appendChild(document.createElement("br"));
		divRadio.appendChild(inputTiempo);
		divRadio.appendChild(labelTiempo);

		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(button);
		divGeneral.appendChild(div);
		divGeneral.appendChild(divRadio);

		body.appendChild(divGeneral);
	}

}

function mostrar(elemento){

	let elem = elemento.parentNode.nextSibling;
	
	if (elem.style.display == "block"){
		elem.style.display = "none";
	} else {
		elem.style.display = "block";
	}

}