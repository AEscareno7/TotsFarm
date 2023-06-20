let animales = [{ nombre: "Vaca", sonido: "/media/vaca.mp3", animal: "/imgs/vaquita.png", img: "/imgs/vaca-name.png" },
{ nombre: "Gallo", sonido: "/media/gallo.mp3", animal: "/imgs/gallo.png", img: "/imgs/gallo-name.png" },
{ nombre: "Perro", sonido: "/media/perro.mp3", animal: "/imgs/perro.png", img: "/imgs/perro-name.png" },
{ nombre: "Cerdito", sonido: "/media/cerdo.mp3", animal: "/imgs/cerdito.png", img: "/imgs/cerdito-name.png" },
{ nombre: "Caballo", sonido: "/media/caballo.mp3", animal: "/imgs/caballo.png", img: "/imgs/caballo-name.png" },
{ nombre: "Oveja", sonido: "/media/oveja .mp3", animal: "/imgs/oveja.png", img: "/imgs/oveja-name.png" },
];

let cho = [];
let acertados = 0;
let tiempo = 0;
let puntos = 0;

let intervalo = setInterval(function () {
  tiempo++;
  document.getElementById('timer').textContent = tiempo;
}, 1000);

// Agregar contador de puntos en drop(ev)

document.addEventListener("DOMContentLoaded", function (event) {
  // Mostrar tiempo y puntos al cargar la página
  document.getElementById('timer').textContent = tiempo;
  document.getElementById('score').textContent = puntos;
});

function igual(n) {
  return !cho.includes(n);
}

function choose() {
  while (cho.length < 6) {
    let n = Math.floor(Math.random() * 6);
    if (igual(n)) {
      cho.push(n);
    }
  }
  console.log(cho);
}


function print1() {
  let hj1 = cho.splice(0, 3);
  let j1 = `
      <div class="row animals">
        ${hj1.map(h => `
          <div id="h_${animales[h].nombre}" class="col-4" ondrop="drop(event)" ondragover="allowDrop(event)" style="background: url(${animales[h].animal});  background-size: cover; background-repeat: no-repeat; height: 300px;">
            <h1 class="title-animals" id="name_${animales[h].nombre}"></h1>
          </div>
        `).join('')}
      </div>
      <div class="row mt-4 animals">
        ${hj1.sort().map(h => `
          <div class="col-4">
            <img id="a_${animales[h].nombre}" draggable="true" ondragstart="drag(event)" class="drag" src="${animales[h].img}" alt="Img">
          </div>
        `).join('')}
      </div>
    `;
  console.log(j1);
  document.getElementById('step-1').innerHTML = j1;
}

function print2() {
  let hj2 = cho.splice(0, 3);
  let j2 = `
      <div class="row animals">
        ${hj2.map(h => `
          <div id="h_${animales[h].nombre}" class="col-4" ondrop="drop(event)" ondragover="allowDrop(event)" style="background: url(${animales[h].animal}); border-radius: 30px; background-size: cover; background-repeat: no-repeat; height: 300px;">
            <h1 class="title-animals" id="name_${animales[h].nombre}"></h1>
          </div>
        `).join('')}
      </div>
      <div class="row mt-4 animals">
        ${hj2.sort().map(h => `
          <div class="col-4">
            <img id="a_${animales[h].nombre}" draggable="true" ondragstart="drag(event)" class="drag" src="${animales[h].img}" alt="Img">
          </div>
        `).join('')}
      </div>
    `;
  console.log(j2);
  document.getElementById('step-2').innerHTML = j2;
}


choose();
print1();
print2();



function togo(page) {
  window.location.href = page;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  console.log(ev.target.getAttribute('id'));

  let an = data.replace('a_', '');
  let hb = ev.target.getAttribute('id').replace('h_', '');

  console.log(an + " " + hb);
  if (an == hb) {
    ev.target.appendChild(document.getElementById(data));
    acertados++;
    let ix = animales.findIndex(obj => obj.nombre == an);
    audio(animales[ix].sonido);
    show_name(animales[ix].nombre);
    puntos += 10;
    document.getElementById('score').textContent = puntos;

    if (acertados == 3) {
      setTimeout(function () {
        document.getElementById("stepc-1").style.display = "none";
        document.getElementById("stepc-2").style.display = "block";
      }, 4000);
    }
    if (acertados == 6) {
      clearInterval(intervalo);

      setTimeout(function () {
        togo("/html/felicitacion.html");
      }, 4000);
    }

  } else { //errror
    error();
    console.log("Error");
    puntos -= 5;
    document.getElementById('score').textContent = puntos;
  }


}


function error() {
  var path = "/media/error.mp3";
  audio(path);

}

function audio(path) {
  const music = new Audio(path);
  music.play();
  setTimeout(function () {
    music.pause();
  }, 2500);
}

function show_name(a) {
  document.getElementById('name_' + a).innerHTML = a;
}

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

function salir() {
  if (confirm("¿Seguro que quieres salir del juego?")) {
    window.location.href = "/index.html";
  }
}