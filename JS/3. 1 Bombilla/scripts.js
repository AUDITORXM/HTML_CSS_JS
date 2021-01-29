var bombilla = document.getElementById("bombilla");

function encenderBombilla() {
	
	if (estadoBombilla()){
		alert("La bombilla ya está encendida");
	} else {
		bombilla.removeAttribute("src");
		bombilla.setAttribute("src", "img/bombilla-on.gif");
	}

}

function apagarBombilla() {
	
	if (!estadoBombilla()){
		alert("La bombilla ya está apagada");
	} else {
		bombilla.removeAttribute("src");
		bombilla.setAttribute("src", "img/bombilla-off.gif");
	}

}

function estadoBombilla() {
	
	if (bombilla.getAttribute("src") == "img/bombilla-off.gif"){
		return false;
	} else {
		return true;
	}

}