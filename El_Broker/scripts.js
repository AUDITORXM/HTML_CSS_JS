class Jugador{

	constructor(nombre, capital, acciones){

		this.nombre = nombre;
		this.setCapital(capital);
		this.setAcciones(acciones);

	}

	getNombre(){

		return this.nombre;

	}

	setCapital(capital){

		this.capital = capital;

	}
	
	getCapital(){

		return this.capital;

	}

	setAcciones(acciones){

		this.acciones = acciones;

	}

	getAcciones(){

		return this.acciones;

	}

}

var tiempo = 60;
var usuario = new Jugador(document.getElementById("usuario").value, 1000, 0)
var precio_accion = 100;

var text_tiempo = document.getElementById("tiempo");
var text_capital = document.getElementById("capital");
var text_accion = document.getElementById("accion");
var text_precio = document.getElementById("precio");
var text_record = document.getElementById("record");

function empezarJuego() {
	
	if (!validarUsuario()){

		return;

	}

	document.getElementById("login").style.display = "none";
	document.getElementById("contenido").style.display = "block";
	document.getElementById("repetir").style.display = "none";

	text_precio.textContent = "Precio Actual de la Acción: " + 100;

	var cuenta_atras = setInterval(tiempoLimite, 1000);
	var cambio_precio_accion = setInterval(cambiarValorAccion, 800);

	text_record.textContent += localStorage.getItem("Record");

}

function cambiarValorAccion() {

	var nuevo_precio = Math.round(Math.random() * ((100 - 10) + 10));

	text_precio.textContent = "Precio Actual de la Acción: " + nuevo_precio;

	if (nuevo_precio > precio_accion){

		text_precio.style.color = "green";

	} else {

		text_precio.style.color = "red";

	}

	precio_accion = nuevo_precio;
	
}

function cambiarNumAccion(comprar) {

	if (comprar){

		text_accion.textContent = "Nº de Acciones: " + usuario.getAcciones() + " (" + (usuario.getAcciones() * precio_accion) + "€)";

	} else {

		text_accion.textContent = "Nº de Acciones: " + usuario.getAcciones() + " (" + (usuario.getAcciones() * precio_accion) + "€)";

	}

}

function cambiarCapital() {

	text_capital.textContent = "Efectivo Disponible: " + usuario.getCapital();
	
}

function comprarAccion() {
	
	if (usuario.getCapital() < precio_accion){

		alert("No hay capital para comprar");

	} else {

		usuario.setAcciones(usuario.getAcciones() + 1);
		usuario.setCapital(usuario.getCapital() - precio_accion);

		cambiarNumAccion();
		cambiarCapital(true);	

	}
	
}

function venderAccion() {
	
	if(usuario.getAcciones() <= 0){

		alert("No hay acciones para vender");

	} else {

		usuario.setAcciones(usuario.getAcciones() - 1);
		usuario.setCapital(usuario.getCapital() + precio_accion);
		
		cambiarNumAccion();
		cambiarCapital(false);

	}

}

function validarUsuario() {

	var usuario = document.getElementById("usuario").value;

	if (usuario == null || usuario == ""){

		alert("Se requiere un nombre de usuario.");
		return false;

	} else {

		return true;

	}

}

function tiempoLimite() {
	
	text_tiempo.textContent = "Tiempo Restante: " + (tiempo - 1);
	tiempo--;

	if (tiempo == 0){

		alert("Se acabó el tiempo");
		clearInterval(tiempoLimite);

		localStorage.setItem("Record", usuario.getCapital());

		document.getElementById("contenido").style.display = "none";
		document.getElementById("repetir").style.display = "block";

	}

}

function repetir() {
	
	tiempo = 60;
	usuario.setAcciones(0);
	usuario.setCapital(1000);
	precio_accion =  100;
	empezarJuego();

}

function salir() {
	
	var mensaje_salida = document.getElementById("texto");
	mensaje_salida.textContent = "Has salido del juego, que tenga un buen día.";
	document.getElementById("seguir").style.display = "none";
	document.getElementById("salir").style.display = "none";

}