const palabras = ["Software Engineer...", "Web Developer...", "Full-Stack Engineer..."];
const MaquinaDeEscribir = document.getElementById("animation");

function escribirPalabra(palabra){
    let index = 0;
    const intervalId = setInterval(()=>{
        MaquinaDeEscribir.textContent = palabra.
        slice(0,index);
        index++
        if (index > palabra.length){
            clearInterval(intervalId);
            setTimeout(()=>{
                MaquinaDeEscribir.textContent =
                "";
                escribirSiguientePalabra();
            }, 1000)
        }
    }, 150)
}

let indicePalabraActual = 0;
function escribirSiguientePalabra(){
    const indicePalabra = palabras[indicePalabraActual];
    indicePalabraActual = (indicePalabraActual + 1) % palabras.length;
    escribirPalabra(indicePalabra)
}

escribirSiguientePalabra();