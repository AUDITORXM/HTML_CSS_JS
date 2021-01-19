function anadirTarea() {
	
	var ul = document.getElementById("lista");

	var li = document.createElement("li");

	ul.appendChild(li);

	li.appendChild(document.createTextNode(document.getElementById("actividad").value));

	var botones = anadirBotonesTarea();
	
	for (let i = 0; i < botones.length; i++) {
		
		ul.appendChild(botones[i]);
		
	}

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

function eliminarTarea(tarea){

	window.confirm("Estás seguro de querer eliminar la tarea?");

	if (confirm("Tarea eliminada con éxito")) {

		tarea.previousSibling.previousSibling.remove();
		tarea.previousSibling.remove();
		tarea.remove();
		
	  } else {

		alert("Eliminación cancelada");

	  }

}