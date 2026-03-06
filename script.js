const paginas = [
    "Chintu,\nI want you to know that I'm very proud of you. Even though we don't talk very often, that doesn't change how much I root for you and care about your journey. No matter what's happening in your life, remember that you're not alone. You can always count on me. I'll be here to support you, listen to you, and help you in any way I can. Never forget how strong and capable you are. I'm very proud of the person you are and everything you will still achieve.",
    
    "I started practicing programming, you know? I'm going to take the entrance exam to try and get into a software development program. Well, since I'm practicing, this is my first project and I'm happy to do it for you, hehe. Know that I'll always be here and I'll always respond as quickly as I can, after all, I'm a present person and I always hope to be able to support you when you need it.",
    
    "You're my best friend, my older brother, and one more thing I can't say 🤫 hehehe. Well, maybe when we talk you'll ask how I am, how school is going, and even if it's just that, it's the best part of the week or my day, even if it takes a while and is short, I love talking to you. And it's also possible that you'll ask how my relationship is going. I don't really like talking about it, after all it's... complicated. I hope I can talk to you about it someday, not by text, maybe a call would be better, but that's another topic. How's college going? I hope it's going well. Know that I, Maria, or as my nickname is, Akira, will always be supporting you here in Brazil.",
    
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

document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        if(indice < paginas.length - 1) indice++;
        mostrarPagina(indice);
    } else if(e.key === "ArrowLeft") {
        if(indice > 0) indice--;
        mostrarPagina(indice);
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
const paginas = [
    "Primeira página do texto...",
    "Segunda página do texto...",
    "Terceira página do texto...",
    "Quarta página do texto..."
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

// --- setas do computador ---
document.addEventListener("keydown", function(e) {
    if(e.key === "ArrowRight") {
        if(indice < paginas.length - 1) indice++;
        mostrarPagina(indice);
    } else if(e.key === "ArrowLeft") {
        if(indice > 0) indice--;
        mostrarPagina(indice);
    }
});

// --- swipe do celular ---
let startX = 0;

divPagina.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

divPagina.addEventListener('touchend', function(e) {
    let endX = e.changedTouches[0].clientX;
    if(startX - endX > 50) { // esquerda -> próxima página
        if(indice < paginas.length - 1) indice++;
    } else if(endX - startX > 50) { // direita -> página anterior
        if(indice > 0) indice--;
    }
    mostrarPagina(indice);
});