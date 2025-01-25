// Alternar el ícono de hamburguesa a "X"
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
    this.classList.toggle('active'); // Alterna la clase "active" en el botón
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
    if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
        navbarToggler.classList.remove('active');
    }
});

// Función para mostrar/ocultar tarjetas de resellers
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

// Zona de descargas
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