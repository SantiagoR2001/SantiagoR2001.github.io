function resellerToggleCards() {
    const hiddenCards = document.querySelectorAll('.reseller-hidden');
    const button = document.querySelector('.reseller-toggle-button');
    
    hiddenCards.forEach(card => {
        card.style.display = card.style.display === 'none' || card.style.display === '' ? 'block' : 'none';
    });

    // Cambiar texto del botón según el estado
    button.textContent = button.textContent === 'Mostrar más' ? 'Regresar' : 'Mostrar más';
}

// Asegurarnos de que las tarjetas ocultas no se muestren al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const hiddenCards = document.querySelectorAll('.reseller-hidden');
    hiddenCards.forEach(card => {
        card.style.display = 'none';
    });
});

// <!-- AQUI EMPIEZA LA ZONA DE DESCARGARS -->

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.descarga-tab');
    const items = document.querySelectorAll('.descarga-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active-descarga-tab'));
            // Add active class to the clicked tab
            tab.classList.add('active-descarga-tab');

            const category = tab.getAttribute('data-tab');
            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


// <!-- AQUI TERMINA LA ZONA DE DESCARGARS -->



