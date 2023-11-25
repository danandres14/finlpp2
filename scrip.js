document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Agrega un evento al botón para cambiar entre modos
    darkModeToggle.addEventListener('click', function () {
        // Cambia la clase del body para activar/desactivar el modo oscuro
        body.classList.toggle('dark-mode');
    });
});
