# División Financiera - Universidad Nacional de Colombia

## 📋 Descripción del Proyecto

Este proyecto implementa la página web de la **División Financiera** de la Universidad Nacional de Colombia - Sede Bogotá, desarrollada como parte de la prueba técnica para la Convocatoria CS1529.

## 🎯 Características Principales

### ✨ Diseño y Estética
- **Diseño profesional y moderno** con paleta de colores institucional
- **Tipografía Ancizar Sans** completamente implementada
- **Layout responsivo** adaptativo para todos los dispositivos
- **Componentes estéticamente optimizados** según especificaciones técnicas

### 🚀 Funcionalidades Implementadas
- **Navegación principal** con menús desplegables funcionales
- **Sub-navegación** con dropdowns personalizados
- **Sección Hero** con información institucional
- **Sección de Funciones** con tarjetas profesionales
- **Sección de Recursos** ampliada y destacada
- **Footer completo** con información de contacto y enlaces

### 🎨 Especificaciones Técnicas
- **HTML5 semántico** con estructura optimizada
- **CSS3 avanzado** con variables personalizadas y Grid/Flexbox
- **JavaScript ES6+** para interactividad
- **Bootstrap integrado** con personalización completa
- **Diseño mobile-first** con breakpoints optimizados

## 📂 Estructura del Proyecto

```
├── index.html              # Página principal
├── css/
│   ├── base.css            # Estilos principales personalizados
│   ├── fonts.css           # Definiciones de fuentes Ancizar
│   ├── unal.css            # Estilos institucionales UNAL
│   └── ...                 # Otros archivos CSS del template
├── js/
│   ├── base.js             # JavaScript personalizado
│   └── ...                 # Librerías y scripts adicionales
├── fonts/                  # Fuentes Ancizar Sans completas
├── images/                 # Recursos visuales
└── README.md               # Este archivo
```

## 🎯 Implementaciones Destacadas

### 1. Sistema de Navegación
- **Menús desplegables** principales con efectos de hover
- **Sub-navegación flotante** con dropdowns personalizados
- **Navegación responsiva** para dispositivos móviles

### 2. Sección de Funciones
- **Tarjetas profesionales** con diseño bicolor
- **Botones fantasma (ghost buttons)** con efectos de hover
- **Layout de Grid flexible** para diferentes tamaños de pantalla

### 3. Footer Avanzado
- **Diseño bicolor** con tarjeta de contacto prominente
- **Información estructurada** con iconos y jerarquía visual
- **Enlaces de asistencia virtual** y directorio

### 4. Optimizaciones Estéticas
- **Paleta de colores institucional** (#0A2F25, #48B68A)
- **Tipografía Ancizar Sans** en múltiples pesos
- **Espaciado y padding** cuidadosamente calculados
- **Efectos de hover** y transiciones suaves

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables y Grid
- **JavaScript** - Funcionalidad interactiva
- **Bootstrap 4** - Framework base
- **Font-face** - Implementación de Ancizar Sans
- **SVG** - Iconografía vectorial

## 🧩 Componentes Principales

### Header Superior
- Barra de navegación principal con fondo gris oscuro
- Enlaces en mayúsculas con espaciado uniforme
- Iconos de dropdown para secciones con submenús

### Sub-Header
- Franja de contexto con información de ubicación
- Fondo gris intermedio con texto centrado

### Sección Hero
- **Fondo verde principal** con formas orgánicas semitransparentes
- **Grid de dos columnas**: icono/título y descripción
- **Imagen fotográfica** de oficina moderna
- **Sub-navegación flotante** con estilo de píldora y sombra

### Sección Funciones
- Fondo gris claro con header de dos columnas
- **Carrusel de tarjetas** con fondo verde oscuro
- Botones ghost con efecto hover
- Flecha de navegación del carrusel

### Recursos Adicionales
- Sección simple con fondo verde oscuro
- Lista de enlaces con estilo de viñetas personalizadas

### Footer
- **Tarjeta de contacto** con franja verde lateral
- Módulos de asistencia virtual y directorio
- Diseño de tarjetas con esquinas redondeadas

## ⚡ Funcionalidades JavaScript
- **Sistema de menús desplegables avanzado** en la sub-navegación
- Efectos hover mejorados en tarjetas
- Animaciones de entrada en scroll
- Gestión de eventos de navegación
- Sistema de carrusel básico
- Smooth scroll para navegación interna
- **Navegación por teclado** para accesibilidad
- **Exclusividad de menús** (solo uno visible a la vez)

## 🎯 Sistema de Menús Desplegables

### Características Principales:
- **Activación por hover**: Los menús aparecen al pasar el cursor sobre los ítems
- **Exclusividad**: Solo un menú puede estar abierto a la vez
- **Animaciones suaves**: Transiciones de fade-in/fade-out con deslizamiento
- **Área de interacción inteligente**: Los menús no desaparecen al mover el cursor hacia ellos
- **Responsive**: Adaptación completa para dispositivos móviles

### Especificaciones Técnicas:
- **Fondo**: Color azul grisáceo claro (#E9EFF3)
- **Sombra**: `box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1)`
- **Esquinas redondeadas**: `border-radius: 8px`
- **Transiciones**: `0.2s ease-out` para opacity y transform
- **Posicionamiento**: Alineado con el borde inferior del ítem padre

## Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde Oscuro | #0A2F25 | Fondos profundos, tarjetas de funciones |
| Verde Principal | #48B68A | Hero section, acentos, navegación |
| Gris Oscuro | #333333 | Navegación principal |
| Gris Claro | #F2F2F2 | Fondos secundarios |
| Blanco | #FFFFFF | Texto sobre fondos oscuros |
| Texto Principal | #212529 | Texto sobre fondos claros |

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

**Angel David Ruiz Barbosa**  
Desarrollado como parte de la prueba técnica para Frontend Developer  
Universidad Nacional de Colombia - Convocatoria CS1529 de 2025

---

**Fecha de entrega**: 20 de agosto de 2025  
**Contacto técnico**: Ing. Cesar David Pineda Osorio - cdpinedao@unal.edu.co
