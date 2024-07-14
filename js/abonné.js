let isAlternate = false;

function toggleState() {
    const button = document.querySelector('.two-state-button');
    if (isAlternate) {
        // Logique pour l'état initial (couleur bleue)
        button.classList.remove('alternate');
    } else {
        // Logique pour l'état alternatif (couleur rouge)
        button.classList.add('alternate');
    }
    isAlternate = !isAlternate;
}