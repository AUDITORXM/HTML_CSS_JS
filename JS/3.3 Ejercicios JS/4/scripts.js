let contrCorrecta = "cebanc";
let contra = document.getElementById("contrasena");
let btn = document.getElementById("comprobar");

cont = 0;

btn.addEventListener("click", comprobar, false);

function comprobar() {

	while (contra.value != contrCorrecta) {
		contra.value = "";
		cont = cont + 1;
		alert("Contraseña incorrecta, " + `${3 - cont}` + " intentos restantes.");

		if (cont == 3) {
			alert("Acceso denegado.");
			btn.style.display = 'none';
		}

		break
	}

	if (contra.value == contrCorrecta) {
		alert("Contraseña correcta, bienvenido.")
	}

}