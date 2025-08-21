Estudiante: Angel David Ruiz Barbosa

CC: 1029142249

En la presente prueba de conocimientos, se realizo la traducción a código de un diseño de una página web realizado en Figma a código, en la presnete prueba utilice las tecnologías de HTML, CSS y Javascript.

Cabe resaltar que opte por no hacer uso de ningun framework dado que a pesar de que hubiera podido simplificar el desarrollo y la organización de los archivos, decidi aderirme a las instrucciones y condiciones iniciales de la prueba, y dado el nivel de detalle opte por realizarlo de esta manera dado que me permitía una perzonalisación mas libre del diseño.

En los presentes archivos, se replico en la mayor medida posible el diseño dado en Figma,a exepción de unas cuantas animaciones en la sección de Funciones y unos cuantos logos (Los cuales fueorn reemplazados), dado ciertos problemas al momento de compilar el código

**Modularización**
Dada la longitud de líneas de código y el número de secciones presentes en el diseño, opte por realizar una modularización del código css con el objetivo de mejorar la organización y estructuración del código.  La cual se dio de la siguiente manera.

css/
├── base_modular.css (archivo principal de importación)
├── base_original.css (respaldo del archivo original)
├── modules/
│   ├── variables.css (variables CSS globales)
│   ├── base.css (reset y estilos base)
│   ├── navigation.css (navegación principal y dropdowns)
│   ├── dropdowns.css (menús desplegables personalizados)
│   ├── hero.css (sección hero y sub-header)
│   ├── functions.css (sección funciones y tarjetas)
│   ├── resources.css (sección recursos adicionales)
│   ├── footer.css (footer y componentes de contacto)
│   └── responsive.css (media queries y utilidades)


Finalmente, cabe mencionar que se hizo uso de diferentes herramientas de IA para la generación de las carpetas, identificación de tonos de color, generación de comentarios, generación de tests,etc.