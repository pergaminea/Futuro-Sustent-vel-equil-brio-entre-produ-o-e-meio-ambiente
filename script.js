// Função para mudar a cor de um card quando clicado
function mudarCor(elemento) {
    // Escolhe uma cor aleatória entre azul claro e verde claro
    const cores = ['#e0f2f1', '#e1f5fe', '#f1f8e9'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    // Aplica a cor de fundo ao elemento clicado
    elemento.style.backgroundColor = corAleatoria;
    
    // Mostra um alerta simples (Interação legal!)
    console.log("Você interagiu com um exemplo real!");
}

// Efeito de aparecer o texto suavemente ao rolar a página
window.addEventListener('scroll', () => {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const topoSlide = slide.getBoundingClientRect().top;
        if (topoSlide < window.innerHeight - 100) {
            slide.style.opacity = "1";
            slide.style.transform = "translateY(0)";
        }
    });
});