// Crear confeti al cargar la página
window.addEventListener('load', () => {
    crearConfeti();
});

function crearConfeti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#e91e63', '#ff69a5', '#ffc3d5', '#4caf50', '#ffeb3b', '#ff5252', '#ff80ab'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            
            confettiContainer.appendChild(confetti);
            
            // Remover después de la animación
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
    
    // Seguir creando confeti cada 3 segundos
    setTimeout(() => {
        crearConfeti();
    }, 3000);
}
