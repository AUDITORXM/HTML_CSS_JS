var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img_screen = document.getElementById("img_fondo");
var img_brick = document.getElementById("img_brick");
var img_ball = document.getElementById("img_ball");

canvas.width = 1500;
canvas.height = 700;

ctx.drawImage(img_screen, 90, 130, 50, 60, 10, 10, 50, 60);

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

var brickRowCount = 6;
var brickColumnCount = 17;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (r = 0; r < brickRowCount; r++) {
		bricks[c][r] = {x: 0, y: 0, status: 1};
	}
}

var score = 0;
var lives = 3;

function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();
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
		}
		else {
			lives--;
			if (!lives) {
				modal.style.display = "block";
				mensajeModal();
			}
			else {
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
	}
	else if (leftPressed) {
		paddleX -= 7;
	}

	// requestAnimationFrame(draw);

}

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

function drawBall() {

	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "rgba(0,0,0,0)", ctx.drawImage(img_ball, x-20, y-20, 40, 40);
	ctx.fill();
	ctx.closePath();

}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = true;
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	}
	else if (e.keyCode == 37) {
		leftPressed = false;
	}
}

function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if (relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth / 2;
	}
}

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

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Puntuación: " + score, 8, 20);
}

function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Vidas: " + lives, canvas.width - 65, 20);
}

var intervalo = setInterval(draw, 5);
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

function mensajeModal() {

	clearInterval(intervalo);

	if (!lives){
		document.getElementById("modal_msg").innerHTML = `Has perdido con ${score} puntos, una pena`;
	} else {
		document.getElementById("modal_msg").innerHTML = `Has ganado con ${lives} vida(s) restantes y un total de puntos de ${score}, felicidades`;
	}

}

function jugarSalir(e) {

	if (e.target.id == "seguir"){
		window.location.reload();
	} else {
		document.getElementsByTagName("body")[0].innerHTML = `<h2>Saliendo del juego, tenga un buen día</h2>`;
		setInterval(() => {
			close();
		}, 3000);
	}

}

function cambiarTexto(e) {

	if (e.target.id == "seguir" && e.type == "mouseover"){

		seguir.innerHTML = "Como debe ser";

	} else if (e.target.id == "seguir" && e.type == "mouseout"){

		seguir.innerHTML = "Otra partida";

	} else if (e.target.id == "salir" && e.type == "mouseover"){

		salir.innerHTML = "No hay huevos?";

	} else if (e.target.id == "salir" && e.type == "mouseout") {

		salir.innerHTML = "Dejar de Jugar";

	}

}

span.onclick = function () {

	document.getElementsByTagName("body")[0].innerHTML = `<h2>Saliendo del juego, tenga un buen día</h2>`;
	setInterval(() => {
		close();
	}, 3000);

}