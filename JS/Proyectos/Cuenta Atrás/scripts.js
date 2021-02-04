var boton = document.getElementById("boton_fecha").addEventListener("click", comprobarFecha, false);
var div_tiempo = document.getElementById("tiempo_restante");
var contador;

function comprobarFecha() {

	let fecha = document.getElementById("fecha").value;
	let fechaUsu = new Date(fecha);

	clearInterval(contador);

	if (fecha == ""){

		alert("No se ha seleccionado ninguna fecha");
		div_tiempo.style.display = "none";

	} else if (Date.now() >= fechaUsu){

		alert("La fecha del evento no puede ser menor a la fecha actual");
		div_tiempo.style.display = "none";

	} else {

		document.getElementById("tiempo_restante").style.display = "block";
		contador = setInterval(cuenta_atras, 1000, fechaUsu);

	}

}

function cuenta_atras(fechaUsu) {

	let fechaActual = new Date(Date.now());
	let tiempoRestante = new Date(fechaUsu - fechaActual);

	let meses = (fechaUsu.getFullYear() - fechaActual.getFullYear()) * 12 + (fechaUsu.getMonth() - fechaActual.getMonth());
	if (fechaUsu.getDate() < fechaActual.getDate())--meses;

	// Para que se entienda los números de abajo: 1000 milisegundos * 60 segundos * 60 minutos * 24 horas
	let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
	let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
	let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

	let p = document.getElementById("cuenta_atras");

	p.innerHTML = meses + " meses, " + dias + " días, " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos";

	if (dias == 0 && horas == 0 && minutos == 0 && segundos == 0){

		alert("Llegó el momento");
		clearInterval(contador);

	}

}