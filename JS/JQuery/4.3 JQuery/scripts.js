$("p").hover((e) => {
	$(e.target).prepend("<p>Estás sobre el párrafo</p>");
});

$("p").mouseleave((e) => {
	$(e.target).append("<p>No me abandones</p>");
})

$("#nuevoParrafo").click(() => {
	$(e.target).next().text("Pulsa el otro botón para ver la imagen");
});

$("#nuevaImagen").click(() => {
	$(e.target).after().html("<img src='img/jirafa.jpg' width='30%'>");
});

$("#beforeImg").click(() => {
	$("#imgPinguinos").before("<p>Párrafo antes de la imagen</p>");
});

$("#afterImg").click(() => {
	$("#imgPinguinos").after().html("<img src='img/jirafa.jpg' width='30%'>");
});

$("#imgPinguinos").click(() => {
	$("#imgPinguinos").remove();
});

$("#quitarEstilos").click(() => {
	$("p:last-child").removeClass("cursiva_negrita");
});

$("#anadirEstilos").click(() => {
	$("p:last-child").addClass("cursiva_negrita");
});

$("#quitarEstilos").click(() => {
	$("p:last-child").toggleClass("cursiva_negrita");
});

$("#cab").addClass("grande");

window.onscroll = () => {
	cambioCab();
}

cambioCab = () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$("#cab").removeClass("grande").addClass("peque");
	} else {
		$("#cab").removeClass("peque").addClass("grande");
	}
}