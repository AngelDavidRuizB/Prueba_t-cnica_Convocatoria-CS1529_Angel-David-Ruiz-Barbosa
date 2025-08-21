/**
 * DIVISIÓN FINANCIERA - UNIVERSIDAD NACIONAL DE COLOMBIA
 * JavaScript para funcionalidades interactivas
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================================================
    // SISTEMA DE MENÚS DESPLEGABLES - IMPLEMENTACIÓN MEJORADA
    // ===================================================================
    
    // Crear estilos adicionales para mayor compatibilidad
    const style = document.createElement('style');
    style.textContent = `
        .nav-item-with-dropdown {
            position: relative !important;
        }
        
        .custom-dropdown {
            position: absolute !important;
            top: calc(100% + 8px) !important;
            left: 0 !important;
            background-color: #E9EFF3 !important;
            border-radius: 8px !important;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1) !important;
            min-width: 200px !important;
            max-width: 280px !important;
            padding: 8px 0 !important;
            list-style: none !important;
            margin: 0 !important;
            z-index: 99999 !important;
            
            /* Estado inicial - oculto */
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            
            /* Transición suave */
            transition: opacity 0.25s ease, visibility 0.25s ease !important;
        }
        
        .nav-item-with-dropdown:hover .custom-dropdown {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }
        
        .custom-dropdown li {
            margin: 0 !important;
            padding: 0 !important;
        }
        
        .custom-dropdown li a {
            display: block !important;
            padding: 10px 20px !important;
            color: #212529 !important;
            text-decoration: none !important;
            font-size: 14px !important;
            margin: 0 4px !important;
            border-radius: 4px !important;
            transition: background-color 0.2s ease, color 0.2s ease !important;
        }
        
        .custom-dropdown li a:hover {
            background-color: rgba(72, 182, 138, 0.15) !important;
            color: #0A2F25 !important;
        }
    `;
    document.head.appendChild(style);
    
    // Sistema de menús de sub-navegación
    const subNavItems = document.querySelectorAll('.sub-nav-menu .nav-item-with-dropdown');
    let activeSubDropdown = null;
    let subHoverTimeout = null;

    console.log('Encontrados elementos de sub-navegación:', subNavItems.length);

    // Función para cerrar todos los menús de sub-navegación
    function closeAllSubDropdowns() {
        subNavItems.forEach(item => {
            const dropdown = item.querySelector('.custom-dropdown');
            if (dropdown) {
                dropdown.style.setProperty('opacity', '0', 'important');
                dropdown.style.setProperty('visibility', 'hidden', 'important');
                dropdown.style.setProperty('pointer-events', 'none', 'important');
            }
        });
        activeSubDropdown = null;
    }

    // Función para abrir un menú de sub-navegación específico
    function openSubDropdown(item) {
        closeAllSubDropdowns(); // Exclusividad de menús
        
        const dropdown = item.querySelector('.custom-dropdown');
        if (dropdown) {
            dropdown.style.setProperty('opacity', '1', 'important');
            dropdown.style.setProperty('visibility', 'visible', 'important');
            dropdown.style.setProperty('pointer-events', 'auto', 'important');
            activeSubDropdown = item;
            
            const itemText = item.querySelector('> a').textContent;
            console.log('Menú de sub-navegación abierto para:', itemText);
            
            // Log especial para División Financiera
            if (itemText.includes('División Financiera') || itemText.includes('DIV. Financiera')) {
                console.log('✅ Menú desplegable de División Financiera activado');
                console.log('Opciones disponibles:');
                const options = dropdown.querySelectorAll('li a');
                options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option.textContent}`);
                });
            }
        }
    }

    // Configurar event listeners para sub-navegación
    subNavItems.forEach((item, index) => {
        const dropdown = item.querySelector('.custom-dropdown');
        
        if (dropdown) {
            const itemText = item.querySelector('> a').textContent;
            console.log(`Configurando sub-menú ${index + 1}: ${itemText}`);
            
            // Mouseenter en el ítem padre
            item.addEventListener('mouseenter', function() {
                clearTimeout(subHoverTimeout);
                openSubDropdown(this);
            });

            // Mouseleave del ítem padre
            item.addEventListener('mouseleave', function(e) {
                subHoverTimeout = setTimeout(() => {
                    if (activeSubDropdown === this) {
                        closeAllSubDropdowns();
                    }
                }, 150);
            });

            // Mouseenter en el dropdown
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(subHoverTimeout);
            });

            // Mouseleave del dropdown
            dropdown.addEventListener('mouseleave', function() {
                subHoverTimeout = setTimeout(() => {
                    closeAllSubDropdowns();
                }, 150);
            });

            // Agregar efectos hover a los ítems del dropdown
            const dropdownItems = dropdown.querySelectorAll('li a');
            dropdownItems.forEach(dropdownItem => {
                dropdownItem.addEventListener('click', function(e) {
                    e.preventDefault();
                    const parentText = item.querySelector('> a').textContent;
                    console.log(`Navegando desde ${parentText} a: ${this.textContent}`);
                    
                    // Log especial para División Financiera
                    if (parentText.includes('División Financiera')) {
                        console.log('🔄 Navegación desde División Financiera');
                    }
                    
                    closeAllSubDropdowns();
                });
            });
        }
    });

    // Cerrar menús de sub-navegación al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.sub-navigation')) {
            closeAllSubDropdowns();
        }
    });

    // Navegación por teclado para sub-navegación
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllSubDropdowns();
        }
    });

    console.log('✅ Sistema de menús de sub-navegación inicializado correctamente');
    console.log('Número de elementos con dropdown en sub-navegación:', subNavItems.length);

    // ===================================================================
    // SISTEMA DE MENÚS DESPLEGABLES DE NAVEGACIÓN PRINCIPAL
    // ===================================================================
    
    const mainNavItems = document.querySelectorAll('.nav-menu li.has-dropdown');
    let activeMainDropdown = null;
    let mainHoverTimeout = null;

    // Función para cerrar todos los menús principales
    function closeAllMainDropdowns() {
        mainNavItems.forEach(item => {
            const dropdown = item.querySelector('.main-dropdown');
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            }
        });
        activeMainDropdown = null;
    }

    // Función para abrir un menú principal específico
    function openMainDropdown(item) {
        closeAllMainDropdowns(); // Exclusividad de menús
        
        const dropdown = item.querySelector('.main-dropdown');
        if (dropdown) {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
            activeMainDropdown = item;
            console.log('Menú principal abierto para:', item.querySelector('> a').textContent);
        }
    }

    // Configurar event listeners para navegación principal
    mainNavItems.forEach(item => {
        const dropdown = item.querySelector('.main-dropdown');
        
        if (dropdown) {
            console.log('Configurando menú principal para:', item.querySelector('> a').textContent);
            
            // Mouseenter en el ítem padre
            item.addEventListener('mouseenter', function() {
                clearTimeout(mainHoverTimeout);
                openMainDropdown(this);
            });

            // Mouseleave del ítem padre
            item.addEventListener('mouseleave', function(e) {
                mainHoverTimeout = setTimeout(() => {
                    if (activeMainDropdown === this) {
                        closeAllMainDropdowns();
                    }
                }, 200);
            });

            // Mouseenter en el dropdown principal
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(mainHoverTimeout);
            });

            // Mouseleave del dropdown principal
            dropdown.addEventListener('mouseleave', function() {
                mainHoverTimeout = setTimeout(() => {
                    closeAllMainDropdowns();
                }, 200);
            });

            // Manejar clicks en los ítems del dropdown principal
            const mainDropdownItems = dropdown.querySelectorAll('li a');
            mainDropdownItems.forEach(dropdownItem => {
                dropdownItem.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Navegando a:', this.textContent);
                    closeAllMainDropdowns();
                });
            });
        }
    });

    // Cerrar menús principales al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-menu')) {
            closeAllMainDropdowns();
        }
    });

    // Navegación por teclado para los menús principales
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllMainDropdowns();
        }
    });

    console.log('Sistema de menús principales inicializado');
    console.log('Número de elementos principales con dropdown:', mainNavItems.length);

    // ===================================================================
    // FUNCIONALIDAD DEL CARRUSEL DE FUNCIONES
    // ===================================================================
    const carouselArrow = document.querySelector('.carousel-arrow');
    if (carouselArrow) {
        carouselArrow.addEventListener('click', function() {
            // Aquí se puede implementar la lógica del carrusel
            console.log('Navegando a la siguiente tarjeta del carrusel...');
            
            // Ejemplo de animación simple
            const container = document.querySelector('.carousel-container');
            if (container) {
                container.style.transform = 'translateX(-10px)';
                setTimeout(() => {
                    container.style.transform = 'translateX(0)';
                }, 150);
            }
        });
    }

    // ===================================================================
    // FUNCIONALIDAD DE BOTONES "CONOCE MÁS"
    // ===================================================================
    const ghostButtons = document.querySelectorAll('.btn-ghost');
    ghostButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Botón "Conoce más" clickeado');
            
            // Agregar efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // ===================================================================
    // FUNCIONALIDAD DEL DIRECTORIO
    // ===================================================================
    const directoryCard = document.querySelector('.directory-card');
    if (directoryCard) {
        directoryCard.addEventListener('click', function() {
            console.log('Navegando al directorio...');
            // Aquí se puede implementar la navegación
        });
    }

    // ===================================================================
    // FUNCIONALIDAD DE ENLACES DE CHAT
    // ===================================================================
    const chatLinks = document.querySelectorAll('.chat-links a');
    chatLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const chatType = this.textContent.includes('Bot') ? 'Bot' : 'en vivo';
            console.log(`Iniciando chat ${chatType}...`);
        });
    });

    // ===================================================================
    // SMOOTH SCROLL PARA NAVEGACIÓN
    // ===================================================================
    const navLinks = document.querySelectorAll('.sub-nav-menu a, .nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo aplicar smooth scroll si es un enlace interno
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ===================================================================
    // EFECTOS DE HOVER MEJORADOS
    // ===================================================================
    const functionCards = document.querySelectorAll('.function-card');
    functionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // ===================================================================
    // ANIMACIONES DE ENTRADA (OPCIONAL)
    // ===================================================================
    function animateOnScroll() {
        const elements = document.querySelectorAll('.function-card, .contact-card, .chat-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Inicializar elementos para animación
    const animatedElements = document.querySelectorAll('.function-card, .contact-card, .chat-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Ejecutar animaciones en scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar

    // ===================================================================
    // MANEJO DE FORMULARIOS (SI SE AGREGAN EN EL FUTURO)
    // ===================================================================
    function handleFormSubmissions() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // Agregar validación personalizada aquí
                console.log('Formulario enviado');
            });
        });
    }

    handleFormSubmissions();

    console.log('División Financiera - Scripts cargados correctamente');
});

// ===================================================================
// UTILIDADES GLOBALES
// ===================================================================
window.DivisionFinanciera = {
    // Función para cambiar el estado activo de la sub-navegación
    setActiveNavItem: function(itemText) {
        const navItems = document.querySelectorAll('.sub-nav-menu li');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.textContent.trim() === itemText) {
                item.classList.add('active');
            }
        });
    },
    
    // Función para mostrar notificaciones
    showNotification: function(message, type = 'info') {
        console.log(`[${type.toUpperCase()}] ${message}`);
        // Aquí se puede implementar un sistema de notificaciones visual
    },
    
    // Función para lazy loading de imágenes
    initLazyLoading: function() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};
