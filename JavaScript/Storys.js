document.addEventListener('DOMContentLoaded', function() {
    var story1 = document.getElementById('story1');
    var story2 = document.getElementById('story2');
    var story3 = document.getElementById('story3');
    var story4 = document.getElementById('story4');
    var slider = document.getElementById('.slider-container');
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
        var container = document.getElementById(sliderContainerId);
        container.style.display = 'block';
        container.style.position = 'absolute';

        if (intervals[storyId]) {
            clearInterval(intervals[storyId]);
        }

        intervals[storyId] = setInterval(function() {
            cambiarImagen(sliderId);
        }, intervaloTiempo);

        slider.addEventListener('mouseover', function() {
            clearInterval(intervals[storyId]);
        });

        slider.addEventListener('mouseleave', function() {
            intervals[storyId] = setInterval(function() {
                cambiarImagen(sliderId);
            }, intervaloTiempo);
        });
    }

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var sliderId = button.getAttribute('data-slider');

            var sliderContainer1 = document.getElementById('sliderContainer1');
            var container1 =  document.getElementById('allslider1');

            var sliderContainer2 = document.getElementById('sliderContainer2');
            var container2 = document.getElementById('allslider2');

            var sliderContainer3 = document.getElementById('sliderContainer3');
            var container3 = document.getElementById('allslider3');

            var sliderContainer4 = document.getElementById('sliderContainer4');
            var container4 = document.getElementById('allslider4');

            sliderContainer1.style.display = 'none;'
            sliderContainer2.style.display = 'none;'
            sliderContainer3.style.display = 'none;'
            sliderContainer4.style.display = 'none;'
            
            container1.style.display = 'none';
            container2.style.display = 'none';
            container3.style.display = 'none';
            container4.style.display = 'none';
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