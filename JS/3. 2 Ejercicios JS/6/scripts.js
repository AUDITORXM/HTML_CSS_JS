let bombilla = document.getElementById("bombilla");
bombilla.addEventListener("mouseover", encenderBombilla);
bombilla.addEventListener("mouseout", apagarBombilla);

function encenderBombilla() {
	bombilla.removeAttribute("src");
	bombilla.setAttribute("src", "img/bombilla-on.gif");

}

function apagarBombilla() {
	bombilla.removeAttribute("src");
	bombilla.setAttribute("src", "img/bombilla-off.gif");

}