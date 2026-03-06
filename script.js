const paginas = [
    "Chintu,\nI want you to know that I'm very proud of you...",
    "I started practicing programming, you know? I'm going to take the entrance exam...",
    "You're my best friend, my older brother, and one more thing I can't say 🤫 hehehe...",
    "You are the best person I've ever met in my life, Chintu, know that 🌸"
];

const fundos = [
    "linear-gradient(135deg, #6a11cb, #2575fc)",
    "linear-gradient(135deg, #2575fc, #6a11cb)",
    "linear-gradient(135deg, #1e3c72, #2a5298)",
    "linear-gradient(135deg, #8e2de2, #4a00e0)"
];

let indice = 0;
const divPagina = document.getElementById("pagina");

function mostrarPagina(i) {
    divPagina.textContent = paginas[i];
    divPagina.style.background = fundos[i];
}

mostrarPagina(indice);

//// Navegação pelo teclado (computador)
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        if(indice < paginas.length - 1) indice++;
        mostrarPagina(indice);
    } else if(e.key === "ArrowLeft") {
        if(indice > 0) indice--;
        mostrarPagina(indice);
    }
});

//// Navegação por toque/swipe (celular)
let startX = 0;
divPagina.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});
divPagina.addEventListener('touchend', function(e) {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) { // swipe pra esquerda
        if(indice < paginas.length - 1) indice++;
    } else if (endX - startX > 50) { // swipe pra direita
        if(indice > 0) indice--;
    }
    mostrarPagina(indice);
});