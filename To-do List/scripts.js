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
	
	document.getElementById("actividad").value = ""; //No va con variable

}

function anadirBotonesTarea() {

	var botones = [];

	botones.length = 2;

	for (let i = 0; i < botones.length; i++) {
		
		botones[i] = document.createElement("button");
		icono = document.createElement("i");

		if (i == 0){
			
			icono.setAttribute("class", "fa fa-edit");

			botones[i].setAttribute("class", "editar");
			botones[i].setAttribute("title", "Editar Tarea");
			botones[i].setAttribute("onclick", "editarTarea(this)");
			botones[i].appendChild(icono);

		} else {

			icono.setAttribute("class", "fa fa-trash");

			botones[i].setAttribute("class", "eliminar");
			botones[i].setAttribute("title", "Eliminar Tarea");
			botones[i].setAttribute("onclick", "eliminarTarea(this)");
			botones[i].appendChild(icono);

		}
		
	}

	return botones;

}

function editarTarea(tarea) {

	var tareaEditada = prompt("Edita la tarea seleccionada", tarea.previousSibling.textContent);

	if (tareaEditada == null || tareaEditada == "") {

		alert("Edición cancelada.");

	} else {
		
		tarea.previousSibling.textContent = tareaEditada;
	
	}

}

function eliminarTarea(boton){

	if (window.confirm("Estás seguro de querer eliminar la tarea?")) {

		boton.parentNode.remove();
		
	} else {

		alert("Eliminación cancelada");

	}

}

function limpiarTareas() {

	var lista = document.getElementById("lista");
	
	if (lista.childElementCount == 0){

		alert("No hay tareas que eliminar");

	} else {

		if (confirm("Estás seguro de querer eliminar todas las tareas?")){

			while (lista.firstChild) {

				lista.removeChild(lista.lastChild);
	
			}

		}

	}

}