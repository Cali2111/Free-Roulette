
document.getElementById('spin-btn').addEventListener('click', function() {
    const ball = document.getElementById('ball');
    const roulette = document.getElementById('roulette-wheel');
    
    // Animation de la bille et de la roulette
    roulette.style.transition = 'transform 4s ease-out';
    roulette.style.transform = `rotate(${Math.random() * 360 + 720}deg)`; // Spin de 2 tours + aléatoire
    
    // Génération d'un numéro aléatoire après 4 secondes
    setTimeout(function() {
        const winningNumber = Math.floor(Math.random() * 37); // 0 à 36
        alert('Le numéro gagnant est: ' + winningNumber);
    }, 4000);
});
