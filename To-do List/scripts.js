function anadirTarea() {

	actividad = document.getElementById("actividad").value;

	if (actividad == "" || actividad.match(/^\s+$/)){

		alert("No se puede meter una actividad vacía");

	} else {

		var ul = document.getElementById("lista");

		var li = document.createElement("li");

		ul.appendChild(li);

		li.appendChild(document.createTextNode(actividad));

		var botones = anadirBotonesTarea();

		botones.forEach(boton => {
			
			li.appendChild(boton);

		});

	}
	
	actividad = "";

}

function anadirBotonesTarea() {

	var btns = [];

	for (let i = 0; i < 2; i++) {
		
		btns[i] = document.createElement("button");
		
	}

	btns[0].setAttribute("class", "editar");
	btns[0].setAttribute("onclick", "editarTarea(this)");
	btns[0].textContent = "Editar";
	btns[1].setAttribute("class", "eliminar");
	btns[1].setAttribute("onclick", "eliminarTarea(this)");
	btns[1].textContent = "Eliminar";

	return btns;

}

function editarTarea(tarea) {
	
	// alert(tarea.previousSibling.textContent);

	var tareaEditada = prompt("Edita la tarea seleccionada", tarea.previousSibling.textContent);

	if (tareaEditada == null || tareaEditada == "") {

		txt = "Edición cancelada.";

	} else {
		
		tarea.previousSibling.textContent = tareaEditada;
		alert("Tarea editada con éxito");
	
	}

}

function eliminarTarea(boton){

	if (window.confirm("Estás seguro de querer eliminar la tarea?")) {

		boton.parentNode.remove();

		alert("Tarea eliminada con éxito");
		
	} else {

		alert("Eliminación cancelada");

	}

}