// Guardamos el canvas y su contexto en variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Cargamos las imágenes en variable
var img_screen = document.getElementById("img_fondo");
var img_brick = document.getElementById("img_brick");
var img_ball = document.getElementById("img_ball");

// Definimos un ancho y alto fijo al canvas
canvas.width = 1500;
canvas.height = 700;

// Definimos un punto de inicio en la parte central inferior del lienzo para la bola
var x = canvas.width / 2;
var y = canvas.height - 30;

// Definimos dos variables que se utilizarán para dibujar la bola en puntos distintos para que parezca que se mueve
var dx = 2;
var dy = -2;

// Definimos el radio (o tamaño) de la bola
var ballRadius = 10;

// Definimos el tamaño de la pala con la que golpearemos la bola
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// Definimos 2 variables booleanos para detectar si el usuario presiona las flechas derecha e izquierda
var rightPressed = false;
var leftPressed = false;

// Definimos los atributos de los ladrillos
var brickRowCount = 6;
var brickColumnCount = 17;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// Creamos un array de ladrillos para cargarlos más tarde
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (r = 0; r < brickRowCount; r++) {
		bricks[c][r] = {
			x: 0,
			y: 0,
			status: 1
		};
	}
}

// Definimos la puntuación y las vidas del jugador
var score = 0;
var lives = 3;

// Función para dibujar en el canvas
function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiamos el canvas para que el nuevo dibujo no esté solapada con el antiguo
	// ctx.drawImage(img_screen, 0, 0, canvas.width, canvas.height); //Imagen estática de fondo
	drawBricks(); // Función para dibujar los ladrillos
	drawBall(); // Función para dibujar la bola
	drawPaddle(); // Función para dibujar la pala
	drawScore(); // Función para dibujar la puntuación
	drawLives(); // Función para dibujar las vidas
	collisionDetection(); // Función para detectar la colisión entre la bola y los ladrillos y cambiar la puntuación y mostrar el modal
	x += dx;
	y += dy;

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}

	if (y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
		} else {
			lives--;
			if (!lives) {
				modal.style.display = "block";
				mensajeModal();
			} else {
				x = canvas.width / 2;
				y = canvas.height - 30;
				dx = 2;
				dy = -2;
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}

	if (rightPressed) {
		paddleX += 7;
	} else if (leftPressed) {
		paddleX -= 7;
	}

	// requestAnimationFrame(draw);

}

// Función para dibujar los ladrillos
function drawBricks() {
	for (c = 0; c < brickColumnCount; c++) {
		for (r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status == 1) {
				var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
				var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "rgba(0,0,0,0)", ctx.drawImage(img_brick, brickX + 20, brickY);
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

// Función para dibujar la bola
function drawBall() {

	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "rgba(0,0,0,0)", ctx.drawImage(img_ball, x - 20, y - 20, 40, 40);
	ctx.fill();
	ctx.closePath();

}

// Función para dibujar la pala
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

// Escuchadores de eventos para las flechas y el ratón
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// Función para detectar cuando se pulsa la tecla de la flecha derecha/izquierda
function keyDownHandler(e) {
	if (e.keyCode == 39) { //Flecha Derecha
		rightPressed = true;
	} else if (e.keyCode == 37) { //Flecha Izquierda
		leftPressed = true;
	}
}

// Función para detectar cuando se deja de pulsa una tecla
function keyUpHandler(e) {
	if (e.keyCode == 39) { //Flecha derecha
		rightPressed = false;
	} else if (e.keyCode == 37) { //Flecha Izquierda
		leftPressed = false;
	}
}

// Función para detectar el movimiento del ratón, y guardar la posición de ésta para dibujar la pala en dicho sitio
function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if (relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth / 2;
	}
}

// Función para detectar la colisión entre la bola y los ladrillos y cambiar la puntuación y mostrar el modal si es necesario
function collisionDetection() {
	for (c = 0; c < brickColumnCount; c++) {
		for (r = 0; r < brickRowCount; r++) {
			var b = bricks[c][r];
			if (b.status == 1) {
				if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
					dy = -dy;
					b.status = 0;
					score++;
					if (score == brickRowCount * brickColumnCount) {
						modal.style.display = "block";
						mensajeModal();
					}
				}
			}
		}
	}
}

// Función para dibujar la puntuación
function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Puntuación: " + score, 8, 20);
}

// Función para dibujar las vidas
function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Vidas: " + lives, canvas.width - 65, 20);
}

var intervalo = setInterval(draw, 10); // Intervalo para dibujar el canvas cada 10 milisegundos
// draw();

// ----- MODAL  -----
var modal = document.getElementById("myModal");
var span = document.getElementById("cerrar");
var seguir = document.getElementById("seguir");
seguir.addEventListener("click", jugarSalir, false);
seguir.addEventListener("mouseover", cambiarTexto, false);
seguir.addEventListener("mouseout", cambiarTexto, false);
var salir = document.getElementById("salir");
salir.addEventListener("click", jugarSalir, false);
salir.addEventListener("mouseover", cambiarTexto, false);
salir.addEventListener("mouseout", cambiarTexto, false);

// Función para detener el intervalo para dibujar el canvas y mostrar un mensaje según el resultado del juego
function mensajeModal() {

	clearInterval(intervalo);

	if (!lives) {
		document.getElementById("modal_msg").innerHTML = `Has perdido con ${score} puntos, una pena`;
	} else {
		document.getElementById("modal_msg").innerHTML = `Has ganado con ${lives} vida(s) restantes y un total de puntos de ${score}, felicidades`;
	}

}

// Función para recargar la página o mostrar un mensaje de salida y cerrar la ventana, según lo que elija el usuario
function jugarSalir(e) {

	if (e.target.id == "seguir") {
		window.location.reload();
	} else {
		document.getElementsByTagName("body")[0].innerHTML = `<h2>Saliendo del juego, tenga un buen día</h2>`;
		setInterval(() => {
			close();
		}, 3000);
	}

}

// Función para cambiar el texto del modal cuando el usuario pone el ratón encima de uno de los botones del modal
function cambiarTexto(e) {

	if (e.target.id == "seguir" && e.type == "mouseover") {

		seguir.innerHTML = "Como debe ser";

	} else if (e.target.id == "seguir" && e.type == "mouseout") {

		seguir.innerHTML = "Otra partida";

	} else if (e.target.id == "salir" && e.type == "mouseover") {

		salir.innerHTML = "No hay huevos?";

	} else if (e.target.id == "salir" && e.type == "mouseout") {

		salir.innerHTML = "Dejar de Jugar";

	}

}

// Función para cerrar el modal cuando le da a la X en la posición superior derecha
span.onclick = function () {

	document.getElementsByTagName("body")[0].innerHTML = `<h2>Saliendo del juego, tenga un buen día</h2>`;
	setInterval(() => {
		close();
	}, 3000);

}