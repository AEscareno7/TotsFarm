const data = JSON.parse(localStorage.getItem('alias'));

data.sort((a, b) => a.tiempo - b.tiempo);

// Obtener el elemento en el que se imprimirá la tabla
const table = document.getElementById('tabla');

// Iterar sobre los objetos y crear las filas de la tabla
data.forEach(obj => {
    const row = table.insertRow();
    const aliasCell = row.insertCell();
    const tiempoCell = row.insertCell();
    const puntajeCell = row.insertCell();

    aliasCell.innerText = obj.alias;
    tiempoCell.innerText = obj.tiempo;
    puntajeCell.innerText = obj.puntaje;
});





function salir() {
    if (confirm("¿Seguro que quieres salir del juego?")) {
        window.location.href = "/index.html";
    }
}