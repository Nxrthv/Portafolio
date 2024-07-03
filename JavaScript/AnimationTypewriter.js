const palabras = ["Student...", "Software Engineer...", "Web Developer...", "Front Developer..."];
const MaquinaDeEscribir = document.getElementById("animation");
let indicePalabraActual = 0;

function cambiarPalabra() {
    MaquinaDeEscribir.innerHTML = palabras[indicePalabraActual];
    indicePalabraActual = (indicePalabraActual + 1) % palabras.length;
    setTimeout(cambiarPalabra, 4000); // Cambia la palabra cada 2 segundos (2000 ms)
}

cambiarPalabra();
