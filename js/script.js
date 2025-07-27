document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuMobile = document.querySelector('.menu-mobile');

    if (hamburgerMenu && menuMobile) {
        // Función para alternar las clases 'open'
        const toggleMenu = () => {
            hamburgerMenu.classList.toggle('open');
            menuMobile.classList.toggle('open');
            // Controla el scroll del body cuando el menú está abierto
            if (menuMobile.classList.contains('open')) {
                document.body.style.overflow = 'hidden'; // Evita el scroll del body
            } else {
                document.body.style.overflow = ''; // Restaura el scroll del body
            }
        };

        hamburgerMenu.addEventListener('click', toggleMenu);

        // Cerrar el menú móvil al hacer clic en un enlace
        const menuLinks = document.querySelectorAll('.menu-mobile nav ul li a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerrar el menú si está abierto
                if (menuMobile.classList.contains('open')) {
                    toggleMenu(); // Usa la función toggle para cerrar y restaurar el scroll
                }
            });
        });
    }
});