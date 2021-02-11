$(() => {
	$("#b1").click(() => {
		$("[target=_blank]").hide(500);
	});

	$("#b2").click(() => {
		$("a").not("[target=_blank]").hide(500);
	});

	$("#b3").click(() => {
		$("h2").not("[class=uno]").hide(500);
	});

	$("#bTablaFondo").click(() => {
		$("tr:even").css("background-color", "red");
	});

	$("#bTablaTexto").click(() => {
		$("tr:odd").css("font-weight", "bold");
	});

	$("p").hover(() => {
		$("p").css({ "background-color": "red", "padding": "10px", "color": "white"});
	});

	$("p").mouseleave(() => {
		$("p").css("padding", "0px");
	});

	$("img").hover(() => {
		$("img").css({"opacity": "1", "box-shadow": "5px 10px"});
	});

	$("img").mouseleave(() => {
		$("img").css({ "opacity": "0.8", "width": "30%"});
	});
})