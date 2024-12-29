// Loading Animation
window.addEventListener('load', () =>{
    const contenedor_loader = document.querySelector('.content_loader')
        contenedor_loader.style.opacity = 0
        contenedor_loader.style.visibility = 'hidden'
})

// Reading Animation
// const palabras = ["Student...", "Software Engineer...", "Web Developer...", "Front Developer..."];
// const MaquinaDeEscribir = document.getElementById("animation");
// let indicePalabraActual = 0;

// function cambiarPalabra() {
//     MaquinaDeEscribir.innerHTML = palabras[indicePalabraActual];
//     indicePalabraActual = (indicePalabraActual + 1) % palabras.length;
//     setTimeout(cambiarPalabra, 4000);
// }

// cambiarPalabra();