var boton = document.getElementById("boton_premonicion").addEventListener("click", predecirFuturo, false);
var futuros = [
	"Mañana te mueres.",
	"Hoy te toca la lotería.",
	"Nunca es demasiado tarde para luchar por aquello que es importante en tu vida.",
	"Los que tienen prisa, tropiezan",
	"Cuando salgas de la tormenta, ya no serás la misma persona que había entrado en ella. En eso consiste la tormenta.",
	"Si quieres el arcoíris, tienes que soportar la lluvia",
	"La cometa se eleva más alto en contra del viento, no a su favor"
];

function predecirFuturo() {
	
	let futuro = Math.floor(Math.random() * 7) + 1;

	alert(futuros[futuro]);

}