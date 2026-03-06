
// 1
const paginas = [
// 2
"Chintu,\nI want you to know that I'm very proud of you. Even though we don't talk very often, that doesn't change how much I root for you and care about your journey. No matter what's happening in your life, remember that you're not alone. You can always count on me. I'll be here to support you, listen to you, and help you in any way I can. Never forget how strong and capable you are. I'm very proud of the person you are and everything you will still achieve.",
// 3
"I started practicing programming, you know? I'm going to take the entrance exam to try and get into a software development program. Well, since I'm practicing, this is my first project and I'm happy to do it for you, hehe. Know that I'll always be here and I'll always respond as quickly as I can, after all, I'm a present person and I always hope to be able to support you when you need it.",
// 4
"You're my best friend, my older brother, and one more thing I can't say 🤫 hehehe. Well, maybe when we talk you'll ask how I am, how school is going, and even if it's just that, it's the best part of the week or my day, even if it takes a while and is short, I love talking to you. And it's also possible that you'll ask how my relationship is going. I don't really like talking about it, after all it's... complicated. I hope I can talk to you about it someday, not by text, maybe a call would be better, but that's another topic. How's college going? I hope it's going well. Know that I, Maria, or as my nickname is, Akira, will always be supporting you here in Brazil.",
// 5
"You are the best person I've ever met in my life, Chintu, know that 🌸"
]; // 6

// 7
const fundos = [
// 8
"linear-gradient(135deg, #6a11cb, #2575fc)",
// 9
"linear-gradient(135deg, #2575fc, #6a11cb)",
// 10
"linear-gradient(135deg, #1e3c72, #2a5298)",
// 11
"linear-gradient(135deg, #8e2de2, #4a00e0)"
]; // 12

// 13
let indice = 0; 
// 14
const divPagina = document.getElementById("pagina"); 

// 15
function mostrarPagina(i) { 
// 16
    divPagina.textContent = paginas[i]; 
// 17
    divPagina.style.background = fundos[i]; 
// 18
} 

// 19
mostrarPagina(indice); 

// 20
// Navegação pelo teclado (computador) 
// 21
document.addEventListener("keydown", function(e) { 
// 22
    if(e.key === "ArrowRight") { 
// 23
        if(indice < paginas.length - 1) indice++; 
// 24
        mostrarPagina(indice); 
// 25
    } else if (e.key === "ArrowLeft") { 
// 26
        if(indice > 0) indice--; 
// 27
        mostrarPagina(indice); 
// 28
    } 
// 29
}); 

// 30
// Navegação por toque/swipe (celular) 
// 31
let startX = 0; 
// 32
divPagina.addEventListener('touchstart', function(e) { 
// 33
    startX = e.touches[0].clientX; 
// 34
}); 
// 35
divPagina.addEventListener('touchend', function(e) { 
// 36
    let endX = e.changedTouches[0].clientX; 
// 37
    if (startX - endX > 50) { 
// 38
        if(indice < paginas.length - 1) indice++; 
// 39
    } else if (endX - startX > 50) { 
// 40
        if(indice > 0) indice--; 
// 41
    } 
// 42
    mostrarPagina(indice); 
// 43
});