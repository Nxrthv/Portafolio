const palabras = ["I'm Student...","Software Engineer...", "Web Developer...", "Front Developer..."];
const MaquinaDeEscribir = document.getElementById("animation");
let indicePalabraActual = 0;
let index = 0;
let intervalId;
function escribirPalabra() {
    MaquinaDeEscribir.innerHTML = palabras[indicePalabraActual].slice(0, index) + '<span class="cursor"></span>';
    index++
    if (index > palabras[indicePalabraActual].length) {
        clearInterval(intervalId);
        setTimeout(() => {
            MaquinaDeEscribir.innerHTML = "";
            indicePalabraActual = (indicePalabraActual + 1) % palabras.length;
            index = 0;
            intervalId = setInterval(escribirPalabra, 150);
        }, 1000);
    }
}
intervalId = setInterval(escribirPalabra, 150);