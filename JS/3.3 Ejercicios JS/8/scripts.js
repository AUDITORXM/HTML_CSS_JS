var lunes = document.getElementById("lunes").addEventListener("click", function () {mostrarMenu(this);});
var martes = document.getElementById("martes").addEventListener("click", function () {mostrarMenu(this);});
var miercoles = document.getElementById("miercoles").addEventListener("click", function () {mostrarMenu(this);});
var jueves = document.getElementById("jueves").addEventListener("click", function () {mostrarMenu(this);});
var viernes = document.getElementById("viernes").addEventListener("click", function () {mostrarMenu(this);});

var menus = [
	["Sopa", "Ensalada Vegetal", "Crema de calabaza", "Menestra de Verduras", "Ensalada Variada"],
	["Albóndigas", "Pasta con Alcachofa", "Merluza al Horno", "Pollo al Horno", "Arroz"],
	["Flan", "Fruta del Tiempo", "Macedonia", "Yogur", "Fruta"],
	["img/sopa.png", "img/e_vegetal.png", "img/calabaza.png", "img/menestra.png", "img/e_variada.png"]
]

function mostrarMenu(dia) {

	let primero = document.getElementById("primero");
	let segundo = document.getElementById("segundo");
	let postre = document.getElementById("postre");
	let img = document.getElementById("imagen");

	switch (dia.id) {
		case "lunes":
			primero.innerHTML = menus[0][0];
			segundo.innerHTML = menus[1][0];
			postre.innerHTML = menus[2][0];
			img.removeAttribute("src");
			img.setAttribute("src", menus[3][0]);
			break;

		case "martes":
			primero.innerHTML = menus[0][1];
			segundo.innerHTML = menus[1][1];
			postre.innerHTML = menus[2][1];
			img.removeAttribute("src");
			img.setAttribute("src", menus[3][1]);
			break;

		case "miercoles":
			primero.innerHTML = menus[0][2];
			segundo.innerHTML = menus[1][2];
			postre.innerHTML = menus[2][2];
			img.removeAttribute("src");
			img.setAttribute("src", menus[3][2]);
			break;

		case "jueves":
			primero.innerHTML = menus[0][3];
			segundo.innerHTML = menus[1][3];
			postre.innerHTML = menus[2][3];
			img.removeAttribute("src");
			img.setAttribute("src", menus[3][3]);
			break;

		case "viernes":
			primero.innerHTML = menus[0][4];
			segundo.innerHTML = menus[1][4];
			postre.innerHTML = menus[2][4];
			img.removeAttribute("src");
			img.setAttribute("src", menus[3][4]);
			break;

		default:
			alert("Error fatal, inténtelo más tarde");
			break;
	}

}