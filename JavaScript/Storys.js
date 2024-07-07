document.addEventListener('DOMContentLoaded', function() {
    var mostrarSliderBtn = document.getElementById('mostrarSlider');
    var sliderContainer = document.getElementById('sliderContainer');
    var slider = document.getElementById('slider');
    var close = document.getElementById('close');
    var intervaloTiempo = 5000;
    var interval;

    mostrarSliderBtn.addEventListener('click', function() {
        sliderContainer.style.display = 'block';

        // Iniciar temporizador para cambiar las imágenes automáticamente
        var interval = setInterval(cambiarImagen, intervaloTiempo);

        // // Detener el temporizador cuando el mouse está sobre el slider para evitar cambios mientras el usuario interactúa
        // slider.addEventListener('mouseover', function() {
        //     clearInterval(interval);
        // });

        // // Reanudar el temporizador cuando el mouse sale del slider
        // slider.addEventListener('mouseleave', function() {
        //     interval = setInterval(cambiarImagen, intervaloTiempo);
        // });
    });

    close.addEventListener('click', function() {
        sliderContainer.style.display = 'none';
        clearInterval(interval);
    });
    
    function cambiarImagen() {
        // Obtener todas las imágenes dentro del slider
        var slides = document.querySelectorAll('.slide');

        // Obtener la primera imagen visible
        var primeraImagen = slides[0];

        // Calcular el ancho de la primera imagen
        var anchoImagen = primeraImagen.offsetWidth;

        // Mover el primer slide al final
        slider.appendChild(primeraImagen);

        // Resetear la posición del slider para mostrar la nueva primera imagen
        slider.scrollLeft += anchoImagen;
    }
});