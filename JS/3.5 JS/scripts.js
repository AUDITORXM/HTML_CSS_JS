var comidas = [
	{
		nombre: "Sopa",
		imagen: "img/sopa.png",
		ingredientes: [
			"2 dientes de ajo",
			"Tacos de jamón serrano",
			"Aceite",
			"Pimentón dulce",
			"2 huevos",
			"Fideos"
		]
	},
	{
		nombre: "Ensalada Vegetal",
		imagen: "img/e_vegetal.png",
		ingredientes: [
			"1 lechuga pequeña",
			"1 pepino",
			"2 aguacate",
			"1 tomate",
			"Aceitunas rellenas",
			"Pimienta",
			"2 pastillas caldo concentrado de verduras"
		]
	},
	{
		nombre: "Crema de calabaza",
		imagen: "img/calabaza.png",
		ingredientes: [
			"Calabaza",
			"Bouillon",
			"Fondo"
		]
	},
	{
		nombre: "Menestra de Verduras",
		imagen: "img/menestra.png",
		ingredientes: [
			"Coliflor",
			"Zanahoria",
			"Judías verdes planas",
			"Acelgas (hoja y penca)",
			"Espinaca fresca",
			"Alcachofa",
			"Sal",
			"Aceite de oliva virgen extra",
			"Pimienta negra molida",
			"Harina de trigo",
			"Agua"
		]
	},
	{
		nombre: "Ensalada Variada",
		imagen: "img/e_variada.png",
		ingredientes: [
			"Lechuga iceberg",
			"Lechugas brotes tiernos",
			"2 tomates medianos",
			"1 guindilla",
			"1/2 pimiento morrón rojo",
			"1 cucharada colmada anacardos sin piel",
			"1 cucharada cebolla crujiente",
			"Aceitunas negras",
			"Aceite de oliva",
			"Sal",
			"Vinagre",
		]
	}
];

comidas.forEach(comida => {

	let imagen = `<img src="${comida.imagen}" alt="${comida.nombre}">`;
	let nombre = `<p>${comida.nombre}</p>`;
	let lista_ingredientes = "";

	comida.ingredientes.forEach(ingrediente => {

		lista_ingredientes += `<li>${ingrediente}</li>`;

	});

	let div = document.createElement("div");
	div.setAttribute("class", "comida");

	div.innerHTML = `${imagen} ${nombre} <ul>${lista_ingredientes}</ul>`;

	document.getElementById("container").appendChild(div);

});