# División Financiera - Universidad Nacional de Colombia

## Descripción del Proyecto

Esta es la implementación de la página web para la División Financiera y Administrativa de la Sede Bogotá de la Universidad Nacional de Colombia, desarrollada como parte de la prueba técnica para Frontend Developer.

## Estructura del Proyecto

```
├── index.html          # Página principal con estructura semántica
├── css/
│   ├── base.css        # Estilos principales del proyecto
│   └── ...             # Otros archivos CSS de la plantilla
├── js/
│   ├── base.js         # JavaScript personalizado
│   └── ...             # Otras librerías JavaScript
├── fonts/              # Tipografías Ancizar
├── images/             # Imágenes y recursos gráficos
└── Icons/              # Iconografía
```

## Características Implementadas

### 🎨 Diseño Visual
- **Paleta de colores cohesiva**: Verde oscuro (#0A2F25), Verde principal (#48B68A), grises y blanco
- **Tipografía**: Familia Ancizar Sans en diferentes pesos (Regular, Bold, Heavy)
- **Diseño moderno y limpio** con elementos orgánicos y formas redondeadas

### 📱 Responsive Design
- Adaptación completa para dispositivos móviles, tablets y desktop
- Grid flexible y componentes que se reorganizan según el viewport
- Navegación adaptativa con menús desplegables en móvil

### 🧩 Componentes Principales

#### Header Superior
- Barra de navegación principal con fondo gris oscuro
- Enlaces en mayúsculas con espaciado uniforme
- Iconos de dropdown para secciones con submenús

#### Sub-Header
- Franja de contexto con información de ubicación
- Fondo gris intermedio con texto centrado

#### Sección Hero
- **Fondo verde principal** con formas orgánicas semitransparentes
- **Grid de dos columnas**: icono/título y descripción
- **Imagen fotográfica** de oficina moderna
- **Sub-navegación flotante** con estilo de píldora y sombra

#### Sección Funciones
- Fondo gris claro con header de dos columnas
- **Carrusel de tarjetas** con fondo verde oscuro
- Botones ghost con efecto hover
- Flecha de navegación del carrusel

#### Recursos Adicionales
- Sección simple con fondo verde oscuro
- Lista de enlaces con estilo de viñetas personalizadas

#### Footer
- **Tarjeta de contacto** con franja verde lateral
- Módulos de asistencia virtual y directorio
- Diseño de tarjetas con esquinas redondeadas

### ⚡ Funcionalidades JavaScript
- **Sistema de menús desplegables avanzado** en la sub-navegación
- Efectos hover mejorados en tarjetas
- Animaciones de entrada en scroll
- Gestión de eventos de navegación
- Sistema de carrusel básico
- Smooth scroll para navegación interna
- **Navegación por teclado** para accesibilidad
- **Exclusividad de menús** (solo uno visible a la vez)

### 🎯 **Sistema de Menús Desplegables**

#### Características Principales:
- **Activación por hover**: Los menús aparecen al pasar el cursor sobre los ítems
- **Exclusividad**: Solo un menú puede estar abierto a la vez
- **Animaciones suaves**: Transiciones de fade-in/fade-out con deslizamiento
- **Área de interacción inteligente**: Los menús no desaparecen al mover el cursor hacia ellos
- **Responsive**: Adaptación completa para dispositivos móviles

#### Especificaciones Técnicas:
- **Fondo**: Color azul grisáceo claro (#E9EFF3)
- **Sombra**: `box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1)`
- **Esquinas redondeadas**: `border-radius: 8px`
- **Transiciones**: `0.2s ease-out` para opacity y transform
- **Posicionamiento**: Alineado con el borde inferior del ítem padre

### ♿ Accesibilidad
- Estructura semántica con tags HTML5 apropiados
- Contraste adecuado en todos los elementos
- Navegación por teclado
- Textos alternativos para elementos gráficos

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde Oscuro | #0A2F25 | Fondos profundos, tarjetas de funciones |
| Verde Principal | #48B68A | Hero section, acentos, navegación |
| Gris Oscuro | #333333 | Navegación principal |
| Gris Claro | #F2F2F2 | Fondos secundarios |
| Blanco | #FFFFFF | Texto sobre fondos oscuros |
| Texto Principal | #212529 | Texto sobre fondos claros |

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos con variables CSS, Grid, Flexbox
- **JavaScript ES6+**: Interactividad y animaciones
- **Bootstrap**: Framework base de la plantilla UNAL
- **GSAP**: Librería de animaciones (disponible)

## Cumplimiento de Reglas

✅ **Separación de código**: CSS en `base.css`, JS en `base.js`
✅ **Preservación de plantilla**: No se modificaron archivos CSS originales
✅ **HTML semántico**: Uso de `<header>`, `<main>`, `<section>`, `<footer>`
✅ **Código organizado**: Comentarios, indentación y nomenclatura clara
✅ **Estructura de archivos**: Mantenida según especificaciones

## Instalación y Uso

1. Descargar o clonar el proyecto
2. Abrir `index.html` en un navegador web
3. No requiere instalación de dependencias adicionales

## Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles iOS/Android

## Notas de Desarrollo

### Decisiones Técnicas
- Se ocultó el header original de UNAL para implementar el diseño especificado
- Se utilizó CSS Grid y Flexbox para layouts flexibles
- Se implementaron variables CSS para mantenimiento fácil de colores
- Se agregaron transiciones suaves para mejorar la experiencia de usuario

### Futuras Mejoras
- Implementación completa del carrusel con múltiples tarjetas
- Integración con sistemas de chat real
- Optimización de imágenes y lazy loading
- Implementación de formularios de contacto
- Testing automatizado

## Autor

Desarrollado como parte de la prueba técnica para Frontend Developer
Universidad Nacional de Colombia - Convocatoria CS1529 de 2025

---

**Fecha de entrega**: 20 de agosto de 2025
**Contacto**: Ing. Cesar David Pineda Osorio - cdpinedao@unal.edu.co
