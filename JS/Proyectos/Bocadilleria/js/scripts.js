// Creamos objeto JSON bocadillos, con toda la información de los bocadillos
var bocadillos = [
	{
		"nombre": "Bocadillo Serranito",
		"imagen": "img/bocadillo1.png",
		"ingredientes": [
			"4 filetes de lomo de cerdo",
			"2 pimientos verdes italianos",
			"4 lonchas grandes de jamón serrano",
			"2 panes de bocadillo",
			"Pimienta negra molida",
			"Aceite de oliva",
			"Sal"
		],
		"cantidad": 0,
		"precio": 8.99
	},
	{
		"nombre": "Bocadillo Caprese",
		"imagen": "img/bocadillo2.png",
		"ingredientes": [
			"4 panes tipo baguette",
			"250 gr de mozzarella",
			"2 tomates grandes",
			"Hojas de albahaca",
			"Pimienta",
			"Orégano",
			"Aceite de oliva",
			"Sal"
		],
		"cantidad": 0,
		"precio": 5.99
	},
	{
		"nombre": "Bocadillo de Calamares",
		"imagen": "img/bocadillo3.png",
		"ingredientes": [
			"1 barra de pan rústico",
			"500 gr de calamares",
			"1 vaso de leche",
			"30 gr de harina de trigo para rebozar",
			"½ cucharadita de pimentón dulce",
			"½ cucharadita de pimienta negra molida",
			"1 limón",
			"4 cucharadas de mahonesa",
			"Aceite para freír",
			"Sal"
		],
		"cantidad": 0,
		"precio": 6.49
	}

];
// Lo mismo pero con bebidas
var bebidas = [
	{
		"nombre": "Coca-Cola",
		"imagen": "img/cocacola.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0,
		"precio": 1.99
	},
	{
		"nombre": "Pepsi",
		"imagen": "img/pepsi.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0,
		"precio": 1.49
	},
	{
		"nombre": "Aquarius",
		"imagen": "img/aquarius.png",
		"cantidad_frio": 0,
		"cantidad_tiempo": 0,
		"precio": 1.49
	}
];
// Variable para contabilizar la cantidad de articulos en el carrito (el número que aparece arriba junto al carro)
var carro = document.getElementById("cantidad_articulos");
// Variable para guardar el div que contiene el cuerpo de la página (excluyendo la cabecera)
var contenido = document.getElementById("contenido");

function cargarBocadillos() { //Cargamos los datos dentro del objeto "bocadillos" y añadimos un botón para comprar

	contenido.innerHTML = "";
	let body = document.getElementById("contenido");

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

function cargarBebidas() { ////Cargamos los datos dentro del objeto "bebidas" y añadimos un botón para comprar, junto a unos radio button para que el usuario pueda elegir el tipo de bebida

	contenido.innerHTML = "";
	let body = document.getElementById("contenido");

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

function cargarCuenta() { //Carga los artículos que el usuario ha comprado y muestra una pantalla de impresión

	contenido.innerHTML = "";
	let body = document.getElementById("contenido");

	let lista_bocadillos = document.createElement("h2");
	lista_bocadillos.textContent = "Bocadillos";
	let lista_bebidas = document.createElement("h2");
	lista_bebidas.textContent = "Bebidas";
	let ul_bocadillos = document.createElement("ul");
	let ul_bebidas = document.createElement("ul");

	let total = 0;

	for (let i = 0; i < bocadillos.length; i++) {

		if (bocadillos[i].cantidad > 0) {

			let li = document.createElement("li");
			li.textContent = bocadillos[i].nombre + " -> " + bocadillos[i].cantidad + " (" + bocadillos[i].cantidad * bocadillos[i].precio + "€)";
			ul_bocadillos.appendChild(li);

			total += bocadillos[i].cantidad * bocadillos[i].precio;

		}

	}

	for (let i = 0; i < bebidas.length; i++) {

		if (bebidas[i].cantidad_frio > 0){

			let li = document.createElement("li");
			li.textContent = bebidas[i].nombre + " Fría -> " + bebidas[i].cantidad_frio + " (" + bebidas[i].cantidad_frio * bebidas[i].precio + "€)";
			ul_bebidas.appendChild(li);
			
			total += bebidas[i].cantidad_frio * bebidas[i].precio;

		}

		if (bebidas[i].cantidad_tiempo > 0) {

			let li = document.createElement("li");
			li.textContent = bebidas[i].nombre + " de Tiempo -> " + bebidas[i].cantidad_tiempo + " (" + bebidas[i].cantidad_tiempo * bebidas[i].precio + "€)";
			ul_bebidas.appendChild(li);

			total += bebidas[i].cantidad_tiempo * bebidas[i].precio;

		}

	}

	let h2_total = document.createElement("h2");
	h2_total.innerHTML = "Precio Total: " + total.toFixed(2) + "€";

	let button_imprimir = document.createElement("button");
	button_imprimir.setAttribute("onclick", "imprimir()");
	button_imprimir.textContent = "Imprimir Factura";

	body.appendChild(lista_bocadillos);
	body.appendChild(ul_bocadillos);
	body.appendChild(lista_bebidas);
	body.appendChild(ul_bebidas);
	body.appendChild(h2_total);
	body.appendChild(button_imprimir);

}

function imprimir() {
	
	let pdf = window.open('', 'PRINT', 'height=400,width=600');

	pdf.document.write('<html><head><title>' + document.title + '</title>');
	pdf.document.write('</head><body>');
	pdf.document.write('<h1>Ticket</h1>');
	pdf.document.write(document.getElementById("contenido").innerHTML);
	pdf.document.write('</body></html>');

	pdf.document.close();
	pdf.focus();

	pdf.print();
	pdf.close();

}

function mostrar(elemento){ //Mostramos/ocultamos los ingredientes y botón de compra del bocadillo que el usuario haya elegido

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

function comprarBocadillo(articulo) { //Añadimos la compra al objeto "bocadillos", incrementando el atributo "cantidad" en 1

	let botones = document.getElementsByClassName("comprar_bocadillo");

	for (let i = 0; i < botones.length; i++) {

		if(botones[i] == articulo.target){
			bocadillos[i].cantidad++;
		}

	}

	carro.innerHTML++;

}

function comprarBebida(articulo) { //Añadimos la compra al objeto "bebidas", incrementando el atributo "cantidad_frio" o "cantidad_tiempo" en 1 según el radio button seleccionado

	let botones = document.getElementsByClassName("comprar_bebida");
	let tipo_bebida = document.getElementsByTagName("input");

	for (let i = 0; i < botones.length; i++) {

		if (botones[i] == articulo.target){

			switch (i) {
				case 0:
					if (tipo_bebida[i].checked){
						bebidas[i].cantidad_frio++;
					} else if(tipo_bebida[i+1].checked){
						bebidas[i].cantidad_tiempo++;
					} else {
						alert("No has seleccionado tipo de bebida");
					}
					break;

				case 1:
					if (tipo_bebida[i+i].checked) {
						bebidas[i].cantidad_frio++;
					} else if (tipo_bebida[i+i+1].checked) {
						bebidas[i].cantidad_tiempo++;
					} else {
						alert("No has seleccionado tipo de bebida");
					}
					break;

				case 2:
					if (tipo_bebida[i+i].checked) {
						bebidas[i].cantidad_frio++;
					} else if (tipo_bebida[i+i+1].checked) {
						bebidas[i].cantidad_tiempo++;
					} else {
						alert("No has seleccionado tipo de bebida");
					}
					break;
				default:
					alert("No has seleccionado tipo de bebida");
					break;
			}

		}

	}

	carro.innerHTML++;

}