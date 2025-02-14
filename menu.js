document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el logo y el navbar
    const logo = document.querySelector('.logo');
    const navbar = document.querySelector('.navbar');

    // Función que alterna el menú
    logo.addEventListener('click', function() {
        navbar.classList.toggle('active'); // Muestra u oculta el navbar
    });
});
