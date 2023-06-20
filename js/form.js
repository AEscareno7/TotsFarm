function guardarInformacionUsuario() {
    // Obtener el valor del campo de alias
    var alias = document.getElementById('alias').value.trim();

    // Verificar si el campo de alias está vacío
    if (alias.length === 0 || !alias) {
        alert("El campo de alias está vacío");
    } else {
        // Obtener el objeto de usuario asociado al alias, si existe
        var user = JSON.parse(localStorage.getItem(alias));

        // Si el objeto de usuario no existe, crear uno nuevo y guardarlo en localStorage
        if (!user) {
            user = { alias: alias, puntos: 0, tiempo: 0 };
            localStorage.setItem(alias, JSON.stringify(user));
        } else {
            // Si el objeto de usuario ya existe, mostrar los datos actuales y preguntar si se quiere continuar
            var mensaje = "Hola " + user.alias + ", tu contador de puntos actual es: " + user.puntos;
            mensaje += " y tu mejor tiempo es: " + user.tiempo + ". ¿Quieres continuar con el juego?";
            var continuar = confirm(mensaje);
            if (!continuar) {
                return;
            }
        }
        // Redirigir a la página de juego
        window.location.href = "juego.html";
    }
}


function salir() {
    if (confirm("¿Seguro que quieres salir del juego?")) {
        window.location.href = "/index.html";
    }
}
