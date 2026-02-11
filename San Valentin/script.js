function respuestaSi() {
    // Redirigir a la página de agradecimiento
    window.location.href = 'gracias.html'
} 

function respuestaNo() {
    const messages = [
        "¿Estás segura? 🥺",
        "¿No quieres reconsiderarlo? 💔",
        "Dale otra oportunidad al botón SI 🙏",
        "El botón NO, usa el SI 😊",
        "Vamos, di que sí 💝"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}