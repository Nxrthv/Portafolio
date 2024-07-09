document.addEventListener('DOMContentLoaded', function() {
    var story1 = document.getElementById('story1');
    var story2 = document.getElementById('story2');
    var story3 = document.getElementById('story3');
    var story4 = document.getElementById('story4');
    var slider = document.getElementById('slider');
    var closeButtons = document.querySelectorAll('.close');
    var intervaloTiempo = 5000;
    var intervals = {};

    story1.addEventListener('click', function() {
        mostrarSlider('sliderContainer1', 'slider1', 'story1');
    });

    story2.addEventListener('click', function() {
        mostrarSlider('sliderContainer2', 'slider2', 'story2');
    });

    story3.addEventListener('click', function() {
        mostrarSlider('sliderContainer3', 'slider3', 'story3');
    });

    story4.addEventListener('click', function() {
        mostrarSlider('sliderContainer4', 'slider4', 'story4');
    });

    function mostrarSlider(sliderContainerId, sliderId, storyId) {
        // Ocultar todos los sliders antes de mostrar el específico
        var containers = document.querySelectorAll('.slider-container');
        containers.forEach(function(container) {
            container.style.display = 'none';
        });

        // Mostrar el slider específico
        var container = document.getElementById(sliderContainerId);
        container.style.display = 'block';
        container.style.position = 'absolute';

        // Detener intervalo anterior si existe
        if (intervals[storyId]) {
            clearInterval(intervals[storyId]);
        }

        // Iniciar nuevo intervalo para cambiar las imágenes automáticamente
        intervals[storyId] = setInterval(function() {
            cambiarImagen(sliderId);
        }, intervaloTiempo);

        // Detener el temporizador cuando el mouse está sobre el slider para evitar cambios mientras el usuario interactúa
        slider.addEventListener('mouseover', function() {
            clearInterval(intervals[storyId]);
        });

        // Reanudar el temporizador cuando el mouse sale del slider
        slider.addEventListener('mouseleave', function() {
            intervals[storyId] = setInterval(function() {
                cambiarImagen(sliderId);
            }, intervaloTiempo);
        });
    }

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var sliderId = button.getAttribute('data-slider');
            var container = document.getElementById(container);
            var allslider1 =  document.getElementById('allslider1');
            var allslider2 =  document.getElementById('allslider2');
            var allslider3 =  document.getElementById('allslider3');
            var allslider4 =  document.getElementById('allslider4');
            allslider1.style.display = 'none';
            allslider2.style.display = 'none';
            allslider3.style.display = 'none';
            allslider4.style.display = 'none';
            clearInterval(intervals[sliderId]);
        });
    });

    function cambiarImagen(sliderId) {
        var slider = document.getElementById(sliderId);
        var slides = slider.querySelectorAll('.slide');

        var primeraImagen = slides[0];

        var anchoImagen = primeraImagen.offsetWidth;

        slider.appendChild(primeraImagen);

        slider.scrollLeft += anchoImagen;
    }
});