var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


// Dibuja un fondo
ctx.globalAlpha = 0.9;
ctx.fillStyle = "#F9E79F";
ctx.fillRect(0, 0, canvas.width, canvas.height);



// Dibuja el logo
var logo = new Image();
logo.onload = function () {
    ctx.drawImage(logo, canvas.width / 2 - logo.width / 2, -105);
};
logo.src = "/imgs/Logo.svg";

// Dibuja el nombre del juego
ctx.fillStyle = "#2b1511";
ctx.font = "bold 50px Arial";
ctx.textAlign = "center";
ctx.fillText("TOTS FARM", canvas.width / 2, 420);


function redirectToPage() {
    window.location.href = "html/secondpage.html";
}
function drawButton(x, y, width, height, text) {
    // Dibuja la forma del botón
    ctx.fillStyle = "#dd5555";
    ctx.fillRect(x, y, width, height);

    // Agrega el texto del botón
    ctx.fillStyle = "white";
    ctx.font = "bold 24px Arial";
    ctx.textAlign = "center";
    ctx.fillText(text, x + width / 2, y + height / 2 + 8);
}

drawButton(canvas.width / 2 - 100, 300, 200, 60, "Iniciar");


canvas.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var clickX = event.clientX - rect.left;
    var clickY = event.clientY - rect.top;

    if (clickX > canvas.width / 2 - 100 && clickX < canvas.width / 2 + 100 && clickY > 300 && clickY < 360) {
        redirectToPage();
    }
});


function playMusic() {
    var musicPlayer = document.getElementById("music-player");
    var playButton = document.getElementById("play");
    if (musicPlayer.paused) {
        musicPlayer.play();
        playButton.innerHTML = "Pausar música";
    } else {
        musicPlayer.pause();
        playButton.innerHTML = "Reproducir música";
    }
}