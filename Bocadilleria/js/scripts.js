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
		],
		"cantidad": 0
	},
	{
		"nombre": "Bocadillo de lomo en manteca colorá",
		"imagen": "img/bocadillo2.png",
		"ingredientes": [
			"Barra de Pan",
			"2 panes para bocadillo",
			"Lomos en manteca"
		],
		"cantidad": 0
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
		],
		"cantidad": 0
	}

];

var bebidas = [
	{
		"nombre": "Coca-Cola",
		"imagen": "img/cocacola.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0
	},
	{
		"nombre": "Pepsi",
		"imagen": "img/pepsi.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0
	},
	{
		"nombre": "Aquarius",
		"imagen": "img/aquarius.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0
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

		let button_mostrar = document.createElement("button");
		button_mostrar.setAttribute("class", "btn_ingredientes");
		button_mostrar.setAttribute("onclick", "mostrar(this)");
		button_mostrar.textContent = ">";

		let button_comprar = document.createElement("button");
		button_comprar.setAttribute("class", "comprar_bocadillo");
		button_comprar.setAttribute("onclick", "comprarBocadillo(event)");
		button_comprar.textContent = "Comprar Bocadillo";

		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(button_mostrar);
		divGeneral.appendChild(div);
		divGeneral.appendChild(ul);
		divGeneral.appendChild(button_comprar);
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

		let button_mostrar = document.createElement("button");
		button_mostrar.setAttribute("class", "btn_tipo_bebida");
		button_mostrar.setAttribute("onclick", "mostrar(this)");
		button_mostrar.textContent = ">";

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

		let button_comprar = document.createElement("button");
		button_comprar.setAttribute("class", "comprar_bebida");
		button_comprar.setAttribute("onclick", "comprarBebida(event)");
		button_comprar.textContent = "Comprar Bebida";

		div.appendChild(h2);
		div.appendChild(img);
		div.appendChild(button_mostrar);
		divGeneral.appendChild(div);
		divGeneral.appendChild(divRadio);
		divGeneral.appendChild(button_comprar);

		body.appendChild(divGeneral);
	}

}

function mostrar(elemento){

	let ingredientes_tipos = elemento.parentNode.nextSibling;
	let btn_comprar = ingredientes_tipos.nextSibling;
	
	if (ingredientes_tipos.style.display == "block"){
		ingredientes_tipos.style.display = "none";
		btn_comprar.style.display = "none";
	} else {
		ingredientes_tipos.style.display = "block";
		btn_comprar.style.display = "block";
	}

}

function comprarBocadillo(articulo) {

	let botones = document.getElementsByClassName("btn_comprar");
	
	for (let i = 0; i < botones.length; i++) {

		if(botones[i] == articulo.target){
			bocadillos[i].cantidad++;
		}

	}

}

function comprarBebida(articulo) {

	let botones = document.getElementsByClassName("comprar_bebida");
	let tipo_bebida = document.getElementsByTagName("input");

	for (let i = 0; i < botones.length; i++) {

		if (botones[i] == articulo.target){

			if (tipo_bebida[i].checked){

				bebidas[i].cantidad_frio++;

			} else if (tipo_bebida[i+1].checked){

				bebidas[i].cantidad_tiempo++;

			} else {

				alert("No has seleccionado tipo de bebida");
				return;

			}

		}

	}

}

function cargarCarro() {



}